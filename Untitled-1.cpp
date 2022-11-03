#include <iostream>
using namespace std;

class phone {
    int phone_number;
    string color;
    string type;

    int typed_number;

    void button_down(int buttnum) {
        typed_number = typed_number * 10 + buttnum
    }

    void call(int num) {
        // Communicate to another end (phone) so that it rings
        // OR
        // Play the dialogue from the other end that there would be
    }

}

class food {
    //eat
    int name;
    int calories;
    int nutrients[];
    
    string exceptions;
}

class person {
    string name;
    img picture;

    movement() {
        if (key_down("W")) {y -= speed}
        if (key_down("A")) {x -= speed}
        if (key_down("S")) {y += speed}
        if (key_down("D")) {x += speed}

        normalize(dir)
    }
}

int main() {
    person malorie ();  // What she looks like, how she talks, ...
                        // etc.

    return 0;
}