var documenterSearchIndex = {"docs":
[{"location":"api/#API-1","page":"API","title":"API","text":"","category":"section"},{"location":"api/#","page":"API","title":"API","text":"The pseudo type :: 2 indicate Tuple{Float64,Float64} or any type T such that ExactPredicates.coord(::T) or Base.Tuple(::T) outputs a Tuple{Float64,Float64}. Similaly, :: 3 indicates Tuple{Float64,Float64,Float64} or any type convertible to it coord or Tuple.","category":"page"},{"location":"api/#Planar-predicates-1","page":"API","title":"Planar predicates","text":"","category":"section"},{"location":"api/#","page":"API","title":"API","text":"Modules = [ExactPredicates]\nPages = [\"plane.jl\"]","category":"page"},{"location":"api/#ExactPredicates.closest-Tuple{Tuple{Float64,Float64},Tuple{Float64,Float64},Tuple{Float64,Float64}}","page":"API","title":"ExactPredicates.closest","text":"closest(p :: 2, q :: 2, a :: 2) -> Int\n\nReturn 1 if a is closer to p than to q.\nReturn –1 if a is closer to q than to p.\nReturn 0 is a is equaly close to both.\n\n\n\n\n\n","category":"method"},{"location":"api/#ExactPredicates.incircle-NTuple{4,Tuple{Float64,Float64}}","page":"API","title":"ExactPredicates.incircle","text":"incircle(a :: 2, b :: 2, c :: 2, p :: 2) -> Int\n\nAssume that a, b and c define a counterclockwise triangle.\n\nReturn 1 if p is strictly inside the circumcircle of this triangle.\nReturn –1 if p is outside.\nReturn 0 if p is on the circle.\n\nIf the triangle is oriented clockwise, the signs are reversed. If a, b and c are collinear, this degenerate to an orientation test.\n\nIf two of the four arguments are equal, return 0.\n\n\n\n\n\n","category":"method"},{"location":"api/#ExactPredicates.intersectorder-NTuple{6,Tuple{Float64,Float64}}","page":"API","title":"ExactPredicates.intersectorder","text":"intersectorder(a :: 2, b :: 2, pa :: 2, pb :: 2, qa :: 2, qb :: 2) -> Int\n\nConsider the oriented line L defined by a and b, the line P defined by pa and pb and the line Q defined by qa and qb.\n\nAssumes that parallelorder(a, b, pa, pb) and parallelorder(a, b, qa, qb) have the same sign.     Otherwise, the result has the opposite sign.\n\nreturn -1 if the intersection of P with L comes before the intersection of Q with L, following the orientation of L.\nreturn 1 in the reverse situation\nreturn 0 in case of equality or degeneracy.\n\n\n\n\n\n","category":"method"},{"location":"api/#ExactPredicates.meet-NTuple{4,Any}","page":"API","title":"ExactPredicates.meet","text":"meet(p :: 2, q :: 2, a :: 2, b :: 2)\n\nReturn 1 if the open line segments (p, q) and (a, b) meet in a single point.\nReturn 0 if the the closed line segments [p, a] and [a, b] meet in one or several points.\nReturn –1 otherwise.\n\n\n\n\n\n","category":"method"},{"location":"api/#ExactPredicates.orient-Tuple{Tuple{Float64,Float64},Tuple{Float64,Float64},Tuple{Float64,Float64}}","page":"API","title":"ExactPredicates.orient","text":"orient(p :: 2, q :: 2, r :: 2) -> Int\n\nReturn 1 if r is on the left of the oriented line defined by p and q.\nReturn –1 if r is on the right.\nReturn 0 if r is on the line or if p == q.\n\n\n\n\n\n","category":"method"},{"location":"api/#ExactPredicates.parallelorder-NTuple{4,Tuple{Float64,Float64}}","page":"API","title":"ExactPredicates.parallelorder","text":"parallelorder(a :: 2, b :: 2, p :: 2, q :: 2) -> Int\n\nConsider the oriented line defined by a and b and the parallel lines passing through p and q respectively, with the same orientation.\n\nreturn 1 if the line passing through p is left of the line passing through q.\nreturn -1 in the reverse situation.\nreturn 0 if a and b are equal or if the parallel lines passing through p and q are equal.\n\nThis is a robust version of to orient(b-a, q-p, 0). Note also that orient(a, b, c) == parallelorder(a, b, a, c).\n\n\n\n\n\n","category":"method"},{"location":"api/#ExactPredicates.rotation-Union{Tuple{AbstractArray{T,1}}, Tuple{T}} where T","page":"API","title":"ExactPredicates.rotation","text":"rotation(pts :: AbstractVector)\n\nGives the number of rotation of the polygonal path defined by the elements of pts.\n\n\n\n\n\n","category":"method"},{"location":"api/#ExactPredicates.sameside-Tuple{Tuple{Float64,Float64},Tuple{Float64,Float64},Tuple{Float64,Float64}}","page":"API","title":"ExactPredicates.sameside","text":"sameside(p :: 2, a :: 2, b :: 2)\n\nAssume that the three arguments are collinear, on some line L\n\nReturn 1 if a and b are on the same side of p on L\nReturn -1 if a and b are on different sides\nReturn 0 if a == p or b == p.\n\n\n\n\n\n","category":"method"},{"location":"api/#Spatial-predicates-1","page":"API","title":"Spatial predicates","text":"","category":"section"},{"location":"api/#","page":"API","title":"API","text":"Modules = [ExactPredicates]\nPages = [\"space.jl\"]","category":"page"},{"location":"api/#ExactPredicates.closest-Tuple{Tuple{Float64,Float64,Float64},Tuple{Float64,Float64,Float64},Tuple{Float64,Float64,Float64}}","page":"API","title":"ExactPredicates.closest","text":"closest(p :: 3, q :: 3, a :: 3) -> Int\n\nReturn 1 if a is closer to p than to q. Return –1 if a is closer to q than to p. Return 0 is a is equaly close to both.\n\n\n\n\n\n","category":"method"},{"location":"api/#ExactPredicates.insphere-NTuple{5,Tuple{Float64,Float64,Float64}}","page":"API","title":"ExactPredicates.insphere","text":"insphere(p :: 3, q :: 3, r :: 3, s :: 3, a :: 3)\n\nReturn 1 if a is inside the circumscribed sphere defined by the four points p, q, r and s.\nReturn –1 if a is outside.\nReturn 0 is a lies on the sphere or if the four points are coplanar.\n\n\n\n\n\n","category":"method"},{"location":"api/#ExactPredicates.orient-NTuple{4,Tuple{Float64,Float64,Float64}}","page":"API","title":"ExactPredicates.orient","text":"orient(p :: 3, q :: 3, r :: 3, a :: 3) -> Int\n\nConsider the oriented plane on which the triangle pqr is positively oriented.\n\nReturn 1 if a is below this plane.\nReturn –1 if a is above this plane.\nReturn 0 if a lies on this plane.\n\n\n\n\n\n","category":"method"},{"location":"#ExactPredicates.jl-1","page":"ExactPredicates.jl","title":"ExactPredicates.jl","text":"","category":"section"},{"location":"#","page":"ExactPredicates.jl","title":"ExactPredicates.jl","text":"This package provides fast and robust predicates for Euclidean geometry. It is implemented as a code generator that transform any homogeneous polynomial into an algorithm that rigorously determines its sign on any given input points.","category":"page"},{"location":"#Installation-1","page":"ExactPredicates.jl","title":"Installation","text":"","category":"section"},{"location":"#","page":"ExactPredicates.jl","title":"ExactPredicates.jl","text":"]add ExactPredicates","category":"page"},{"location":"#Features-1","page":"ExactPredicates.jl","title":"Features","text":"","category":"section"},{"location":"#","page":"ExactPredicates.jl","title":"ExactPredicates.jl","text":"Planar predicates: orient (left or right of a line), incircle (inside or outside a circle), closest (closer to this or that point), etc.\nSpatial predicates: orient (above or below a plane), insphere (inside or outside a ball), closest (closer to this or that point), etc.\nSimplistic API, points are just Tuple{Float64,Float64} or Tuple{Float64,Float64,Float64}\nAccepts anything convertible to Tuple\nExtensible\nMIT license","category":"page"},{"location":"#Robust-1","page":"ExactPredicates.jl","title":"Robust","text":"","category":"section"},{"location":"#","page":"ExactPredicates.jl","title":"ExactPredicates.jl","text":"Robust means that the code:","category":"page"},{"location":"#","page":"ExactPredicates.jl","title":"ExactPredicates.jl","text":"raises an exception on NaN and Inf arguments;\ngives a correct answer on all other inputs with Float64 coordinates, no matter what (overflow, underflow, etc.);\nin particular, no restriction on the coordinate range.","category":"page"},{"location":"#Why-robustness-matter?-1","page":"ExactPredicates.jl","title":"Why robustness matter?","text":"","category":"section"},{"location":"#","page":"ExactPredicates.jl","title":"ExactPredicates.jl","text":"When the input data is approximate it looks absurd to insist on exact computation. To determine if a point is inside or outside a circle, one may need more precision than the data really convey. So what is the point?","category":"page"},{"location":"#","page":"ExactPredicates.jl","title":"ExactPredicates.jl","text":"Robust computation is important because it guarantees soundness with respect to some combinatorial properties of the predicates, on which many algorithms rely. For example","category":"page"},{"location":"#","page":"ExactPredicates.jl","title":"ExactPredicates.jl","text":"orient(a, b, c) == orient(b, c, a) == orient(c, a, b),","category":"page"},{"location":"#","page":"ExactPredicates.jl","title":"ExactPredicates.jl","text":"this is a very basic geometric observation, but a floating computation may fail to see this.","category":"page"},{"location":"#","page":"ExactPredicates.jl","title":"ExactPredicates.jl","text":"“Inexact versions of these tests [orient and incircle] are vulnerable to roundoff error, and the wrong answers they produce can cause geometric algorithms to hang, crash, or produce incorrect output.”—Jonathan Shewchuk, Robust Adaptive Floating-point Geometric Predicates","category":"page"},{"location":"#Fast-1","page":"ExactPredicates.jl","title":"Fast","text":"","category":"section"},{"location":"#","page":"ExactPredicates.jl","title":"ExactPredicates.jl","text":"The reference point is the cost of the pure floating point evaluation, without any certification. To evaluate the performance, one need to distinguish several scenarios.","category":"page"},{"location":"#The-quick-path-1","page":"ExactPredicates.jl","title":"The quick path","text":"","category":"section"},{"location":"#","page":"ExactPredicates.jl","title":"ExactPredicates.jl","text":"For normal input (for example random input), the floating point computation is correct. The only overhead is the computation of the error bound. Expect a 2× slowdown with respect to the reference. On complicated predicates, like insphere, the floating point computation dominates and the slowdown is only 1.3×.","category":"page"},{"location":"#","page":"ExactPredicates.jl","title":"ExactPredicates.jl","text":"The emphasis in the package is to make the quick path as fast as possible.","category":"page"},{"location":"#The-slow-path-1","page":"ExactPredicates.jl","title":"The slow path","text":"","category":"section"},{"location":"#","page":"ExactPredicates.jl","title":"ExactPredicates.jl","text":"If the error estimation fails to certify the floating point computation, the code falls back to interval arithmetic, using IntervalArithmetic.jl. It will works especially well if the input points have small integer coordinates. Expect a 50× slowdown.","category":"page"},{"location":"#","page":"ExactPredicates.jl","title":"ExactPredicates.jl","text":"In this scenario, adaptive methods, like the one famously implemented by Shewchuk, may be more performant.","category":"page"},{"location":"#The-worst-path-1","page":"ExactPredicates.jl","title":"The worst path","text":"","category":"section"},{"location":"#","page":"ExactPredicates.jl","title":"ExactPredicates.jl","text":"When the input points are maximally degenerate, the code will resort to exact arithmetic using Rational{BigInt}. The computation will always succeed, but expect a 50-100× slowdown.","category":"page"},{"location":"#Usage-1","page":"ExactPredicates.jl","title":"Usage","text":"","category":"section"},{"location":"#Basic-usage-1","page":"ExactPredicates.jl","title":"Basic usage","text":"","category":"section"},{"location":"#","page":"ExactPredicates.jl","title":"ExactPredicates.jl","text":"The type for representing points is NTuple{N, Float64}, where N is 2 or 3. Very concretly, that is Tuple{Float64,Float64} or Tuple{Float64,Float64,Float64}.","category":"page"},{"location":"#","page":"ExactPredicates.jl","title":"ExactPredicates.jl","text":"p, q, r, a = (1.0, 3.0), (1.5, 10.0), (-87.0, 1e64), (1e-100, 3.0)\n\nincircle(p, q, r, a)\n# -> 1","category":"page"},{"location":"#Working-with-other-types-of-points-1","page":"ExactPredicates.jl","title":"Working with other types of points","text":"","category":"section"},{"location":"#","page":"ExactPredicates.jl","title":"ExactPredicates.jl","text":"All the predicates will work with a type T, if one of the function Tuple(::T) or coord(::T) is defined and outputs a NTuple{N, Float64} that contains the coordinates the coordinates. Naturally, the computation is only robust if the conversion is robust too. Here is a typical use.","category":"page"},{"location":"#","page":"ExactPredicates.jl","title":"ExactPredicates.jl","text":"using ExactPredicates\nstruct Point\n    x :: Float64\n    y :: Float64\nend\n\nTuple(p :: Point) = (p.x, p.y)\nincircle(Point(0.0, 0.0), Point(1.0, 0.0), Point(0.0, 1.0), Point(.5, .5))","category":"page"},{"location":"#","page":"ExactPredicates.jl","title":"ExactPredicates.jl","text":"A nice type to represent points in the plane is Complex{Float64}. It is not desirable to redefine Tuple(::Complex), so we overload coord instead.","category":"page"},{"location":"#","page":"ExactPredicates.jl","title":"ExactPredicates.jl","text":"coord(p :: Float64) = (p, 0.0)\ncoord(p :: Complex) = reim(p)\nincircle(0.0, 1.0, complex(0.0, 1.0), complex(.5, .5))","category":"page"},{"location":"#","page":"ExactPredicates.jl","title":"ExactPredicates.jl","text":"Another interesting type for points is SVector from StaticArrays. Tuple is already defined for this type, so we can use them readily.","category":"page"},{"location":"#","page":"ExactPredicates.jl","title":"ExactPredicates.jl","text":"using StaticArrays\nincircle(SVector(0.0, 0.0), SVector(1.0, 0.0), SVector(0.0, 1.0), SVector(.5, .5))","category":"page"},{"location":"#","page":"ExactPredicates.jl","title":"ExactPredicates.jl","text":"In all the examples above, the conversion has no overhead.","category":"page"},{"location":"#Extensibility-1","page":"ExactPredicates.jl","title":"Extensibility","text":"","category":"section"},{"location":"#","page":"ExactPredicates.jl","title":"ExactPredicates.jl","text":"The code generator turns any piece of code that evaluates a homogeneous polynomial into a robust piece of code that evaluates the sign of the same polynomial. It only needs hint to group variables into homogeneous groups.","category":"page"},{"location":"#","page":"ExactPredicates.jl","title":"ExactPredicates.jl","text":"For example the discriminant of a degree 2 polynomial a x^2 + bx + c is b^2 - 4ac, which is a homogeneous polynomial in a, b and c. With ExactPredicates, you can write","category":"page"},{"location":"#","page":"ExactPredicates.jl","title":"ExactPredicates.jl","text":"using ExactPredicates\nusing ExactPredicates.Codegen\n\n@genpredicate function discriminant(a, b, c)\n    Codegen.group!(a, b, c)\n    b*b - 4*a*c\nend","category":"page"},{"location":"#","page":"ExactPredicates.jl","title":"ExactPredicates.jl","text":"It will define a function discriminant(a :: Float64, b :: Float64, c :: Float64) that returns 1, –1 or 0 depending on the sign of the determinant.","category":"page"},{"location":"#How-it-works-1","page":"ExactPredicates.jl","title":"How it works","text":"","category":"section"},{"location":"#","page":"ExactPredicates.jl","title":"ExactPredicates.jl","text":"This package implements the method used by CGAL and described in:","category":"page"},{"location":"#","page":"ExactPredicates.jl","title":"ExactPredicates.jl","text":"Olivier Devillers, Sylvain Pion. “Efficient Exact Geometric Predicates for Delaunay Triangulations”. RR-4351, INRIA. 2002. ⟨inria-00072237⟩\nGuillaume Melquiond, Sylvain Pion. “Formally Certified Floating-Point Filters For Homogeneous Geometric Predicates”. RAIRO, EDP Sciences, 2007, 41, pp. 57-69. ⟨10.1051/ita:2007005⟩ ⟨inria-00071232v2⟩\nAndreas Meyer, Sylvain Pion. “FPG: A code generator for fast and certified geometric predicates”. Real Numbers and Computers, Jun 2008, Santiago de Compostela, Spain. pp.47-60. ⟨inria-00344297⟩","category":"page"},{"location":"#","page":"ExactPredicates.jl","title":"ExactPredicates.jl","text":"The implementation relies on Julia's facilities for code generation and evaluates a priori the precision of the floating evaluation, relatively to the magnitude of the input variables.","category":"page"}]
}
