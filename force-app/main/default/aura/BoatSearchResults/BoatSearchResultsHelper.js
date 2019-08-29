({
    onSearch : function(component, event, helper) {
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
