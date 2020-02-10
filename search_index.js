var documenterSearchIndex = {"docs":
[{"location":"basics/spectra/#","page":"Instantaneous Spectra","title":"Instantaneous Spectra","text":"","category":"page"},{"location":"basics/spectra/#","page":"Instantaneous Spectra","title":"Instantaneous Spectra","text":"Modules = [ISA]","category":"page"},{"location":"basics/spectra/#Plotting-Instantaneous-Spectra-1","page":"Instantaneous Spectra","title":"Plotting Instantaneous Spectra","text":"","category":"section"},{"location":"basics/triplets/#","page":"Cannonical Triplets","title":"Cannonical Triplets","text":"#Cannonical Triplets","category":"page"},{"location":"basics/triplets/#Defining-a-Cannonical-Triplet-1","page":"Cannonical Triplets","title":"Defining a Cannonical Triplet","text":"","category":"section"},{"location":"basics/triplets/#","page":"Cannonical Triplets","title":"Cannonical Triplets","text":"We define a cannonical triplet as a tuple consisting of an instantaneous amplitude (IA), an instantaneous frequency (IF), and a phase reference.","category":"page"},{"location":"basics/triplets/#","page":"Cannonical Triplets","title":"Cannonical Triplets","text":"julia> a₀(t) = exp(-t^2)\r\na₀ (generic function with 1 method)\r\n\r\njulia> ω₀(t) = 2.0\r\nω₀ (generic function with 1 method)\r\n\r\njulia> φ₀ = 0.0\r\n0.0\r\n\r\njulia> 𝐶₀ = (a₀,ω₀,φ₀)\r\n(a₀, ω₀, 0)","category":"page"},{"location":"#","page":"Home","title":"Home","text":"","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Modules = [ISA]","category":"page"},{"location":"#ISA.jl:-The-Julia-Library-for-Instantaneous-Spectral-Analysis-1","page":"Home","title":"ISA.jl: The Julia Library for Instantaneous Spectral Analysis","text":"","category":"section"},{"location":"#Installation-1","page":"Home","title":"Installation","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Download Julia 1.3 or later, if you haven't already.\nDownload/Clone the ISA module to username/.julia/dev/.\nEnter the package manager in REPL by pressing ]  then add the package by typing dev ISA rather than add ISA.","category":"page"},{"location":"basics/components/#AM–FM-Components-1","page":"AM–FM Components","title":"AM–FM Components","text":"","category":"section"},{"location":"basics/components/#Defining-an-AM–FM-Components-1","page":"AM–FM Components","title":"Defining an AM–FM Components","text":"","category":"section"},{"location":"basics/components/#","page":"AM–FM Components","title":"AM–FM Components","text":"We can define an AM–FM component by passing the function AMFMcomp an instantaneous amplitude (IA), an instantaneous frequency (IF), and a phase reference.","category":"page"},{"location":"basics/components/#","page":"AM–FM Components","title":"AM–FM Components","text":"julia> a₀(t) = exp(-t^2)\na₀ (generic function with 1 method)\n\njulia> ω₀(t) = 2.0\nω₀ (generic function with 1 method)\n\njulia> φ₀ = 0.0\n0.0\n\njulia> ψ₀ = AMFMcomp(a₀,ω₀,φ₀)\nAMFMcomp(a₀, ω₀, 0)","category":"page"},{"location":"basics/components/#","page":"AM–FM Components","title":"AM–FM Components","text":"Alternately, we can define an AM–FM component by passing the function AMFMcomp a cannonical triplet.","category":"page"},{"location":"basics/components/#","page":"AM–FM Components","title":"AM–FM Components","text":" julia> a₀(t) = exp(-t^2)\n a₀ (generic function with 1 method)\n\n julia> ω₀(t) = 2.0\n ω₀ (generic function with 1 method)\n\n julia> φ₀ = 0.0\n 0.0\n\n julia> 𝐶₀ = (a₀,ω₀,φ₀)\n (a₀, ω₀, 0)\n\n julia> ψ₀ = AMFMcomp(𝐶₀)\n AMFMcomp(a₀, ω₀, 0)","category":"page"},{"location":"basics/models/#","page":"AM–FM Models","title":"AM–FM Models","text":"","category":"page"},{"location":"basics/models/#","page":"AM–FM Models","title":"AM–FM Models","text":"Modules = [ISA]","category":"page"},{"location":"basics/models/#Defining-AM–FM-Models-1","page":"AM–FM Models","title":"Defining AM–FM Models","text":"","category":"section"}]
}
