function AnonymousLlama() {
    
    var output = "";

    for (var i = 0; i<100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            output = "AnonymousLlama";
        }

        else if (i % 3 == 0) {
            output = "Anonymous";
        }

        else if (i % 5 == 0) {
            output = "Llama";
        }

        else {
            output = i;
        }

        console.log(output);
    }
}
