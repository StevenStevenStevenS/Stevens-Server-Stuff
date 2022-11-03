#include <iostream>
#include <fstream>
#include <iomanip>
#include <nlohmann/json.hpp>

using namespace std;
using json = nlohmann::json;

// What is the purpose of impliment.cpp?
//
// Makes story file data readable in code
//
// Gives a tree-crawler, so that the user can traverse the dialogue map.

//################# VARIABLES ###################

story
tags
all_nodes

//################# FUNCTIONS ###################
using System;

// What is the purpose of impliment.cpp?
//
// Makes story file data readable in code
//
// Gives a tree-crawler, so that the user can traverse the dialogue map.

map<int, string> all_dialogue;

void init() {
    string data = get_file("filename.story");    // TODO: replace "filename.story" with your story file.

    //foreach (line in lines) { // Use of lines made irrelevant with Json converter
                                // This one converts to property, so can't use for loop and GetLines
    // Parse JSON
    // convert to nodes

    // Parse JSON
    json dialogue_data = parse(data);

    foreach(/*Object[] n*/ in dialogue_data["Nodes"]) {
        // convert to nodes
        node dialogue(n);

            // Remember in dictonary
            all_dialogue.insert({dialogue.id, dialogue});

    }

    // Convert2nodes and create story
    convert2nodes(dialogue_data.Tags, all_dialogue)  // Clean up
    // Create Story
    story = new story(tags)

}

static var convert2nodes(map<string, int> tgs, map<int, node> an) {    // Tags, all_nodes
    // Vars
    map<string, node> new_tgs();

    // Convert all of the id's to nodes
    foreach (KeyValuePair<string, int> t in tgs) {		// For tag in tag dictonary
		new_tgs.Add(t.key, an[t.value]);
    }
	
	foreach (KeyValuePair<int, node> n in an) {	// For id in all nodes
		node[] nexts_ii = new node[n.value.pre_nexts.length];
		
		node c_node = n.value;	// Get all_nodes[id] (which is the actual node (NOT data anymore as of line 89 ("IMPORTANT::  . . .")))
		
		// Change the current nexts to pointers to nodes
		foreach (int i in c_node.nexts) {
			nexts_ii[i] = an[i];
        }

		node.add_nexts(nexts_ii);
    }
	// Change external variables
	
    tags = new_tgs;	// External tags variable = created tags
	//all_nodes = an;	// External all_nodes variable = created all_nodes
}




//## Base Functions

// Get a file
// and RETURN lines
static string get_file(string f) {
    return File.ReadAllText(f);
}


try 
    {
        auto f = std::get<float>(intFloatString); 
        std::cout << "float! " << f << "\n";
    }
    catch (std::bad_variant_access&) 
    {
        std::cout << "our variant doesn't hold float at this moment...\n";
    }









//###

// Convert all id's in tgs and an to nodes
void convert2nodes(tgs, an) {	// Tags, All Nodes
	for (t_name in tgs) {		// For tag in tag doctonary
		tgs[t_name] = an[tgs[t_name]]
    }
	
	for (key in an) {   // For id in all nodes
		var nexts_array = [];
		
		var node = an[key];	// Get all_nodes[id] (which is the actual node (NOT data anymore as of line 89 ("IMPORTANT::  . . .")))
		
		// Change the current nexts (which are id's) to pointers to nodes
		for x in node.nexts:
			nexts_array.append(an[int(x)])
		
		node.add_nexts(nexts_array)
    }
	# Change external variables
	tags = tags		# External tags variable = created tags
	all_nodes = an	# External all_nodes variable = created all_nodes
}

namespace impliment {
    class Program {
        static void Main(string[] args) {
            Console.WriteLine("Hello World!");
        }
    }
}

// Read file
//
// Scrape code
//
// Interpret code

// Manage Next:

//## DIALOGUE ADVANCER ####

int mouse = 0;
int interact_button = 0;

int current_queue[]; // Replace type w/ dialogue type

static void input(int event) {
if (((event == mouse || event == interact_button) && event.is_pressed()) && current_queue[-1].is_dialogue()) {manage_next();}
}

static void manage_next() {
	// Get the current box
	var current_box = current_queue[-1]
	
	// Is it done?
	if (current_box.is_done()) {		// Is stopped?
		if (story.is_stop()) {
			// Exit the dialogue box
			signals_after()
			current_box.end_dialogue()
		}
        // Is next?
		if (story.nexts_num() == 0) {
			signals_after()
			current_box.end_dialogue()
			
			//stop_tag()		// Stop the tag from being used again (disable buttons, etc)
        }
		elif (story.nexts_num > 0) {
			signals_after()
			story.advance(0)
			signals_before()
			
			current_box.change_text(story.text(),story.choices())
        }
	}// Play the next
		
	
	// Is it playing
	else:
		current_box.display_text()
	
	
}

static void signals_after(string signals=story.focused_node.after_functions) {
	a_sigs
	for (int i=0; i<) {
		sig.strip_edges()
		
		emit_signal("signals", sig)
	}
}

static void signals_before(string signals=story.focused_node.after_functions) {
	a_sigs
	for (int i=0; i<) {
		sig.strip_edges()
		
		emit_signal("signals", sig)
	}
}

func start(t) {
	var current_box = current_queue[-1]
	
	story.start(t)
	signals_before()
	
	current_box.change_text(story.text(),story.choices())
}























int main() {

}

// A function that properly formats the story
init() {

    get_file()

}

convert2nodes() {

}


//### Dialogue Advancer #####

mouse
interact_button

current_queue[-1]


_input(event) {
    if (((event == mouse || event == interact_button) && event.is_pressed()) && current_queue[-1].is_dialogue()) {manage_next();}
}


manage_next() {
    // Get the current dialogue box
    dialogue current_box = current_queue[-1]

    // Is it done?
    if (current_box.is_done()) {
        if (story.is_stop()):
			// Exit the dialogue box
			current_box.end_dialogue()
		// Is next?
		if (story.nexts_num() == 0){
			current_box.end_dialogue()
			
			//stop_tag()		// Stop the tag from being used again (disable buttons, etc)
        } else if (story.nexts_num > 0) {
			c_after()
			story.advance(0)
			c_before()
			
			current_box.change_text(story.text(),story.choices())
        }
    }
    // Play the next
		
	
	// Is it playing
	else {
		current_box.display_text()
    }
}

Get_All_Inputs() {

}

signals_before() {

}

signals_after() {
	
}

//### Base Functions ####

string l;

void get_file(string f) {
    fstream file(f) // Open file f
    
    // Read the data inside file f line by line
    while(get_line(file, l)) {
        // Get the data from the line.
        string l_split[];
        // 1. Split l
        // 2. 


    }
}


class signal {
    object connections[];
    string emit_signal(string s) {


    }

    void connect(string s, object obj, string f_name) {


    }
}

variant










//#################################################################









#include <iostream>
using namespace std;

const int x=,,,
double
char
string
bool    // bool = 1 = true, 0 = false (no stock)

// Hello!
/*Hello
  World!*/
int main() {
    cout << "Hello World! \n Lovely day out this morning";
    cout << "Hello World" << endl;
    cout << "Lovely day out this morning";
    cout << x + y + z;
    cout << "Type in a number:"
    cin >> w;
    //
    return 0;
}

//#################################################################

int main() {


    return 0;
}


#include "GameFramework/Actor.h"
#include "MyActor.generated.h"

UCLASS()
class AMyActor : public AActor
{
    GENERATED_BODY()

public:
    // Sets default values for this actor's properties
    AMyActor();

    // Called every frame
    virtual void Tick( float DeltaSeconds ) override;

protected:
    // Called when the game starts or when spawned
    virtual void BeginPlay() override;
};

