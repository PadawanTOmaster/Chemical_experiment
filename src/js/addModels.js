const addModels = {
    methods:{
        addPaper() {
            this.addModel('paper', null, new BABYLON.Vector3(0, 0.05, 0), null, ['PointerDragBehavior'], null);
        },
        addDrawer() {
            this.addModel('drawer', new BABYLON.Vector3(10, 10, 10), new BABYLON.Vector3(-100, -70, 120), new BABYLON.Vector3(0, Math.PI, 0), null,'drawer');
        },
        addBB8() {
            this.addModel('bb8', new BABYLON.Vector3(0.26, 0.26, 0.26), new BABYLON.Vector3(-0.85, 0.33, 0), new BABYLON.Vector3(0, Math.PI, 0), null, null);
        },
        addRoundFlask() {
            this.addModel('round_flask', null, null, null, ['PointerDragBehavior'], null);
        },
        addWeight() {
            this.addModel('weight', new BABYLON.Vector3(0.03,0.03,0.03), null, new BABYLON.Vector3(0, Math.PI, 0), null, 'weight');
            var timer = setInterval(() => {
                if (this.scene.getMeshByID('weight')!=undefined){
                    var mesh = this.scene.getMeshByID('weight');
                    mesh.id = this.addName(mesh.id);
                    this.scene.getMeshByID(mesh.id).addBehavior(
                        new BABYLON.PointerDragBehavior({
                            dragPlaneNormal: new BABYLON.Vector3(0, 1, 0)
                        })
                    );
                    this.activeIndex = mesh.id;
                    var name = '电子称' + mesh.id.split('-')[1];
                    this.weightlist.push(mesh.id);
                    this.weightprops[mesh.id] = [
                        [null, null, 0, 0, 0, 0], name
                    ];
                    setTimeout(() => {
                        this.$refs.weight[this.weightlist.indexOf(mesh.id)].setAllNumber(null, null, 0, 0, 0, 0, mesh.id);
                    }, 100);
                    window.clearInterval(timer);
                }
            }, 100);


        },
        addC8h14o2s2() {
            this.addModel('c8h14o2s2', new BABYLON.Vector3(0.03, 0.03, 0.03), null, new BABYLON.Vector3(0, Math.PI, 0), null, 'c8h14o2s2');
            this.addModel('bottle_cap', new BABYLON.Vector3(0.03, 0.03, 0.03), new BABYLON.Vector3(0,0.18,0), new BABYLON.Vector3(0, 0, Math.PI), null, 'bottle_cap');
            var timer = setInterval(() => {
                if (this.scene.getMeshByID('bottle_cap') != undefined && this.scene.getMeshByID('c8h14o2s2') != undefined) {
                    var mesh = BABYLON.Mesh.MergeMeshes(
                        [this.scene.getMeshByID('bottle_cap'), this.scene.getMeshByID('c8h14o2s2')
                        ],
                        true,
                        true,
                        undefined,
                        false,
                        true
                    );
                    mesh.id = 'c8h14o2s2.bottle_cap';
                    mesh.id = this.addName(mesh.id);
                    mesh.addBehavior(
                        new BABYLON.PointerDragBehavior({
                            dragPlaneNormal: new BABYLON.Vector3(0, 1, 0)
                        })
                    );
                    window.clearInterval(timer);
                }
            }, 100);           
        },
        addFecl3() {
            this.addModel('fecl3', new BABYLON.Vector3(0.03, 0.03, 0.03), null, new BABYLON.Vector3(0, Math.PI, 0),null, 'fecl3');
            this.addModel('bottle_cap', new BABYLON.Vector3(0.03, 0.03, 0.03), new BABYLON.Vector3(0, 0.18, 0), new BABYLON.Vector3(0, 0, Math.PI), null, 'bottle_cap');
            var timer = setInterval(() => {
                if (this.scene.getMeshByID('bottle_cap') != undefined && this.scene.getMeshByID('fecl3') != undefined) {
                    var mesh = BABYLON.Mesh.MergeMeshes(
                        [this.scene.getMeshByID('bottle_cap'), this.scene.getMeshByID('fecl3')
                        ],
                        true,
                        true,
                        undefined,
                        false,
                        true
                    );
                    mesh.id = 'fecl3.bottle_cap';
                    mesh.id = this.addName(mesh.id);
                    mesh.addBehavior(
                        new BABYLON.PointerDragBehavior({
                            dragPlaneNormal: new BABYLON.Vector3(0, 1, 0)
                        })
                    );
                    window.clearInterval(timer);
                }
            }, 100);
        },
        addAsetone() {
            this.addModel('c3h6o', new BABYLON.Vector3(0.03, 0.03, 0.03), null, new BABYLON.Vector3(0, Math.PI, 0), null, 'c3h6o');
            this.addModel('bottle_cap', new BABYLON.Vector3(0.03, 0.03, 0.03), new BABYLON.Vector3(0, 0.18, 0), new BABYLON.Vector3(0, 0, Math.PI), null, 'bottle_cap');
            var timer = setInterval(() => {
                if (this.scene.getMeshByID('bottle_cap') != undefined && this.scene.getMeshByID('c3h6o') != undefined) {
                    var mesh = BABYLON.Mesh.MergeMeshes(
                        [this.scene.getMeshByID('bottle_cap'), this.scene.getMeshByID('c3h6o')
                        ],
                        true,
                        true,
                        undefined,
                        false,
                        true
                    );
                    mesh.id = 'c3h6o.bottle_cap';
                    mesh.id = this.addName(mesh.id);
                    mesh.addBehavior(
                        new BABYLON.PointerDragBehavior({
                            dragPlaneNormal: new BABYLON.Vector3(0, 1, 0)
                        })
                    );
                    window.clearInterval(timer);
                }
            }, 100);
        },
        addDib() {
            this.addModel('dib', new BABYLON.Vector3(0.03, 0.03, 0.03), null, new BABYLON.Vector3(0, Math.PI, 0), null, 'dib');
            this.addModel('bottle_cap', new BABYLON.Vector3(0.03, 0.03, 0.03), new BABYLON.Vector3(0, 0.18, 0), new BABYLON.Vector3(0, 0, Math.PI), null, 'bottle_cap');
            var timer = setInterval(() => {
                if (this.scene.getMeshByID('bottle_cap') != undefined && this.scene.getMeshByID('dib') != undefined) {
                    var mesh = BABYLON.Mesh.MergeMeshes(
                        [this.scene.getMeshByID('bottle_cap'), this.scene.getMeshByID('dib')
                        ],
                        true,
                        true,
                        undefined,
                        false,
                        true
                    );
                    mesh.id = 'dib.bottle_cap';
                    mesh.id = this.addName(mesh.id);
                    mesh.addBehavior(
                        new BABYLON.PointerDragBehavior({
                            dragPlaneNormal: new BABYLON.Vector3(0, 1, 0)
                        })
                    );
                    window.clearInterval(timer);
                }
            }, 100);
        },
        addC8h14o2s2NoCap(){
            this.addModel('c8h14o2s2', new BABYLON.Vector3(0.03, 0.03, 0.03), null, new BABYLON.Vector3(0, Math.PI, 0),['PointerDragBehavior'], null);
        },
        addFecl3NoCap(){
            this.addModel('fecl3', new BABYLON.Vector3(0.03, 0.03, 0.03), null, new BABYLON.Vector3(0, Math.PI, 0), ['PointerDragBehavior'], null);
        },
        addAsetoneNoCap(){
            this.addModel('c3h6o', new BABYLON.Vector3(0.03, 0.03, 0.03), null, new BABYLON.Vector3(0, Math.PI, 0), ['PointerDragBehavior'], null);
        },
        addDibNoCap(){
            this.addModel('dib', new BABYLON.Vector3(0.03, 0.03, 0.03), null, new BABYLON.Vector3(0, Math.PI, 0), ['PointerDragBehavior'], null);            
        },
        addBottleCap(){
            this.addModel('bottle_cap', new BABYLON.Vector3(0.03, 0.03, 0.03), new BABYLON.Vector3(0, 0.1, 0), new BABYLON.Vector3(0, 0, Math.PI), ['PointerDragBehavior'], null);
        },
        addStand() {
            if(this.e1==2){
                for (var i = 0; i < this.scene.meshes.length; i++) {
                    if (this.scene.meshes[i].id.split('-').includes('stand1_movable') || this.scene.meshes[i].id.split('-').includes('stand1_pole')) {
                        return;
                    }
                }
                this.addModel('stand1_movable', new BABYLON.Vector3(0.02,0.02,0.02), new BABYLON.Vector3(-0.98, 0.4, 0), new BABYLON.Vector3(0, Math.PI/2, 0), null, 'stand1_movable');
                this.addModel('stand1_pole', null, new BABYLON.Vector3(1, 0, 0), new BABYLON.Vector3(0, Math.PI, 0), null, 'stand1_pole');
                var timer = setInterval(() => {
                    if (this.scene.getMeshByID('stand1_movable') != undefined && this.scene.getMeshByID('stand1_pole')!=undefined){
                        var mesh = this.scene.getMeshByID('stand1_movable');
                        mesh.id = this.addName(mesh.id);
                        var mesh1 = this.scene.getMeshByID('stand1_pole');
                        mesh1.id = this.addName(mesh1.id);
                        this.standlist.push([mesh.id, mesh1.id]);
                        this.activeIndex = mesh1.id;
                        window.clearInterval(timer);
                    }
                }, 100);
            }
            else
                this.addModel('stand', null, null, new BABYLON.Vector3(0, Math.PI, 0), ['PointerDragBehavior'], null);
        },
        addPot() {
            this.addModel('pot', new BABYLON.Vector3(0.03,0.03,0.03), null, null, ['PointerDragBehavior'], null);
        },
        addDropper() {
            this.addModel('dropper', new BABYLON.Vector3(2, 2, 2), new BABYLON.Vector3(0, 0.2, 0), new BABYLON.Vector3(0, 0, Math.PI), ['PointerDragBehavior'], null);
        },
        addHeater() {
            this.addModel('heater', null, null, new BABYLON.Vector3(0, Math.PI, 0),null, 'heater');
            this.addModel('heater_switch', null, new BABYLON.Vector3(0.08, 0.05, -0.25), new BABYLON.Vector3(0, Math.PI, 0), null, 'heater_switch1');
            this.addModel('heater_knob', null,new BABYLON.Vector3(0.14,0.05,-0.27), null, null, 'heater_knob1');
            this.addModel('heater_switch', null, new BABYLON.Vector3(0.197, 0.05, -0.25), new BABYLON.Vector3(0, Math.PI, 0), null, 'heater_switch2');
            this.addModel('heater_knob', null, new BABYLON.Vector3(0.03, 0.05, -0.27), null, null, 'heater_knob2');            
            var timer = setInterval(() => {
                if (this.scene.getMeshByID('heater')!=undefined && this.scene.getMeshByID('heater_switch1')!=undefined 
                && this.scene.getMeshByID('heater_switch2')!=undefined &&
                    this.scene.getMeshByID('heater_knob1')!=undefined && this.scene.getMeshByID('heater_knob2')!=undefined){
                        var mesh = BABYLON.Mesh.MergeMeshes(
                            [this.scene.getMeshByID('heater'), this.scene.getMeshByID('heater_switch1'), this.scene.getMeshByID('heater_switch2'),
                                this.scene.getMeshByID('heater_knob1'), this.scene.getMeshByID('heater_knob2')
                            ],
                            true,
                            true,
                            undefined,
                            false,
                            true
                        );
                        mesh.id = 'heater';
                        mesh.id = this.addName(mesh.id);
                        mesh.addBehavior(
                            new BABYLON.PointerDragBehavior({
                                dragPlaneNormal: new BABYLON.Vector3(0, 1, 0)
                            })
                        );
                        window.clearInterval(timer);
                    }
            }, 100);
           
        },
        addLiquidTransferor() {
            this.addModel('liquid_transferor', new BABYLON.Vector3(0.03,0.03,0.03), new BABYLON.Vector3(0, 0.3, 0), new BABYLON.Vector3(0, Math.PI, Math.PI), ['PointerDragBehavior'], 'liquid_transferor');
            var timer = setInterval(() => {
                if (this.scene.getMeshByID('liquid_transferor')!=undefined){
                    var mesh = this.scene.getMeshByID('liquid_transferor');
                    mesh.id = this.addName(mesh.id);
                    this.liquid_transferorlist.push(mesh.id);
                    this.liquid_transferorprops[mesh.id] = [0, 100, true, '']; //液体多少,量程,按钮禁用状态,吸入三氯化铁丙酮溶液锥形瓶的id
                    this.activeIndex = mesh.id;
                    window.clearInterval(timer)
                }
            }, 100);
        },
        addMeasuringCylinder() {
            this.addModel('measuring_cylinder', null, null, null, ['PointerDragBehavior'], 'measuring_cylinder');
            var timer = setInterval(() => {
                if (this.scene.getMeshByID('measuring_cylinder')!=undefined){
                    var mesh = this.scene.getMeshByID('measuring_cylinder')
                    mesh.id = this.addName(mesh.id)
                    this.activeIndex = mesh.id
                    this.scene.getMeshByID(mesh.id).addBehavior(
                        new BABYLON.PointerDragBehavior({
                            dragPlaneNormal: new BABYLON.Vector3(0, 1, 0)
                        })
                    );
                    this.measuring_cylinderlist.push(mesh.id);
                    this.measuring_cylinderprops[mesh.id] = [0, '量筒' + mesh.id.split('-')[1]];
                    window.clearInterval(timer);
                }
            }, 100);
        },
        addNeedle() {
            this.addModel('needle', new BABYLON.Vector3(2, 2, 2), new BABYLON.Vector3(0, 0.23, 0), new BABYLON.Vector3(0, 0, Math.PI), ['PointerDragBehavior'], null);
        },
        addNMR_tube() {
            this.addModel('nmr_tube', new BABYLON.Vector3(2, 1, 1.5), new BABYLON.Vector3(0, 0.03, 0), null, ['PointerDragBehavior'], null);
        },
        addC3D6O(){
            this.addModel('c3d6o', null, null, new BABYLON.Vector3(0, Math.PI, 0), ['PointerDragBehavior'], null);
        },
        //addCap(0,0.01,0)
        addCap(x, y, z) {
            var mesh = BABYLON.Mesh.CreateCylinder("cap", 0.01, 0.01, 0.01, 10, 1, this.scene, false, BABYLON.Mesh.DEFAULTSIDE);
            mesh.id = this.addName("cap")
            this.scene.getMeshByID(mesh.id).position = new BABYLON.Vector3(x, y, z);
            var mater = new BABYLON.StandardMaterial("texture1", this.scene);
            mater.diffuseColor = new BABYLON.Color3(0.134, 0.331, 0.535);
            this.scene.getMeshByID(mesh.id).material = mater;
            this.scene.getMeshByID(mesh.id).addBehavior(
                new BABYLON.PointerDragBehavior({
                    dragPlaneNormal: new BABYLON.Vector3(0, 1, 0)
                })
            );
            return mesh;
        },
        addSampleFilm(x,y,z){
            var mesh= BABYLON.MeshBuilder.CreateBox("sample_film", {height: 0.01, width: 0.05, depth: 0.05}, this.scene);
            mesh.id = this.addName('sample_film');
            var myMaterial = new BABYLON.StandardMaterial("myMaterial", this.scene);
            myMaterial.diffuseColor = new BABYLON.Color3(0.5, 0.5, 0);
            myMaterial.alpha = 0.5;
            mesh.material = myMaterial;
            mesh.addBehavior(
                new BABYLON.PointerDragBehavior({
                    dragPlaneNormal: new BABYLON.Vector3(0, 1, 0)
                })
            );
            return mesh;
        },
        addBrukerBulb(x, y, z) {
            var mesh = BABYLON.Mesh.CreateCylinder("bulb", 0.05, 0.1, 0.1, 10, 1, this.scene, false, BABYLON.Mesh.DEFAULTSIDE);
            mesh.id = "bulb";
            mesh.rotation = new BABYLON.Vector3(Math.PI/2, -Math.PI/4, 0);
            this.scene.getMeshByID(mesh.id).position = new BABYLON.Vector3(x, y, z);
            var mater = new BABYLON.StandardMaterial("texture1", this.scene);
            mater.diffuseColor = new BABYLON.Color3(0.745, 0.077, 0.177);
            this.scene.getMeshByID(mesh.id).material = mater; //-0.7, 0.7, 0.8 Math.PI / 2, -Math.PI / 4, 0
            this.light = new BABYLON.SpotLight("spotLight", new BABYLON.Vector3(-0.6, 0.7, 0.8), new BABYLON.Vector3(Math.PI / 2, -Math.PI / 4, 0), Math.PI*2 , 1, this.scene);
            this.light.diffuse = new BABYLON.Color3(0.745, 0.077, 0.177);
            this.light.specular = new BABYLON.Color3(0.745, 0.077, 0.177);
            this.light.id = 'light';
            return mesh;
        },
        addFpir(){
            this.addModel('fpir', new BABYLON.Vector3(1.5, 1.5, 1.5),null, new BABYLON.Vector3(0, Math.PI, 0),null, 'fpir');
            var timer = setInterval(() => {
                if (this.scene.getMeshByID('fpir')!=undefined){
                    var mesh = this.scene.getMeshByID('fpir');
                    mesh.id = this.addName(mesh.id);
                    this.scene.getMeshByID(mesh.id).addBehavior(
                        new BABYLON.PointerDragBehavior({
                            dragPlaneNormal: new BABYLON.Vector3(0, 1, 0)
                        })
                    );
                    this.activeIndex = mesh.id;
                    var name = '红外光谱仪' + mesh.id.split('-')[1];
                    this.fpirlist.push([mesh.id,true]);
                    window.clearInterval(timer);
                }
            }, 100);
        },
        addSpoon() {
            this.addModel('spoon', new BABYLON.Vector3(2.5, 2.5, 2.5), new BABYLON.Vector3(0, 0.05, 0), null, ['PointerDragBehavior'], null);
        },
        addTriFlask() {
            this.addModel('tri_flask', new BABYLON.Vector3(0.8,0.8,0.8), null, null, ['PointerDragBehavior'], null);
        },
        addFilm() {
            this.addModel('film', null, null, null, ['PointerDragBehavior'], null);
        },
        addNeedleCap() {
            this.addModel('needle', new BABYLON.Vector3(2, 2, 2), new BABYLON.Vector3(0, 0.25, 0), new BABYLON.Vector3(0, 0, Math.PI), null, 'needle');
            BABYLON.Mesh.CreateCylinder("cap", 0.01, 0.01, 0.01, 10, 1, this.scene, false, BABYLON.Mesh.DEFAULTSIDE);
            this.scene.getMeshByID('cap').position = new BABYLON.Vector3(0.002, 0, 0);
            var mater = new BABYLON.StandardMaterial("texture1", this.scene);
            mater.diffuseColor = new BABYLON.Color3(0.134, 0.331, 0.535);
            this.scene.getMeshByID('cap').material = mater;
            var timer = setInterval(() => {
                if (this.scene.getMeshByID('needle')!=undefined){
                    var mesh = BABYLON.Mesh.MergeMeshes(
                        [
                            this.scene.getMeshByID('needle'),
                            this.scene.getMeshByID('cap')
                        ],
                        true,
                        true,
                        undefined,
                        false,
                        true
                    );
                    mesh.addBehavior(
                        new BABYLON.PointerDragBehavior({
                            dragPlaneNormal: new BABYLON.Vector3(0, 1, 0)
                        })
                    );
                    mesh.id = 'needle.cap';
                    mesh.id = this.addName(mesh.id);
                    this.needlelist.push(mesh.id);
                    this.needleprops[mesh.id] = [0, '']
                    this.activeIndex = mesh.id
                    window.clearInterval(timer);
                }
            }, 100);

        },
        addPaperCone() {
            this.addModel('paper', null, new BABYLON.Vector3(0, 0.05, 0), null, null, "paper");
            this.addModel(
                "cone",
                new BABYLON.Vector3(0.02, 0.02, 0.02),
                new BABYLON.Vector3(0, 0.07, 0),
                null,
                null,
                "cone"
            );
            var timer = setInterval(() => {
                if (this.scene.getMeshByID("paper") != undefined && this.scene.getMeshByID("cone")!=undefined){
                  var mesh = BABYLON.Mesh.MergeMeshes(
                        [this.scene.getMeshByID("paper"), this.scene.getMeshByID("cone")],
                        true,
                        true,
                        undefined,
                        false,
                        true
                    );
                    mesh.id = "paper_cone";
                    mesh.id = this.addName(mesh.id);
                    mesh.addBehavior(
                        new BABYLON.PointerDragBehavior({
                            dragPlaneNormal: new BABYLON.Vector3(0, 1, 0)
                        })
                    );  
                    window.clearInterval(timer);
                }
            }, 100);
        },
        addTriFlaskPowderBrown() {
            this.addModel('tri_flask', null, null, null, null, 'powder_brown');
            this.addModel(
                "powder_brown",
                new BABYLON.Vector3(2.5, 2.5, 2.5),
                new BABYLON.Vector3(0, 0.05, 0),
                null,
                null,
                "powder_brown"
            );
            var timer = setInterval(() => {
                if (this.scene.getMeshByID("powder_brown") != undefined && this.scene.getMeshByID("tri_flask")!=undefined){
                    var mesh = BABYLON.Mesh.MergeMeshes(
                        [
                            this.scene.getMeshByID("powder_brown"),
                            this.scene.getMeshByID("tri_flask")
                        ],
                        true,
                        true,
                        undefined,
                        false,
                        true
                    );
                    mesh.id = "tri_flask_powder_brown";
                    mesh.addBehavior(
                        new BABYLON.PointerDragBehavior({
                            dragPlaneNormal: new BABYLON.Vector3(0, 1, 0)
                        })
                    );
                    window.clearInterval(timer);
                }
            }, 100)
        },
        addRoundFlaskCone() {
            this.addModel('round_flask', null, null, null, null, 'round_flask');
            this.addModel(
                "cone",
                new BABYLON.Vector3(0.03, 0.03, 0.03),
                new BABYLON.Vector3(0, 0.08, 0),
                null,
                null,
                'cone'
            );
            var timer = setInterval(() => {
                if (this.scene.getMeshByID("cone") != undefined && this.scene.getMeshByID("round_flask")!=undefined){
                    var mesh = BABYLON.Mesh.MergeMeshes(
                        [
                            this.scene.getMeshByID("cone"),
                            this.scene.getMeshByID("round_flask")
                        ],
                        true,
                        true,
                        undefined,
                        false,
                        true
                    );
                    mesh.id = "round_flask_cone";
                    mesh.id = this.addName(mesh.id);
                    mesh.addBehavior(
                        new BABYLON.PointerDragBehavior({
                            dragPlaneNormal: new BABYLON.Vector3(0, 1, 0)
                        })
                    );
                    window.clearInterval(timer)
                } 
            }, 100);
        },
        addTriFlaskFullFecl3Film() {
            this.addModel('tri_flask_full_fecl3', new BABYLON.Vector3(0.8,0.8,0.8), null, null, null, 'tri_flask_full_fecl3');
            this.addModel('film', null, new BABYLON.Vector3(0, 0.2, 0), null, null, 'film');
            var timer = setInterval(() => {
                if (this.scene.getMeshByID('tri_flask_full_fecl3') != undefined && this.scene.getMeshByID('film')!=undefined){
                    var mesh = BABYLON.Mesh.MergeMeshes(
                        [
                            this.scene.getMeshByID('tri_flask_full_fecl3'),
                            this.scene.getMeshByID('film')
                        ],
                        true,
                        true,
                        undefined,
                        false,
                        true
                    );
                    mesh.addBehavior(
                        new BABYLON.PointerDragBehavior({
                            dragPlaneNormal: new BABYLON.Vector3(0, 1, 0)
                        })
                    );
                    mesh.id = 'tri_flask_full_fecl3.film';
                    mesh.id = this.addName(mesh.id);
                    clearInterval(timer);
                }
            }, 100);
        },
        addNeedleFullCap() {
            this.addModel('needle_full', new BABYLON.Vector3(2,2,2), new BABYLON.Vector3(0, 0 + 0.25, 0), new BABYLON.Vector3(0, 0, Math.PI), null, 'needle_full');
            var mesh1 = this.addCap(0, 0, 0);
            mesh1.removeBehavior(mesh1.behaviors[0]);
            mesh1.id = 'cap'
            var timer = setInterval(() => {
                if (this.scene.getMeshByID('needle_full')!=undefined && this.scene.getMeshByID('cap')!=undefined){
                    var mesh = BABYLON.Mesh.MergeMeshes(
                        [this.scene.getMeshByID('needle_full'), this.scene.getMeshByID('cap')],
                        true,
                        true,
                        undefined,
                        false,
                        true
                    );
                    mesh.id = "needle_full.cap";
                    mesh.id = this.addName(mesh.id)
                    this.needlelist.push(mesh.id);
                    this.needleprops[mesh.id] = [0.43, '']
                    this.activeIndex = mesh.id
                    mesh.addBehavior(
                        new BABYLON.PointerDragBehavior({
                            dragPlaneNormal: new BABYLON.Vector3(0, 1, 0)
                        })
                    );
                    window.clearInterval(timer);
                }
            }, 100);
        },
        addNeedleFull(){
            this.addModel('needle_full', new BABYLON.Vector3(2,2,2), new BABYLON.Vector3(0,0.23, 0), new BABYLON.Vector3(0, 0, Math.PI), ['PointerDragBehavior'], 'needle_full_glue');
            var timer = setInterval(() => {
                if (this.scene.getMeshByID('needle_full_glue')!=undefined){
                    var mesh = this.scene.getMeshByID('needle_full_glue');
                    mesh.id = this.addName(mesh.id);
                    this.needlelist.push(mesh.id)
                    this.needleprops[mesh.id] = [1, ''];
                    this.activeIndex = mesh.id;
                    window.clearInterval(timer);
                }
            }, 100); 
        },
        addPaperPowderBrown() {
            this.addModel('paper', null, new BABYLON.Vector3(0, 0.05, 0), null, null, "paper");
            this.addModel(
                "powder_brown",
                new BABYLON.Vector3(2.5, 2.5, 2.5),
                new BABYLON.Vector3(0, 0.05, 0),
                null,
                null,
                "powder_brown"
            );
            var timer = setInterval(() => {
                if (this.scene.getMeshByID("paper")!=undefined && this.scene.getMeshByID("powder_brown")!=undefined){
                    var mesh = BABYLON.Mesh.MergeMeshes(
                        [this.scene.getMeshByID("paper"), this.scene.getMeshByID("powder_brown")],
                        true,
                        true,
                        undefined,
                        false,
                        true
                    );
                    mesh.id = "paper_powder_brown";
                    mesh.id = this.addName(mesh.id);
                    mesh.addBehavior(
                        new BABYLON.PointerDragBehavior({
                            dragPlaneNormal: new BABYLON.Vector3(0, 1, 0)
                        })
                    );
                    window.clearInterval(timer);
                }
            }, 100);
        },
        addThermometer(){
            this.addModel('thermometer', new BABYLON.Vector3(0.03, 0.03, 0.03), new BABYLON.Vector3(0,0.1,0), null, ['PointerDragBehavior'], null);
        },
        addMagneton(){
            var magneton = BABYLON.MeshBuilder.CreateSphere("mySphere", { diameter: 0.02, diameterX: 0.03 }, this.scene);
            magneton.position = new BABYLON.Vector3(0,0.2,0)
            magneton.id = 'magneton';
            magneton.id = this.addName(magneton.id);
            return magneton.id;
        },
        //添加铁架台 温度计 油浴装置 烧瓶合装置
        addRoundFlaskConePotHeaterStand1(){
            this.activeIndex = 'heater'
            var x = 0.5;
            var z = -0.3;
            this.addModel('heater', null, new BABYLON.Vector3(0+x, 0 , 0+z), new BABYLON.Vector3(0, Math.PI, 0), null, null);
            this.addModel('heater_switch', null, new BABYLON.Vector3(0.08+x, 0.05, -0.25+z), new BABYLON.Vector3(0, Math.PI, 0), null, 'heater_switch1');
            this.addModel('heater_knob', null, new BABYLON.Vector3(0.14+x, 0.05, -0.27+z), null, null, null);
            this.addModel('heater_switch', null, new BABYLON.Vector3(0.197+x, 0.05, -0.25+z), new BABYLON.Vector3(0, Math.PI, 0), null, 'heater_switch2');
            this.addModel('heater_knob', null, new BABYLON.Vector3(0.03+x, 0.05, -0.27+z), null, null, null);
            this.addModel('pot', new BABYLON.Vector3(0.03, 0.03, 0.03), new BABYLON.Vector3(0-x, 0.1, 0 + z), null,null, null);
            this.addModel('round_flask', null, new BABYLON.Vector3(0+x, 0.1, 0+z), null, null, 'round_flaskdel');
            this.addModel("cone",new BABYLON.Vector3(0.03, 0.03, 0.03),new BABYLON.Vector3(0+x, 0.18, 0+z),null,null,'conedel');
            this.addModel('stand1_movable', new BABYLON.Vector3(0.02, 0.02, 0.02), new BABYLON.Vector3(-0.38-x, 0.1, 0 + z), new BABYLON.Vector3(0, Math.PI/2, 0), null, 'stand1_movable');
            this.addModel('stand1_pole', null, new BABYLON.Vector3(0.4+x, 0, 0 + z), new BABYLON.Vector3(0, Math.PI, 0), null, 'stand1_pole');
            var timer = setInterval(() => {
                if (this.scene.getMeshByID('stand1_pole') != undefined && this.scene.getMeshByID('stand1_movable')!= undefined){
                    var mesh = BABYLON.Mesh.MergeMeshes(
                        [this.scene.getMeshByID('stand1_pole'), this.scene.getMeshByID('stand1_movable')],
                        true,
                        true,
                        undefined,
                        false,
                        true
                    );
                    mesh.id = 'stand1';
                    mesh.id = this.addName(mesh.id);
                    window.clearInterval(timer);
                }
            }, 100);
        },
        addTweezer(){
            this.addModel('tweezer', new BABYLON.Vector3(0.03, 0.03, 0.03), new BABYLON.Vector3(0, 0.2, 0), null, ['PointerDragBehavior'], null);
        },
        addScissors(){
            this.addModel('scissors', new BABYLON.Vector3(0.03, 0.03, 0.03),null, new BABYLON.Vector3(0, Math.PI / 2, 0), ['PointerDragBehavior'], null); 
        },
        addNeedleFullTriFlask(){
            this.addModel('needle_full', null, new BABYLON.Vector3(-0.01,0.01,0), new BABYLON.Vector3(0, 0,-Math.PI/6), null, 'needle_full');
            this.addModel('tri_flask', new BABYLON.Vector3(0.8,0.8,0.8), null, null,null, 'tri_flask');
            var timer = setInterval(() => {
                if (this.scene.getMeshByID('needle_full')!=undefined && this.scene.getMeshByID('tri_flask')!=undefined){
                    var mesh = BABYLON.Mesh.MergeMeshes(
                        [this.scene.getMeshByID('needle_full'), this.scene.getMeshByID('tri_flask')],
                        true,
                        true,
                        undefined,
                        false,
                        true
                    );
                    mesh.id = 'needle_full.tri_flask';
                    mesh.id = this.addName(mesh.id);
                    mesh.addBehavior(
                        new BABYLON.PointerDragBehavior({
                            dragPlaneNormal: new BABYLON.Vector3(0, 1, 0)
                        })
                    );
                    window.clearInterval(timer);
                }
            }, 100);
        },
        addYellowCylinder(){
            this.addModel('yellow_cylinder', new BABYLON.Vector3(0.08, 0.08, 0.08), null, new BABYLON.Vector3(0, Math.PI / 2, 0), ['PointerDragBehavior'], null);
        },
        addGlassPad(){
            this.addModel('glass_pad', new BABYLON.Vector3(0.01, 0.01, 0.01), null, null, ['PointerDragBehavior'], null);
        },
        addBrokenFilm(){
            this.addModel('broken_film', new BABYLON.Vector3(4, 4, 4), new BABYLON.Vector3(0.8, 0, 0), null, null, 'broken_film');
        },
        addGreenYellowCylinder(){
            this.addModel('green_yellow_cylinder', new BABYLON.Vector3(5, 5, 10), new BABYLON.Vector3(0.8, 0, 0), new BABYLON.Vector3(0, Math.PI / 2, 0), null, 'green_yellow_cylinder');
        },
        addGlassPaneBlock(){
            this.addModel('sticked_glass', new BABYLON.Vector3(20, 20, 10), new BABYLON.Vector3(0.03, 0.28, -0.2), null, null, 'sticked_glass');
            this.addModel('weight_block', new BABYLON.Vector3(4, 4, 4), new BABYLON.Vector3(0, 0.08, -0.2), null, null, 'weight_block');
            var timer = setInterval(() => {
                if (this.scene.getMeshByID('sticked_glass') != undefined && this.scene.getMeshByID('weight_block')!= undefined){
                    var mesh = BABYLON.Mesh.MergeMeshes(
                        [this.scene.getMeshByID('sticked_glass'), this.scene.getMeshByID('weight_block')],
                        true,
                        true,
                        undefined,
                        false,
                        true
                    );
                    mesh.id = 'glass_pane_block';
                    window.clearInterval(timer);
                }
            }, 100);
        },
        addClock(){
            if(!this.hasClock){
                this.hasClock = true;
                this.activeIndex = 'clock'
                this.addModel('clock', new BABYLON.Vector3(3, 3, 3), null, new BABYLON.Vector3(0, Math.PI, 0), ['PointerDragBehavior'],null);
            }
        },
        //以下加上更加有趣
        addBunny(){
            this.addModel('others/Bunny',new BABYLON.Vector3(3, 3, 3), new BABYLON.Vector3(-100, 38, 120), new BABYLON.Vector3(0, Math.PI*5/6, 0),null, 'bunny');
        },
        addChihuahua(){
            this.addModel('others/Chihuahua',new BABYLON.Vector3(3, 3, 3), new BABYLON.Vector3(-100, 38, 120), new BABYLON.Vector3(0, Math.PI*5/6, 0),null, 'Chihuahua');
        },
        addDachshund(){
            this.addModel('others/Dachshund',new BABYLON.Vector3(10, 10, 10), new BABYLON.Vector3(-100, 40, 120), new BABYLON.Vector3(0, Math.PI*7/6, 0),null, 'Dachshund');
        },
        addGermanShephard(){
            this.addModel('others/GermanShephard',new BABYLON.Vector3(2, 2, 2), new BABYLON.Vector3(-100, 40, 120), new BABYLON.Vector3(0, Math.PI, 0),null, 'GermanShephard');
        },
        addKitten(){
            this.addModel('others/Kitten',new BABYLON.Vector3(3, 3, 3), new BABYLON.Vector3(-100, 40, 120), new BABYLON.Vector3(0, Math.PI*7/8, 0),null, 'Kitten');
        },
        addMaineCoonCat(){
            this.addModel('others/MaineCoonCat',new BABYLON.Vector3(13, 13, 13), new BABYLON.Vector3(-100, 40, 120), new BABYLON.Vector3(0, Math.PI*7/8, 0),null, 'MaineCoonCat');
        },
        addSchnauzer(){
            this.addModel('others/Schnauzer',new BABYLON.Vector3(5, 5, 5), new BABYLON.Vector3(-100, 40, 120), new BABYLON.Vector3(0, Math.PI*7/8, 0),null, 'Schnauzer');
        },
    }
}
export default addModels