({
    doInit : function(component, event, helper) {
        var createRecordEnabled = $A.get("e.force:createRecord");
      
        if (!createRecordEnabled) {
          component.set("v.isNewRendered", false);
        }

        let getBoatTypes = component.get("c.getBoatTypes");
        getBoatTypes.setCallback(this, function(response){
            let state = response.getState();
            if(state == 'SUCCESS') {
                component.set('v.boatTypes', response.getReturnValue());
            }
        });
        $A.enqueueAction(getBoatTypes);
    },

    new : function(component, event, helper) {
        var createNewBoat = $A.get("e.force:createRecord");
        createNewBoat.setParams({
            "entityApiName": "Boat__c",
        })

        if(! boatTypeId==""){
            createNewBoat.setParams({
                "defaultFieldValues": {'BoatType__c': boatTypeId}
           })
        }

        createNewBoat.fire();

    },

    onFormSubmit : function(component, event, helper) {
        var formsubmit = component.getEvent("formsubmit");
        formsubmit.setParams({
            "formData": {"boatTypeId":component.get("v.boatTypeId")}
        });
        formsubmit.fire();
    }
})
