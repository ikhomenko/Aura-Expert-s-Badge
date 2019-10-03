({
    onBoatClick : function(component, event, helper) {
        var boatSelect = component.getEvent("onBoatSelect");
        boatSelect.setParams({
            "boatId" : component.get("v.boat").Id
        });
        boatSelect.fire();
    }
})
