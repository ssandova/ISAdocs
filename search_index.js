var documenterSearchIndex = {"docs":
[{"location":"basics/spectra/#","page":"Instantaneous Spectra","title":"Instantaneous Spectra","text":"","category":"page"},{"location":"basics/spectra/#","page":"Instantaneous Spectra","title":"Instantaneous Spectra","text":"Modules = [ISA]","category":"page"},{"location":"basics/spectra/#Plotting-Instantaneous-Spectra-1","page":"Instantaneous Spectra","title":"Plotting Instantaneous Spectra","text":"","category":"section"},{"location":"basics/triplets/#","page":"Cannonical Triplets","title":"Cannonical Triplets","text":"#Cannonical Triplets and Component Sets","category":"page"},{"location":"basics/triplets/#","page":"Cannonical Triplets","title":"Cannonical Triplets","text":"##Cannonical Triplets","category":"page"},{"location":"basics/triplets/#","page":"Cannonical Triplets","title":"Cannonical Triplets","text":"A cannonical triplet is a tuple consisting of an instantaneous amplitude (IA) Function, an instantaneous frequency (IF) Function, and a phase reference Real.","category":"page"},{"location":"basics/triplets/#Defining-a-Cannonical-Triplet-1","page":"Cannonical Triplets","title":"Defining a Cannonical Triplet","text":"","category":"section"},{"location":"basics/triplets/#","page":"Cannonical Triplets","title":"Cannonical Triplets","text":"For example, we can define a cannonical triplet as follows.","category":"page"},{"location":"basics/triplets/#","page":"Cannonical Triplets","title":"Cannonical Triplets","text":"julia> a₀(t) = exp(-t^2)\r\na₀ (generic function with 1 method)\r\n\r\njulia> ω₀(t) = 2.0\r\nω₀ (generic function with 1 method)\r\n\r\njulia> φ₀ = 0.0\r\n0.0\r\n\r\njulia> 𝐶₀ = (a₀,ω₀,φ₀)\r\n(a₀, ω₀, 0.0)","category":"page"},{"location":"basics/triplets/#","page":"Cannonical Triplets","title":"Cannonical Triplets","text":"##Component Sets A component set is a set of cannonical triplets.","category":"page"},{"location":"basics/triplets/#Defining-a-Component-Set-1","page":"Cannonical Triplets","title":"Defining a Component Set","text":"","category":"section"},{"location":"basics/triplets/#","page":"Cannonical Triplets","title":"Cannonical Triplets","text":"For example, we can define a component set as follows. First, we define several cannonical triplets.","category":"page"},{"location":"basics/triplets/#","page":"Cannonical Triplets","title":"Cannonical Triplets","text":"a₀(t) = exp(-t^2)\r\nω₀(t) = 2.0\r\nφ₀ = 0.0\r\n𝐶₀ = (a₀,ω₀,φ₀)\r\n\r\na₁(t) = 1.0\r\nω₁(t) = 10*t\r\nφ₁ = 0.1\r\n𝐶₁ = (a₁,ω₁,φ₁)\r\n\r\na₂(t) = 0.8*cos(2t)\r\nω₂(t) = 10 + 7.5*sin(t)\r\nφ₂ = π\r\n𝐶₂ = (a₂,ω₂,φ₂)","category":"page"},{"location":"basics/triplets/#","page":"Cannonical Triplets","title":"Cannonical Triplets","text":"Then, store the cannonical triplets in an array.","category":"page"},{"location":"basics/triplets/#","page":"Cannonical Triplets","title":"Cannonical Triplets","text":"julia> 𝑆 = [𝐶₀,𝐶₁,𝐶₂]\r\n3-element Array{Tuple{Function,Function,Real},1}:\r\n (a₀, ω₀, 0.0)\r\n (a₁, ω₁, 0.1)\r\n (a₂, ω₂, π)","category":"page"},{"location":"#","page":"Home","title":"Home","text":"","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Modules = [ISA]","category":"page"},{"location":"#ISA.jl:-The-Julia-Library-for-Instantaneous-Spectral-Analysis-1","page":"Home","title":"ISA.jl: The Julia Library for Instantaneous Spectral Analysis","text":"","category":"section"},{"location":"#Installation-1","page":"Home","title":"Installation","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Download Julia 1.3 or later, if you haven't already.\nDownload/Clone the ISA module to username/.julia/dev/.\nEnter the package manager in REPL by pressing ]  then add the package by typing dev ISA rather than add ISA.","category":"page"},{"location":"basics/components/#AM–FM-Components-1","page":"AM–FM Components","title":"AM–FM Components","text":"","category":"section"},{"location":"basics/components/#","page":"AM–FM Components","title":"AM–FM Components","text":"An AM–FM component is defined by a component tripplet.","category":"page"},{"location":"basics/components/#Defining-an-AM–FM-Component-1","page":"AM–FM Components","title":"Defining an AM–FM Component","text":"","category":"section"},{"location":"basics/components/#","page":"AM–FM Components","title":"AM–FM Components","text":"We define an AM–FM component by passing the function AMFMcomp a cannonical triplet.","category":"page"},{"location":"basics/components/#","page":"AM–FM Components","title":"AM–FM Components","text":" julia> a₀(t) = exp(-t^2)\n a₀ (generic function with 1 method)\n\n julia> ω₀(t) = 2.0\n ω₀ (generic function with 1 method)\n\n julia> φ₀ = 0.0\n 0.0\n\n julia> 𝐶₀ = (a₀,ω₀,φ₀)\n (a₀, ω₀, 0.0)\n\n julia> ψ₀ = AMFMcomp(𝐶₀)\n AMFMcomp(a₀, ω₀, 0.0)","category":"page"},{"location":"basics/components/#","page":"AM–FM Components","title":"AM–FM Components","text":"Alternately, we allow an AM–FM component  to be defined direct by passing the function AMFMcomp an instantaneous amplitude (IA) Function, an instantaneous frequency (IF) Function, and a phase reference Real.","category":"page"},{"location":"basics/components/#","page":"AM–FM Components","title":"AM–FM Components","text":"julia> a₀(t) = exp(-t^2)\na₀ (generic function with 1 method)\n\njulia> ω₀(t) = 2.0\nω₀ (generic function with 1 method)\n\njulia> φ₀ = 0.0\n0.0\n\njulia> ψ₀ = AMFMcomp(a₀,ω₀,φ₀)\nAMFMcomp(a₀, ω₀, 0.0)","category":"page"},{"location":"basics/components/#Evaluating-an-AM–FM-Component-1","page":"AM–FM Components","title":"Evaluating an AM–FM Component","text":"","category":"section"},{"location":"basics/components/#","page":"AM–FM Components","title":"AM–FM Components","text":"Once an  AM–FM component is defined it can be evaluated at a time instant","category":"page"},{"location":"basics/components/#","page":"AM–FM Components","title":"AM–FM Components","text":"julia> ψ₀(0.15)\n-0.302141748563871 + 0.9298966854483709im","category":"page"},{"location":"basics/models/#AM–FM-Models-1","page":"AM–FM Models","title":"AM–FM Models","text":"","category":"section"},{"location":"basics/models/#","page":"AM–FM Models","title":"AM–FM Models","text":"An AM–FM model is a set of superimposed AM–FM components.","category":"page"},{"location":"basics/models/#Defining-an-AM–FM-Model-1","page":"AM–FM Models","title":"Defining an AM–FM Model","text":"","category":"section"},{"location":"basics/models/#","page":"AM–FM Models","title":"AM–FM Models","text":"For example, we can define a AM–FM model as follows. First, define a component set.","category":"page"},{"location":"basics/models/#","page":"AM–FM Models","title":"AM–FM Models","text":"a₀(t) = exp(-t^2)\nω₀(t) = 2.0\nφ₀ = 0.0\n𝐶₀ = (a₀,ω₀,φ₀)\n\na₁(t) = 1.0\nω₁(t) = 10*t\nφ₁ = 0.1\n𝐶₁ = Tuple([a₁,ω₁,φ₁])\n\na₂(t) = 0.8*cos(2t)\nω₂(t) = 10 + 7.5*sin(t)\nφ₂ = π\n𝐶₂ = Tuple([a₂,ω₂,φ₂])\n\n𝑆 = [𝐶₀,𝐶₁,𝐶₂]","category":"page"},{"location":"basics/models/#","page":"AM–FM Models","title":"AM–FM Models","text":"Then, define an AM–FM model by passing the function AMFMmodel a component set.","category":"page"},{"location":"basics/models/#","page":"AM–FM Models","title":"AM–FM Models","text":"z = AMFMmodel(𝑆)","category":"page"},{"location":"basics/models/#","page":"AM–FM Models","title":"AM–FM Models","text":"Alternately, we allow an AM–FMmodel  to be defined by passing the function AMFMmodel vector of components.","category":"page"},{"location":"basics/models/#","page":"AM–FM Models","title":"AM–FM Models","text":"a₀(t) = exp(-t^2)\nω₀(t) = 2.0\nφ₀ = 0.0\nψ₀ = AMFMcomp(a₀,ω₀,φ₀)\n\na₁(t) = 1.0\nω₁(t) = 10*t\nφ₁ = 0.1\nψ₁ = AMFMcomp(a₁,ω₁,φ₁)\n\na₂(t) = 0.8*cos(2t)\nω₂(t) = 10 + 7.5*sin(t)\nφ₂ = π\nψ₂ = AMFMcomp(a₂,ω₂,φ₂)\n\nz = AMFMmodel([ψ₀,ψ₁,ψ₂])","category":"page"}]
}
