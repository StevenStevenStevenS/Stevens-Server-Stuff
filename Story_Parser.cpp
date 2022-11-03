void parse_code(string f_list) {    // array
    func decipher_functions(f_list:String):
	
	if "t_c" in all_vars.keys():
		print ("####################What's it at?############################")
		print (all_vars["t_c"])
	
	//f(a,b,c,d), g(a,b,c,d), h(a,b,c,d)
	string a_funcs[];	// All of the functions
	string a_vars[];	// All of the  variable sets
	
	
	// Before we do anything, we have to find out whether or not everything is in quotes
	// f("a,b",c,d)
	
	string token[] = split_w(f_list,["\"","\'",'\\"',"\\'"])	# 1) split the quotes
	string ab[] = token[0]
    string ab_d[] = token[1]
	string abc[];
	string abc_string = ""
	
	bool in_quotes = false
	var q
	var these_quotes = []
	
	var q_string = ""
	
	var q_i = 0
	
	#print ("####################3ab:#########################")
	#print (ab)
	#print (ab_d)
	
	
	//abc.append(ab[0])
	
    for (int i=0; i<ab.length(); i++) {
        // Figure out whether or not string is in quotes
        
		
		if i != 0 {
			
			// It's in quotes now
			if (in_quotes == false and not ab_d[i-1] in f_quotes) {
				# Add to 
				q_string += ab[i]
				abc.append("1q")
				# For managing if/else
				in_quotes = true
				q = ab_d[i-1]
			
            } elif ab_d[i-1] == q {
				#q_string += ab[i]	#TODO RN 9/20
				
				#print("1)" + q_string)
				
				these_quotes.append(q_string.c_unescape())
				q_string = ""
				
				in_quotes = false
				
				abc.append(ab[i])
				
				# For managing if/else
			
            } else {
				
				q_string += ab_d[i-1] + ab[i]
            }
        }
	}			
			
		
	
	for i in abc {
		//print("this:")
		//print(i)
		abc_string += i
    }

	// An array of all of the variables:
	//var vars = function[1].split(",")
	//var vars = abc_string.split(",")
	
	//print ("####################### abc_string:")
	//print (abc_string)
	
	string funcs_split[] = abc_string.split(")");
	string funcs_and_vars[];
	
	for x in funcs_split:
		funcs_and_vars.append( x.split("(", true, 1) )
	
	#print ("#############################################################")
	print (funcs_and_vars)
	
	# For each function w/ it's variables in funcs_and_vars
	for i in range(funcs_and_vars.size()):
		
		#var f = funcs_and_vars[i][1]
		#print (funcs_and_vars[i][1])
		if funcs_and_vars[i].size() < 2:
			return [a_funcs,a_vars]
		
		
		# An array of all of the variables:
		var vars = funcs_and_vars[i][1].split(",")
		
		
		
		
		var vars_meanings:Array = []
		
		for i in range(vars.size()):
			var var_meaning
			var var_stripped = vars[i].strip_edges()
			
			#print ("######Vstripped:")
			#print (var_stripped)
			
			
			if var_stripped == "1q":
				
				#print("####"+str(i)+"for1q####")
				#print(var_stripped)
				
				var_meaning = these_quotes[q_i]
				
				#print (these_quotes)
				#print (q_i)
				
				q_i += 1
				
			else:		#Fix for if there isn't any parameter
				
				#print("####"+str(i)+" else####")
				#print(var_stripped)
				
				var_meaning = decipher_function_param(var_stripped)
				
				print ("#### Varmeaning and type")
				print (var_meaning)
				print (typeof(var_meaning))
			
			#print ("####################important!########################")
			#print (vars, i, var_meaning)
			if typeof(var_meaning) == 4:	# To protect var from being nothing
				if not var_meaning == "":	# Why is this needed?
					vars_meanings.append(var_meaning)
			else:
				vars_meanings.append(var_meaning)
			
			#print (vars)
		#The function name: strip spaces, and split by
		# space, so there is no "," in front
		var function = funcs_and_vars[i][0].strip_edges()
		
		function = function.lstrip(",")
		function = function.strip_edges()
		
		a_funcs.append(function)
		a_vars.append(vars_meanings)
		
		
		print("All the variables and their types:")
		for v in vars_meanings:
			print(v)
			print(typeof(v))
	
	print(a_funcs, a_vars)
	
	return [a_funcs,a_vars]
	

}