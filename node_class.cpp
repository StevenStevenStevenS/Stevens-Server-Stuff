#include <iostream>
using namespace std;

class node {
    public:

        int id;

        string text;
        string choices[];
        int expression;

        string before_functions;
        string after_functions;

        node nexts[];
        bool stop;

        // a[] will not work in c++
        // Woot woot!

        void node(int i, string t, string c, int e, string b_f, string a_f, node n, bool s) {

        }

        node next(int c=0) {
            if c < next.size();
                return nexts[c];
        }

        void add_nexts(node n) {    // Param used to be node nexts, but I don't know how to implement that in c++ when there is a global and local var with the same name
            nexts = n;
        }

        ret(int i) {
            // ret_a[] = [id, dialogue_text, choices, expression, before_functions, after_functions, nexts, stop]

            switch (i) {
                case 0:
                    return;
                    break id;
                case 1:
                    return text;
                    break;
                case 2:
                    return choices;
                    break;
                case 3:
                    return expression;
                    break;
                case 4:
                    return before_functions;
                    break;
                case 5:
                    return after_functions;
                    break;
                case 6:
                    return nexts;
                    break;
                case 7:
                    return stop;
                    break;
            }

            return null;
        }
}