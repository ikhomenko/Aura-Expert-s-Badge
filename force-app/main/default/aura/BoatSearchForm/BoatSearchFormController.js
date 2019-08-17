({
    doInit : function(component, event, helper) {
        var createRecordEnabled = $A.get("e.force:createRecord");
      
        if (!createRecordEnabled) {
          component.set("v.isNewRendered", false);
        }
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

    }
})
