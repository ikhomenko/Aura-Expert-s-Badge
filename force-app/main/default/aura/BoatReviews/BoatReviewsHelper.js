({
    onInit : function() {
        var getAll = component.get("c.getAll");
        getAll.setParam("boatId", component.get("v.boat.Id"));
        getAll.setCallback(this, function(response) {
            if (response.getState() === "SUCCESS") {
                component.set("v.boatReviews", response.getReturnValue());
            } else {
                console.log('Something went wrong');
            }
        });
        $A.enqueueAction(getAll);
    }
})
