({
    doInit : function(component, event, helper) {
        helper.onInit(component, event, helper)
    },

    onSave : function(component, event, helper) {

        component.find("service").saveRecord(function (result) {
            if (result.state === "SUCCESS") {
                var toast = $A.get("e.force:showToast");
                if (toast) {
                    toast.setParams({
                        "title": "Reveiw saved",
                        "message": "Thank you for feedbak, you're awsome",
                        "type": "success"
                    });
                    toast.fire();
                } else {
                    alert("Saved succesfuly");
                }
                helper.onInit(component, event, helper);
                var boatReviewAdded = component.getEvent("boatReviewAdded");
                boatReviewAdded.fire();
            } else {
                console.log('Something went wrong');
            }
        });
    },

    onRecordUpdated : function(component, event, helper) {

    }
})
