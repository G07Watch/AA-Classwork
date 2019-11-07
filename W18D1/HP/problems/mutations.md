mutation {
  addWizard(name: "Tom Riddle", houseId:2, patronusId: 9) {
    id,
    name,
    house {
      name
    },
    patronus {
      form
    }
  }
}

Create 3 new wizards and make sure you can view their name, house, and patronus information.
fragment returnWizardInfo on Wizard {
  id,
  name,
  house {
    name
  },
  patronus {
    form
  }
}

mutation {
  addWizard(name: "EXAMPLE1", houseId:1, patronusId: 1) {
    ...returnWizardInfo
  }
}

addWizard(name: "TestOne", houseId: 1, patronusId: 1)
addWizard(name: "TestTwo", houseId: 2, patronusId: 3)
addWizard(name: "TestThree", houseId: 2, patronusId: 3)


Edit the name of a wizard and verify that no other value has changed on that wizard.

mutation {
  updateWizard(id: 22, name: "TestThreeChanged") {
    name,
    house{
      name
    },
    patronus{
      form
    }
  }
}


Edit the house id and patronus id of a wizard and verify their name did not change. (You'll need to provide an id for the wizard you'd like to mutate).
mutation {
  updateWizard(id: 22, houseId: 1, patronusId: 1) {
    name,
    house{
      name
    },
    patronus{
      form
    }
  }
}

Delete two wizards (just make sure you are deleting wizards who exist! You can query the wizards root type for a list of all wizards.)
mutation{
  deleteWizard(id: 22){
    name
  }
  deleteWizard(id: 21){
    name
  }
}