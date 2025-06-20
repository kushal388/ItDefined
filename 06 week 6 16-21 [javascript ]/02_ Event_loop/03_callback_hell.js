console.log("Start order");

setTimeout(() => {
    console.log("Step 1: Order placed");

    setTimeout(() => {
        console.log("Step 2: Restaurant preparing food");

        setTimeout(() => {
            console.log("Step 3: Out for delivery");

            setTimeout(() => {
                console.log("Step 4: Delivered to customer");
            }, 1000);

        }, 1000);

    }, 1000);

}, 1000);
