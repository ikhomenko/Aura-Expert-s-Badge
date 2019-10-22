({
    onBoatClick : function(component, event, helper) {
        var boatSelect = component.getEvent("onBoatSelect");
        var boatSelected = $A.get("e.c:BoatSelected");
        boatSelect.setParams({
            "boatId" : component.get("v.boat").Id
        });
        boatSelected.setParams({
            "boat" : component.get("v.boat")
        });
        boatSelect.fire();
        boatSelected.fire();
    }
})
