var ResearchProject = BaseObject.extend({
    init: function () {
        this._super('research');
        this.engineeringProjects = [];
    },
    name:'',
    description:'',
    researchPoints: 0,
    gridX: 0,
    gridY: 0,
    engineeringProjects: [],
    completeProject : function(player){
    }
});

