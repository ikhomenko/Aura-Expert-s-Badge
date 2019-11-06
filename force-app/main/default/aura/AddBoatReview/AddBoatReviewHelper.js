({
    onInit : function(component, event, helper) {
        component.find("service").getNewRecord(
            "BoatReveiw__c",
            null,
            true,
            $A.getCallback(function () {
                var boat = component.get("v.boat");
                var error = component.get("v.recordError");
                if (error) {
                    console.log(error);
                }
                component.set("v.boatReview.Boat__c", boat.Id);
            })
        );
    }
})
