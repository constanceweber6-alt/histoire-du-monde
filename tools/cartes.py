import json, math, sys, os
SRC = sys.argv[1]; OUT = sys.argv[2]
LON0, LON1, LAT0, LAT1 = -25, 155, -12, 78
KX = 10 * math.cos(math.radians(40))
def proj(lon, lat): return ((lon - LON0) * KX, (LAT1 - lat) * 10)
def dp(pts, tol):
    if len(pts) < 3: return pts
    keep = [False]*len(pts); keep[0]=keep[-1]=True; stack=[(0,len(pts)-1)]
    while stack:
        a,b = stack.pop(); ax,ay=pts[a]; bx,by=pts[b]; dx,dy=bx-ax,by-ay; L=math.hypot(dx,dy) or 1e-9
        md,mi=0,-1
        for i in range(a+1,b):
            px,py=pts[i]; d=abs(dy*px-dx*py+bx*ay-by*ax)/L
            if d>md: md,mi=d,i
        if md>tol: keep[mi]=True; stack+=[(a,mi),(mi,b)]
    return [p for p,k in zip(pts,keep) if k]
def area(r): return abs(sum(r[i][0]*r[i-1][1]-r[i-1][0]*r[i][1] for i in range(len(r))))/2
years = []
for fn in sorted(os.listdir(SRC)):
    if not fn.startswith('world_') or not fn.endswith('.geojson'): continue
    tag = fn[6:-8]
    y = -int(tag[2:]) if tag.startswith('bc') else int(tag)
    if y < -1 or y > 2010: continue
    if y == -1: y = 0
    d = json.load(open(os.path.join(SRC, fn)))
    feats = []
    for f in d['features']:
        g = f['geometry']
        if not g: continue
        polys = g['coordinates'] if g['type']=='MultiPolygon' else [g['coordinates']]
        parts = []
        for poly in polys:
            for ring in poly:
                xs=[p[0] for p in ring]; ys=[p[1] for p in ring]
                if max(xs)<LON0 or min(xs)>LON1 or max(ys)<LAT0 or min(ys)>LAT1: continue
                r=[proj(p[0],p[1]) for p in ring]
                if r[0]==r[-1]: r=r[:-1]
                if len(r)<3: continue
                fx,fy=r[0]; k=max(range(len(r)),key=lambda i:(r[i][0]-fx)**2+(r[i][1]-fy)**2)
                r=dp(r[:k+1],1.1)[:-1]+dp(r[k:]+[r[0]],1.1)
                r=[(round(x),round(y)) for x,y in r]
                rr=[]
                for p in r:
                    if not rr or rr[-1]!=p: rr.append(p)
                if len(rr)<4 or area(rr)<6: continue
                parts.append('M'+'L'.join(f'{x} {y}' for x,y in rr[:-1] if True)+'Z')
        if not parts: continue
        p=f['properties']; n=p.get('NAME') or ''
        feats.append({'n': n, 's': p.get('SUBJECTO') or '', 'd': ''.join(parts)})
    js = 'HISTOIRE.cartes[%d]=%s;\n' % (y, json.dumps(feats, ensure_ascii=False, separators=(',',':')))
    open(os.path.join(OUT, f'{y}.js'),'w').write(js)
    years.append(y)
years.sort()
open(os.path.join(OUT,'index.js'),'w').write('HISTOIRE.anneesCartes=%s;\n'%json.dumps(years))
print(years)
