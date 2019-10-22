({
    onBoatSelected : function(component, event, helper) {
        var boat = event.getParam("boat");
        if (boat) {
            component.set("v.id", boat.Id);
        }
        component.find("service").reloadRecord();
    },

    onRecordUpdated : function(component, event, helper) {
        
    }
})
