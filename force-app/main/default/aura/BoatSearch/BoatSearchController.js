({
    onFormSubmit : function(component, event, helper) {
        var formData = event.getParam("formData");
        var boatSearchResultsCmp = component.find("boatSearchResults");
        var boatTypeId;
        if (formData) {
            boatTypeId = formData.boatTypeId;
        }
        boatSearchResultsCmp.search(boatTypeId);
    }
})
