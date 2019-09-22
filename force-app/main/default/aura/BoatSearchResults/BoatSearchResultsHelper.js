({
    onSearch : function(component, event, helper) {
        var eventParams = event.getParam("arguments");
        if (eventParams) {
            component.set("v.boatTypeId", eventParams.boatTypeId);
        }
        var getBoats = component.get("c.getBoats");
        action.setParams({
            boatTypeId : component.get("v.boatTypeId")
        });
        getBoats.setCallback(this, function(response){
            if (response.getState() === 'SUCCESS') {
                component.set("v.boats", response.getReturnValue());
            } else {
                console.log('Something wrong with getting boats');
            }
        });
        $A.enqueueAction(getBoats);
    }
})
