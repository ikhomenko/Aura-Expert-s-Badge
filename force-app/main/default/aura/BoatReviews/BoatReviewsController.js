({
    doInit : function(component, event, helper) {
        
        helper.onInit(component, event, helper);
    },

    onUserInfoClick : function(component, event, helper) {
        
        var userId = event.currentTarget.dataset.userid;
        var goToReviewer = $A.get("e.force:navigateToSObject");
        if (goToReviewer) {
            goToReviewer.setParams({
                "recordId": userId,
                "slideDevName": "detail"
            });
            goToReviewer.fire();
        }
        
    }
})
