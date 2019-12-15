({
    onBoatClick : function(component, event, helper) {
        var boatSelect = component.getEvent("onBoatSelect");
        var boatSelected = $A.get("e.c:BoatSelected");
        var plotMapMarker = $A.get("e.c:PlotMapMarker");
        boatSelect.setParams({
            "boatId" : component.get("v.boat").Id
        });
        boatSelected.setParams({
            "boat" : component.get("v.boat")
        });
        plotMapMarker.setParams({
            "latitude" : component.get("v.boat").Geolocation__latitude__s,
            "longitude" : component.get("v.boat").Geolocation__longitude__s,
            "sObjectId" : boat.Id,
            "label" : boat.Name 
        });
        boatSelect.fire();
        boatSelected.fire();
        plotMapMarker.fire();
    }
})
