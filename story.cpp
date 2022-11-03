
class story {

public:
    // Paths
    string tags[]; // Original paths
    string tag_progress[];

    string focused_tag;
    string focused_node;

    string path_queue;

    void story() {

    }

    //## Information Functions ####
    bool is_stop() {return focused_node.stop;}
    string text() {return focused_node.dialogue_text}
    string choices {return focused_node.choices}
    int nexts_num() {focused_node.nexts.size()}

    //## functional functions ####
    void change_start(s, new_s) {
        tag_progress[s] = tags[new_s]

        focused_node = tag_progress[new_s]
    }

    change_next()

    change_nexts()

    start()

    advance(c) {

    }
}

























using namespace std; 
vector<variant<int, string, float>> MultipleTypeArray; 
 
// Simplified: 
using MultiType = variant<int, string, float>; 
vector<MultiType> MultipleTypeArray; 
 
MultipleTypeArray.push_back(120); // int 
MultipleTypeArray.push_back("Example"); // string 
MultipleTypeArray.push_back(3.14f); // float 
 
// Use 'variant::index' to know the type strored in variant (zero-based index). 

// Code from Quora user Ajay Vijayvargiya
// https://www.quora.com/How-do-I-store-different-data-types-in-a-single-array-in-C