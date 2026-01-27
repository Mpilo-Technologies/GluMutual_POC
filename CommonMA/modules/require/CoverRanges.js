define(function () {
    
    var _sliderConfig = function() {
        
        const sliderConfig = [
            {
                id: "30100",
                product: "Life Cover",
                minValue: 100000,
                maxValue: 25000000,
                currentValue: 0,
                step: 50000
            },
            {     
                id: "20200",
                product: "Disability Cover",
                minValue: 100000,
                maxValue: 20000000,
                currentValue: 0,
                step: 50000
            },
            { 
                id: "30103", 
                product: "Critical Illness Cover",
                minValue: 100000,
                maxValue: 6000000,
                currentValue: 0,
                step: 10000
             },
             {
                id: "30300",
                product: "Income Protection",
                minValue: 2000,
                maxValue: 150000,
                currentValue: 0,
                step: 500
            }
            ];
            return sliderConfig;
        };

    var covers = function () {
      var covers = [
        {
          id: "30100",
          title: "Life Cover",
          image: "lifecover.png",
          description: "Lump-sum payout to your beneficiaries.",
        },
        {
          id: "20200",
          title: "Disability Cover",
          image: "disabilitycover.png",
          description: "Income replacement if you become disabled.",
        },
        {
          id: "30103",
          title: "Critical Illness Cover",
          image: "criticalillness.png",
          description: "Lump-sum payout for critical illnesses.",
        },
        {
          id: "30300",
          title: "Income Protection",
          image: "incomeprotection.png",
          description: "Monthly income replacement when unable to work.",
        },
      ];
      return covers;
    };
  
  
  	var _occupations = function() {
      var occupations = [
        {
          "occupation_code": "1",
          "occ_name": "Acoustician"
        },
        {
          "occupation_code": "2",
          "occ_name": "Acupuncturist"
        },
        {
          "occupation_code": "3",
          "occ_name": "Agent Stock and Station"
        },
        {
          "occupation_code": "4",
          "occ_name": "Air Conditioning Installation Technician"
        },
        {
          "occupation_code": "5",
          "occ_name": "Air Conditioning Technician"
        },
        {
          "occupation_code": "6",
          "occ_name": "Alternative Health Practitioner"
        },
        {
          "occupation_code": "7",
          "occ_name": "Animal Breeder Domestic Animals"
        },
        {
          "occupation_code": "8",
          "occ_name": "Animal Breeder Farm Animals"
        },
        {
          "occupation_code": "9",
          "occ_name": "Animal Breeder Horses"
        },
        {
          "occupation_code": "10",
          "occ_name": "Announcer"
        },
        {
          "occupation_code": "11",
          "occ_name": "Appliance Repair Technician"
        },
        {
          "occupation_code": "12",
          "occ_name": "Arboriculturist"
        },
        {
          "occupation_code": "13",
          "occ_name": "Arborist"
        },
        {
          "occupation_code": "14",
          "occ_name": "Artist Stained Glass"
        },
        {
          "occupation_code": "15",
          "occ_name": "Assembler Plastics"
        },
        {
          "occupation_code": "16",
          "occ_name": "Assistant Metal Trades"
        },
        {
          "occupation_code": "17",
          "occ_name": "Assistant Teaching"
        },
        {
          "occupation_code": "18",
          "occ_name": "Author"
        },
        {
          "occupation_code": "19",
          "occ_name": "Auto Body Mechanic"
        },
        {
          "occupation_code": "20",
          "occ_name": "Backhoe Operator"
        },
        {
          "occupation_code": "21",
          "occ_name": "Baker"
        },
        {
          "occupation_code": "22",
          "occ_name": "Ballast Control Operator Oil Rig"
        },
        {
          "occupation_code": "23",
          "occ_name": "Bar Manager"
        },
        {
          "occupation_code": "24",
          "occ_name": "Bar Owner"
        },
        {
          "occupation_code": "25",
          "occ_name": "Bartender"
        },
        {
          "occupation_code": "26",
          "occ_name": "Bibliographer"
        },
        {
          "occupation_code": "27",
          "occ_name": "Bloodstock Agent"
        },
        {
          "occupation_code": "28",
          "occ_name": "Body Piercer"
        },
        {
          "occupation_code": "29",
          "occ_name": "Borehole Operator"
        },
        {
          "occupation_code": "30",
          "occ_name": "Brick Maker"
        },
        {
          "occupation_code": "31",
          "occ_name": "Broadcaster"
        },
        {
          "occupation_code": "32",
          "occ_name": "Broker Livestock"
        },
        {
          "occupation_code": "33",
          "occ_name": "Broker Stock and Station"
        },
        {
          "occupation_code": "34",
          "occ_name": "Builder of Electrical Appliances"
        },
        {
          "occupation_code": "35",
          "occ_name": "Builder of Electrical Machines"
        },
        {
          "occupation_code": "36",
          "occ_name": "Builder Other"
        },
        {
          "occupation_code": "37",
          "occ_name": "Builder Skilled"
        },
        {
          "occupation_code": "38",
          "occ_name": "Building Blacksmith"
        },
        {
          "occupation_code": "39",
          "occ_name": "Bulldozer Driver"
        },
        {
          "occupation_code": "40",
          "occ_name": "Bulldozer Operator"
        },
        {
          "occupation_code": "41",
          "occ_name": "Cabinetmaker"
        },
        {
          "occupation_code": "42",
          "occ_name": "Cable Installer"
        },
        {
          "occupation_code": "43",
          "occ_name": "Cable Jointer"
        },
        {
          "occupation_code": "44",
          "occ_name": "Cable Maker"
        },
        {
          "occupation_code": "45",
          "occ_name": "Cabler"
        },
        {
          "occupation_code": "46",
          "occ_name": "Cakes Decorator"
        },
        {
          "occupation_code": "47",
          "occ_name": "Calibration Specialist"
        },
        {
          "occupation_code": "48",
          "occ_name": "Car Van Courier"
        },
        {
          "occupation_code": "49",
          "occ_name": "Carver Wood"
        },
        {
          "occupation_code": "50",
          "occ_name": "Caseworker"
        },
        {
          "occupation_code": "51",
          "occ_name": "Casing Crew Member"
        },
        {
          "occupation_code": "52",
          "occ_name": "Charcuterie Maker"
        },
        {
          "occupation_code": "53",
          "occ_name": "Commentator"
        },
        {
          "occupation_code": "54",
          "occ_name": "Coroner"
        },
        {
          "occupation_code": "55",
          "occ_name": "Correctional Officer"
        },
        {
          "occupation_code": "56",
          "occ_name": "Costume Person"
        },
        {
          "occupation_code": "57",
          "occ_name": "Counsellor"
        },
        {
          "occupation_code": "58",
          "occ_name": "Courier Car Van"
        },
        {
          "occupation_code": "59",
          "occ_name": "Courier Motorcycle"
        },
        {
          "occupation_code": "60",
          "occ_name": "Court Messenger"
        },
        {
          "occupation_code": "61",
          "occ_name": "Crematorium Worker"
        },
        {
          "occupation_code": "62",
          "occ_name": "Curer Meat"
        },
        {
          "occupation_code": "63",
          "occ_name": "Curtain Maker"
        },
        {
          "occupation_code": "64",
          "occ_name": "Cutter Stencil"
        },
        {
          "occupation_code": "65",
          "occ_name": "Cutter Wood"
        },
        {
          "occupation_code": "66",
          "occ_name": "Deputy Principal"
        },
        {
          "occupation_code": "67",
          "occ_name": "Dog Breeder"
        },
        {
          "occupation_code": "68",
          "occ_name": "Driller Well"
        },
        {
          "occupation_code": "69",
          "occ_name": "Drilling Technician"
        },
        {
          "occupation_code": "70",
          "occ_name": "Electrical Contractor"
        },
        {
          "occupation_code": "71",
          "occ_name": "Electrical Installer"
        },
        {
          "occupation_code": "72",
          "occ_name": "Electrical Technician"
        },
        {
          "occupation_code": "73",
          "occ_name": "Electrician"
        },
        {
          "occupation_code": "74",
          "occ_name": "Engineer Ship"
        },
        {
          "occupation_code": "75",
          "occ_name": "Equine Breeder"
        },
        {
          "occupation_code": "76",
          "occ_name": "Event Attendant"
        },
        {
          "occupation_code": "77",
          "occ_name": "Fabricator Metal"
        },
        {
          "occupation_code": "78",
          "occ_name": "Fabricator Thermoplastic"
        },
        {
          "occupation_code": "79",
          "occ_name": "Factory Worker Wood and Wood Products"
        },
        {
          "occupation_code": "80",
          "occ_name": "Field Guide"
        },
        {
          "occupation_code": "81",
          "occ_name": "Finisher Motor Vehicle"
        },
        {
          "occupation_code": "82",
          "occ_name": "Fitness Motivator"
        },
        {
          "occupation_code": "83",
          "occ_name": "Food Server"
        },
        {
          "occupation_code": "84",
          "occ_name": "Forensic Medical Examiner"
        },
        {
          "occupation_code": "85",
          "occ_name": "Forestry Worker"
        },
        {
          "occupation_code": "86",
          "occ_name": "Freelance Author"
        },
        {
          "occupation_code": "87",
          "occ_name": "Freelance Writer"
        },
        {
          "occupation_code": "88",
          "occ_name": "Fumigator"
        },
        {
          "occupation_code": "89",
          "occ_name": "Gardener Landscape Manual Work"
        },
        {
          "occupation_code": "90",
          "occ_name": "Glass Painter"
        },
        {
          "occupation_code": "91",
          "occ_name": "Gold Refiner"
        },
        {
          "occupation_code": "92",
          "occ_name": "Grape Consultant"
        },
        {
          "occupation_code": "93",
          "occ_name": "Grape Farmer"
        },
        {
          "occupation_code": "94",
          "occ_name": "Grape Grower"
        },
        {
          "occupation_code": "95",
          "occ_name": "Guide Outdoor"
        },
        {
          "occupation_code": "96",
          "occ_name": "Guide Outdoor Adventure"
        },
        {
          "occupation_code": "97",
          "occ_name": "Guide Tour"
        },
        {
          "occupation_code": "98",
          "occ_name": "Guide Trekking"
        },
        {
          "occupation_code": "99",
          "occ_name": "Hauler Road"
        },
        {
          "occupation_code": "100",
          "occ_name": "Highway Maintenance"
        },
        {
          "occupation_code": "101",
          "occ_name": "Independent Writer"
        },
        {
          "occupation_code": "102",
          "occ_name": "Inspector Pest"
        },
        {
          "occupation_code": "103",
          "occ_name": "Inspector Quarantine"
        },
        {
          "occupation_code": "104",
          "occ_name": "Installer Irrigation"
        },
        {
          "occupation_code": "105",
          "occ_name": "Installer Satellite Dish"
        },
        {
          "occupation_code": "106",
          "occ_name": "Installer Skylight"
        },
        {
          "occupation_code": "107",
          "occ_name": "Instructor Outdoor adventure"
        },
        {
          "occupation_code": "108",
          "occ_name": "Judge Goal"
        },
        {
          "occupation_code": "109",
          "occ_name": "Judge Sporting"
        },
        {
          "occupation_code": "110",
          "occ_name": "Kennel Owner"
        },
        {
          "occupation_code": "111",
          "occ_name": "Kennel Worker"
        },
        {
          "occupation_code": "112",
          "occ_name": "Kiln Operator"
        },
        {
          "occupation_code": "113",
          "occ_name": "Kitchen Fitter"
        },
        {
          "occupation_code": "114",
          "occ_name": "Kitchenhand"
        },
        {
          "occupation_code": "115",
          "occ_name": "Labour Union Representative"
        },
        {
          "occupation_code": "116",
          "occ_name": "Language Teacher"
        },
        {
          "occupation_code": "117",
          "occ_name": "Leader Tour"
        },
        {
          "occupation_code": "118",
          "occ_name": "Learner Support Counsellor"
        },
        {
          "occupation_code": "119",
          "occ_name": "Lexicographer"
        },
        {
          "occupation_code": "120",
          "occ_name": "Livestock Agent"
        },
        {
          "occupation_code": "121",
          "occ_name": "Livestock Breeder"
        },
        {
          "occupation_code": "122",
          "occ_name": "Livestock Broker"
        },
        {
          "occupation_code": "123",
          "occ_name": "Livestock Buyer"
        },
        {
          "occupation_code": "124",
          "occ_name": "Livestock Speculator"
        },
        {
          "occupation_code": "125",
          "occ_name": "Lorry Driver"
        },
        {
          "occupation_code": "126",
          "occ_name": "Lumber Mill Worker"
        },
        {
          "occupation_code": "127",
          "occ_name": "Machine Operator Paper Products"
        },
        {
          "occupation_code": "128",
          "occ_name": "Machine Operator Pulp Making"
        },
        {
          "occupation_code": "129",
          "occ_name": "Machine Operator Tyre Production"
        },
        {
          "occupation_code": "130",
          "occ_name": "Machinery operator Mining"
        },
        {
          "occupation_code": "131",
          "occ_name": "Machinist Metal"
        },
        {
          "occupation_code": "132",
          "occ_name": "Machinist Printing"
        },
        {
          "occupation_code": "133",
          "occ_name": "Machinist Wood"
        },
        {
          "occupation_code": "134",
          "occ_name": "Manager Nightclub"
        },
        {
          "occupation_code": "135",
          "occ_name": "Manager Pit"
        },
        {
          "occupation_code": "136",
          "occ_name": "Manager Water Works Sedentary Duties"
        },
        {
          "occupation_code": "137",
          "occ_name": "Manufacturing Execution Systems Validation Lead"
        },
        {
          "occupation_code": "138",
          "occ_name": "Marker Road"
        },
        {
          "occupation_code": "139",
          "occ_name": "Mason Stone"
        },
        {
          "occupation_code": "140",
          "occ_name": "Mason Stuco"
        },
        {
          "occupation_code": "141",
          "occ_name": "Mason Underground"
        },
        {
          "occupation_code": "142",
          "occ_name": "Massage Therapy Instructor"
        },
        {
          "occupation_code": "143",
          "occ_name": "Mechanic Washing Machine"
        },
        {
          "occupation_code": "144",
          "occ_name": "Mechanical Shovel Operator"
        },
        {
          "occupation_code": "145",
          "occ_name": "Metal Fabricator"
        },
        {
          "occupation_code": "146",
          "occ_name": "Metal Fitter"
        },
        {
          "occupation_code": "147",
          "occ_name": "Metal Grinder"
        },
        {
          "occupation_code": "148",
          "occ_name": "Metal Refiner"
        },
        {
          "occupation_code": "149",
          "occ_name": "Metal Roof Installer"
        },
        {
          "occupation_code": "150",
          "occ_name": "Metal Tester"
        },
        {
          "occupation_code": "151",
          "occ_name": "Metal Worker"
        },
        {
          "occupation_code": "152",
          "occ_name": "Mill Operator Pulp"
        },
        {
          "occupation_code": "153",
          "occ_name": "Mine Operator"
        },
        {
          "occupation_code": "154",
          "occ_name": "Mining Equipment Operator Quarry Equipment Operator"
        },
        {
          "occupation_code": "155",
          "occ_name": "Mining Manager Quarry Supervisor"
        },
        {
          "occupation_code": "156",
          "occ_name": "Moldmaker"
        },
        {
          "occupation_code": "157",
          "occ_name": "Motivator Sports"
        },
        {
          "occupation_code": "158",
          "occ_name": "Motorcycle Courier"
        },
        {
          "occupation_code": "159",
          "occ_name": "Moulder"
        },
        {
          "occupation_code": "160",
          "occ_name": "Mouldmaker"
        },
        {
          "occupation_code": "161",
          "occ_name": "Natural Healer"
        },
        {
          "occupation_code": "162",
          "occ_name": "Nuclear Plant Operator"
        },
        {
          "occupation_code": "163",
          "occ_name": "Nuclear Plant Operator Reactor Operator"
        },
        {
          "occupation_code": "164",
          "occ_name": "Nursery Gardener"
        },
        {
          "occupation_code": "165",
          "occ_name": "Nursery Worker Plant Nursery Specialist"
        },
        {
          "occupation_code": "166",
          "occ_name": "Officer Quality Control"
        },
        {
          "occupation_code": "167",
          "occ_name": "Officer Safety"
        },
        {
          "occupation_code": "168",
          "occ_name": "Operating Room Nurse"
        },
        {
          "occupation_code": "169",
          "occ_name": "Operator Metal press"
        },
        {
          "occupation_code": "170",
          "occ_name": "Operator Plastic Processing Machine"
        },
        {
          "occupation_code": "171",
          "occ_name": "Operator Pulp Refiner"
        },
        {
          "occupation_code": "172",
          "occ_name": "Operator Tug"
        },
        {
          "occupation_code": "173",
          "occ_name": "Operator Turbine"
        },
        {
          "occupation_code": "174",
          "occ_name": "Operator Wood Processing Machine"
        },
        {
          "occupation_code": "175",
          "occ_name": "Orthoptist"
        },
        {
          "occupation_code": "176",
          "occ_name": "Painter General Manufacturing"
        },
        {
          "occupation_code": "177",
          "occ_name": "Painter Spray"
        },
        {
          "occupation_code": "178",
          "occ_name": "Paleontologist With Field Work"
        },
        {
          "occupation_code": "179",
          "occ_name": "Panel Beater"
        },
        {
          "occupation_code": "180",
          "occ_name": "Patrolman Breakdown Recovery"
        },
        {
          "occupation_code": "181",
          "occ_name": "Pawnbroker"
        },
        {
          "occupation_code": "182",
          "occ_name": "Pest Control Specialist"
        },
        {
          "occupation_code": "183",
          "occ_name": "Pest Exterminator"
        },
        {
          "occupation_code": "184",
          "occ_name": "Pesticide Sprayer"
        },
        {
          "occupation_code": "185",
          "occ_name": "Physiotherapist Small Animals"
        },
        {
          "occupation_code": "186",
          "occ_name": "Picker Packer"
        },
        {
          "occupation_code": "187",
          "occ_name": "Piercer"
        },
        {
          "occupation_code": "188",
          "occ_name": "Pipe Fitter"
        },
        {
          "occupation_code": "189",
          "occ_name": "Pit Boss"
        },
        {
          "occupation_code": "190",
          "occ_name": "Plant Breeder"
        },
        {
          "occupation_code": "191",
          "occ_name": "Plant Health inspector"
        },
        {
          "occupation_code": "192",
          "occ_name": "Plant nutrition advisor"
        },
        {
          "occupation_code": "193",
          "occ_name": "Plant Operator Waste Water"
        },
        {
          "occupation_code": "194",
          "occ_name": "Plasterer"
        },
        {
          "occupation_code": "195",
          "occ_name": "Plastering Contractor"
        },
        {
          "occupation_code": "196",
          "occ_name": "Plastics Fabricator"
        },
        {
          "occupation_code": "197",
          "occ_name": "Plastics Welder"
        },
        {
          "occupation_code": "198",
          "occ_name": "Plate Cutter"
        },
        {
          "occupation_code": "199",
          "occ_name": "Plater"
        },
        {
          "occupation_code": "200",
          "occ_name": "Plumber Roof"
        },
        {
          "occupation_code": "201",
          "occ_name": "Plumbing Technician Pipe Installer"
        },
        {
          "occupation_code": "202",
          "occ_name": "Post Mortem Attendant"
        },
        {
          "occupation_code": "203",
          "occ_name": "Post Mortem Technician"
        },
        {
          "occupation_code": "204",
          "occ_name": "Potter Not From Home"
        },
        {
          "occupation_code": "205",
          "occ_name": "Preparer Stencil"
        },
        {
          "occupation_code": "206",
          "occ_name": "Prison Investigator"
        },
        {
          "occupation_code": "207",
          "occ_name": "Prison Services"
        },
        {
          "occupation_code": "208",
          "occ_name": "Prison Warden"
        },
        {
          "occupation_code": "209",
          "occ_name": "Probation Officer"
        },
        {
          "occupation_code": "210",
          "occ_name": "Process Worker"
        },
        {
          "occupation_code": "211",
          "occ_name": "Processor Plastics and Composites"
        },
        {
          "occupation_code": "212",
          "occ_name": "Program Presenter"
        },
        {
          "occupation_code": "213",
          "occ_name": "Propagator Plant"
        },
        {
          "occupation_code": "214",
          "occ_name": "Prosthesis Maker"
        },
        {
          "occupation_code": "215",
          "occ_name": "Psychiatric Nurse"
        },
        {
          "occupation_code": "216",
          "occ_name": "Pulper"
        },
        {
          "occupation_code": "217",
          "occ_name": "Quality Assurance Manager"
        },
        {
          "occupation_code": "218",
          "occ_name": "Quality Control Inspector"
        },
        {
          "occupation_code": "219",
          "occ_name": "Quality Control Manager"
        },
        {
          "occupation_code": "220",
          "occ_name": "Quality Manager"
        },
        {
          "occupation_code": "221",
          "occ_name": "Quality Supervisor"
        },
        {
          "occupation_code": "222",
          "occ_name": "Radio Technologist"
        },
        {
          "occupation_code": "223",
          "occ_name": "Recording Technician"
        },
        {
          "occupation_code": "224",
          "occ_name": "Reeler Paper"
        },
        {
          "occupation_code": "225",
          "occ_name": "Retail Security Guard"
        },
        {
          "occupation_code": "226",
          "occ_name": "Road Construction Worker"
        },
        {
          "occupation_code": "227",
          "occ_name": "Road Layer"
        },
        {
          "occupation_code": "228",
          "occ_name": "Road Roller Operator"
        },
        {
          "occupation_code": "229",
          "occ_name": "Roadside Assistance Driver"
        },
        {
          "occupation_code": "230",
          "occ_name": "Roof Window Installer"
        },
        {
          "occupation_code": "231",
          "occ_name": "Safari Tour Bus Operator"
        },
        {
          "occupation_code": "232",
          "occ_name": "Salesperson Department Store"
        },
        {
          "occupation_code": "233",
          "occ_name": "Sawmill Operator"
        },
        {
          "occupation_code": "234",
          "occ_name": "Scale Technician"
        },
        {
          "occupation_code": "235",
          "occ_name": "Scout Sports"
        },
        {
          "occupation_code": "236",
          "occ_name": "Scraper Operator"
        },
        {
          "occupation_code": "237",
          "occ_name": "Screen Printer"
        },
        {
          "occupation_code": "238",
          "occ_name": "Script Writer"
        },
        {
          "occupation_code": "239",
          "occ_name": "Sculptor"
        },
        {
          "occupation_code": "240",
          "occ_name": "Security officer Store"
        },
        {
          "occupation_code": "241",
          "occ_name": "Self Employed Writer"
        },
        {
          "occupation_code": "242",
          "occ_name": "Server"
        },
        {
          "occupation_code": "243",
          "occ_name": "Set Builder"
        },
        {
          "occupation_code": "244",
          "occ_name": "Set Building Contractor"
        },
        {
          "occupation_code": "245",
          "occ_name": "Sewage System Worker"
        },
        {
          "occupation_code": "246",
          "occ_name": "Sewage Treatment Plant Operator"
        },
        {
          "occupation_code": "247",
          "occ_name": "Sewage Works Attendant"
        },
        {
          "occupation_code": "248",
          "occ_name": "Sewerage Treatment Plant Operator"
        },
        {
          "occupation_code": "249",
          "occ_name": "Sewerman"
        },
        {
          "occupation_code": "250",
          "occ_name": "Shearer Sheep"
        },
        {
          "occupation_code": "251",
          "occ_name": "Shepherd"
        },
        {
          "occupation_code": "252",
          "occ_name": "Ship Chandler"
        },
        {
          "occupation_code": "253",
          "occ_name": "Ship Engineer"
        },
        {
          "occupation_code": "254",
          "occ_name": "Silkscreen Artist"
        },
        {
          "occupation_code": "255",
          "occ_name": "Sinker Well"
        },
        {
          "occupation_code": "256",
          "occ_name": "Site Supervisor"
        },
        {
          "occupation_code": "257",
          "occ_name": "Smallgoods Maker"
        },
        {
          "occupation_code": "258",
          "occ_name": "Social and Professional Counselor"
        },
        {
          "occupation_code": "259",
          "occ_name": "Social Worker"
        },
        {
          "occupation_code": "260",
          "occ_name": "Soft Furnishing Maker"
        },
        {
          "occupation_code": "261",
          "occ_name": "Sound Editor"
        },
        {
          "occupation_code": "262",
          "occ_name": "Sound Manager"
        },
        {
          "occupation_code": "263",
          "occ_name": "Sound Technician"
        },
        {
          "occupation_code": "264",
          "occ_name": "Special Education Teacher"
        },
        {
          "occupation_code": "265",
          "occ_name": "Sports Official"
        },
        {
          "occupation_code": "266",
          "occ_name": "Sports Referee"
        },
        {
          "occupation_code": "267",
          "occ_name": "Sports scout"
        },
        {
          "occupation_code": "268",
          "occ_name": "Spray Painter"
        },
        {
          "occupation_code": "269",
          "occ_name": "Stainer"
        },
        {
          "occupation_code": "270",
          "occ_name": "Stencil Artist"
        },
        {
          "occupation_code": "271",
          "occ_name": "Stencil Maker"
        },
        {
          "occupation_code": "272",
          "occ_name": "Stencil Technician"
        },
        {
          "occupation_code": "273",
          "occ_name": "Stenciller"
        },
        {
          "occupation_code": "274",
          "occ_name": "Stock and Station Agent"
        },
        {
          "occupation_code": "275",
          "occ_name": "Stock and Station Broker"
        },
        {
          "occupation_code": "276",
          "occ_name": "Stone Artisan"
        },
        {
          "occupation_code": "277",
          "occ_name": "Stud Farm Breeder"
        },
        {
          "occupation_code": "278",
          "occ_name": "Surgeon Tree"
        },
        {
          "occupation_code": "279",
          "occ_name": "Talent Scout"
        },
        {
          "occupation_code": "280",
          "occ_name": "Tattoo Artist"
        },
        {
          "occupation_code": "281",
          "occ_name": "Tea Lady"
        },
        {
          "occupation_code": "282",
          "occ_name": "Teacher Aide"
        },
        {
          "occupation_code": "283",
          "occ_name": "Technician Metallurgist"
        },
        {
          "occupation_code": "284",
          "occ_name": "Technician Operating Theatre"
        },
        {
          "occupation_code": "285",
          "occ_name": "Technician Ophthalmic"
        },
        {
          "occupation_code": "286",
          "occ_name": "Technician Sound"
        },
        {
          "occupation_code": "287",
          "occ_name": "Tester Road"
        },
        {
          "occupation_code": "288",
          "occ_name": "Theater Painter"
        },
        {
          "occupation_code": "289",
          "occ_name": "Theater Usher"
        },
        {
          "occupation_code": "290",
          "occ_name": "Therapist Orthodontic"
        },
        {
          "occupation_code": "291",
          "occ_name": "Tiler Roof"
        },
        {
          "occupation_code": "292",
          "occ_name": "Timber Cutter"
        },
        {
          "occupation_code": "293",
          "occ_name": "Timber Worker"
        },
        {
          "occupation_code": "294",
          "occ_name": "Timepiece Merchant"
        },
        {
          "occupation_code": "295",
          "occ_name": "Tour Leader"
        },
        {
          "occupation_code": "296",
          "occ_name": "Trade Union Leader"
        },
        {
          "occupation_code": "297",
          "occ_name": "Tree Planter"
        },
        {
          "occupation_code": "298",
          "occ_name": "Truck Driver"
        },
        {
          "occupation_code": "299",
          "occ_name": "Truck Fitter"
        },
        {
          "occupation_code": "300",
          "occ_name": "Tug Boat Master"
        },
        {
          "occupation_code": "301",
          "occ_name": "Tugman"
        },
        {
          "occupation_code": "302",
          "occ_name": "Turbine Worker"
        },
        {
          "occupation_code": "303",
          "occ_name": "Turner Wood"
        },
        {
          "occupation_code": "304",
          "occ_name": "Tyre Production Machine Operator"
        },
        {
          "occupation_code": "305",
          "occ_name": "Ultrasound Technician"
        },
        {
          "occupation_code": "306",
          "occ_name": "Umpire"
        },
        {
          "occupation_code": "307",
          "occ_name": "Underground Mason"
        },
        {
          "occupation_code": "308",
          "occ_name": "Union Official"
        },
        {
          "occupation_code": "309",
          "occ_name": "Usher"
        },
        {
          "occupation_code": "310",
          "occ_name": "Vigneron"
        },
        {
          "occupation_code": "311",
          "occ_name": "Vineyard Manager"
        },
        {
          "occupation_code": "312",
          "occ_name": "Vineyard Owner"
        },
        {
          "occupation_code": "313",
          "occ_name": "Viticulturist"
        },
        {
          "occupation_code": "314",
          "occ_name": "Wait Person"
        },
        {
          "occupation_code": "315",
          "occ_name": "Waiter"
        },
        {
          "occupation_code": "316",
          "occ_name": "Waitress"
        },
        {
          "occupation_code": "317",
          "occ_name": "Warden Prison"
        },
        {
          "occupation_code": "318",
          "occ_name": "Warden Site"
        },
        {
          "occupation_code": "319",
          "occ_name": "Warehouse Operative"
        },
        {
          "occupation_code": "320",
          "occ_name": "Warehouse Supervisor"
        },
        {
          "occupation_code": "321",
          "occ_name": "Warehouse Worker"
        },
        {
          "occupation_code": "322",
          "occ_name": "Warehousekeeper"
        },
        {
          "occupation_code": "323",
          "occ_name": "Washer Repair Specialist"
        },
        {
          "occupation_code": "324",
          "occ_name": "Wastewater Treatment Operator"
        },
        {
          "occupation_code": "325",
          "occ_name": "Watch Dealer"
        },
        {
          "occupation_code": "326",
          "occ_name": "Watch Retailer"
        },
        {
          "occupation_code": "327",
          "occ_name": "Water Care Specialist"
        },
        {
          "occupation_code": "328",
          "occ_name": "Water Treatment Plant Manager"
        },
        {
          "occupation_code": "329",
          "occ_name": "Watershed Manager"
        },
        {
          "occupation_code": "330",
          "occ_name": "Weighing Instrument Fitter"
        },
        {
          "occupation_code": "331",
          "occ_name": "Welder"
        },
        {
          "occupation_code": "332",
          "occ_name": "Welding Technician"
        },
        {
          "occupation_code": "333",
          "occ_name": "Welfare Worker"
        },
        {
          "occupation_code": "334",
          "occ_name": "Winery Worker"
        },
        {
          "occupation_code": "335",
          "occ_name": "Wood Artisan"
        },
        {
          "occupation_code": "336",
          "occ_name": "Wood carver"
        },
        {
          "occupation_code": "337",
          "occ_name": "Wood Lathe Specialist"
        },
        {
          "occupation_code": "338",
          "occ_name": "Wood Mill Operator"
        },
        {
          "occupation_code": "339",
          "occ_name": "Wood Sculptor"
        },
        {
          "occupation_code": "340",
          "occ_name": "Woodcutter"
        },
        {
          "occupation_code": "341",
          "occ_name": "Woods Boss"
        },
        {
          "occupation_code": "342",
          "occ_name": "Woodsman"
        },
        {
          "occupation_code": "343",
          "occ_name": "Woodworker"
        },
        {
          "occupation_code": "344",
          "occ_name": "Woodworking Machine Operator"
        },
        {
          "occupation_code": "345",
          "occ_name": "Wool Shearer"
        },
        {
          "occupation_code": "346",
          "occ_name": "Worker Hatchery"
        },
        {
          "occupation_code": "347",
          "occ_name": "Writer Film Theatre Television Radio"
        },
        {
          "occupation_code": "348",
          "occ_name": "Writer Freelance"
        },
        {
          "occupation_code": "349",
          "occ_name": "Abalone Harvester"
        },
        {
          "occupation_code": "350",
          "occ_name": "Abattoir Inspector"
        },
        {
          "occupation_code": "351",
          "occ_name": "Abattoir Manager"
        },
        {
          "occupation_code": "352",
          "occ_name": "Abattoir Worker"
        },
        {
          "occupation_code": "353",
          "occ_name": "Abstractor Title"
        },
        {
          "occupation_code": "354",
          "occ_name": "Academic Development Coordinator"
        },
        {
          "occupation_code": "355",
          "occ_name": "Academic Lecturer"
        },
        {
          "occupation_code": "356",
          "occ_name": "Academic Registrar"
        },
        {
          "occupation_code": "357",
          "occ_name": "Account Executive No Travelling"
        },
        {
          "occupation_code": "358",
          "occ_name": "Account Executive Travelling"
        },
        {
          "occupation_code": "359",
          "occ_name": "Account Manager No Travelling"
        },
        {
          "occupation_code": "360",
          "occ_name": "Account Manager Travelling"
        },
        {
          "occupation_code": "361",
          "occ_name": "Account Representative No Travelling"
        },
        {
          "occupation_code": "362",
          "occ_name": "Account Representative Travelling"
        },
        {
          "occupation_code": "363",
          "occ_name": "Account Supervisor No Travelling"
        },
        {
          "occupation_code": "364",
          "occ_name": "Account Supervisor Travelling"
        },
        {
          "occupation_code": "365",
          "occ_name": "Accountant"
        },
        {
          "occupation_code": "366",
          "occ_name": "Accountant Taxation"
        },
        {
          "occupation_code": "367",
          "occ_name": "Accountant Turf"
        },
        {
          "occupation_code": "368",
          "occ_name": "Accounting Clerk"
        },
        {
          "occupation_code": "369",
          "occ_name": "Accounting Manager"
        },
        {
          "occupation_code": "370",
          "occ_name": "Accounting Practitioner"
        },
        {
          "occupation_code": "371",
          "occ_name": "Accounts Adminstrator No Travelling"
        },
        {
          "occupation_code": "372",
          "occ_name": "Accounts Adminstrator Travelling"
        },
        {
          "occupation_code": "373",
          "occ_name": "Accounts Assistant"
        },
        {
          "occupation_code": "374",
          "occ_name": "Accounts Clerk"
        },
        {
          "occupation_code": "375",
          "occ_name": "Accounts Executive No Travelling"
        },
        {
          "occupation_code": "376",
          "occ_name": "Accounts Executive Travelling"
        },
        {
          "occupation_code": "377",
          "occ_name": "Accounts Inspector"
        },
        {
          "occupation_code": "378",
          "occ_name": "Accounts Manager No Travelling"
        },
        {
          "occupation_code": "379",
          "occ_name": "Accounts Manager Travelling"
        },
        {
          "occupation_code": "380",
          "occ_name": "Acquisition Manager"
        },
        {
          "occupation_code": "381",
          "occ_name": "Acrobat"
        },
        {
          "occupation_code": "382",
          "occ_name": "Acrobat Aerialist With a Net"
        },
        {
          "occupation_code": "383",
          "occ_name": "Acrobat Aerialist Without a Net"
        },
        {
          "occupation_code": "384",
          "occ_name": "Acrobat Ground Level"
        },
        {
          "occupation_code": "385",
          "occ_name": "Acrobat Heights"
        },
        {
          "occupation_code": "386",
          "occ_name": "Acrobat Trapeze With a Net"
        },
        {
          "occupation_code": "387",
          "occ_name": "Acrobat Trapeze Without a Net"
        },
        {
          "occupation_code": "388",
          "occ_name": "Actor"
        },
        {
          "occupation_code": "389",
          "occ_name": "Actress"
        },
        {
          "occupation_code": "390",
          "occ_name": "Actuarial Analyst"
        },
        {
          "occupation_code": "391",
          "occ_name": "Actuarial Consultant"
        },
        {
          "occupation_code": "392",
          "occ_name": "Actuarial Manager"
        },
        {
          "occupation_code": "393",
          "occ_name": "Actuarial Student"
        },
        {
          "occupation_code": "394",
          "occ_name": "Actuary"
        },
        {
          "occupation_code": "395",
          "occ_name": "Acturial Analyst"
        },
        {
          "occupation_code": "396",
          "occ_name": "Adjudicator"
        },
        {
          "occupation_code": "397",
          "occ_name": "Adjudicator Legal"
        },
        {
          "occupation_code": "398",
          "occ_name": "Adjuster Claims"
        },
        {
          "occupation_code": "399",
          "occ_name": "Adjuster Loss"
        },
        {
          "occupation_code": "400",
          "occ_name": "Adjutant General"
        },
        {
          "occupation_code": "401",
          "occ_name": "Admin Superindendant"
        },
        {
          "occupation_code": "402",
          "occ_name": "Administration"
        },
        {
          "occupation_code": "403",
          "occ_name": "Administration Clerical"
        },
        {
          "occupation_code": "404",
          "occ_name": "Administration Manager"
        },
        {
          "occupation_code": "405",
          "occ_name": "Administration Manager Officer"
        },
        {
          "occupation_code": "406",
          "occ_name": "Administration Officer"
        },
        {
          "occupation_code": "407",
          "occ_name": "Administration Secretary"
        },
        {
          "occupation_code": "408",
          "occ_name": "Administration Supervisor"
        },
        {
          "occupation_code": "409",
          "occ_name": "Administrative Assistant"
        },
        {
          "occupation_code": "410",
          "occ_name": "Administrative Clerk"
        },
        {
          "occupation_code": "411",
          "occ_name": "Administrator"
        },
        {
          "occupation_code": "412",
          "occ_name": "Administrator Claims"
        },
        {
          "occupation_code": "413",
          "occ_name": "Administrator Clerical"
        },
        {
          "occupation_code": "414",
          "occ_name": "Administrator Sports"
        },
        {
          "occupation_code": "415",
          "occ_name": "Administrator Superannuation Funds"
        },
        {
          "occupation_code": "416",
          "occ_name": "Admiral"
        },
        {
          "occupation_code": "417",
          "occ_name": "Admissions Clerk"
        },
        {
          "occupation_code": "418",
          "occ_name": "Advert Market Researcher"
        },
        {
          "occupation_code": "419",
          "occ_name": "Advertising Account Executive No Travelling"
        },
        {
          "occupation_code": "420",
          "occ_name": "Advertising Account Executive Travelling"
        },
        {
          "occupation_code": "421",
          "occ_name": "Advertising Agent"
        },
        {
          "occupation_code": "422",
          "occ_name": "Advertising Agent Film TV Theatre Radio"
        },
        {
          "occupation_code": "423",
          "occ_name": "Advertising Agent No Travelling"
        },
        {
          "occupation_code": "424",
          "occ_name": "Advertising Assistant"
        },
        {
          "occupation_code": "425",
          "occ_name": "Advertising Canvasser"
        },
        {
          "occupation_code": "426",
          "occ_name": "Advertising Consultant"
        },
        {
          "occupation_code": "427",
          "occ_name": "Advertising Designer"
        },
        {
          "occupation_code": "428",
          "occ_name": "Advertising Director"
        },
        {
          "occupation_code": "429",
          "occ_name": "Advertising Executive"
        },
        {
          "occupation_code": "430",
          "occ_name": "Advertising Manager"
        },
        {
          "occupation_code": "431",
          "occ_name": "Advertising Market Researcher"
        },
        {
          "occupation_code": "432",
          "occ_name": "Advertising Practitioner"
        },
        {
          "occupation_code": "433",
          "occ_name": "Advertising Salesman"
        },
        {
          "occupation_code": "434",
          "occ_name": "Advertising Salesman External"
        },
        {
          "occupation_code": "435",
          "occ_name": "Advertising Technician"
        },
        {
          "occupation_code": "436",
          "occ_name": "Advertising Technology Designer"
        },
        {
          "occupation_code": "437",
          "occ_name": "Adviser Financial"
        },
        {
          "occupation_code": "438",
          "occ_name": "Adviser Independent Financial"
        },
        {
          "occupation_code": "439",
          "occ_name": "Adviser Political"
        },
        {
          "occupation_code": "440",
          "occ_name": "Adviser Tax"
        },
        {
          "occupation_code": "441",
          "occ_name": "Advocate"
        },
        {
          "occupation_code": "442",
          "occ_name": "Aerial Erector"
        },
        {
          "occupation_code": "443",
          "occ_name": "Aerial fire fighter"
        },
        {
          "occupation_code": "444",
          "occ_name": "Aerial Fire Services"
        },
        {
          "occupation_code": "445",
          "occ_name": "Aerial photographer"
        },
        {
          "occupation_code": "446",
          "occ_name": "Aerial Sprayer"
        },
        {
          "occupation_code": "447",
          "occ_name": "Aerial Surveying"
        },
        {
          "occupation_code": "448",
          "occ_name": "Aerobics Instructor"
        },
        {
          "occupation_code": "449",
          "occ_name": "Aerobics Teacher"
        },
        {
          "occupation_code": "450",
          "occ_name": "Aerodynamicist"
        },
        {
          "occupation_code": "451",
          "occ_name": "Aesthetician"
        },
        {
          "occupation_code": "452",
          "occ_name": "Agent Crop"
        },
        {
          "occupation_code": "453",
          "occ_name": "Agent Employment"
        },
        {
          "occupation_code": "454",
          "occ_name": "Agent Immigration"
        },
        {
          "occupation_code": "455",
          "occ_name": "Agent Insurance"
        },
        {
          "occupation_code": "456",
          "occ_name": "Agent Letting"
        },
        {
          "occupation_code": "457",
          "occ_name": "Agent Literary"
        },
        {
          "occupation_code": "458",
          "occ_name": "Agent Lotteries"
        },
        {
          "occupation_code": "459",
          "occ_name": "Agent Media"
        },
        {
          "occupation_code": "460",
          "occ_name": "Agent Parliamentary"
        },
        {
          "occupation_code": "461",
          "occ_name": "Agent Patent"
        },
        {
          "occupation_code": "462",
          "occ_name": "Agent Repossession"
        },
        {
          "occupation_code": "463",
          "occ_name": "Agent Site"
        },
        {
          "occupation_code": "464",
          "occ_name": "Agent Strata Managing"
        },
        {
          "occupation_code": "465",
          "occ_name": "Agent Travel"
        },
        {
          "occupation_code": "466",
          "occ_name": "Agric Res Biochemist"
        },
        {
          "occupation_code": "467",
          "occ_name": "Agricultural Advisor"
        },
        {
          "occupation_code": "468",
          "occ_name": "Agricultural Botanist"
        },
        {
          "occupation_code": "469",
          "occ_name": "Agricultural Chemist"
        },
        {
          "occupation_code": "470",
          "occ_name": "Agricultural Commodities Trader"
        },
        {
          "occupation_code": "471",
          "occ_name": "Agricultural Consultant"
        },
        {
          "occupation_code": "472",
          "occ_name": "Agricultural Consulting Services"
        },
        {
          "occupation_code": "473",
          "occ_name": "Agricultural Counsellor"
        },
        {
          "occupation_code": "474",
          "occ_name": "Agricultural Economist"
        },
        {
          "occupation_code": "475",
          "occ_name": "Agricultural Engineer"
        },
        {
          "occupation_code": "476",
          "occ_name": "Agricultural Grower"
        },
        {
          "occupation_code": "477",
          "occ_name": "Agricultural Inspector"
        },
        {
          "occupation_code": "478",
          "occ_name": "Agricultural Machinery Mechanic"
        },
        {
          "occupation_code": "479",
          "occ_name": "Agricultural Manager"
        },
        {
          "occupation_code": "480",
          "occ_name": "Agricultural Pilot"
        },
        {
          "occupation_code": "481",
          "occ_name": "Agricultural Produce Harvester"
        },
        {
          "occupation_code": "482",
          "occ_name": "Agricultural Produce Picker"
        },
        {
          "occupation_code": "483",
          "occ_name": "Agricultural Researcher"
        },
        {
          "occupation_code": "484",
          "occ_name": "Agricultural Science Technician"
        },
        {
          "occupation_code": "485",
          "occ_name": "Agricultural Scientist"
        },
        {
          "occupation_code": "486",
          "occ_name": "Agricultural Technician"
        },
        {
          "occupation_code": "487",
          "occ_name": "Agriculturalist"
        },
        {
          "occupation_code": "488",
          "occ_name": "Agriculture Accountant"
        },
        {
          "occupation_code": "489",
          "occ_name": "Agriculturist"
        },
        {
          "occupation_code": "490",
          "occ_name": "Agro Technician"
        },
        {
          "occupation_code": "491",
          "occ_name": "Agrometeorologist"
        },
        {
          "occupation_code": "492",
          "occ_name": "Agronomist"
        },
        {
          "occupation_code": "493",
          "occ_name": "Agronomist Consultant"
        },
        {
          "occupation_code": "494",
          "occ_name": "Aide"
        },
        {
          "occupation_code": "495",
          "occ_name": "Air Ambulance Crew"
        },
        {
          "occupation_code": "496",
          "occ_name": "Air Ambulance Paramedic"
        },
        {
          "occupation_code": "497",
          "occ_name": "Air Compressor Operator"
        },
        {
          "occupation_code": "498",
          "occ_name": "Air Conditioning Engineer"
        },
        {
          "occupation_code": "499",
          "occ_name": "Air Conditioning Fitter"
        },
        {
          "occupation_code": "500",
          "occ_name": "Air Conditioning Mechanic"
        },
        {
          "occupation_code": "501",
          "occ_name": "Air Conditioning Specialist"
        },
        {
          "occupation_code": "502",
          "occ_name": "Air Engineer"
        },
        {
          "occupation_code": "503",
          "occ_name": "Air Freight Agent"
        },
        {
          "occupation_code": "504",
          "occ_name": "Air Hostess"
        },
        {
          "occupation_code": "505",
          "occ_name": "Air Marshall"
        },
        {
          "occupation_code": "506",
          "occ_name": "Air Pollution Consultant"
        },
        {
          "occupation_code": "507",
          "occ_name": "Air Pump Attendant Diving"
        },
        {
          "occupation_code": "508",
          "occ_name": "Air Quality Specialist"
        },
        {
          "occupation_code": "509",
          "occ_name": "Air Steward"
        },
        {
          "occupation_code": "510",
          "occ_name": "Air Stewardess"
        },
        {
          "occupation_code": "511",
          "occ_name": "Air Taxi Operator"
        },
        {
          "occupation_code": "512",
          "occ_name": "Air Tour Guide"
        },
        {
          "occupation_code": "513",
          "occ_name": "Air Traffic Control Clerk"
        },
        {
          "occupation_code": "514",
          "occ_name": "Air Traffic Controller"
        },
        {
          "occupation_code": "515",
          "occ_name": "Aircraft Builder"
        },
        {
          "occupation_code": "516",
          "occ_name": "Aircraft Designer"
        },
        {
          "occupation_code": "517",
          "occ_name": "Aircraft Engine Fitter"
        },
        {
          "occupation_code": "518",
          "occ_name": "Aircraft Engineer"
        },
        {
          "occupation_code": "519",
          "occ_name": "Aircraft Maintenance Worker"
        },
        {
          "occupation_code": "520",
          "occ_name": "Aircraft Mechanic"
        },
        {
          "occupation_code": "521",
          "occ_name": "Aircraft Radar Radiotrician Officer"
        },
        {
          "occupation_code": "522",
          "occ_name": "Aircraft Refueler"
        },
        {
          "occupation_code": "523",
          "occ_name": "Aircraft Technician"
        },
        {
          "occupation_code": "524",
          "occ_name": "Aircraft Test Pilot"
        },
        {
          "occupation_code": "525",
          "occ_name": "Aircrew Paramedic"
        },
        {
          "occupation_code": "526",
          "occ_name": "Airline Attendant"
        },
        {
          "occupation_code": "527",
          "occ_name": "Airline Hostess"
        },
        {
          "occupation_code": "528",
          "occ_name": "Airline Manager"
        },
        {
          "occupation_code": "529",
          "occ_name": "Airline Pilots"
        },
        {
          "occupation_code": "530",
          "occ_name": "Airline Steward"
        },
        {
          "occupation_code": "531",
          "occ_name": "Airport Apron Controller"
        },
        {
          "occupation_code": "532",
          "occ_name": "Airport Cargo superintendent"
        },
        {
          "occupation_code": "533",
          "occ_name": "Airport Dispatcher"
        },
        {
          "occupation_code": "534",
          "occ_name": "Airport Duty Officer"
        },
        {
          "occupation_code": "535",
          "occ_name": "Airport Engineer"
        },
        {
          "occupation_code": "536",
          "occ_name": "Airport Fire Fighter"
        },
        {
          "occupation_code": "537",
          "occ_name": "Airport Fireman"
        },
        {
          "occupation_code": "538",
          "occ_name": "Airport Inspector"
        },
        {
          "occupation_code": "539",
          "occ_name": "Airport Manager"
        },
        {
          "occupation_code": "540",
          "occ_name": "Airport Operations Officer"
        },
        {
          "occupation_code": "541",
          "occ_name": "Airport Planner"
        },
        {
          "occupation_code": "542",
          "occ_name": "Airport Planner Aviation Planner"
        },
        {
          "occupation_code": "543",
          "occ_name": "Airport Radar Controller"
        },
        {
          "occupation_code": "544",
          "occ_name": "Airport Radio Operator"
        },
        {
          "occupation_code": "545",
          "occ_name": "Airport Reservations Clerk"
        },
        {
          "occupation_code": "546",
          "occ_name": "Airport Security Guard"
        },
        {
          "occupation_code": "547",
          "occ_name": "Airport Superintendant"
        },
        {
          "occupation_code": "548",
          "occ_name": "Airworthiness Inspector"
        },
        {
          "occupation_code": "549",
          "occ_name": "Alarm Installer"
        },
        {
          "occupation_code": "550",
          "occ_name": "Alarm Service Technician"
        },
        {
          "occupation_code": "551",
          "occ_name": "Alarm System Monitor Office Based"
        },
        {
          "occupation_code": "552",
          "occ_name": "Alarm Technician"
        },
        {
          "occupation_code": "553",
          "occ_name": "Ambassador"
        },
        {
          "occupation_code": "554",
          "occ_name": "Ambulance Driver"
        },
        {
          "occupation_code": "555",
          "occ_name": "Ambulance Paramedic"
        },
        {
          "occupation_code": "556",
          "occ_name": "Ambulance Station Superintendent"
        },
        {
          "occupation_code": "557",
          "occ_name": "Amusement Arcade Workers"
        },
        {
          "occupation_code": "558",
          "occ_name": "Amusement Park Attendant"
        },
        {
          "occupation_code": "559",
          "occ_name": "Anaesthesiologist"
        },
        {
          "occupation_code": "560",
          "occ_name": "Anaesthetic Physician"
        },
        {
          "occupation_code": "561",
          "occ_name": "Anaesthetist"
        },
        {
          "occupation_code": "562",
          "occ_name": "Anaethesiologist"
        },
        {
          "occupation_code": "563",
          "occ_name": "Analyst Business"
        },
        {
          "occupation_code": "564",
          "occ_name": "Analyst Investment"
        },
        {
          "occupation_code": "565",
          "occ_name": "Analyst Market research"
        },
        {
          "occupation_code": "566",
          "occ_name": "Analyst Policy"
        },
        {
          "occupation_code": "567",
          "occ_name": "Analytical Chemist"
        },
        {
          "occupation_code": "568",
          "occ_name": "Anatomical Pathologist"
        },
        {
          "occupation_code": "569",
          "occ_name": "Anatomist"
        },
        {
          "occupation_code": "570",
          "occ_name": "Anglers"
        },
        {
          "occupation_code": "571",
          "occ_name": "Angling Instructor"
        },
        {
          "occupation_code": "572",
          "occ_name": "Animal Breeder Wildlife"
        },
        {
          "occupation_code": "573",
          "occ_name": "Animal Care Assistant"
        },
        {
          "occupation_code": "574",
          "occ_name": "Animal Care Specialist"
        },
        {
          "occupation_code": "575",
          "occ_name": "Animal Care Technician"
        },
        {
          "occupation_code": "576",
          "occ_name": "Animal Caretaker"
        },
        {
          "occupation_code": "577",
          "occ_name": "Animal Doctor"
        },
        {
          "occupation_code": "578",
          "occ_name": "Animal Educator"
        },
        {
          "occupation_code": "579",
          "occ_name": "Animal Exhibit Curator"
        },
        {
          "occupation_code": "580",
          "occ_name": "Animal Facility Cleaner"
        },
        {
          "occupation_code": "581",
          "occ_name": "Animal Feed Technician"
        },
        {
          "occupation_code": "582",
          "occ_name": "Animal Handler"
        },
        {
          "occupation_code": "583",
          "occ_name": "Animal Keeper Zoo"
        },
        {
          "occupation_code": "584",
          "occ_name": "Animal Nurse"
        },
        {
          "occupation_code": "585",
          "occ_name": "Animal Nutrition Process Technician"
        },
        {
          "occupation_code": "586",
          "occ_name": "Animal Nutritionist"
        },
        {
          "occupation_code": "587",
          "occ_name": "Animal Rehabilitator"
        },
        {
          "occupation_code": "588",
          "occ_name": "Animal Sanctuary Cleaner"
        },
        {
          "occupation_code": "589",
          "occ_name": "Animal Sanctuary Worker"
        },
        {
          "occupation_code": "590",
          "occ_name": "Animal Scientist"
        },
        {
          "occupation_code": "591",
          "occ_name": "Animal Technician"
        },
        {
          "occupation_code": "592",
          "occ_name": "Animal Trainer"
        },
        {
          "occupation_code": "593",
          "occ_name": "Animals Refuge Worker"
        },
        {
          "occupation_code": "594",
          "occ_name": "Animator Games Development"
        },
        {
          "occupation_code": "595",
          "occ_name": "Announcer Radio"
        },
        {
          "occupation_code": "596",
          "occ_name": "Announcer Station"
        },
        {
          "occupation_code": "597",
          "occ_name": "Announcer Television"
        },
        {
          "occupation_code": "598",
          "occ_name": "Antenna Builder"
        },
        {
          "occupation_code": "599",
          "occ_name": "Antenna Erector"
        },
        {
          "occupation_code": "600",
          "occ_name": "Antenna Fitter"
        },
        {
          "occupation_code": "601",
          "occ_name": "Antenna Installation Technician"
        },
        {
          "occupation_code": "602",
          "occ_name": "Antenna Technician"
        },
        {
          "occupation_code": "603",
          "occ_name": "Anthropologist No Field Work"
        },
        {
          "occupation_code": "604",
          "occ_name": "Anthropologist With Field Work"
        },
        {
          "occupation_code": "605",
          "occ_name": "Antiquarian"
        },
        {
          "occupation_code": "606",
          "occ_name": "Antique Dealer"
        },
        {
          "occupation_code": "607",
          "occ_name": "Antique Restorer"
        },
        {
          "occupation_code": "608",
          "occ_name": "Antiques Collector"
        },
        {
          "occupation_code": "609",
          "occ_name": "Appeals Referee"
        },
        {
          "occupation_code": "610",
          "occ_name": "Appliance Repairer"
        },
        {
          "occupation_code": "611",
          "occ_name": "Application Manager"
        },
        {
          "occupation_code": "612",
          "occ_name": "Applications System Designer"
        },
        {
          "occupation_code": "613",
          "occ_name": "Appraiser"
        },
        {
          "occupation_code": "614",
          "occ_name": "Apprentice Miner"
        },
        {
          "occupation_code": "615",
          "occ_name": "Apprentice Pilot"
        },
        {
          "occupation_code": "616",
          "occ_name": "Aquaculture Director"
        },
        {
          "occupation_code": "617",
          "occ_name": "Aquaculture Farm Manager"
        },
        {
          "occupation_code": "618",
          "occ_name": "Aquaculture Manager"
        },
        {
          "occupation_code": "619",
          "occ_name": "Aquaculture Worker"
        },
        {
          "occupation_code": "620",
          "occ_name": "Aquaculturist"
        },
        {
          "occupation_code": "621",
          "occ_name": "Aquarist"
        },
        {
          "occupation_code": "622",
          "occ_name": "Aquarium Tank Attendant"
        },
        {
          "occupation_code": "623",
          "occ_name": "Aquatic Guardian"
        },
        {
          "occupation_code": "624",
          "occ_name": "Arbitrator"
        },
        {
          "occupation_code": "625",
          "occ_name": "Archaeologist No Field Work"
        },
        {
          "occupation_code": "626",
          "occ_name": "Archaeologist With Field Work"
        },
        {
          "occupation_code": "627",
          "occ_name": "Archbishop"
        },
        {
          "occupation_code": "628",
          "occ_name": "Archdeacon"
        },
        {
          "occupation_code": "629",
          "occ_name": "Architect"
        },
        {
          "occupation_code": "630",
          "occ_name": "Architect Landscape"
        },
        {
          "occupation_code": "631",
          "occ_name": "Architectural Scientist"
        },
        {
          "occupation_code": "632",
          "occ_name": "Architectural Technician"
        },
        {
          "occupation_code": "633",
          "occ_name": "Architectural Technologist"
        },
        {
          "occupation_code": "634",
          "occ_name": "Archivist"
        },
        {
          "occupation_code": "635",
          "occ_name": "Armaments Inspector"
        },
        {
          "occupation_code": "636",
          "occ_name": "Armature Bander"
        },
        {
          "occupation_code": "637",
          "occ_name": "Armature Connector"
        },
        {
          "occupation_code": "638",
          "occ_name": "Armature Winder"
        },
        {
          "occupation_code": "639",
          "occ_name": "Armed Forces Skin Diver"
        },
        {
          "occupation_code": "640",
          "occ_name": "Armed Security Guard"
        },
        {
          "occupation_code": "641",
          "occ_name": "Armoured Service"
        },
        {
          "occupation_code": "642",
          "occ_name": "Armoured Vehicle Driver"
        },
        {
          "occupation_code": "643",
          "occ_name": "Armoured Vehicle Guard"
        },
        {
          "occupation_code": "644",
          "occ_name": "Arms Dealer"
        },
        {
          "occupation_code": "645",
          "occ_name": "Arms Merchant"
        },
        {
          "occupation_code": "646",
          "occ_name": "Aromatherapist"
        },
        {
          "occupation_code": "647",
          "occ_name": "Arson Investigator"
        },
        {
          "occupation_code": "648",
          "occ_name": "Art Auctioneer"
        },
        {
          "occupation_code": "649",
          "occ_name": "Art Collector"
        },
        {
          "occupation_code": "650",
          "occ_name": "Art Dealer"
        },
        {
          "occupation_code": "651",
          "occ_name": "Art Director"
        },
        {
          "occupation_code": "652",
          "occ_name": "Art Editor"
        },
        {
          "occupation_code": "653",
          "occ_name": "Art Gallery Curator"
        },
        {
          "occupation_code": "654",
          "occ_name": "Art Historian"
        },
        {
          "occupation_code": "655",
          "occ_name": "Art Publisher"
        },
        {
          "occupation_code": "656",
          "occ_name": "Art Teacher"
        },
        {
          "occupation_code": "657",
          "occ_name": "Article Clerk"
        },
        {
          "occupation_code": "658",
          "occ_name": "Articled Clerk"
        },
        {
          "occupation_code": "659",
          "occ_name": "Artificial Flower Maker"
        },
        {
          "occupation_code": "660",
          "occ_name": "Artisan"
        },
        {
          "occupation_code": "661",
          "occ_name": "Artisan Mason Fixer"
        },
        {
          "occupation_code": "662",
          "occ_name": "Artist"
        },
        {
          "occupation_code": "663",
          "occ_name": "Artist Ceramic"
        },
        {
          "occupation_code": "664",
          "occ_name": "Artist Makeup"
        },
        {
          "occupation_code": "665",
          "occ_name": "Artist Technical"
        },
        {
          "occupation_code": "666",
          "occ_name": "Artist Voice over"
        },
        {
          "occupation_code": "667",
          "occ_name": "Asbestos Abatement Worker"
        },
        {
          "occupation_code": "668",
          "occ_name": "Asbestos Consultant"
        },
        {
          "occupation_code": "669",
          "occ_name": "Asbestos Inspector"
        },
        {
          "occupation_code": "670",
          "occ_name": "Asbestos Insulator"
        },
        {
          "occupation_code": "671",
          "occ_name": "Asbestos Maker"
        },
        {
          "occupation_code": "672",
          "occ_name": "Asbestos Removalist"
        },
        {
          "occupation_code": "673",
          "occ_name": "Asphalt Machine Operator"
        },
        {
          "occupation_code": "674",
          "occ_name": "Asphalt Worker"
        },
        {
          "occupation_code": "675",
          "occ_name": "Assayer"
        },
        {
          "occupation_code": "676",
          "occ_name": "Assembler Electrical and Electronic"
        },
        {
          "occupation_code": "677",
          "occ_name": "Assembly Line Worker Motor Vehicles"
        },
        {
          "occupation_code": "678",
          "occ_name": "Assessor Claims"
        },
        {
          "occupation_code": "679",
          "occ_name": "Asset Manager"
        },
        {
          "occupation_code": "680",
          "occ_name": "Assistant Accountant"
        },
        {
          "occupation_code": "681",
          "occ_name": "Assistant Brewer"
        },
        {
          "occupation_code": "682",
          "occ_name": "Assistant Clerical"
        },
        {
          "occupation_code": "683",
          "occ_name": "Assistant Clerk"
        },
        {
          "occupation_code": "684",
          "occ_name": "Assistant Dental"
        },
        {
          "occupation_code": "685",
          "occ_name": "Assistant Director"
        },
        {
          "occupation_code": "686",
          "occ_name": "Assistant Diving Surface worker"
        },
        {
          "occupation_code": "687",
          "occ_name": "Assistant Editor"
        },
        {
          "occupation_code": "688",
          "occ_name": "Assistant Finance Manager"
        },
        {
          "occupation_code": "689",
          "occ_name": "Assistant Funeral Director"
        },
        {
          "occupation_code": "690",
          "occ_name": "Assistant General Manager Office Based No Manual Duties"
        },
        {
          "occupation_code": "691",
          "occ_name": "Assistant Lodge Manager"
        },
        {
          "occupation_code": "692",
          "occ_name": "Assistant Manager"
        },
        {
          "occupation_code": "693",
          "occ_name": "Assistant Master of High Court"
        },
        {
          "occupation_code": "694",
          "occ_name": "Assistant Optician"
        },
        {
          "occupation_code": "695",
          "occ_name": "Assistant Pharmacist"
        },
        {
          "occupation_code": "696",
          "occ_name": "Assistant Publisher"
        },
        {
          "occupation_code": "697",
          "occ_name": "Assistant Railway Operator"
        },
        {
          "occupation_code": "698",
          "occ_name": "Assistant Registration Officer"
        },
        {
          "occupation_code": "699",
          "occ_name": "Assistant Researcher"
        },
        {
          "occupation_code": "700",
          "occ_name": "Assistant Survey"
        },
        {
          "occupation_code": "701",
          "occ_name": "Assistant Undertaker"
        },
        {
          "occupation_code": "702",
          "occ_name": "Assistant Underwriter"
        },
        {
          "occupation_code": "703",
          "occ_name": "Assistant Veterinary"
        },
        {
          "occupation_code": "704",
          "occ_name": "Associate Editor"
        },
        {
          "occupation_code": "705",
          "occ_name": "Associated Clinical Data Specialist"
        },
        {
          "occupation_code": "706",
          "occ_name": "Assurance Adviser"
        },
        {
          "occupation_code": "707",
          "occ_name": "Assurance Broker"
        },
        {
          "occupation_code": "708",
          "occ_name": "Astrologer"
        },
        {
          "occupation_code": "709",
          "occ_name": "Astrologist"
        },
        {
          "occupation_code": "710",
          "occ_name": "Astronaut"
        },
        {
          "occupation_code": "711",
          "occ_name": "Astronomer"
        },
        {
          "occupation_code": "712",
          "occ_name": "Astronomist"
        },
        {
          "occupation_code": "713",
          "occ_name": "Astrophysicist"
        },
        {
          "occupation_code": "714",
          "occ_name": "Athletic Trainer"
        },
        {
          "occupation_code": "715",
          "occ_name": "Attendant Cinema"
        },
        {
          "occupation_code": "716",
          "occ_name": "Attendant Housekeeping"
        },
        {
          "occupation_code": "717",
          "occ_name": "Attendant Room"
        },
        {
          "occupation_code": "718",
          "occ_name": "Attendant Substation"
        },
        {
          "occupation_code": "719",
          "occ_name": "Attendant Swimming Pool"
        },
        {
          "occupation_code": "720",
          "occ_name": "Attendant Zoo"
        },
        {
          "occupation_code": "721",
          "occ_name": "Attorney"
        },
        {
          "occupation_code": "722",
          "occ_name": "Attorney General"
        },
        {
          "occupation_code": "723",
          "occ_name": "Attorney Legal Official"
        },
        {
          "occupation_code": "724",
          "occ_name": "Au Pair"
        },
        {
          "occupation_code": "725",
          "occ_name": "Auctioneer External"
        },
        {
          "occupation_code": "726",
          "occ_name": "Auctioneer General Goods"
        },
        {
          "occupation_code": "727",
          "occ_name": "Auctioneer Livestock"
        },
        {
          "occupation_code": "728",
          "occ_name": "Auctioneer Property"
        },
        {
          "occupation_code": "729",
          "occ_name": "Audio Engineer"
        },
        {
          "occupation_code": "730",
          "occ_name": "Audiologist"
        },
        {
          "occupation_code": "731",
          "occ_name": "Audiometrician"
        },
        {
          "occupation_code": "732",
          "occ_name": "Audiometrist"
        },
        {
          "occupation_code": "733",
          "occ_name": "Audiovisual Installer"
        },
        {
          "occupation_code": "734",
          "occ_name": "Audit Clerk"
        },
        {
          "occupation_code": "735",
          "occ_name": "Audit Manager"
        },
        {
          "occupation_code": "736",
          "occ_name": "Audit Supervisor"
        },
        {
          "occupation_code": "737",
          "occ_name": "Auditing Senior Specialist"
        },
        {
          "occupation_code": "738",
          "occ_name": "Auditor"
        },
        {
          "occupation_code": "739",
          "occ_name": "Auditor General"
        },
        {
          "occupation_code": "740",
          "occ_name": "Auditor Night"
        },
        {
          "occupation_code": "741",
          "occ_name": "Auto Electrician"
        },
        {
          "occupation_code": "742",
          "occ_name": "Auto Glass Technician"
        },
        {
          "occupation_code": "743",
          "occ_name": "Auto Trimmer"
        },
        {
          "occupation_code": "744",
          "occ_name": "Autobody Refinisher"
        },
        {
          "occupation_code": "745",
          "occ_name": "Autobody Repairer"
        },
        {
          "occupation_code": "746",
          "occ_name": "Automation Engineer"
        },
        {
          "occupation_code": "747",
          "occ_name": "Automobile Salesman"
        },
        {
          "occupation_code": "748",
          "occ_name": "Automotive Body Maker"
        },
        {
          "occupation_code": "749",
          "occ_name": "Automotive Electrical Fitter"
        },
        {
          "occupation_code": "750",
          "occ_name": "Automotive Technician"
        },
        {
          "occupation_code": "751",
          "occ_name": "Automotive Technician"
        },
        {
          "occupation_code": "752",
          "occ_name": "Auxilary Operator Non Nuclear"
        },
        {
          "occupation_code": "753",
          "occ_name": "Auxiliary Nurse"
        },
        {
          "occupation_code": "754",
          "occ_name": "Auxiliary Operator Nuclear Power Plant"
        },
        {
          "occupation_code": "755",
          "occ_name": "Aviation Electronics Technician"
        },
        {
          "occupation_code": "756",
          "occ_name": "Aviation Engineer"
        },
        {
          "occupation_code": "757",
          "occ_name": "Aviation Instructor"
        },
        {
          "occupation_code": "758",
          "occ_name": "Aviation Mapping"
        },
        {
          "occupation_code": "759",
          "occ_name": "Aviation Medicine Instructor"
        },
        {
          "occupation_code": "760",
          "occ_name": "Aviation Operations Officer"
        },
        {
          "occupation_code": "761",
          "occ_name": "Aviation Salesperson"
        },
        {
          "occupation_code": "762",
          "occ_name": "Aviation Technician"
        },
        {
          "occupation_code": "763",
          "occ_name": "Aviator"
        },
        {
          "occupation_code": "764",
          "occ_name": "Awning Installer"
        },
        {
          "occupation_code": "765",
          "occ_name": "Ayatollahs"
        },
        {
          "occupation_code": "766",
          "occ_name": "Ayurveda Doctor"
        },
        {
          "occupation_code": "767",
          "occ_name": "Ayurveda Practitioner"
        },
        {
          "occupation_code": "768",
          "occ_name": "Ayurvedic Doctor"
        },
        {
          "occupation_code": "769",
          "occ_name": "Backup Dancer"
        },
        {
          "occupation_code": "770",
          "occ_name": "Bacteriologist"
        },
        {
          "occupation_code": "771",
          "occ_name": "Baggage Handler"
        },
        {
          "occupation_code": "772",
          "occ_name": "Baggage Master"
        },
        {
          "occupation_code": "773",
          "occ_name": "Bailiff"
        },
        {
          "occupation_code": "774",
          "occ_name": "Bailiff Court"
        },
        {
          "occupation_code": "775",
          "occ_name": "Bakery Manager"
        },
        {
          "occupation_code": "776",
          "occ_name": "Ballerina"
        },
        {
          "occupation_code": "777",
          "occ_name": "Ballet Company Dancer"
        },
        {
          "occupation_code": "778",
          "occ_name": "Ballet Dancer"
        },
        {
          "occupation_code": "779",
          "occ_name": "Ballet Soloist"
        },
        {
          "occupation_code": "780",
          "occ_name": "Ballet Teacher"
        },
        {
          "occupation_code": "781",
          "occ_name": "Banana Farmer"
        },
        {
          "occupation_code": "782",
          "occ_name": "Band Leader"
        },
        {
          "occupation_code": "783",
          "occ_name": "Bandagist"
        },
        {
          "occupation_code": "784",
          "occ_name": "Banderilleros"
        },
        {
          "occupation_code": "785",
          "occ_name": "Bank Branch Manager"
        },
        {
          "occupation_code": "786",
          "occ_name": "Bank Cashier"
        },
        {
          "occupation_code": "787",
          "occ_name": "Bank Clerk"
        },
        {
          "occupation_code": "788",
          "occ_name": "Bank Manager"
        },
        {
          "occupation_code": "789",
          "occ_name": "Bank Note Examiner"
        },
        {
          "occupation_code": "790",
          "occ_name": "Bank Official"
        },
        {
          "occupation_code": "791",
          "occ_name": "Bank Teller"
        },
        {
          "occupation_code": "792",
          "occ_name": "Banker"
        },
        {
          "occupation_code": "793",
          "occ_name": "Banker Merchant"
        },
        {
          "occupation_code": "794",
          "occ_name": "Banking Consultant"
        },
        {
          "occupation_code": "795",
          "occ_name": "Banking Professional"
        },
        {
          "occupation_code": "796",
          "occ_name": "Banksman"
        },
        {
          "occupation_code": "797",
          "occ_name": "Banner Towing Pilot"
        },
        {
          "occupation_code": "798",
          "occ_name": "Banquet Manager"
        },
        {
          "occupation_code": "799",
          "occ_name": "Banqueting Manager"
        },
        {
          "occupation_code": "800",
          "occ_name": "Bar Attendant"
        },
        {
          "occupation_code": "801",
          "occ_name": "Bar Examiner"
        },
        {
          "occupation_code": "802",
          "occ_name": "Bar Lady"
        },
        {
          "occupation_code": "803",
          "occ_name": "Bar Staff"
        },
        {
          "occupation_code": "804",
          "occ_name": "Barber"
        },
        {
          "occupation_code": "805",
          "occ_name": "Barge Crew"
        },
        {
          "occupation_code": "806",
          "occ_name": "Barge engineer Oil rig"
        },
        {
          "occupation_code": "807",
          "occ_name": "Barge Officer"
        },
        {
          "occupation_code": "808",
          "occ_name": "Barge Operator"
        },
        {
          "occupation_code": "809",
          "occ_name": "Barista"
        },
        {
          "occupation_code": "810",
          "occ_name": "Barmaid"
        },
        {
          "occupation_code": "811",
          "occ_name": "Barman"
        },
        {
          "occupation_code": "812",
          "occ_name": "Barrister"
        },
        {
          "occupation_code": "813",
          "occ_name": "Basket Weaver"
        },
        {
          "occupation_code": "814",
          "occ_name": "Bathroom Attendant"
        },
        {
          "occupation_code": "815",
          "occ_name": "Battery Fitter"
        },
        {
          "occupation_code": "816",
          "occ_name": "Beautician"
        },
        {
          "occupation_code": "817",
          "occ_name": "Beautician Home or Mobile"
        },
        {
          "occupation_code": "818",
          "occ_name": "Beauty Consultant"
        },
        {
          "occupation_code": "819",
          "occ_name": "Beauty Technician"
        },
        {
          "occupation_code": "820",
          "occ_name": "Bed and Breakfast Owner"
        },
        {
          "occupation_code": "821",
          "occ_name": "Beekeeper"
        },
        {
          "occupation_code": "822",
          "occ_name": "Behaviour Therapist"
        },
        {
          "occupation_code": "823",
          "occ_name": "Behavioural Scientist"
        },
        {
          "occupation_code": "824",
          "occ_name": "Beltwagon Operator"
        },
        {
          "occupation_code": "825",
          "occ_name": "Berthing Supervisor Ships"
        },
        {
          "occupation_code": "826",
          "occ_name": "Betting Office Clerk"
        },
        {
          "occupation_code": "827",
          "occ_name": "Bicycle Courier"
        },
        {
          "occupation_code": "828",
          "occ_name": "Bicycle Mechanic"
        },
        {
          "occupation_code": "829",
          "occ_name": "Big Game Hunter"
        },
        {
          "occupation_code": "830",
          "occ_name": "Bindery Assistant"
        },
        {
          "occupation_code": "831",
          "occ_name": "Bio Lab Technician"
        },
        {
          "occupation_code": "832",
          "occ_name": "Biochemist"
        },
        {
          "occupation_code": "833",
          "occ_name": "Biogenetecist"
        },
        {
          "occupation_code": "834",
          "occ_name": "Biokinetician"
        },
        {
          "occupation_code": "835",
          "occ_name": "Biokineticist"
        },
        {
          "occupation_code": "836",
          "occ_name": "Biological Technical Assistant"
        },
        {
          "occupation_code": "837",
          "occ_name": "Biological Technical Officer"
        },
        {
          "occupation_code": "838",
          "occ_name": "Biologist Lab and Office Only"
        },
        {
          "occupation_code": "839",
          "occ_name": "Biologist Non Marine"
        },
        {
          "occupation_code": "840",
          "occ_name": "Biologist With Field Work"
        },
        {
          "occupation_code": "841",
          "occ_name": "Biomedical Engineer"
        },
        {
          "occupation_code": "842",
          "occ_name": "Biomedical Scientist"
        },
        {
          "occupation_code": "843",
          "occ_name": "Biomedical Technician"
        },
        {
          "occupation_code": "844",
          "occ_name": "Biomedical Technologist"
        },
        {
          "occupation_code": "845",
          "occ_name": "Biophysicist"
        },
        {
          "occupation_code": "846",
          "occ_name": "Bioprocess Engineer"
        },
        {
          "occupation_code": "847",
          "occ_name": "Bishop"
        },
        {
          "occupation_code": "848",
          "occ_name": "Blacksmith"
        },
        {
          "occupation_code": "849",
          "occ_name": "Bladesmith"
        },
        {
          "occupation_code": "850",
          "occ_name": "Blaster"
        },
        {
          "occupation_code": "851",
          "occ_name": "Blasting Technician"
        },
        {
          "occupation_code": "852",
          "occ_name": "Blasting Worker Mining"
        },
        {
          "occupation_code": "853",
          "occ_name": "Blender Wine"
        },
        {
          "occupation_code": "854",
          "occ_name": "Blind Installer"
        },
        {
          "occupation_code": "855",
          "occ_name": "Blind Manufacturer"
        },
        {
          "occupation_code": "856",
          "occ_name": "Blood Collection Specialist"
        },
        {
          "occupation_code": "857",
          "occ_name": "Blossom Harvester"
        },
        {
          "occupation_code": "858",
          "occ_name": "Boat Builder"
        },
        {
          "occupation_code": "859",
          "occ_name": "Boat Crew"
        },
        {
          "occupation_code": "860",
          "occ_name": "Boat Outfitter"
        },
        {
          "occupation_code": "861",
          "occ_name": "Boat Puller"
        },
        {
          "occupation_code": "862",
          "occ_name": "Boat Wrapper"
        },
        {
          "occupation_code": "863",
          "occ_name": "Boatswain"
        },
        {
          "occupation_code": "864",
          "occ_name": "Bobcat Operator"
        },
        {
          "occupation_code": "865",
          "occ_name": "Body Corporate Manager"
        },
        {
          "occupation_code": "866",
          "occ_name": "Bodybuilder"
        },
        {
          "occupation_code": "867",
          "occ_name": "Bodyguard"
        },
        {
          "occupation_code": "868",
          "occ_name": "Boiler Attendant"
        },
        {
          "occupation_code": "869",
          "occ_name": "Boiler Cleaner"
        },
        {
          "occupation_code": "870",
          "occ_name": "Boiler Maker"
        },
        {
          "occupation_code": "871",
          "occ_name": "Boiler Operator"
        },
        {
          "occupation_code": "872",
          "occ_name": "Boiler Specialist"
        },
        {
          "occupation_code": "873",
          "occ_name": "Bolt Driver"
        },
        {
          "occupation_code": "874",
          "occ_name": "Bomb Disposal Expert"
        },
        {
          "occupation_code": "875",
          "occ_name": "Bomb Disposal Police"
        },
        {
          "occupation_code": "876",
          "occ_name": "Boner"
        },
        {
          "occupation_code": "877",
          "occ_name": "Book Dealer"
        },
        {
          "occupation_code": "878",
          "occ_name": "Book Illustrator"
        },
        {
          "occupation_code": "879",
          "occ_name": "Book Shop Employee"
        },
        {
          "occupation_code": "880",
          "occ_name": "Bookbinder"
        },
        {
          "occupation_code": "881",
          "occ_name": "Bookbinder and Finisher"
        },
        {
          "occupation_code": "882",
          "occ_name": "Bookkeeper"
        },
        {
          "occupation_code": "883",
          "occ_name": "Bookmaker"
        },
        {
          "occupation_code": "884",
          "occ_name": "Boom Operator"
        },
        {
          "occupation_code": "885",
          "occ_name": "Boot Repairer"
        },
        {
          "occupation_code": "886",
          "occ_name": "Booth Maker"
        },
        {
          "occupation_code": "887",
          "occ_name": "Border Guard"
        },
        {
          "occupation_code": "888",
          "occ_name": "Bosun"
        },
        {
          "occupation_code": "889",
          "occ_name": "Botanist"
        },
        {
          "occupation_code": "890",
          "occ_name": "Bottle Store Employee"
        },
        {
          "occupation_code": "891",
          "occ_name": "Bottle Store Manager"
        },
        {
          "occupation_code": "892",
          "occ_name": "Bottle Store Owner"
        },
        {
          "occupation_code": "893",
          "occ_name": "Bottling Attendant"
        },
        {
          "occupation_code": "894",
          "occ_name": "Bouncer"
        },
        {
          "occupation_code": "895",
          "occ_name": "Box Office Cashier"
        },
        {
          "occupation_code": "896",
          "occ_name": "Box Office Clerk"
        },
        {
          "occupation_code": "897",
          "occ_name": "Box Office Manager"
        },
        {
          "occupation_code": "898",
          "occ_name": "Bracemaker"
        },
        {
          "occupation_code": "899",
          "occ_name": "Brake Mechanic"
        },
        {
          "occupation_code": "900",
          "occ_name": "Brakesman Mining"
        },
        {
          "occupation_code": "901",
          "occ_name": "Branch Office Manager"
        },
        {
          "occupation_code": "902",
          "occ_name": "Brand Manager"
        },
        {
          "occupation_code": "903",
          "occ_name": "Brattice Builder Mining"
        },
        {
          "occupation_code": "904",
          "occ_name": "Breakdown Truck Driver"
        },
        {
          "occupation_code": "905",
          "occ_name": "Brewer"
        },
        {
          "occupation_code": "906",
          "occ_name": "Brewery Engineer"
        },
        {
          "occupation_code": "907",
          "occ_name": "Brewery Manager"
        },
        {
          "occupation_code": "908",
          "occ_name": "Brewing Technologist"
        },
        {
          "occupation_code": "909",
          "occ_name": "Brick Cleaner"
        },
        {
          "occupation_code": "910",
          "occ_name": "Bricklayer"
        },
        {
          "occupation_code": "911",
          "occ_name": "Brickwork Cleaner"
        },
        {
          "occupation_code": "912",
          "occ_name": "Brickwork Restorer"
        },
        {
          "occupation_code": "913",
          "occ_name": "Bridge Builder"
        },
        {
          "occupation_code": "914",
          "occ_name": "Bridge Inspector"
        },
        {
          "occupation_code": "915",
          "occ_name": "Broadcast Technician"
        },
        {
          "occupation_code": "916",
          "occ_name": "Broker"
        },
        {
          "occupation_code": "917",
          "occ_name": "Broker Consultant"
        },
        {
          "occupation_code": "918",
          "occ_name": "Broker Crop"
        },
        {
          "occupation_code": "919",
          "occ_name": "Broker Financial"
        },
        {
          "occupation_code": "920",
          "occ_name": "Broker Insurance"
        },
        {
          "occupation_code": "921",
          "occ_name": "Broker Money"
        },
        {
          "occupation_code": "922",
          "occ_name": "Brusher Mining"
        },
        {
          "occupation_code": "923",
          "occ_name": "Builder Fireplace"
        },
        {
          "occupation_code": "924",
          "occ_name": "Builder Motor Body"
        },
        {
          "occupation_code": "925",
          "occ_name": "Builder Yacht"
        },
        {
          "occupation_code": "926",
          "occ_name": "Building Cleaner"
        },
        {
          "occupation_code": "927",
          "occ_name": "Building Fitter"
        },
        {
          "occupation_code": "928",
          "occ_name": "Building Surveyor"
        },
        {
          "occupation_code": "929",
          "occ_name": "Building Systems Planner"
        },
        {
          "occupation_code": "930",
          "occ_name": "Building Technician"
        },
        {
          "occupation_code": "931",
          "occ_name": "Bungee Jump Master"
        },
        {
          "occupation_code": "932",
          "occ_name": "Bunker Control Man Mining"
        },
        {
          "occupation_code": "933",
          "occ_name": "Bunker Control Man Quarry"
        },
        {
          "occupation_code": "934",
          "occ_name": "Burner Operator"
        },
        {
          "occupation_code": "935",
          "occ_name": "Bursar"
        },
        {
          "occupation_code": "936",
          "occ_name": "Burster Mining"
        },
        {
          "occupation_code": "937",
          "occ_name": "Bus Driver"
        },
        {
          "occupation_code": "938",
          "occ_name": "Business Accountant"
        },
        {
          "occupation_code": "939",
          "occ_name": "Business Analyst"
        },
        {
          "occupation_code": "940",
          "occ_name": "Business Coach"
        },
        {
          "occupation_code": "941",
          "occ_name": "Business Consultant"
        },
        {
          "occupation_code": "942",
          "occ_name": "Business Development Manager"
        },
        {
          "occupation_code": "943",
          "occ_name": "Business Director"
        },
        {
          "occupation_code": "944",
          "occ_name": "Business Information Specialist"
        },
        {
          "occupation_code": "945",
          "occ_name": "Business Owner Manual"
        },
        {
          "occupation_code": "946",
          "occ_name": "Business Owner Office Work Only"
        },
        {
          "occupation_code": "947",
          "occ_name": "Business Owner Supervision and Light Manual"
        },
        {
          "occupation_code": "948",
          "occ_name": "Business Owner Travel No Supervision No Manual"
        },
        {
          "occupation_code": "949",
          "occ_name": "Busker"
        },
        {
          "occupation_code": "950",
          "occ_name": "Butcher"
        },
        {
          "occupation_code": "951",
          "occ_name": "Butler"
        },
        {
          "occupation_code": "952",
          "occ_name": "Buyer Retail"
        },
        {
          "occupation_code": "953",
          "occ_name": "Buyer Wool"
        },
        {
          "occupation_code": "954",
          "occ_name": "Cabin Attendant"
        },
        {
          "occupation_code": "955",
          "occ_name": "Cabin Boy"
        },
        {
          "occupation_code": "956",
          "occ_name": "Cabin Crew"
        },
        {
          "occupation_code": "957",
          "occ_name": "Cabinet Minister"
        },
        {
          "occupation_code": "958",
          "occ_name": "Cabinet Secretary"
        },
        {
          "occupation_code": "959",
          "occ_name": "Cable Assembler and Swagger"
        },
        {
          "occupation_code": "960",
          "occ_name": "Cable Car Driver"
        },
        {
          "occupation_code": "961",
          "occ_name": "Cable Car Technician"
        },
        {
          "occupation_code": "962",
          "occ_name": "Cable Layer"
        },
        {
          "occupation_code": "963",
          "occ_name": "Cable Splicer"
        },
        {
          "occupation_code": "964",
          "occ_name": "Cable Tester"
        },
        {
          "occupation_code": "965",
          "occ_name": "Calibrator"
        },
        {
          "occupation_code": "966",
          "occ_name": "Call Centre Agent"
        },
        {
          "occupation_code": "967",
          "occ_name": "Call Centre Operator"
        },
        {
          "occupation_code": "968",
          "occ_name": "Calligrapher"
        },
        {
          "occupation_code": "969",
          "occ_name": "Camera Person"
        },
        {
          "occupation_code": "970",
          "occ_name": "Campmaster"
        },
        {
          "occupation_code": "971",
          "occ_name": "Campsite Manager"
        },
        {
          "occupation_code": "972",
          "occ_name": "Canal Worker"
        },
        {
          "occupation_code": "973",
          "occ_name": "Candidate Attorner"
        },
        {
          "occupation_code": "974",
          "occ_name": "Candlemaker"
        },
        {
          "occupation_code": "975",
          "occ_name": "Cannery Worker"
        },
        {
          "occupation_code": "976",
          "occ_name": "Canteen Assistant"
        },
        {
          "occupation_code": "977",
          "occ_name": "Canteen Manager"
        },
        {
          "occupation_code": "978",
          "occ_name": "Canvas Goods Production Worker"
        },
        {
          "occupation_code": "979",
          "occ_name": "Canvassers"
        },
        {
          "occupation_code": "980",
          "occ_name": "Car Assembly Worker"
        },
        {
          "occupation_code": "981",
          "occ_name": "Car Dealer"
        },
        {
          "occupation_code": "982",
          "occ_name": "Car Guard"
        },
        {
          "occupation_code": "983",
          "occ_name": "Car Mechanic"
        },
        {
          "occupation_code": "984",
          "occ_name": "Car Park Worker"
        },
        {
          "occupation_code": "985",
          "occ_name": "Car Sales Dealer"
        },
        {
          "occupation_code": "986",
          "occ_name": "Car Sales Manager"
        },
        {
          "occupation_code": "987",
          "occ_name": "Car Sales Manager External"
        },
        {
          "occupation_code": "988",
          "occ_name": "Car Salesman"
        },
        {
          "occupation_code": "989",
          "occ_name": "Car Salesperson"
        },
        {
          "occupation_code": "990",
          "occ_name": "Car Salesperson External"
        },
        {
          "occupation_code": "991",
          "occ_name": "Car Trader"
        },
        {
          "occupation_code": "992",
          "occ_name": "Car Upholsterer"
        },
        {
          "occupation_code": "993",
          "occ_name": "Car Wash Manager"
        },
        {
          "occupation_code": "994",
          "occ_name": "Caravan Park Employee"
        },
        {
          "occupation_code": "995",
          "occ_name": "Caravan Park Manager"
        },
        {
          "occupation_code": "996",
          "occ_name": "Caravan Sales Person"
        },
        {
          "occupation_code": "997",
          "occ_name": "Cardinal"
        },
        {
          "occupation_code": "998",
          "occ_name": "Cardio Thoracic Surgeon"
        },
        {
          "occupation_code": "999",
          "occ_name": "Cardiographer"
        },
        {
          "occupation_code": "1000",
          "occ_name": "Cardiologist"
        },
        {
          "occupation_code": "1001",
          "occ_name": "Cardiothoracic Surgeon"
        },
        {
          "occupation_code": "1002",
          "occ_name": "Care Assistant"
        },
        {
          "occupation_code": "1003",
          "occ_name": "Career Consultant"
        },
        {
          "occupation_code": "1004",
          "occ_name": "Careers Adviser"
        },
        {
          "occupation_code": "1005",
          "occ_name": "Careers Consultant"
        },
        {
          "occupation_code": "1006",
          "occ_name": "Careers Officer"
        },
        {
          "occupation_code": "1007",
          "occ_name": "Caregiver"
        },
        {
          "occupation_code": "1008",
          "occ_name": "Caretaker"
        },
        {
          "occupation_code": "1009",
          "occ_name": "Caretaker Gardens and Parks"
        },
        {
          "occupation_code": "1010",
          "occ_name": "Caretaker Parks and Gardens"
        },
        {
          "occupation_code": "1011",
          "occ_name": "Cargo Agent"
        },
        {
          "occupation_code": "1012",
          "occ_name": "Cargo Agent Airport"
        },
        {
          "occupation_code": "1013",
          "occ_name": "Cargo Checker"
        },
        {
          "occupation_code": "1014",
          "occ_name": "Cargo Handler"
        },
        {
          "occupation_code": "1015",
          "occ_name": "Cargo Loader"
        },
        {
          "occupation_code": "1016",
          "occ_name": "Cargo Pilot"
        },
        {
          "occupation_code": "1017",
          "occ_name": "Caricaturist"
        },
        {
          "occupation_code": "1018",
          "occ_name": "Carnival Ride Operator"
        },
        {
          "occupation_code": "1019",
          "occ_name": "Carnival Worker"
        },
        {
          "occupation_code": "1020",
          "occ_name": "Carpenter"
        },
        {
          "occupation_code": "1021",
          "occ_name": "Carpenter Ceiling"
        },
        {
          "occupation_code": "1022",
          "occ_name": "Carpenter Mining"
        },
        {
          "occupation_code": "1023",
          "occ_name": "Carpet Layer"
        },
        {
          "occupation_code": "1024",
          "occ_name": "Carpet Weaver"
        },
        {
          "occupation_code": "1025",
          "occ_name": "Carrier Hod"
        },
        {
          "occupation_code": "1026",
          "occ_name": "Cartage Contractor"
        },
        {
          "occupation_code": "1027",
          "occ_name": "Cartographer"
        },
        {
          "occupation_code": "1028",
          "occ_name": "Cartoonist"
        },
        {
          "occupation_code": "1029",
          "occ_name": "Cartwright"
        },
        {
          "occupation_code": "1030",
          "occ_name": "Carver"
        },
        {
          "occupation_code": "1031",
          "occ_name": "Carver Furniture"
        },
        {
          "occupation_code": "1032",
          "occ_name": "Case Manager"
        },
        {
          "occupation_code": "1033",
          "occ_name": "Cash In Transit Guard"
        },
        {
          "occupation_code": "1034",
          "occ_name": "Cashier"
        },
        {
          "occupation_code": "1035",
          "occ_name": "Cashier Building Society"
        },
        {
          "occupation_code": "1036",
          "occ_name": "Cashier Department Store"
        },
        {
          "occupation_code": "1037",
          "occ_name": "Cashier Supermarket"
        },
        {
          "occupation_code": "1038",
          "occ_name": "Casino Hostess"
        },
        {
          "occupation_code": "1039",
          "occ_name": "Casino Slot Attendant"
        },
        {
          "occupation_code": "1040",
          "occ_name": "Casino Worker"
        },
        {
          "occupation_code": "1041",
          "occ_name": "Casting Agent Film TV Theatre Radio"
        },
        {
          "occupation_code": "1042",
          "occ_name": "Casting Director"
        },
        {
          "occupation_code": "1043",
          "occ_name": "Casting Engineer"
        },
        {
          "occupation_code": "1044",
          "occ_name": "Catalog Compiler"
        },
        {
          "occupation_code": "1045",
          "occ_name": "Cataloger"
        },
        {
          "occupation_code": "1046",
          "occ_name": "Catalogue Compiler"
        },
        {
          "occupation_code": "1047",
          "occ_name": "Cataloguer"
        },
        {
          "occupation_code": "1048",
          "occ_name": "Catechist"
        },
        {
          "occupation_code": "1049",
          "occ_name": "Caterer"
        },
        {
          "occupation_code": "1050",
          "occ_name": "Catering Camp Personnel Oil Rig"
        },
        {
          "occupation_code": "1051",
          "occ_name": "Catering Employee"
        },
        {
          "occupation_code": "1052",
          "occ_name": "Catering Manager"
        },
        {
          "occupation_code": "1053",
          "occ_name": "Cathead Man Oil Rig"
        },
        {
          "occupation_code": "1054",
          "occ_name": "Cattery Worker"
        },
        {
          "occupation_code": "1055",
          "occ_name": "Cattleman"
        },
        {
          "occupation_code": "1056",
          "occ_name": "Ceiling Fixer"
        },
        {
          "occupation_code": "1057",
          "occ_name": "Cellar master"
        },
        {
          "occupation_code": "1058",
          "occ_name": "Cellarman"
        },
        {
          "occupation_code": "1059",
          "occ_name": "Cellist"
        },
        {
          "occupation_code": "1060",
          "occ_name": "Cement Truck Driver"
        },
        {
          "occupation_code": "1061",
          "occ_name": "Cementer Oil Rig"
        },
        {
          "occupation_code": "1062",
          "occ_name": "Cemetery Gardener"
        },
        {
          "occupation_code": "1063",
          "occ_name": "CEO Office Based No Manual Duties"
        },
        {
          "occupation_code": "1064",
          "occ_name": "Ceramicist"
        },
        {
          "occupation_code": "1065",
          "occ_name": "Certified Accountant"
        },
        {
          "occupation_code": "1066",
          "occ_name": "Certified Financial Planner"
        },
        {
          "occupation_code": "1067",
          "occ_name": "Certified Financial Planner Independant"
        },
        {
          "occupation_code": "1068",
          "occ_name": "Certified Fire Investigator"
        },
        {
          "occupation_code": "1069",
          "occ_name": "Certified Medical Assistant"
        },
        {
          "occupation_code": "1070",
          "occ_name": "Certified Nursing Aide Assistant"
        },
        {
          "occupation_code": "1071",
          "occ_name": "Chainhand Oil rig"
        },
        {
          "occupation_code": "1072",
          "occ_name": "Chainsaw Mechanic"
        },
        {
          "occupation_code": "1073",
          "occ_name": "Chair and Couch Maker"
        },
        {
          "occupation_code": "1074",
          "occ_name": "Chairman"
        },
        {
          "occupation_code": "1075",
          "occ_name": "Chairperson"
        },
        {
          "occupation_code": "1076",
          "occ_name": "Chambermaid"
        },
        {
          "occupation_code": "1077",
          "occ_name": "Chancellor Education"
        },
        {
          "occupation_code": "1078",
          "occ_name": "Chaplain"
        },
        {
          "occupation_code": "1079",
          "occ_name": "Chargeman Station"
        },
        {
          "occupation_code": "1080",
          "occ_name": "Charter Captain"
        },
        {
          "occupation_code": "1081",
          "occ_name": "Charter Pilot"
        },
        {
          "occupation_code": "1082",
          "occ_name": "Chartered Accountant"
        },
        {
          "occupation_code": "1083",
          "occ_name": "Chartered Secretary"
        },
        {
          "occupation_code": "1084",
          "occ_name": "Chassis Builder"
        },
        {
          "occupation_code": "1085",
          "occ_name": "Chauffeur"
        },
        {
          "occupation_code": "1086",
          "occ_name": "Cheese maker"
        },
        {
          "occupation_code": "1087",
          "occ_name": "Chef"
        },
        {
          "occupation_code": "1088",
          "occ_name": "Chef de Cuisine"
        },
        {
          "occupation_code": "1089",
          "occ_name": "Chef de Partie"
        },
        {
          "occupation_code": "1090",
          "occ_name": "Chef Head"
        },
        {
          "occupation_code": "1091",
          "occ_name": "Chemical Engineer"
        },
        {
          "occupation_code": "1092",
          "occ_name": "Chemical Lab Technician"
        },
        {
          "occupation_code": "1093",
          "occ_name": "Chemical Processor"
        },
        {
          "occupation_code": "1094",
          "occ_name": "Chemical Specialist"
        },
        {
          "occupation_code": "1095",
          "occ_name": "Chemical Technician"
        },
        {
          "occupation_code": "1096",
          "occ_name": "Chemist"
        },
        {
          "occupation_code": "1097",
          "occ_name": "Chemist Nuclear Plant"
        },
        {
          "occupation_code": "1098",
          "occ_name": "Chemist Pharmaceutical"
        },
        {
          "occupation_code": "1099",
          "occ_name": "Chemist Shop Pharmacist"
        },
        {
          "occupation_code": "1100",
          "occ_name": "Chemist Shop Sales Assistant"
        },
        {
          "occupation_code": "1101",
          "occ_name": "Chicken Farmer"
        },
        {
          "occupation_code": "1102",
          "occ_name": "Chief Editor"
        },
        {
          "occupation_code": "1103",
          "occ_name": "Chief Engineer"
        },
        {
          "occupation_code": "1104",
          "occ_name": "Chief Executive Officer Office Based No Manual Duties"
        },
        {
          "occupation_code": "1105",
          "occ_name": "Chief Financial Officer"
        },
        {
          "occupation_code": "1106",
          "occ_name": "Chief Fire Officer"
        },
        {
          "occupation_code": "1107",
          "occ_name": "Chief Fireman"
        },
        {
          "occupation_code": "1108",
          "occ_name": "Chief Lighting Technician"
        },
        {
          "occupation_code": "1109",
          "occ_name": "Chief Officer"
        },
        {
          "occupation_code": "1110",
          "occ_name": "Chief Operating Officer"
        },
        {
          "occupation_code": "1111",
          "occ_name": "Chief Risk Officer"
        },
        {
          "occupation_code": "1112",
          "occ_name": "Chief Steward"
        },
        {
          "occupation_code": "1113",
          "occ_name": "Child Care Worker"
        },
        {
          "occupation_code": "1114",
          "occ_name": "Childcare Officer"
        },
        {
          "occupation_code": "1115",
          "occ_name": "Children Entertainer"
        },
        {
          "occupation_code": "1116",
          "occ_name": "Chimney Fireplace Builder"
        },
        {
          "occupation_code": "1117",
          "occ_name": "Chimney Sweep"
        },
        {
          "occupation_code": "1118",
          "occ_name": "Chipper"
        },
        {
          "occupation_code": "1119",
          "occ_name": "Chiropodists"
        },
        {
          "occupation_code": "1120",
          "occ_name": "Chiropractor"
        },
        {
          "occupation_code": "1121",
          "occ_name": "Chocolatier"
        },
        {
          "occupation_code": "1122",
          "occ_name": "Choke Setter"
        },
        {
          "occupation_code": "1123",
          "occ_name": "Chopper"
        },
        {
          "occupation_code": "1124",
          "occ_name": "Choreographer"
        },
        {
          "occupation_code": "1125",
          "occ_name": "Choreographer With Professional Dance"
        },
        {
          "occupation_code": "1126",
          "occ_name": "Chorus Conductor"
        },
        {
          "occupation_code": "1127",
          "occ_name": "Chute Operator Mining"
        },
        {
          "occupation_code": "1128",
          "occ_name": "Cinema Attendant"
        },
        {
          "occupation_code": "1129",
          "occ_name": "Cinema Manager"
        },
        {
          "occupation_code": "1130",
          "occ_name": "Circuit Driver"
        },
        {
          "occupation_code": "1131",
          "occ_name": "Circuit Racer"
        },
        {
          "occupation_code": "1132",
          "occ_name": "Circus Artist"
        },
        {
          "occupation_code": "1133",
          "occ_name": "Circus Hand"
        },
        {
          "occupation_code": "1134",
          "occ_name": "Circus Manager"
        },
        {
          "occupation_code": "1135",
          "occ_name": "Circus Workers"
        },
        {
          "occupation_code": "1136",
          "occ_name": "City Treasurer"
        },
        {
          "occupation_code": "1137",
          "occ_name": "Civil Construction Engineer"
        },
        {
          "occupation_code": "1138",
          "occ_name": "Civil Engineer"
        },
        {
          "occupation_code": "1139",
          "occ_name": "Civil Engineering Draftsperson"
        },
        {
          "occupation_code": "1140",
          "occ_name": "Civil Geotechnical Engineer"
        },
        {
          "occupation_code": "1141",
          "occ_name": "Civil Servant"
        },
        {
          "occupation_code": "1142",
          "occ_name": "Civil Technician"
        },
        {
          "occupation_code": "1143",
          "occ_name": "Claims Adjuster"
        },
        {
          "occupation_code": "1144",
          "occ_name": "Claims Administrator"
        },
        {
          "occupation_code": "1145",
          "occ_name": "Claims Assessor"
        },
        {
          "occupation_code": "1146",
          "occ_name": "Claims Broker"
        },
        {
          "occupation_code": "1147",
          "occ_name": "Claims Clerk"
        },
        {
          "occupation_code": "1148",
          "occ_name": "Claims Handler"
        },
        {
          "occupation_code": "1149",
          "occ_name": "Claims Investigator"
        },
        {
          "occupation_code": "1150",
          "occ_name": "Claims Negotiator"
        },
        {
          "occupation_code": "1151",
          "occ_name": "Clairvoyant"
        },
        {
          "occupation_code": "1152",
          "occ_name": "Clam Diver"
        },
        {
          "occupation_code": "1153",
          "occ_name": "Clam Harvester"
        },
        {
          "occupation_code": "1154",
          "occ_name": "Clapper Loader"
        },
        {
          "occupation_code": "1155",
          "occ_name": "Classer Wool"
        },
        {
          "occupation_code": "1156",
          "occ_name": "Classroom Assistant"
        },
        {
          "occupation_code": "1157",
          "occ_name": "Clay Machine Operator"
        },
        {
          "occupation_code": "1158",
          "occ_name": "Cleaner"
        },
        {
          "occupation_code": "1159",
          "occ_name": "Cleaner Carpet"
        },
        {
          "occupation_code": "1160",
          "occ_name": "Cleaner Dry"
        },
        {
          "occupation_code": "1161",
          "occ_name": "Cleaner Factory"
        },
        {
          "occupation_code": "1162",
          "occ_name": "Cleaner Home"
        },
        {
          "occupation_code": "1163",
          "occ_name": "Cleaner Office"
        },
        {
          "occupation_code": "1164",
          "occ_name": "Cleaner School"
        },
        {
          "occupation_code": "1165",
          "occ_name": "Cleaner Station"
        },
        {
          "occupation_code": "1166",
          "occ_name": "Cleaner Store"
        },
        {
          "occupation_code": "1167",
          "occ_name": "Cleaner Window Commercial"
        },
        {
          "occupation_code": "1168",
          "occ_name": "Cleaner Window Domestic"
        },
        {
          "occupation_code": "1169",
          "occ_name": "Cleaner Zoo"
        },
        {
          "occupation_code": "1170",
          "occ_name": "Clergy"
        },
        {
          "occupation_code": "1171",
          "occ_name": "Clergyman"
        },
        {
          "occupation_code": "1172",
          "occ_name": "Cleric"
        },
        {
          "occupation_code": "1173",
          "occ_name": "Clerical"
        },
        {
          "occupation_code": "1174",
          "occ_name": "Clerical Administrator"
        },
        {
          "occupation_code": "1175",
          "occ_name": "Clerical Assistant Officer Worker"
        },
        {
          "occupation_code": "1176",
          "occ_name": "Clerk"
        },
        {
          "occupation_code": "1177",
          "occ_name": "Clerk Building Society"
        },
        {
          "occupation_code": "1178",
          "occ_name": "Clerk Data Entry"
        },
        {
          "occupation_code": "1179",
          "occ_name": "Clerk Judges"
        },
        {
          "occupation_code": "1180",
          "occ_name": "Clerk Law"
        },
        {
          "occupation_code": "1181",
          "occ_name": "Clerk New Business"
        },
        {
          "occupation_code": "1182",
          "occ_name": "Clerk of Course Horse Racing"
        },
        {
          "occupation_code": "1183",
          "occ_name": "Clerk of the Court"
        },
        {
          "occupation_code": "1184",
          "occ_name": "Clerk of Works"
        },
        {
          "occupation_code": "1185",
          "occ_name": "Clerk Postal"
        },
        {
          "occupation_code": "1186",
          "occ_name": "Clerk Telephone Betting"
        },
        {
          "occupation_code": "1187",
          "occ_name": "Clerk Town"
        },
        {
          "occupation_code": "1188",
          "occ_name": "Clerk Ward"
        },
        {
          "occupation_code": "1189",
          "occ_name": "Clicker"
        },
        {
          "occupation_code": "1190",
          "occ_name": "Client Advisor"
        },
        {
          "occupation_code": "1191",
          "occ_name": "Client Liaison Officer No Travelling"
        },
        {
          "occupation_code": "1192",
          "occ_name": "Client Liaison Officer Travelling"
        },
        {
          "occupation_code": "1193",
          "occ_name": "Client Service Manager"
        },
        {
          "occupation_code": "1194",
          "occ_name": "Clinical Director"
        },
        {
          "occupation_code": "1195",
          "occ_name": "Clinical Laboratory Scientist"
        },
        {
          "occupation_code": "1196",
          "occ_name": "Clinical Scientist"
        },
        {
          "occupation_code": "1197",
          "occ_name": "Clinical Technologist"
        },
        {
          "occupation_code": "1198",
          "occ_name": "Cloakroom Attendant"
        },
        {
          "occupation_code": "1199",
          "occ_name": "Clock Repairer"
        },
        {
          "occupation_code": "1200",
          "occ_name": "Clockmaker"
        },
        {
          "occupation_code": "1201",
          "occ_name": "Clothes Designer"
        },
        {
          "occupation_code": "1202",
          "occ_name": "Clothing and Soft Furnishing Production Worker"
        },
        {
          "occupation_code": "1203",
          "occ_name": "Clothing Designer"
        },
        {
          "occupation_code": "1204",
          "occ_name": "Clothing Manufacturer"
        },
        {
          "occupation_code": "1205",
          "occ_name": "Clothing Production Worker"
        },
        {
          "occupation_code": "1206",
          "occ_name": "Clown"
        },
        {
          "occupation_code": "1207",
          "occ_name": "Clown Rodeo"
        },
        {
          "occupation_code": "1208",
          "occ_name": "Club Steward"
        },
        {
          "occupation_code": "1209",
          "occ_name": "CNC Driller"
        },
        {
          "occupation_code": "1210",
          "occ_name": "CNC Programmer"
        },
        {
          "occupation_code": "1211",
          "occ_name": "CNC Router"
        },
        {
          "occupation_code": "1212",
          "occ_name": "CNC Turner"
        },
        {
          "occupation_code": "1213",
          "occ_name": "Coach"
        },
        {
          "occupation_code": "1214",
          "occ_name": "Coach Driver"
        },
        {
          "occupation_code": "1215",
          "occ_name": "Coach Sports Full Time and Employed"
        },
        {
          "occupation_code": "1216",
          "occ_name": "Coach Sports Part Time or Self Employed"
        },
        {
          "occupation_code": "1217",
          "occ_name": "Coal Cutter Mining"
        },
        {
          "occupation_code": "1218",
          "occ_name": "Coal Hauler Mining"
        },
        {
          "occupation_code": "1219",
          "occ_name": "Cobbler"
        },
        {
          "occupation_code": "1220",
          "occ_name": "Coffee Shop Assistant"
        },
        {
          "occupation_code": "1221",
          "occ_name": "Coffee Shop Proprietor"
        },
        {
          "occupation_code": "1222",
          "occ_name": "Coffeehouse Bartender"
        },
        {
          "occupation_code": "1223",
          "occ_name": "Coffin Maker"
        },
        {
          "occupation_code": "1224",
          "occ_name": "Coil Connector"
        },
        {
          "occupation_code": "1225",
          "occ_name": "Coil Inspector"
        },
        {
          "occupation_code": "1226",
          "occ_name": "Coil Shaper"
        },
        {
          "occupation_code": "1227",
          "occ_name": "Coil Taper"
        },
        {
          "occupation_code": "1228",
          "occ_name": "Coil Winder"
        },
        {
          "occupation_code": "1229",
          "occ_name": "Coil Winding Specialist"
        },
        {
          "occupation_code": "1230",
          "occ_name": "Coiler"
        },
        {
          "occupation_code": "1231",
          "occ_name": "Cold Insulator"
        },
        {
          "occupation_code": "1232",
          "occ_name": "Cold Technician"
        },
        {
          "occupation_code": "1233",
          "occ_name": "Collector Debt"
        },
        {
          "occupation_code": "1234",
          "occ_name": "Collector Garbage"
        },
        {
          "occupation_code": "1235",
          "occ_name": "Collector Refuse"
        },
        {
          "occupation_code": "1236",
          "occ_name": "Collector Rent"
        },
        {
          "occupation_code": "1237",
          "occ_name": "Collector Tax"
        },
        {
          "occupation_code": "1238",
          "occ_name": "College Professor"
        },
        {
          "occupation_code": "1239",
          "occ_name": "College Student"
        },
        {
          "occupation_code": "1240",
          "occ_name": "Collier Mining"
        },
        {
          "occupation_code": "1241",
          "occ_name": "Columnist"
        },
        {
          "occupation_code": "1242",
          "occ_name": "Columnist Media International Assignment"
        },
        {
          "occupation_code": "1243",
          "occ_name": "Columnist Media Local Assignment"
        },
        {
          "occupation_code": "1244",
          "occ_name": "Comedian"
        },
        {
          "occupation_code": "1245",
          "occ_name": "Comission Administrator"
        },
        {
          "occupation_code": "1246",
          "occ_name": "Commando"
        },
        {
          "occupation_code": "1247",
          "occ_name": "Commercial Artist"
        },
        {
          "occupation_code": "1248",
          "occ_name": "Commercial Aviator"
        },
        {
          "occupation_code": "1249",
          "occ_name": "Commercial Fisherman"
        },
        {
          "occupation_code": "1250",
          "occ_name": "Commercial Graphic Designer"
        },
        {
          "occupation_code": "1251",
          "occ_name": "Commercial Pilot"
        },
        {
          "occupation_code": "1252",
          "occ_name": "Commercial Traveler"
        },
        {
          "occupation_code": "1253",
          "occ_name": "Commercial Window Washer"
        },
        {
          "occupation_code": "1254",
          "occ_name": "Commis Chef"
        },
        {
          "occupation_code": "1255",
          "occ_name": "Commissioner"
        },
        {
          "occupation_code": "1256",
          "occ_name": "Commodities Broker"
        },
        {
          "occupation_code": "1257",
          "occ_name": "Commodities Trader"
        },
        {
          "occupation_code": "1258",
          "occ_name": "Commodity Broker"
        },
        {
          "occupation_code": "1259",
          "occ_name": "Commodity Traders"
        },
        {
          "occupation_code": "1260",
          "occ_name": "Communications Consultant"
        },
        {
          "occupation_code": "1261",
          "occ_name": "Communications Director"
        },
        {
          "occupation_code": "1262",
          "occ_name": "Communications Specialist"
        },
        {
          "occupation_code": "1263",
          "occ_name": "Communications Trainer"
        },
        {
          "occupation_code": "1264",
          "occ_name": "Community Support Worker"
        },
        {
          "occupation_code": "1265",
          "occ_name": "Community Worker"
        },
        {
          "occupation_code": "1266",
          "occ_name": "Commuter Pilot"
        },
        {
          "occupation_code": "1267",
          "occ_name": "Company Accountant"
        },
        {
          "occupation_code": "1268",
          "occ_name": "Company Director"
        },
        {
          "occupation_code": "1269",
          "occ_name": "Company Engineer"
        },
        {
          "occupation_code": "1270",
          "occ_name": "Company Secretary"
        },
        {
          "occupation_code": "1271",
          "occ_name": "Company Treasurer"
        },
        {
          "occupation_code": "1272",
          "occ_name": "Compliance Manager"
        },
        {
          "occupation_code": "1273",
          "occ_name": "Composer"
        },
        {
          "occupation_code": "1274",
          "occ_name": "Composing Artist"
        },
        {
          "occupation_code": "1275",
          "occ_name": "Compositor"
        },
        {
          "occupation_code": "1276",
          "occ_name": "Compressor Operator"
        },
        {
          "occupation_code": "1277",
          "occ_name": "Computer Accounts Clerk"
        },
        {
          "occupation_code": "1278",
          "occ_name": "Computer Aided Design Draftsperson"
        },
        {
          "occupation_code": "1279",
          "occ_name": "Computer Aided Designer"
        },
        {
          "occupation_code": "1280",
          "occ_name": "Computer Analyst"
        },
        {
          "occupation_code": "1281",
          "occ_name": "Computer Consultant"
        },
        {
          "occupation_code": "1282",
          "occ_name": "Computer Contractor"
        },
        {
          "occupation_code": "1283",
          "occ_name": "Computer Data Entry Operator"
        },
        {
          "occupation_code": "1284",
          "occ_name": "Computer Design Manager"
        },
        {
          "occupation_code": "1285",
          "occ_name": "Computer Engineer"
        },
        {
          "occupation_code": "1286",
          "occ_name": "Computer Keyboard Operator"
        },
        {
          "occupation_code": "1287",
          "occ_name": "Computer Machine Operator"
        },
        {
          "occupation_code": "1288",
          "occ_name": "Computer Network Controller"
        },
        {
          "occupation_code": "1289",
          "occ_name": "Computer Network Systems Operator"
        },
        {
          "occupation_code": "1290",
          "occ_name": "Computer Operations Supervisor"
        },
        {
          "occupation_code": "1291",
          "occ_name": "Computer Programmer"
        },
        {
          "occupation_code": "1292",
          "occ_name": "Computer Project Leader"
        },
        {
          "occupation_code": "1293",
          "occ_name": "Computer Repairer"
        },
        {
          "occupation_code": "1294",
          "occ_name": "Computer Repairman"
        },
        {
          "occupation_code": "1295",
          "occ_name": "Computer Sales Representative"
        },
        {
          "occupation_code": "1296",
          "occ_name": "Computer Scientist"
        },
        {
          "occupation_code": "1297",
          "occ_name": "Computer Services Manager"
        },
        {
          "occupation_code": "1298",
          "occ_name": "Computer Software Engineer"
        },
        {
          "occupation_code": "1299",
          "occ_name": "Computer Supervisor"
        },
        {
          "occupation_code": "1300",
          "occ_name": "Computer Systems Analyst"
        },
        {
          "occupation_code": "1301",
          "occ_name": "Computer Systems Manager"
        },
        {
          "occupation_code": "1302",
          "occ_name": "Computer Technician"
        },
        {
          "occupation_code": "1303",
          "occ_name": "Concierge"
        },
        {
          "occupation_code": "1304",
          "occ_name": "Conciliator"
        },
        {
          "occupation_code": "1305",
          "occ_name": "Concrete Machine Operator"
        },
        {
          "occupation_code": "1306",
          "occ_name": "Concrete Mixer Driver"
        },
        {
          "occupation_code": "1307",
          "occ_name": "Concretor"
        },
        {
          "occupation_code": "1308",
          "occ_name": "Concrfete Technologist"
        },
        {
          "occupation_code": "1309",
          "occ_name": "Conductor Music"
        },
        {
          "occupation_code": "1310",
          "occ_name": "Conductor Train"
        },
        {
          "occupation_code": "1311",
          "occ_name": "Confectioner"
        },
        {
          "occupation_code": "1312",
          "occ_name": "Conference Manager"
        },
        {
          "occupation_code": "1313",
          "occ_name": "Conference Organizer"
        },
        {
          "occupation_code": "1314",
          "occ_name": "Conjurer"
        },
        {
          "occupation_code": "1315",
          "occ_name": "Conservationist"
        },
        {
          "occupation_code": "1316",
          "occ_name": "Constable"
        },
        {
          "occupation_code": "1317",
          "occ_name": "Construction Economist"
        },
        {
          "occupation_code": "1318",
          "occ_name": "Construction Electrician"
        },
        {
          "occupation_code": "1319",
          "occ_name": "Construction Engineer"
        },
        {
          "occupation_code": "1320",
          "occ_name": "Construction Estimator"
        },
        {
          "occupation_code": "1321",
          "occ_name": "Construction Inspector"
        },
        {
          "occupation_code": "1322",
          "occ_name": "Construction Mechanic"
        },
        {
          "occupation_code": "1323",
          "occ_name": "Construction Plant Driver"
        },
        {
          "occupation_code": "1324",
          "occ_name": "Construction Project Manager"
        },
        {
          "occupation_code": "1325",
          "occ_name": "Construction Superintendent"
        },
        {
          "occupation_code": "1326",
          "occ_name": "Construction Supervisor"
        },
        {
          "occupation_code": "1327",
          "occ_name": "Construction Technician"
        },
        {
          "occupation_code": "1328",
          "occ_name": "Construction Underwater Worker"
        },
        {
          "occupation_code": "1329",
          "occ_name": "Construction Worker"
        },
        {
          "occupation_code": "1330",
          "occ_name": "Consulate Employee"
        },
        {
          "occupation_code": "1331",
          "occ_name": "Consultant"
        },
        {
          "occupation_code": "1332",
          "occ_name": "Consultant Business"
        },
        {
          "occupation_code": "1333",
          "occ_name": "Consultant Financial"
        },
        {
          "occupation_code": "1334",
          "occ_name": "Consultant Immigration"
        },
        {
          "occupation_code": "1335",
          "occ_name": "Consultant Industrial Relations"
        },
        {
          "occupation_code": "1336",
          "occ_name": "Consultant Investment"
        },
        {
          "occupation_code": "1337",
          "occ_name": "Consultant IT"
        },
        {
          "occupation_code": "1338",
          "occ_name": "Consultant Management"
        },
        {
          "occupation_code": "1339",
          "occ_name": "Consultant Political"
        },
        {
          "occupation_code": "1340",
          "occ_name": "Consultant Property"
        },
        {
          "occupation_code": "1341",
          "occ_name": "Consultant Tax"
        },
        {
          "occupation_code": "1342",
          "occ_name": "Consulting Assistant"
        },
        {
          "occupation_code": "1343",
          "occ_name": "Consumer Interviewer"
        },
        {
          "occupation_code": "1344",
          "occ_name": "Contact Lens Technician"
        },
        {
          "occupation_code": "1345",
          "occ_name": "Container Ship Crew"
        },
        {
          "occupation_code": "1346",
          "occ_name": "Container Sip Officer"
        },
        {
          "occupation_code": "1347",
          "occ_name": "Content Creator"
        },
        {
          "occupation_code": "1348",
          "occ_name": "Contract Worker"
        },
        {
          "occupation_code": "1349",
          "occ_name": "Contractor"
        },
        {
          "occupation_code": "1350",
          "occ_name": "Contractor Haulage"
        },
        {
          "occupation_code": "1351",
          "occ_name": "Contractor Ironing"
        },
        {
          "occupation_code": "1352",
          "occ_name": "Contracts Clerk"
        },
        {
          "occupation_code": "1353",
          "occ_name": "Control Cashier"
        },
        {
          "occupation_code": "1354",
          "occ_name": "Control Clerk"
        },
        {
          "occupation_code": "1355",
          "occ_name": "Control Engineer"
        },
        {
          "occupation_code": "1356",
          "occ_name": "Control Room Operator"
        },
        {
          "occupation_code": "1357",
          "occ_name": "Control Room Operator Nuclear Power Plant"
        },
        {
          "occupation_code": "1358",
          "occ_name": "Controller Disease and Insect"
        },
        {
          "occupation_code": "1359",
          "occ_name": "Convenience Store Proprietor"
        },
        {
          "occupation_code": "1360",
          "occ_name": "Convenience Store Sales Assistant"
        },
        {
          "occupation_code": "1361",
          "occ_name": "Convention Coordinator"
        },
        {
          "occupation_code": "1362",
          "occ_name": "Convention Manager"
        },
        {
          "occupation_code": "1363",
          "occ_name": "Conveyancer"
        },
        {
          "occupation_code": "1364",
          "occ_name": "Cook"
        },
        {
          "occupation_code": "1365",
          "occ_name": "Coordinator Events"
        },
        {
          "occupation_code": "1366",
          "occ_name": "Coordinator Marketing"
        },
        {
          "occupation_code": "1367",
          "occ_name": "Coppersmith"
        },
        {
          "occupation_code": "1368",
          "occ_name": "Copy Machine Mechanic"
        },
        {
          "occupation_code": "1369",
          "occ_name": "Copy Typist"
        },
        {
          "occupation_code": "1370",
          "occ_name": "Copywriter"
        },
        {
          "occupation_code": "1371",
          "occ_name": "Cordwainer"
        },
        {
          "occupation_code": "1372",
          "occ_name": "Cork Harvester"
        },
        {
          "occupation_code": "1373",
          "occ_name": "Cork Worker"
        },
        {
          "occupation_code": "1374",
          "occ_name": "Corporate Lawyer"
        },
        {
          "occupation_code": "1375",
          "occ_name": "Corporate Services manager"
        },
        {
          "occupation_code": "1376",
          "occ_name": "Correspondent"
        },
        {
          "occupation_code": "1377",
          "occ_name": "Cosmetician"
        },
        {
          "occupation_code": "1378",
          "occ_name": "Cosmonaut"
        },
        {
          "occupation_code": "1379",
          "occ_name": "Cost Accountant"
        },
        {
          "occupation_code": "1380",
          "occ_name": "Cost Analyst"
        },
        {
          "occupation_code": "1381",
          "occ_name": "Cost Management Accountant"
        },
        {
          "occupation_code": "1382",
          "occ_name": "Costume Designer"
        },
        {
          "occupation_code": "1383",
          "occ_name": "Courier"
        },
        {
          "occupation_code": "1384",
          "occ_name": "Courier Bicycle"
        },
        {
          "occupation_code": "1385",
          "occ_name": "Court Assistant"
        },
        {
          "occupation_code": "1386",
          "occ_name": "Court Bailiff"
        },
        {
          "occupation_code": "1387",
          "occ_name": "Court Officer"
        },
        {
          "occupation_code": "1388",
          "occ_name": "Court Recorder"
        },
        {
          "occupation_code": "1389",
          "occ_name": "Court Registrar"
        },
        {
          "occupation_code": "1390",
          "occ_name": "Court Reporter"
        },
        {
          "occupation_code": "1391",
          "occ_name": "Court Stenographer"
        },
        {
          "occupation_code": "1392",
          "occ_name": "Crane Chaser"
        },
        {
          "occupation_code": "1393",
          "occ_name": "Crane Driver"
        },
        {
          "occupation_code": "1394",
          "occ_name": "Crane Operator"
        },
        {
          "occupation_code": "1395",
          "occ_name": "Crane Operator Assistant"
        },
        {
          "occupation_code": "1396",
          "occ_name": "Crane Operator Oil Rig"
        },
        {
          "occupation_code": "1397",
          "occ_name": "Creative Coordinator"
        },
        {
          "occupation_code": "1398",
          "occ_name": "Creative Director"
        },
        {
          "occupation_code": "1399",
          "occ_name": "Creative Executive"
        },
        {
          "occupation_code": "1400",
          "occ_name": "Creative Strategist"
        },
        {
          "occupation_code": "1401",
          "occ_name": "Credit Agent No Travel"
        },
        {
          "occupation_code": "1402",
          "occ_name": "Credit Agent Travel"
        },
        {
          "occupation_code": "1403",
          "occ_name": "Credit Analyst"
        },
        {
          "occupation_code": "1404",
          "occ_name": "Credit Clerk"
        },
        {
          "occupation_code": "1405",
          "occ_name": "Credit Co Ordinator"
        },
        {
          "occupation_code": "1406",
          "occ_name": "Credit Control Clerk"
        },
        {
          "occupation_code": "1407",
          "occ_name": "Credit Control Manager"
        },
        {
          "occupation_code": "1408",
          "occ_name": "Credit Control Supervisor"
        },
        {
          "occupation_code": "1409",
          "occ_name": "Credit Officer"
        },
        {
          "occupation_code": "1410",
          "occ_name": "Crew Container Ship"
        },
        {
          "occupation_code": "1411",
          "occ_name": "Crew Cruise Liner"
        },
        {
          "occupation_code": "1412",
          "occ_name": "Crew Ferry"
        },
        {
          "occupation_code": "1413",
          "occ_name": "Crew Hovercraft"
        },
        {
          "occupation_code": "1414",
          "occ_name": "Crew Lifeboat Not Shore Based Not Returning to Port Daily"
        },
        {
          "occupation_code": "1415",
          "occ_name": "Crew Lifeboat Shore Based Returning to Port Daily"
        },
        {
          "occupation_code": "1416",
          "occ_name": "Crew Member"
        },
        {
          "occupation_code": "1417",
          "occ_name": "Crew Salvage Vessel"
        },
        {
          "occupation_code": "1418",
          "occ_name": "Crime Intelligence Officer"
        },
        {
          "occupation_code": "1419",
          "occ_name": "Crime Scene Analyst"
        },
        {
          "occupation_code": "1420",
          "occ_name": "Criminal Investigator"
        },
        {
          "occupation_code": "1421",
          "occ_name": "Criminal Profiler"
        },
        {
          "occupation_code": "1422",
          "occ_name": "Criminal Psychologist"
        },
        {
          "occupation_code": "1423",
          "occ_name": "Criminologist"
        },
        {
          "occupation_code": "1424",
          "occ_name": "Crofter"
        },
        {
          "occupation_code": "1425",
          "occ_name": "Crop Agent"
        },
        {
          "occupation_code": "1426",
          "occ_name": "Crop Broker"
        },
        {
          "occupation_code": "1427",
          "occ_name": "Crop Consultant"
        },
        {
          "occupation_code": "1428",
          "occ_name": "Crop Duster"
        },
        {
          "occupation_code": "1429",
          "occ_name": "Crop Dusting Pilot"
        },
        {
          "occupation_code": "1430",
          "occ_name": "Crop Farmer"
        },
        {
          "occupation_code": "1431",
          "occ_name": "Crop Harvester"
        },
        {
          "occupation_code": "1432",
          "occ_name": "Crop Specialist"
        },
        {
          "occupation_code": "1433",
          "occ_name": "Crop Sprayer"
        },
        {
          "occupation_code": "1434",
          "occ_name": "Crossing Keeper"
        },
        {
          "occupation_code": "1435",
          "occ_name": "Croupier"
        },
        {
          "occupation_code": "1436",
          "occ_name": "Cruise Liner Crew"
        },
        {
          "occupation_code": "1437",
          "occ_name": "Cruise Liner Officer"
        },
        {
          "occupation_code": "1438",
          "occ_name": "Cruiser Timber"
        },
        {
          "occupation_code": "1439",
          "occ_name": "Crusher Operator Mining"
        },
        {
          "occupation_code": "1440",
          "occ_name": "Cryptocurrency Broker"
        },
        {
          "occupation_code": "1441",
          "occ_name": "Cryptocurrency Trader"
        },
        {
          "occupation_code": "1442",
          "occ_name": "Culinary Manager"
        },
        {
          "occupation_code": "1443",
          "occ_name": "Culinary Scientist"
        },
        {
          "occupation_code": "1444",
          "occ_name": "Culinary Supervisor"
        },
        {
          "occupation_code": "1445",
          "occ_name": "Cultivar Developer"
        },
        {
          "occupation_code": "1446",
          "occ_name": "Cultivator"
        },
        {
          "occupation_code": "1447",
          "occ_name": "Curator"
        },
        {
          "occupation_code": "1448",
          "occ_name": "Curator Art Gallery"
        },
        {
          "occupation_code": "1449",
          "occ_name": "Curator Horticulture"
        },
        {
          "occupation_code": "1450",
          "occ_name": "Curator Library"
        },
        {
          "occupation_code": "1451",
          "occ_name": "Curator Museum"
        },
        {
          "occupation_code": "1452",
          "occ_name": "Curator Parks and Gardens"
        },
        {
          "occupation_code": "1453",
          "occ_name": "Curator Zoo"
        },
        {
          "occupation_code": "1454",
          "occ_name": "Curer Fish"
        },
        {
          "occupation_code": "1455",
          "occ_name": "Curer Rubber"
        },
        {
          "occupation_code": "1456",
          "occ_name": "Currency Clerk"
        },
        {
          "occupation_code": "1457",
          "occ_name": "Currency Mercant"
        },
        {
          "occupation_code": "1458",
          "occ_name": "Currency Trader"
        },
        {
          "occupation_code": "1459",
          "occ_name": "Custodian"
        },
        {
          "occupation_code": "1460",
          "occ_name": "Customer Care Representative"
        },
        {
          "occupation_code": "1461",
          "occ_name": "Customer Liaison Manager"
        },
        {
          "occupation_code": "1462",
          "occ_name": "Customer Liaison Officer"
        },
        {
          "occupation_code": "1463",
          "occ_name": "Customer Service Manager"
        },
        {
          "occupation_code": "1464",
          "occ_name": "Customer Support Manager"
        },
        {
          "occupation_code": "1465",
          "occ_name": "Customs Agent"
        },
        {
          "occupation_code": "1466",
          "occ_name": "Customs and Excise Official"
        },
        {
          "occupation_code": "1467",
          "occ_name": "Customs Inspector"
        },
        {
          "occupation_code": "1468",
          "occ_name": "Customs Liaison Clerk"
        },
        {
          "occupation_code": "1469",
          "occ_name": "Customs Officer"
        },
        {
          "occupation_code": "1470",
          "occ_name": "Cutter"
        },
        {
          "occupation_code": "1471",
          "occ_name": "Cutter Diamond"
        },
        {
          "occupation_code": "1472",
          "occ_name": "Cutter Die"
        },
        {
          "occupation_code": "1473",
          "occ_name": "Cutter Gem"
        },
        {
          "occupation_code": "1474",
          "occ_name": "Cutter Glass"
        },
        {
          "occupation_code": "1475",
          "occ_name": "Cutter Paper"
        },
        {
          "occupation_code": "1476",
          "occ_name": "Cutter Rubber"
        },
        {
          "occupation_code": "1477",
          "occ_name": "Cutter Tree"
        },
        {
          "occupation_code": "1478",
          "occ_name": "Cutter Turf"
        },
        {
          "occupation_code": "1479",
          "occ_name": "Cyberneticist"
        },
        {
          "occupation_code": "1480",
          "occ_name": "Cytologist"
        },
        {
          "occupation_code": "1481",
          "occ_name": "Cytotaxonomist"
        },
        {
          "occupation_code": "1482",
          "occ_name": "Dairy Farmer"
        },
        {
          "occupation_code": "1483",
          "occ_name": "Dairy Inspector"
        },
        {
          "occupation_code": "1485",
          "occ_name": "Dam Construction Worker"
        },
        {
          "occupation_code": "1486",
          "occ_name": "Dam Maintenance Worker"
        },
        {
          "occupation_code": "1487",
          "occ_name": "Dance Instructor"
        },
        {
          "occupation_code": "1488",
          "occ_name": "Dancer"
        },
        {
          "occupation_code": "1489",
          "occ_name": "Dangerous and Heavy Goods Driver"
        },
        {
          "occupation_code": "1490",
          "occ_name": "Darkroom Technician"
        },
        {
          "occupation_code": "1491",
          "occ_name": "Data Analyst"
        },
        {
          "occupation_code": "1492",
          "occ_name": "Data Capturer"
        },
        {
          "occupation_code": "1493",
          "occ_name": "Data Communications Network Controller"
        },
        {
          "occupation_code": "1494",
          "occ_name": "Data Control Clerk"
        },
        {
          "occupation_code": "1495",
          "occ_name": "Data Control Manager"
        },
        {
          "occupation_code": "1496",
          "occ_name": "Data Control Supervisor"
        },
        {
          "occupation_code": "1497",
          "occ_name": "Data Engineer"
        },
        {
          "occupation_code": "1498",
          "occ_name": "Data Entry Clerk"
        },
        {
          "occupation_code": "1499",
          "occ_name": "Data Manager"
        },
        {
          "occupation_code": "1500",
          "occ_name": "Data Modeler"
        },
        {
          "occupation_code": "1501",
          "occ_name": "Data Processing Executive"
        },
        {
          "occupation_code": "1502",
          "occ_name": "Data Processing Manager"
        },
        {
          "occupation_code": "1503",
          "occ_name": "Data Protection Officer"
        },
        {
          "occupation_code": "1504",
          "occ_name": "Data Scientist"
        },
        {
          "occupation_code": "1505",
          "occ_name": "Data Validation Clerk"
        },
        {
          "occupation_code": "1506",
          "occ_name": "Database Administrator"
        },
        {
          "occupation_code": "1507",
          "occ_name": "Database Design Specialist"
        },
        {
          "occupation_code": "1508",
          "occ_name": "Day Care Assistant"
        },
        {
          "occupation_code": "1509",
          "occ_name": "Daycare Assistant"
        },
        {
          "occupation_code": "1510",
          "occ_name": "Daycare Provider"
        },
        {
          "occupation_code": "1511",
          "occ_name": "Deacon"
        },
        {
          "occupation_code": "1512",
          "occ_name": "Dealer Financial"
        },
        {
          "occupation_code": "1513",
          "occ_name": "Dealer Principal"
        },
        {
          "occupation_code": "1514",
          "occ_name": "Dealers Gaming"
        },
        {
          "occupation_code": "1515",
          "occ_name": "Dean"
        },
        {
          "occupation_code": "1516",
          "occ_name": "Debt Collector Field"
        },
        {
          "occupation_code": "1517",
          "occ_name": "Debt Collector Office Bound"
        },
        {
          "occupation_code": "1518",
          "occ_name": "Debtors Clerk"
        },
        {
          "occupation_code": "1519",
          "occ_name": "Deck Hand"
        },
        {
          "occupation_code": "1520",
          "occ_name": "Deck Hand Merchant Marine"
        },
        {
          "occupation_code": "1521",
          "occ_name": "Deck Mate"
        },
        {
          "occupation_code": "1522",
          "occ_name": "Deckman Mining"
        },
        {
          "occupation_code": "1523",
          "occ_name": "Decontamination Worker"
        },
        {
          "occupation_code": "1524",
          "occ_name": "Decorative Painter"
        },
        {
          "occupation_code": "1525",
          "occ_name": "Decorator Glass"
        },
        {
          "occupation_code": "1526",
          "occ_name": "Decorator Interior Design and Consulting Only"
        },
        {
          "occupation_code": "1527",
          "occ_name": "Decorator Interior Excluding Design and Consulting"
        },
        {
          "occupation_code": "1528",
          "occ_name": "Deep Sea Diver"
        },
        {
          "occupation_code": "1529",
          "occ_name": "Deep Sea Fisherman"
        },
        {
          "occupation_code": "1530",
          "occ_name": "Delegate"
        },
        {
          "occupation_code": "1531",
          "occ_name": "Delivery Driver"
        },
        {
          "occupation_code": "1532",
          "occ_name": "Delivery Postal"
        },
        {
          "occupation_code": "1533",
          "occ_name": "Demand Planner"
        },
        {
          "occupation_code": "1534",
          "occ_name": "Demi Chef"
        },
        {
          "occupation_code": "1535",
          "occ_name": "Demographer"
        },
        {
          "occupation_code": "1536",
          "occ_name": "Demolition Diver"
        },
        {
          "occupation_code": "1537",
          "occ_name": "Demolition or Ordinance Disposal"
        },
        {
          "occupation_code": "1538",
          "occ_name": "Demolition Worker"
        },
        {
          "occupation_code": "1539",
          "occ_name": "Demonstrator Aircraft"
        },
        {
          "occupation_code": "1540",
          "occ_name": "Dental Prosthetist"
        },
        {
          "occupation_code": "1541",
          "occ_name": "Dentist"
        },
        {
          "occupation_code": "1542",
          "occ_name": "Denturist"
        },
        {
          "occupation_code": "1543",
          "occ_name": "Department Head"
        },
        {
          "occupation_code": "1544",
          "occ_name": "Department Manager"
        },
        {
          "occupation_code": "1545",
          "occ_name": "Deputy Captain"
        },
        {
          "occupation_code": "1546",
          "occ_name": "Deputy Headmaster"
        },
        {
          "occupation_code": "1547",
          "occ_name": "Deputy Headmistress"
        },
        {
          "occupation_code": "1548",
          "occ_name": "Deputy Treasurer"
        },
        {
          "occupation_code": "1549",
          "occ_name": "Deputy Vice Chancellor Education"
        },
        {
          "occupation_code": "1550",
          "occ_name": "Derivatives Trader"
        },
        {
          "occupation_code": "1551",
          "occ_name": "Dermatologist"
        },
        {
          "occupation_code": "1552",
          "occ_name": "Derrickman Oil rig"
        },
        {
          "occupation_code": "1553",
          "occ_name": "Designer"
        },
        {
          "occupation_code": "1554",
          "occ_name": "Designer Costume"
        },
        {
          "occupation_code": "1555",
          "occ_name": "Designer Fashion"
        },
        {
          "occupation_code": "1556",
          "occ_name": "Designer Garden"
        },
        {
          "occupation_code": "1557",
          "occ_name": "Designer Graphic"
        },
        {
          "occupation_code": "1558",
          "occ_name": "Designer Industrial"
        },
        {
          "occupation_code": "1559",
          "occ_name": "Designer Interior"
        },
        {
          "occupation_code": "1560",
          "occ_name": "Designer Jewellery"
        },
        {
          "occupation_code": "1561",
          "occ_name": "Designer Kitchen"
        },
        {
          "occupation_code": "1562",
          "occ_name": "Designer Sign"
        },
        {
          "occupation_code": "1563",
          "occ_name": "Designer Textile"
        },
        {
          "occupation_code": "1564",
          "occ_name": "Desktop Publisher"
        },
        {
          "occupation_code": "1565",
          "occ_name": "Detail Designer"
        },
        {
          "occupation_code": "1566",
          "occ_name": "Detailer"
        },
        {
          "occupation_code": "1567",
          "occ_name": "Detailer Motor Vehicle"
        },
        {
          "occupation_code": "1568",
          "occ_name": "Developer Property"
        },
        {
          "occupation_code": "1569",
          "occ_name": "Development Chemist"
        },
        {
          "occupation_code": "1570",
          "occ_name": "Development Consultant"
        },
        {
          "occupation_code": "1571",
          "occ_name": "Development Engineer"
        },
        {
          "occupation_code": "1572",
          "occ_name": "Development Planner"
        },
        {
          "occupation_code": "1573",
          "occ_name": "Diamond Dealer"
        },
        {
          "occupation_code": "1574",
          "occ_name": "Diamond Trader"
        },
        {
          "occupation_code": "1575",
          "occ_name": "Diamond Wholesale Merchant"
        },
        {
          "occupation_code": "1576",
          "occ_name": "DiDi Driver"
        },
        {
          "occupation_code": "1577",
          "occ_name": "Die Cutter"
        },
        {
          "occupation_code": "1578",
          "occ_name": "Diesel Mechanic"
        },
        {
          "occupation_code": "1579",
          "occ_name": "Dietician"
        },
        {
          "occupation_code": "1580",
          "occ_name": "Digger Grave"
        },
        {
          "occupation_code": "1581",
          "occ_name": "Digger Trench"
        },
        {
          "occupation_code": "1582",
          "occ_name": "Dining Car Attendant"
        },
        {
          "occupation_code": "1583",
          "occ_name": "Diplomat"
        },
        {
          "occupation_code": "1584",
          "occ_name": "Dipper Tenders Mining"
        },
        {
          "occupation_code": "1585",
          "occ_name": "Director Funeral"
        },
        {
          "occupation_code": "1586",
          "occ_name": "Director Managing Office Based No Manual Duties"
        },
        {
          "occupation_code": "1587",
          "occ_name": "Director Manual"
        },
        {
          "occupation_code": "1588",
          "occ_name": "Director Music"
        },
        {
          "occupation_code": "1589",
          "occ_name": "Director of Information Technology"
        },
        {
          "occupation_code": "1590",
          "occ_name": "Director of Nursing"
        },
        {
          "occupation_code": "1591",
          "occ_name": "Director of Operations"
        },
        {
          "occupation_code": "1592",
          "occ_name": "Director Office Work Only"
        },
        {
          "occupation_code": "1593",
          "occ_name": "Director Official State"
        },
        {
          "occupation_code": "1594",
          "occ_name": "Director Supervision and Light Manual"
        },
        {
          "occupation_code": "1595",
          "occ_name": "Director Travel No Supervision No Manual"
        },
        {
          "occupation_code": "1596",
          "occ_name": "Director Zoo"
        },
        {
          "occupation_code": "1597",
          "occ_name": "Disc Jockey Self employed"
        },
        {
          "occupation_code": "1598",
          "occ_name": "Discotheque Dancer"
        },
        {
          "occupation_code": "1599",
          "occ_name": "Dispatch Assistant"
        },
        {
          "occupation_code": "1600",
          "occ_name": "Dispatch Clerk"
        },
        {
          "occupation_code": "1601",
          "occ_name": "Dispatch Manager"
        },
        {
          "occupation_code": "1602",
          "occ_name": "Dispatcher"
        },
        {
          "occupation_code": "1603",
          "occ_name": "Dispatcher Power"
        },
        {
          "occupation_code": "1604",
          "occ_name": "Display Artist"
        },
        {
          "occupation_code": "1605",
          "occ_name": "Distant Angler"
        },
        {
          "occupation_code": "1606",
          "occ_name": "Distiller"
        },
        {
          "occupation_code": "1607",
          "occ_name": "Distributor Power"
        },
        {
          "occupation_code": "1608",
          "occ_name": "Distributor Sales Agent Wholesale"
        },
        {
          "occupation_code": "1609",
          "occ_name": "District Attorney"
        },
        {
          "occupation_code": "1610",
          "occ_name": "Dive Life Line Attendant Surface Worker"
        },
        {
          "occupation_code": "1611",
          "occ_name": "Dive Master"
        },
        {
          "occupation_code": "1612",
          "occ_name": "Diver Customs Ports"
        },
        {
          "occupation_code": "1613",
          "occ_name": "Diver Saturation Bell Class I"
        },
        {
          "occupation_code": "1614",
          "occ_name": "Diver Surface Supplied Air Max 50 Metres"
        },
        {
          "occupation_code": "1615",
          "occ_name": "Diver Surface Supplied Air Nitrox Max 30 Metres"
        },
        {
          "occupation_code": "1616",
          "occ_name": "Diver Surface Supplied Mixed Gas Max 75 Metres"
        },
        {
          "occupation_code": "1617",
          "occ_name": "Diver Tender Surface Worker"
        },
        {
          "occupation_code": "1618",
          "occ_name": "Diving Designated Medical Practitioner"
        },
        {
          "occupation_code": "1619",
          "occ_name": "Diving Hyperbaric Operation Supervisor"
        },
        {
          "occupation_code": "1620",
          "occ_name": "Diving Instructor"
        },
        {
          "occupation_code": "1621",
          "occ_name": "Diving Life Support Supervisor"
        },
        {
          "occupation_code": "1622",
          "occ_name": "Diving Life Support Technician"
        },
        {
          "occupation_code": "1623",
          "occ_name": "Diving Supervisor"
        },
        {
          "occupation_code": "1624",
          "occ_name": "Diving Systems Technician"
        },
        {
          "occupation_code": "1625",
          "occ_name": "DJ Self employed"
        },
        {
          "occupation_code": "1626",
          "occ_name": "Dock Worker"
        },
        {
          "occupation_code": "1627",
          "occ_name": "Docker"
        },
        {
          "occupation_code": "1628",
          "occ_name": "Docking Pilot"
        },
        {
          "occupation_code": "1629",
          "occ_name": "Dockworker"
        },
        {
          "occupation_code": "1630",
          "occ_name": "Dockworker Shipping Industry"
        },
        {
          "occupation_code": "1631",
          "occ_name": "Docside Labourer"
        },
        {
          "occupation_code": "1632",
          "occ_name": "Doctor"
        },
        {
          "occupation_code": "1633",
          "occ_name": "Doctor Saw"
        },
        {
          "occupation_code": "1634",
          "occ_name": "Doctor Witch"
        },
        {
          "occupation_code": "1635",
          "occ_name": "Dog Handler Police"
        },
        {
          "occupation_code": "1636",
          "occ_name": "Dogman"
        },
        {
          "occupation_code": "1637",
          "occ_name": "Domestic Animals Trainer"
        },
        {
          "occupation_code": "1638",
          "occ_name": "Domestic Engineer"
        },
        {
          "occupation_code": "1639",
          "occ_name": "Domestic Helper"
        },
        {
          "occupation_code": "1640",
          "occ_name": "Domestic Worker"
        },
        {
          "occupation_code": "1641",
          "occ_name": "Donkeyman"
        },
        {
          "occupation_code": "1642",
          "occ_name": "Door Lock Installer"
        },
        {
          "occupation_code": "1643",
          "occ_name": "Door To Door Sales Agent"
        },
        {
          "occupation_code": "1644",
          "occ_name": "Door To Door Sales Agent External"
        },
        {
          "occupation_code": "1645",
          "occ_name": "Doorman"
        },
        {
          "occupation_code": "1646",
          "occ_name": "Doula"
        },
        {
          "occupation_code": "1647",
          "occ_name": "Draftsperson"
        },
        {
          "occupation_code": "1648",
          "occ_name": "Dragline Operator Mining"
        },
        {
          "occupation_code": "1649",
          "occ_name": "Drainage Worker"
        },
        {
          "occupation_code": "1650",
          "occ_name": "Drainer"
        },
        {
          "occupation_code": "1651",
          "occ_name": "Draper"
        },
        {
          "occupation_code": "1652",
          "occ_name": "Draughtsman"
        },
        {
          "occupation_code": "1653",
          "occ_name": "Dredge Deckhand"
        },
        {
          "occupation_code": "1654",
          "occ_name": "Dredge Engineer"
        },
        {
          "occupation_code": "1655",
          "occ_name": "Dredge Mate"
        },
        {
          "occupation_code": "1656",
          "occ_name": "Dredge Operator"
        },
        {
          "occupation_code": "1657",
          "occ_name": "Dresser Window"
        },
        {
          "occupation_code": "1658",
          "occ_name": "Drill Technician"
        },
        {
          "occupation_code": "1659",
          "occ_name": "Driller"
        },
        {
          "occupation_code": "1660",
          "occ_name": "Driller Oil rig"
        },
        {
          "occupation_code": "1661",
          "occ_name": "Driller Pipe"
        },
        {
          "occupation_code": "1662",
          "occ_name": "Driller Quarry"
        },
        {
          "occupation_code": "1663",
          "occ_name": "Drilling Supervisor"
        },
        {
          "occupation_code": "1664",
          "occ_name": "Drilling Technician Pipe Installer"
        },
        {
          "occupation_code": "1665",
          "occ_name": "Driver Crane"
        },
        {
          "occupation_code": "1666",
          "occ_name": "Driver Dump Truck"
        },
        {
          "occupation_code": "1667",
          "occ_name": "Driver Funeral"
        },
        {
          "occupation_code": "1668",
          "occ_name": "Driver Hearse"
        },
        {
          "occupation_code": "1669",
          "occ_name": "Driver Street Car"
        },
        {
          "occupation_code": "1670",
          "occ_name": "Driveway Attendant Garage attendant"
        },
        {
          "occupation_code": "1671",
          "occ_name": "Driving Examiner"
        },
        {
          "occupation_code": "1672",
          "occ_name": "Drone Pilot"
        },
        {
          "occupation_code": "1673",
          "occ_name": "Drummer"
        },
        {
          "occupation_code": "1674",
          "occ_name": "Drywall Intaller"
        },
        {
          "occupation_code": "1675",
          "occ_name": "DVD Rental Shop Manager"
        },
        {
          "occupation_code": "1676",
          "occ_name": "E Hailing Taxi Driver"
        },
        {
          "occupation_code": "1677",
          "occ_name": "Ear Nose and Throat Specialist"
        },
        {
          "occupation_code": "1678",
          "occ_name": "Earth Moving Mechanic"
        },
        {
          "occupation_code": "1679",
          "occ_name": "Earthmoving Driver"
        },
        {
          "occupation_code": "1680",
          "occ_name": "Ecological Technical Officer"
        },
        {
          "occupation_code": "1681",
          "occ_name": "Ecologist"
        },
        {
          "occupation_code": "1682",
          "occ_name": "Econometrician"
        },
        {
          "occupation_code": "1683",
          "occ_name": "Economic Analyst"
        },
        {
          "occupation_code": "1684",
          "occ_name": "Economic Research Associate"
        },
        {
          "occupation_code": "1685",
          "occ_name": "Economist"
        },
        {
          "occupation_code": "1686",
          "occ_name": "Editor"
        },
        {
          "occupation_code": "1687",
          "occ_name": "Editor Music"
        },
        {
          "occupation_code": "1688",
          "occ_name": "Editorial Assistant"
        },
        {
          "occupation_code": "1689",
          "occ_name": "EDP Consultant"
        },
        {
          "occupation_code": "1690",
          "occ_name": "EDP Operator"
        },
        {
          "occupation_code": "1691",
          "occ_name": "Education Director"
        },
        {
          "occupation_code": "1692",
          "occ_name": "Education Officer"
        },
        {
          "occupation_code": "1693",
          "occ_name": "Education Officer Zoo"
        },
        {
          "occupation_code": "1694",
          "occ_name": "Educational Therapist"
        },
        {
          "occupation_code": "1695",
          "occ_name": "Educationalist"
        },
        {
          "occupation_code": "1696",
          "occ_name": "Elder Religion"
        },
        {
          "occupation_code": "1697",
          "occ_name": "Electric Gate Contractor"
        },
        {
          "occupation_code": "1698",
          "occ_name": "Electrical and Electronic Assembler"
        },
        {
          "occupation_code": "1699",
          "occ_name": "Electrical Cable Tester"
        },
        {
          "occupation_code": "1700",
          "occ_name": "Electrical Engineer"
        },
        {
          "occupation_code": "1701",
          "occ_name": "Electrical Fitter"
        },
        {
          "occupation_code": "1702",
          "occ_name": "Electrical Fitter Automotive"
        },
        {
          "occupation_code": "1703",
          "occ_name": "Electrical Inspector"
        },
        {
          "occupation_code": "1704",
          "occ_name": "Electrical Linesman"
        },
        {
          "occupation_code": "1705",
          "occ_name": "Electrical Systems Installer"
        },
        {
          "occupation_code": "1706",
          "occ_name": "Electrical Systems Planner"
        },
        {
          "occupation_code": "1707",
          "occ_name": "Electrician Installation"
        },
        {
          "occupation_code": "1708",
          "occ_name": "Electrician Mining"
        },
        {
          "occupation_code": "1709",
          "occ_name": "Electrologist"
        },
        {
          "occupation_code": "1710",
          "occ_name": "Electromechanical Engineer"
        },
        {
          "occupation_code": "1711",
          "occ_name": "Electronic Instrument Tradesperson"
        },
        {
          "occupation_code": "1712",
          "occ_name": "Electronics Engineer"
        },
        {
          "occupation_code": "1713",
          "occ_name": "Electronics Technician"
        },
        {
          "occupation_code": "1714",
          "occ_name": "Electroplater"
        },
        {
          "occupation_code": "1715",
          "occ_name": "Electroplating Chemist"
        },
        {
          "occupation_code": "1716",
          "occ_name": "Elevator Mechanic"
        },
        {
          "occupation_code": "1717",
          "occ_name": "Embalmer"
        },
        {
          "occupation_code": "1718",
          "occ_name": "Embassy Chancellor"
        },
        {
          "occupation_code": "1719",
          "occ_name": "Embosser Glass"
        },
        {
          "occupation_code": "1720",
          "occ_name": "Embroiderer"
        },
        {
          "occupation_code": "1721",
          "occ_name": "Embryologist"
        },
        {
          "occupation_code": "1722",
          "occ_name": "Emergency Physician Emergency Room"
        },
        {
          "occupation_code": "1723",
          "occ_name": "Employee Benefits Administrator"
        },
        {
          "occupation_code": "1724",
          "occ_name": "Employment Agent"
        },
        {
          "occupation_code": "1725",
          "occ_name": "Employment Officer"
        },
        {
          "occupation_code": "1726",
          "occ_name": "EMS Supervisor"
        },
        {
          "occupation_code": "1727",
          "occ_name": "Enameller"
        },
        {
          "occupation_code": "1728",
          "occ_name": "Endocrinologist"
        },
        {
          "occupation_code": "1729",
          "occ_name": "Endodontist"
        },
        {
          "occupation_code": "1730",
          "occ_name": "Energy Regulator"
        },
        {
          "occupation_code": "1731",
          "occ_name": "Engine winder Mining"
        },
        {
          "occupation_code": "1732",
          "occ_name": "Engineer Cybersecurity"
        },
        {
          "occupation_code": "1733",
          "occ_name": "Engineer First"
        },
        {
          "occupation_code": "1734",
          "occ_name": "Engineer Industrial"
        },
        {
          "occupation_code": "1735",
          "occ_name": "Engineer Maintenance"
        },
        {
          "occupation_code": "1736",
          "occ_name": "Engineer Materials"
        },
        {
          "occupation_code": "1737",
          "occ_name": "Engineer Mechanical"
        },
        {
          "occupation_code": "1738",
          "occ_name": "Engineer Nonspecific"
        },
        {
          "occupation_code": "1739",
          "occ_name": "Engineer Office and Field Work"
        },
        {
          "occupation_code": "1740",
          "occ_name": "Engineer Officer"
        },
        {
          "occupation_code": "1741",
          "occ_name": "Engineer Service"
        },
        {
          "occupation_code": "1742",
          "occ_name": "Engineer Site"
        },
        {
          "occupation_code": "1743",
          "occ_name": "Engineer Supply"
        },
        {
          "occupation_code": "1744",
          "occ_name": "Engineer Work Only in Office"
        },
        {
          "occupation_code": "1745",
          "occ_name": "Engineering Technician"
        },
        {
          "occupation_code": "1746",
          "occ_name": "Engineering Tradesperson"
        },
        {
          "occupation_code": "1747",
          "occ_name": "Engraver Hand"
        },
        {
          "occupation_code": "1748",
          "occ_name": "Engraver Machine"
        },
        {
          "occupation_code": "1749",
          "occ_name": "Enrolled Nurse"
        },
        {
          "occupation_code": "1750",
          "occ_name": "ENT"
        },
        {
          "occupation_code": "1751",
          "occ_name": "Entertainer"
        },
        {
          "occupation_code": "1752",
          "occ_name": "Entertainer Street"
        },
        {
          "occupation_code": "1753",
          "occ_name": "Entertainment Manager"
        },
        {
          "occupation_code": "1754",
          "occ_name": "Entertainment Officer"
        },
        {
          "occupation_code": "1755",
          "occ_name": "Entomologist"
        },
        {
          "occupation_code": "1756",
          "occ_name": "Environmental Engineer"
        },
        {
          "occupation_code": "1757",
          "occ_name": "Environmental Health Specialist"
        },
        {
          "occupation_code": "1758",
          "occ_name": "Environmental Impact Assessor"
        },
        {
          "occupation_code": "1759",
          "occ_name": "Environmental Manager"
        },
        {
          "occupation_code": "1760",
          "occ_name": "Environmental Officer"
        },
        {
          "occupation_code": "1761",
          "occ_name": "Environmental Planner"
        },
        {
          "occupation_code": "1762",
          "occ_name": "Environmental Protection Analyst"
        },
        {
          "occupation_code": "1763",
          "occ_name": "Environmental Scientist"
        },
        {
          "occupation_code": "1764",
          "occ_name": "Environmentalist"
        },
        {
          "occupation_code": "1765",
          "occ_name": "Epidemiologist"
        },
        {
          "occupation_code": "1766",
          "occ_name": "Equestrian"
        },
        {
          "occupation_code": "1767",
          "occ_name": "Equestrian Jockey Flat Racing"
        },
        {
          "occupation_code": "1768",
          "occ_name": "Equestrian Jockey National Hunt"
        },
        {
          "occupation_code": "1769",
          "occ_name": "Equipment Installer"
        },
        {
          "occupation_code": "1770",
          "occ_name": "Equipment Operator"
        },
        {
          "occupation_code": "1771",
          "occ_name": "Equipment Operator Plant Technician"
        },
        {
          "occupation_code": "1772",
          "occ_name": "Equipment Repairer"
        },
        {
          "occupation_code": "1773",
          "occ_name": "Ergonomist"
        },
        {
          "occupation_code": "1774",
          "occ_name": "Escalator Mechanic"
        },
        {
          "occupation_code": "1775",
          "occ_name": "Escrow Officer"
        },
        {
          "occupation_code": "1776",
          "occ_name": "Estate Agent"
        },
        {
          "occupation_code": "1777",
          "occ_name": "Estate Manager"
        },
        {
          "occupation_code": "1778",
          "occ_name": "Estate Ranger"
        },
        {
          "occupation_code": "1779",
          "occ_name": "Estimator"
        },
        {
          "occupation_code": "1780",
          "occ_name": "Estuaries Fishermen"
        },
        {
          "occupation_code": "1781",
          "occ_name": "Estuarine Fishers"
        },
        {
          "occupation_code": "1782",
          "occ_name": "Etcher"
        },
        {
          "occupation_code": "1783",
          "occ_name": "Ethnologist"
        },
        {
          "occupation_code": "1784",
          "occ_name": "Ethnomusicologist"
        },
        {
          "occupation_code": "1785",
          "occ_name": "Ethologist"
        },
        {
          "occupation_code": "1786",
          "occ_name": "Etymologist"
        },
        {
          "occupation_code": "1787",
          "occ_name": "Evaluator"
        },
        {
          "occupation_code": "1788",
          "occ_name": "Event Planner"
        },
        {
          "occupation_code": "1789",
          "occ_name": "Event Planner   Bridal Consultant"
        },
        {
          "occupation_code": "1790",
          "occ_name": "Events Coordinator"
        },
        {
          "occupation_code": "1791",
          "occ_name": "Events Manager"
        },
        {
          "occupation_code": "1792",
          "occ_name": "Events Technician"
        },
        {
          "occupation_code": "1793",
          "occ_name": "Examiner Title"
        },
        {
          "occupation_code": "1794",
          "occ_name": "Excavator Driver"
        },
        {
          "occupation_code": "1795",
          "occ_name": "Excavator Operator"
        },
        {
          "occupation_code": "1796",
          "occ_name": "Excersice Instructor"
        },
        {
          "occupation_code": "1797",
          "occ_name": "Exchange Control Officer"
        },
        {
          "occupation_code": "1798",
          "occ_name": "Executive Assistant"
        },
        {
          "occupation_code": "1799",
          "occ_name": "Executive Chef"
        },
        {
          "occupation_code": "1800",
          "occ_name": "Executive Director"
        },
        {
          "occupation_code": "1801",
          "occ_name": "Executive Secretary"
        },
        {
          "occupation_code": "1802",
          "occ_name": "Executor"
        },
        {
          "occupation_code": "1803",
          "occ_name": "Exercise Instructor Self Employed"
        },
        {
          "occupation_code": "1804",
          "occ_name": "Exercise Therapist"
        },
        {
          "occupation_code": "1805",
          "occ_name": "Exhibition Coordinator"
        },
        {
          "occupation_code": "1806",
          "occ_name": "Exhibition Designer"
        },
        {
          "occupation_code": "1807",
          "occ_name": "Exhibition Organiser"
        },
        {
          "occupation_code": "1808",
          "occ_name": "Exhibition Stand Constructor"
        },
        {
          "occupation_code": "1809",
          "occ_name": "Exotic Animal Dealer"
        },
        {
          "occupation_code": "1810",
          "occ_name": "Expansion Manager"
        },
        {
          "occupation_code": "1811",
          "occ_name": "Experimental Pilot"
        },
        {
          "occupation_code": "1812",
          "occ_name": "Explosives Handler"
        },
        {
          "occupation_code": "1813",
          "occ_name": "Explosives Manufacturer"
        },
        {
          "occupation_code": "1814",
          "occ_name": "Explosives Worker"
        },
        {
          "occupation_code": "1815",
          "occ_name": "Explosives Worker Mining"
        },
        {
          "occupation_code": "1816",
          "occ_name": "Explosives Worker Quarry"
        },
        {
          "occupation_code": "1817",
          "occ_name": "Export Coordinator"
        },
        {
          "occupation_code": "1818",
          "occ_name": "Export Manager"
        },
        {
          "occupation_code": "1819",
          "occ_name": "Export Purchaser"
        },
        {
          "occupation_code": "1820",
          "occ_name": "Fabric Maker"
        },
        {
          "occupation_code": "1821",
          "occ_name": "Fabricator Industrial Textiles"
        },
        {
          "occupation_code": "1822",
          "occ_name": "Facade Cleaner"
        },
        {
          "occupation_code": "1823",
          "occ_name": "Facade Installer"
        },
        {
          "occupation_code": "1824",
          "occ_name": "Facilities Manager"
        },
        {
          "occupation_code": "1825",
          "occ_name": "Facilities Procurement Officer"
        },
        {
          "occupation_code": "1826",
          "occ_name": "Facility Manager"
        },
        {
          "occupation_code": "1827",
          "occ_name": "Factory Hand"
        },
        {
          "occupation_code": "1828",
          "occ_name": "Factory Manager"
        },
        {
          "occupation_code": "1829",
          "occ_name": "Factory Worker"
        },
        {
          "occupation_code": "1830",
          "occ_name": "Fairground Workers"
        },
        {
          "occupation_code": "1831",
          "occ_name": "Faith Healer"
        },
        {
          "occupation_code": "1832",
          "occ_name": "Family physician"
        },
        {
          "occupation_code": "1833",
          "occ_name": "Family Support Officer"
        },
        {
          "occupation_code": "1834",
          "occ_name": "Farm Advisory Services"
        },
        {
          "occupation_code": "1835",
          "occ_name": "Farm Hand"
        },
        {
          "occupation_code": "1836",
          "occ_name": "Farm Labourer"
        },
        {
          "occupation_code": "1837",
          "occ_name": "Farm Machinery Driver"
        },
        {
          "occupation_code": "1839",
          "occ_name": "Farm Operations Technical Director"
        },
        {
          "occupation_code": "1840",
          "occ_name": "Farm Owner"
        },
        {
          "occupation_code": "1841",
          "occ_name": "Farm Products Inspector"
        },
        {
          "occupation_code": "1843",
          "occ_name": "Farm Worker"
        },
        {
          "occupation_code": "1845",
          "occ_name": "Farmer Crop"
        },
        {
          "occupation_code": "1846",
          "occ_name": "Farmer Mixed"
        },
        {
          "occupation_code": "1847",
          "occ_name": "Farmer Oyster"
        },
        {
          "occupation_code": "1848",
          "occ_name": "Farrier"
        },
        {
          "occupation_code": "1849",
          "occ_name": "Fashion Designer"
        },
        {
          "occupation_code": "1850",
          "occ_name": "Fashion Merchandiser"
        },
        {
          "occupation_code": "1851",
          "occ_name": "Fashion Model"
        },
        {
          "occupation_code": "1852",
          "occ_name": "Fashion Stylist"
        },
        {
          "occupation_code": "1853",
          "occ_name": "Fast Food and Takeaway Shop Employee"
        },
        {
          "occupation_code": "1854",
          "occ_name": "Feed Consultant"
        },
        {
          "occupation_code": "1855",
          "occ_name": "Fellmonger"
        },
        {
          "occupation_code": "1856",
          "occ_name": "Fence Erector"
        },
        {
          "occupation_code": "1857",
          "occ_name": "Fencer Farm"
        },
        {
          "occupation_code": "1858",
          "occ_name": "Fencer Other"
        },
        {
          "occupation_code": "1859",
          "occ_name": "Ferry Crew"
        },
        {
          "occupation_code": "1860",
          "occ_name": "Ferry Officer"
        },
        {
          "occupation_code": "1861",
          "occ_name": "Ferry Service Aviation"
        },
        {
          "occupation_code": "1862",
          "occ_name": "Fertilizer Consultant"
        },
        {
          "occupation_code": "1863",
          "occ_name": "Fiberglass Worker"
        },
        {
          "occupation_code": "1864",
          "occ_name": "Fibre Optic Technician"
        },
        {
          "occupation_code": "1865",
          "occ_name": "Fibre Optics Cable Splicer"
        },
        {
          "occupation_code": "1866",
          "occ_name": "Fibre Optics Jointer"
        },
        {
          "occupation_code": "1867",
          "occ_name": "Fiduciary"
        },
        {
          "occupation_code": "1868",
          "occ_name": "Fiduciary Consultant"
        },
        {
          "occupation_code": "1869",
          "occ_name": "Fiduciary Expert"
        },
        {
          "occupation_code": "1870",
          "occ_name": "Fiduciary Practioner"
        },
        {
          "occupation_code": "1871",
          "occ_name": "Fiduciary Specialist"
        },
        {
          "occupation_code": "1872",
          "occ_name": "Field assistant Survey"
        },
        {
          "occupation_code": "1873",
          "occ_name": "Field Service Engineer"
        },
        {
          "occupation_code": "1874",
          "occ_name": "Field Technician"
        },
        {
          "occupation_code": "1875",
          "occ_name": "Fighter"
        },
        {
          "occupation_code": "1876",
          "occ_name": "Film Crew Agent"
        },
        {
          "occupation_code": "1877",
          "occ_name": "Film Director"
        },
        {
          "occupation_code": "1878",
          "occ_name": "Film Editor"
        },
        {
          "occupation_code": "1879",
          "occ_name": "Film Producer"
        },
        {
          "occupation_code": "1880",
          "occ_name": "Film Television Crew Worker"
        },
        {
          "occupation_code": "1881",
          "occ_name": "Film Television Location Scout"
        },
        {
          "occupation_code": "1882",
          "occ_name": "Film Television Technician"
        },
        {
          "occupation_code": "1883",
          "occ_name": "Finance Broker"
        },
        {
          "occupation_code": "1884",
          "occ_name": "Finance Manager"
        },
        {
          "occupation_code": "1885",
          "occ_name": "Financial Account Executive"
        },
        {
          "occupation_code": "1886",
          "occ_name": "Financial Accountant"
        },
        {
          "occupation_code": "1887",
          "occ_name": "Financial Adviser Independent"
        },
        {
          "occupation_code": "1888",
          "occ_name": "Financial Advisor"
        },
        {
          "occupation_code": "1889",
          "occ_name": "Financial Agent"
        },
        {
          "occupation_code": "1890",
          "occ_name": "Financial Analyst"
        },
        {
          "occupation_code": "1891",
          "occ_name": "Financial and Strategy Officer"
        },
        {
          "occupation_code": "1892",
          "occ_name": "Financial Auditor"
        },
        {
          "occupation_code": "1893",
          "occ_name": "Financial Broker"
        },
        {
          "occupation_code": "1894",
          "occ_name": "Financial Controller"
        },
        {
          "occupation_code": "1895",
          "occ_name": "Financial Dealer Stock"
        },
        {
          "occupation_code": "1896",
          "occ_name": "Financial Director"
        },
        {
          "occupation_code": "1897",
          "occ_name": "Financial Manager"
        },
        {
          "occupation_code": "1898",
          "occ_name": "Financial Officer"
        },
        {
          "occupation_code": "1899",
          "occ_name": "Financial Planner"
        },
        {
          "occupation_code": "1900",
          "occ_name": "Financial Planning Specialist"
        },
        {
          "occupation_code": "1901",
          "occ_name": "Financial Reporter"
        },
        {
          "occupation_code": "1902",
          "occ_name": "Financier"
        },
        {
          "occupation_code": "1903",
          "occ_name": "Fine Artist"
        },
        {
          "occupation_code": "1904",
          "occ_name": "Finisher"
        },
        {
          "occupation_code": "1905",
          "occ_name": "Finisher and Binder"
        },
        {
          "occupation_code": "1906",
          "occ_name": "Finisher Furniture"
        },
        {
          "occupation_code": "1907",
          "occ_name": "Finisher Glass"
        },
        {
          "occupation_code": "1908",
          "occ_name": "Finisher Paper"
        },
        {
          "occupation_code": "1909",
          "occ_name": "Finisher Print"
        },
        {
          "occupation_code": "1910",
          "occ_name": "Fire Brigade Driver"
        },
        {
          "occupation_code": "1911",
          "occ_name": "Fire Captain"
        },
        {
          "occupation_code": "1912",
          "occ_name": "Fire Chief"
        },
        {
          "occupation_code": "1913",
          "occ_name": "Fire Chief Senior Officers"
        },
        {
          "occupation_code": "1914",
          "occ_name": "Fire Coordinator"
        },
        {
          "occupation_code": "1915",
          "occ_name": "Fire Detective"
        },
        {
          "occupation_code": "1916",
          "occ_name": "Fire Eater"
        },
        {
          "occupation_code": "1917",
          "occ_name": "Fire Engine Driver"
        },
        {
          "occupation_code": "1918",
          "occ_name": "Fire Engine Operator"
        },
        {
          "occupation_code": "1919",
          "occ_name": "Fire Guard"
        },
        {
          "occupation_code": "1920",
          "occ_name": "Fire Inspector"
        },
        {
          "occupation_code": "1921",
          "occ_name": "Fire Investigator"
        },
        {
          "occupation_code": "1922",
          "occ_name": "Fire Investigator"
        },
        {
          "occupation_code": "1923",
          "occ_name": "Fire Marshall"
        },
        {
          "occupation_code": "1924",
          "occ_name": "Fire Officer"
        },
        {
          "occupation_code": "1925",
          "occ_name": "Fire Patrol Officer"
        },
        {
          "occupation_code": "1926",
          "occ_name": "Fire Prevention Officer"
        },
        {
          "occupation_code": "1927",
          "occ_name": "Fire Rescuer"
        },
        {
          "occupation_code": "1928",
          "occ_name": "Fire Safety Officer"
        },
        {
          "occupation_code": "1929",
          "occ_name": "Fire Service Personnel"
        },
        {
          "occupation_code": "1930",
          "occ_name": "Fire Truck Driver"
        },
        {
          "occupation_code": "1931",
          "occ_name": "Fire Warden"
        },
        {
          "occupation_code": "1932",
          "occ_name": "Fire Officer"
        },
        {
          "occupation_code": "1933",
          "occ_name": "Firearm Dealer"
        },
        {
          "occupation_code": "1934",
          "occ_name": "Firearm Trainer"
        },
        {
          "occupation_code": "1935",
          "occ_name": "Firefighter"
        },
        {
          "occupation_code": "1936",
          "occ_name": "Fireman Chief"
        },
        {
          "occupation_code": "1937",
          "occ_name": "Fireman Mining"
        },
        {
          "occupation_code": "1938",
          "occ_name": "Fireofficer"
        },
        {
          "occupation_code": "1939",
          "occ_name": "Fireworks Maker"
        },
        {
          "occupation_code": "1940",
          "occ_name": "First Aid Educator"
        },
        {
          "occupation_code": "1941",
          "occ_name": "First Aid Pedagogue"
        },
        {
          "occupation_code": "1942",
          "occ_name": "First Aid Preceptor"
        },
        {
          "occupation_code": "1943",
          "occ_name": "First Aid Professor"
        },
        {
          "occupation_code": "1944",
          "occ_name": "First Engineer"
        },
        {
          "occupation_code": "1945",
          "occ_name": "First Mate"
        },
        {
          "occupation_code": "1947",
          "occ_name": "Firstline Fishing Supervisor"
        },
        {
          "occupation_code": "1948",
          "occ_name": "Fish Breeder"
        },
        {
          "occupation_code": "1949",
          "occ_name": "Fish Curer"
        },
        {
          "occupation_code": "1950",
          "occ_name": "Fish Farm Labourer"
        },
        {
          "occupation_code": "1951",
          "occ_name": "Fish Hatchery Worker"
        },
        {
          "occupation_code": "1952",
          "occ_name": "Fish Packer"
        },
        {
          "occupation_code": "1953",
          "occ_name": "Fish Preserver"
        },
        {
          "occupation_code": "1954",
          "occ_name": "Fish Processor"
        },
        {
          "occupation_code": "1955",
          "occ_name": "Fisherfolk"
        },
        {
          "occupation_code": "1956",
          "occ_name": "Fisheries Inspector"
        },
        {
          "occupation_code": "1957",
          "occ_name": "Fisherman"
        },
        {
          "occupation_code": "1958",
          "occ_name": "Fishers"
        },
        {
          "occupation_code": "1959",
          "occ_name": "Fisherwomen"
        },
        {
          "occupation_code": "1960",
          "occ_name": "Fishery Control Officer"
        },
        {
          "occupation_code": "1961",
          "occ_name": "Fishery Detective"
        },
        {
          "occupation_code": "1962",
          "occ_name": "Fishery Investigator"
        },
        {
          "occupation_code": "1963",
          "occ_name": "Fishery Marshall"
        },
        {
          "occupation_code": "1964",
          "occ_name": "Fishery Officer"
        },
        {
          "occupation_code": "1965",
          "occ_name": "Fishery Patrolman"
        },
        {
          "occupation_code": "1966",
          "occ_name": "Fishing Boat Captain"
        },
        {
          "occupation_code": "1967",
          "occ_name": "Fishing Charter Captain"
        },
        {
          "occupation_code": "1968",
          "occ_name": "Fishing Custodian"
        },
        {
          "occupation_code": "1969",
          "occ_name": "Fishing Defender"
        },
        {
          "occupation_code": "1970",
          "occ_name": "Fishmonger"
        },
        {
          "occupation_code": "1971",
          "occ_name": "Fitness Centre Manager"
        },
        {
          "occupation_code": "1972",
          "occ_name": "Fitness Coach"
        },
        {
          "occupation_code": "1973",
          "occ_name": "Fitness Coach Self Employed"
        },
        {
          "occupation_code": "1974",
          "occ_name": "Fitness Trainer"
        },
        {
          "occupation_code": "1975",
          "occ_name": "Fitness Trainer Self Employed"
        },
        {
          "occupation_code": "1976",
          "occ_name": "Fitter"
        },
        {
          "occupation_code": "1977",
          "occ_name": "Fitter and Turner"
        },
        {
          "occupation_code": "1978",
          "occ_name": "Fitter Electrical Automotive"
        },
        {
          "occupation_code": "1979",
          "occ_name": "Fitter Gas"
        },
        {
          "occupation_code": "1980",
          "occ_name": "Fitter Installation"
        },
        {
          "occupation_code": "1981",
          "occ_name": "Fitter Instrument"
        },
        {
          "occupation_code": "1982",
          "occ_name": "Fitter Machinist"
        },
        {
          "occupation_code": "1983",
          "occ_name": "Fitter Motor"
        },
        {
          "occupation_code": "1984",
          "occ_name": "Fitter Precision Instrument"
        },
        {
          "occupation_code": "1985",
          "occ_name": "Fitter Telephone"
        },
        {
          "occupation_code": "1986",
          "occ_name": "Fitter Tool"
        },
        {
          "occupation_code": "1987",
          "occ_name": "Fitter Tyre"
        },
        {
          "occupation_code": "1988",
          "occ_name": "Fitter Window"
        },
        {
          "occupation_code": "1989",
          "occ_name": "Fitter Windscreen"
        },
        {
          "occupation_code": "1990",
          "occ_name": "Fixer Gyprock"
        },
        {
          "occupation_code": "1991",
          "occ_name": "Fixer Mason"
        },
        {
          "occupation_code": "1992",
          "occ_name": "Fixer Steel"
        },
        {
          "occupation_code": "1993",
          "occ_name": "Fixer Wall and Ceiling"
        },
        {
          "occupation_code": "1994",
          "occ_name": "Flame Cutter Oil Rig"
        },
        {
          "occupation_code": "1995",
          "occ_name": "Flautist"
        },
        {
          "occupation_code": "1996",
          "occ_name": "Fleet Controller"
        },
        {
          "occupation_code": "1997",
          "occ_name": "Flight Attendant"
        },
        {
          "occupation_code": "1998",
          "occ_name": "Flight Captain"
        },
        {
          "occupation_code": "1999",
          "occ_name": "Flight Controller"
        },
        {
          "occupation_code": "2000",
          "occ_name": "Flight Director"
        },
        {
          "occupation_code": "2002",
          "occ_name": "Flight Instructor"
        },
        {
          "occupation_code": "2003",
          "occ_name": "Floor Contractor"
        },
        {
          "occupation_code": "2004",
          "occ_name": "Floor Finisher and Coverer"
        },
        {
          "occupation_code": "2005",
          "occ_name": "Floor Installer"
        },
        {
          "occupation_code": "2006",
          "occ_name": "Floor Manager Film"
        },
        {
          "occupation_code": "2007",
          "occ_name": "Floor Specialist"
        },
        {
          "occupation_code": "2008",
          "occ_name": "Floor Technician"
        },
        {
          "occupation_code": "2009",
          "occ_name": "Floorhand Oil Rig"
        },
        {
          "occupation_code": "2010",
          "occ_name": "Flooring Technician"
        },
        {
          "occupation_code": "2011",
          "occ_name": "Floorman Oil Rig"
        },
        {
          "occupation_code": "2012",
          "occ_name": "Floormen Oil Rig"
        },
        {
          "occupation_code": "2013",
          "occ_name": "Floral Artist"
        },
        {
          "occupation_code": "2014",
          "occ_name": "Floral Designer"
        },
        {
          "occupation_code": "2015",
          "occ_name": "Floral Vendor"
        },
        {
          "occupation_code": "2016",
          "occ_name": "Flow Tester Oil Rig"
        },
        {
          "occupation_code": "2017",
          "occ_name": "Flower Arranger"
        },
        {
          "occupation_code": "2018",
          "occ_name": "Flower Grower"
        },
        {
          "occupation_code": "2019",
          "occ_name": "Flower Seller"
        },
        {
          "occupation_code": "2020",
          "occ_name": "Flowerista"
        },
        {
          "occupation_code": "2021",
          "occ_name": "Fly Fishermen"
        },
        {
          "occupation_code": "2022",
          "occ_name": "Flyfishing Fischers"
        },
        {
          "occupation_code": "2023",
          "occ_name": "Flyman"
        },
        {
          "occupation_code": "2024",
          "occ_name": "Folk Singer"
        },
        {
          "occupation_code": "2025",
          "occ_name": "Food and Beverage Assistant"
        },
        {
          "occupation_code": "2026",
          "occ_name": "Food And Beverage Employee"
        },
        {
          "occupation_code": "2027",
          "occ_name": "Food and Beverage Executive"
        },
        {
          "occupation_code": "2028",
          "occ_name": "Food And Beverage Manager"
        },
        {
          "occupation_code": "2029",
          "occ_name": "Food and Beverage Staff"
        },
        {
          "occupation_code": "2030",
          "occ_name": "Food and Beverage Supervisor"
        },
        {
          "occupation_code": "2031",
          "occ_name": "Food and Safety Officer"
        },
        {
          "occupation_code": "2032",
          "occ_name": "Food Engineer"
        },
        {
          "occupation_code": "2033",
          "occ_name": "Food Processing Operator"
        },
        {
          "occupation_code": "2034",
          "occ_name": "Food Safety and Quality Engineer"
        },
        {
          "occupation_code": "2035",
          "occ_name": "Food Scientist"
        },
        {
          "occupation_code": "2036",
          "occ_name": "Footman Mining"
        },
        {
          "occupation_code": "2037",
          "occ_name": "Footwear Artisan"
        },
        {
          "occupation_code": "2038",
          "occ_name": "Footwear Finisher"
        },
        {
          "occupation_code": "2039",
          "occ_name": "Footwear Machinist"
        },
        {
          "occupation_code": "2040",
          "occ_name": "Footwear Maker"
        },
        {
          "occupation_code": "2041",
          "occ_name": "Footwear Production Machine Operator"
        },
        {
          "occupation_code": "2042",
          "occ_name": "Footwear Repairer"
        },
        {
          "occupation_code": "2043",
          "occ_name": "Footwear Worker"
        },
        {
          "occupation_code": "2044",
          "occ_name": "Foreign Affairs and Trade Officer"
        },
        {
          "occupation_code": "2045",
          "occ_name": "Foreign Exchange Broker"
        },
        {
          "occupation_code": "2046",
          "occ_name": "Foreign Exchange Cashier"
        },
        {
          "occupation_code": "2047",
          "occ_name": "Foreign Language Correspondent"
        },
        {
          "occupation_code": "2048",
          "occ_name": "Foreign Trade Merchant"
        },
        {
          "occupation_code": "2049",
          "occ_name": "Foreman"
        },
        {
          "occupation_code": "2050",
          "occ_name": "Foreman Dock"
        },
        {
          "occupation_code": "2051",
          "occ_name": "Forensic Accountant"
        },
        {
          "occupation_code": "2052",
          "occ_name": "Forensic Analyst"
        },
        {
          "occupation_code": "2053",
          "occ_name": "Forensic Auditor"
        },
        {
          "occupation_code": "2054",
          "occ_name": "Forensic Pathologist"
        },
        {
          "occupation_code": "2055",
          "occ_name": "Forensic Scientist"
        },
        {
          "occupation_code": "2056",
          "occ_name": "Forest Engineer"
        },
        {
          "occupation_code": "2057",
          "occ_name": "Forest Inspector"
        },
        {
          "occupation_code": "2059",
          "occ_name": "Forest Fire Fighter"
        },
        {
          "occupation_code": "2060",
          "occ_name": "Forestry Machine Operator"
        },
        {
          "occupation_code": "2061",
          "occ_name": "Forestry Technician"
        },
        {
          "occupation_code": "2062",
          "occ_name": "Forex Trader"
        },
        {
          "occupation_code": "2063",
          "occ_name": "Forger"
        },
        {
          "occupation_code": "2064",
          "occ_name": "Forger Artisan"
        },
        {
          "occupation_code": "2065",
          "occ_name": "Fork Lift Driver"
        },
        {
          "occupation_code": "2066",
          "occ_name": "Forklift Driver"
        },
        {
          "occupation_code": "2067",
          "occ_name": "Forklift Operator Oil Rig"
        },
        {
          "occupation_code": "2068",
          "occ_name": "Forman"
        },
        {
          "occupation_code": "2069",
          "occ_name": "Formwork Builder"
        },
        {
          "occupation_code": "2070",
          "occ_name": "Fortune Teller"
        },
        {
          "occupation_code": "2071",
          "occ_name": "Forwarding Agent"
        },
        {
          "occupation_code": "2072",
          "occ_name": "Forwarding Salesperson"
        },
        {
          "occupation_code": "2073",
          "occ_name": "Foundry Assistant"
        },
        {
          "occupation_code": "2074",
          "occ_name": "Foundry Engineer"
        },
        {
          "occupation_code": "2075",
          "occ_name": "Foundry Technician"
        },
        {
          "occupation_code": "2076",
          "occ_name": "Framer Picture"
        },
        {
          "occupation_code": "2077",
          "occ_name": "Fraud Investigator"
        },
        {
          "occupation_code": "2078",
          "occ_name": "Freight Agent"
        },
        {
          "occupation_code": "2079",
          "occ_name": "Freight Clerk"
        },
        {
          "occupation_code": "2080",
          "occ_name": "Freight Controller"
        },
        {
          "occupation_code": "2081",
          "occ_name": "Freight Handler"
        },
        {
          "occupation_code": "2082",
          "occ_name": "Freight Manager"
        },
        {
          "occupation_code": "2083",
          "occ_name": "Freight Transport Pilot"
        },
        {
          "occupation_code": "2084",
          "occ_name": "French Polisher"
        },
        {
          "occupation_code": "2085",
          "occ_name": "Freshwater Fischers"
        },
        {
          "occupation_code": "2086",
          "occ_name": "Freshwater Fishermen"
        },
        {
          "occupation_code": "2087",
          "occ_name": "Freshwater Trawlling"
        },
        {
          "occupation_code": "2088",
          "occ_name": "Frogman"
        },
        {
          "occupation_code": "2089",
          "occ_name": "Front End Loader Driver"
        },
        {
          "occupation_code": "2090",
          "occ_name": "Front of House Manager"
        },
        {
          "occupation_code": "2091",
          "occ_name": "Front Office Attendant"
        },
        {
          "occupation_code": "2092",
          "occ_name": "Fruit Farmer"
        },
        {
          "occupation_code": "2093",
          "occ_name": "Fruit Grower"
        },
        {
          "occupation_code": "2094",
          "occ_name": "Fruiterer Proprietor"
        },
        {
          "occupation_code": "2095",
          "occ_name": "Fruiterer Sales Assistant"
        },
        {
          "occupation_code": "2096",
          "occ_name": "Fuel Controller"
        },
        {
          "occupation_code": "2097",
          "occ_name": "Fuel Merchant"
        },
        {
          "occupation_code": "2098",
          "occ_name": "Fund Manager"
        },
        {
          "occupation_code": "2099",
          "occ_name": "Funeral Director"
        },
        {
          "occupation_code": "2100",
          "occ_name": "Funeral Directors Assistant"
        },
        {
          "occupation_code": "2101",
          "occ_name": "Funeral Driver"
        },
        {
          "occupation_code": "2102",
          "occ_name": "Funeral Home Assistant"
        },
        {
          "occupation_code": "2103",
          "occ_name": "Funeral Home Director"
        },
        {
          "occupation_code": "2104",
          "occ_name": "Fur Craftsman"
        },
        {
          "occupation_code": "2105",
          "occ_name": "Furnace Worker"
        },
        {
          "occupation_code": "2106",
          "occ_name": "Furnaceman"
        },
        {
          "occupation_code": "2107",
          "occ_name": "Furniture Advisor"
        },
        {
          "occupation_code": "2108",
          "occ_name": "Furniture Carver"
        },
        {
          "occupation_code": "2109",
          "occ_name": "Furniture Designer"
        },
        {
          "occupation_code": "2110",
          "occ_name": "Furniture Finisher"
        },
        {
          "occupation_code": "2111",
          "occ_name": "Furniture maker"
        },
        {
          "occupation_code": "2112",
          "occ_name": "Furniture Packager"
        },
        {
          "occupation_code": "2113",
          "occ_name": "Furniture Packer"
        },
        {
          "occupation_code": "2114",
          "occ_name": "Furniture Removal Van Driver"
        },
        {
          "occupation_code": "2115",
          "occ_name": "Furniture Remover"
        },
        {
          "occupation_code": "2116",
          "occ_name": "Furniture Upholsterer"
        },
        {
          "occupation_code": "2117",
          "occ_name": "Furrier"
        },
        {
          "occupation_code": "2118",
          "occ_name": "Futures Dealer"
        },
        {
          "occupation_code": "2119",
          "occ_name": "Futures Trader"
        },
        {
          "occupation_code": "2120",
          "occ_name": "FX Coordinator"
        },
        {
          "occupation_code": "2121",
          "occ_name": "Galley Hand"
        },
        {
          "occupation_code": "2122",
          "occ_name": "Galvanizer"
        },
        {
          "occupation_code": "2123",
          "occ_name": "Gambler"
        },
        {
          "occupation_code": "2124",
          "occ_name": "Gambler Online"
        },
        {
          "occupation_code": "2125",
          "occ_name": "Game Ranger"
        },
        {
          "occupation_code": "2126",
          "occ_name": "Game Supervisor"
        },
        {
          "occupation_code": "2127",
          "occ_name": "Games Developer"
        },
        {
          "occupation_code": "2128",
          "occ_name": "Games Programmer"
        },
        {
          "occupation_code": "2129",
          "occ_name": "Games Shop"
        },
        {
          "occupation_code": "2130",
          "occ_name": "Gang worker Oil Rig"
        },
        {
          "occupation_code": "2131",
          "occ_name": "Garage Attendant"
        },
        {
          "occupation_code": "2132",
          "occ_name": "Garage Attendant Shop attendant"
        },
        {
          "occupation_code": "2133",
          "occ_name": "Garage Manager"
        },
        {
          "occupation_code": "2134",
          "occ_name": "Garage Owner"
        },
        {
          "occupation_code": "2135",
          "occ_name": "Garbage Collector"
        },
        {
          "occupation_code": "2136",
          "occ_name": "Garden Service Worker"
        },
        {
          "occupation_code": "2137",
          "occ_name": "Garden Worker"
        },
        {
          "occupation_code": "2138",
          "occ_name": "Gardener"
        },
        {
          "occupation_code": "2139",
          "occ_name": "Gardener Landscape Design Work Office Based"
        },
        {
          "occupation_code": "2140",
          "occ_name": "Gardener Market"
        },
        {
          "occupation_code": "2141",
          "occ_name": "Gardens and Parks Caretaker"
        },
        {
          "occupation_code": "2142",
          "occ_name": "Gardens and Parks Curator"
        },
        {
          "occupation_code": "2143",
          "occ_name": "Garment Worker"
        },
        {
          "occupation_code": "2144",
          "occ_name": "Gas Cylinder Filler"
        },
        {
          "occupation_code": "2145",
          "occ_name": "Gas Fired Heating Unit Installer"
        },
        {
          "occupation_code": "2146",
          "occ_name": "Gas Line Technician"
        },
        {
          "occupation_code": "2147",
          "occ_name": "Gas Pipe Fitter"
        },
        {
          "occupation_code": "2148",
          "occ_name": "Gas Plant Operator"
        },
        {
          "occupation_code": "2149",
          "occ_name": "Gas Plant Operator Gas Facility Operator"
        },
        {
          "occupation_code": "2150",
          "occ_name": "Gas Rig Worker"
        },
        {
          "occupation_code": "2151",
          "occ_name": "Gas Tanker Fitter"
        },
        {
          "occupation_code": "2152",
          "occ_name": "Gas Valve Operator"
        },
        {
          "occupation_code": "2153",
          "occ_name": "Gas Works Inspector"
        },
        {
          "occupation_code": "2154",
          "occ_name": "Gas Works Manager"
        },
        {
          "occupation_code": "2155",
          "occ_name": "Gastroenterologist"
        },
        {
          "occupation_code": "2156",
          "occ_name": "Gatekeeper"
        },
        {
          "occupation_code": "2157",
          "occ_name": "Gear Cutter"
        },
        {
          "occupation_code": "2158",
          "occ_name": "Gemologist"
        },
        {
          "occupation_code": "2159",
          "occ_name": "Genealogist"
        },
        {
          "occupation_code": "2160",
          "occ_name": "General Fitters"
        },
        {
          "occupation_code": "2161",
          "occ_name": "General Manager Office Based No Manual Duties"
        },
        {
          "occupation_code": "2162",
          "occ_name": "General Practitioner"
        },
        {
          "occupation_code": "2163",
          "occ_name": "General Scientist"
        },
        {
          "occupation_code": "2164",
          "occ_name": "General Store Proprietor"
        },
        {
          "occupation_code": "2165",
          "occ_name": "General Store Sales assistant"
        },
        {
          "occupation_code": "2166",
          "occ_name": "Geneticist"
        },
        {
          "occupation_code": "2167",
          "occ_name": "Geo Hydrologist"
        },
        {
          "occupation_code": "2168",
          "occ_name": "Geo Technologist"
        },
        {
          "occupation_code": "2169",
          "occ_name": "Geochemist"
        },
        {
          "occupation_code": "2170",
          "occ_name": "Geoduck Harvester"
        },
        {
          "occupation_code": "2171",
          "occ_name": "Geographer"
        },
        {
          "occupation_code": "2172",
          "occ_name": "Geographic Information Practitioner"
        },
        {
          "occupation_code": "2173",
          "occ_name": "Geographic Information Systems Officer"
        },
        {
          "occupation_code": "2174",
          "occ_name": "Geographical Observer"
        },
        {
          "occupation_code": "2175",
          "occ_name": "Geohydrochemist"
        },
        {
          "occupation_code": "2176",
          "occ_name": "Geohydrologist"
        },
        {
          "occupation_code": "2177",
          "occ_name": "Geological Engineer Field work"
        },
        {
          "occupation_code": "2178",
          "occ_name": "Geological engineer No Field Work"
        },
        {
          "occupation_code": "2179",
          "occ_name": "Geologist Field Work"
        },
        {
          "occupation_code": "2180",
          "occ_name": "Geologist NoField Work"
        },
        {
          "occupation_code": "2181",
          "occ_name": "Geomatics Expert"
        },
        {
          "occupation_code": "2182",
          "occ_name": "Geomorphologist"
        },
        {
          "occupation_code": "2183",
          "occ_name": "Geophysicist"
        },
        {
          "occupation_code": "2184",
          "occ_name": "Geoscientist"
        },
        {
          "occupation_code": "2185",
          "occ_name": "Geostatistician"
        },
        {
          "occupation_code": "2186",
          "occ_name": "Geriatric Nurse"
        },
        {
          "occupation_code": "2187",
          "occ_name": "Geriatrician"
        },
        {
          "occupation_code": "2188",
          "occ_name": "Ginsel Oil Rig"
        },
        {
          "occupation_code": "2189",
          "occ_name": "GIS Technician"
        },
        {
          "occupation_code": "2190",
          "occ_name": "Glass Apparatus Builder"
        },
        {
          "occupation_code": "2191",
          "occ_name": "Glass Beveller"
        },
        {
          "occupation_code": "2192",
          "occ_name": "Glass Installer"
        },
        {
          "occupation_code": "2193",
          "occ_name": "Glass Modeller"
        },
        {
          "occupation_code": "2194",
          "occ_name": "Glass Presser"
        },
        {
          "occupation_code": "2195",
          "occ_name": "Glaze Blower"
        },
        {
          "occupation_code": "2196",
          "occ_name": "Glazier"
        },
        {
          "occupation_code": "2197",
          "occ_name": "Glazing Tradesperson"
        },
        {
          "occupation_code": "2198",
          "occ_name": "Goldsmith"
        },
        {
          "occupation_code": "2199",
          "occ_name": "Goods Inspector"
        },
        {
          "occupation_code": "2200",
          "occ_name": "Governess"
        },
        {
          "occupation_code": "2201",
          "occ_name": "Government Employee"
        },
        {
          "occupation_code": "2202",
          "occ_name": "Government Employee Office Based No Manual"
        },
        {
          "occupation_code": "2203",
          "occ_name": "Government Minister"
        },
        {
          "occupation_code": "2204",
          "occ_name": "Governor General"
        },
        {
          "occupation_code": "2205",
          "occ_name": "Governor Prison"
        },
        {
          "occupation_code": "2206",
          "occ_name": "Grader Driver"
        },
        {
          "occupation_code": "2207",
          "occ_name": "Grader Log"
        },
        {
          "occupation_code": "2208",
          "occ_name": "Grader Operator"
        },
        {
          "occupation_code": "2209",
          "occ_name": "Grader Wool"
        },
        {
          "occupation_code": "2210",
          "occ_name": "Grants Officer"
        },
        {
          "occupation_code": "2211",
          "occ_name": "Grape Picker"
        },
        {
          "occupation_code": "2212",
          "occ_name": "Graphic Artist"
        },
        {
          "occupation_code": "2213",
          "occ_name": "Graphic Designer"
        },
        {
          "occupation_code": "2214",
          "occ_name": "Graphic Prepress Tradesperson"
        },
        {
          "occupation_code": "2215",
          "occ_name": "Grazier"
        },
        {
          "occupation_code": "2216",
          "occ_name": "Greaser"
        },
        {
          "occupation_code": "2217",
          "occ_name": "Greaser and Oiler"
        },
        {
          "occupation_code": "2218",
          "occ_name": "Greenhouse Worker"
        },
        {
          "occupation_code": "2219",
          "occ_name": "Greenkeeper"
        },
        {
          "occupation_code": "2220",
          "occ_name": "Greensman"
        },
        {
          "occupation_code": "2221",
          "occ_name": "Grinder Operator Rubber Roller"
        },
        {
          "occupation_code": "2222",
          "occ_name": "Grinder Tool"
        },
        {
          "occupation_code": "2223",
          "occ_name": "Grinding Specialist"
        },
        {
          "occupation_code": "2224",
          "occ_name": "Grocery Store Employee"
        },
        {
          "occupation_code": "2225",
          "occ_name": "Groomer Large Animals"
        },
        {
          "occupation_code": "2226",
          "occ_name": "Groomer Small Animals"
        },
        {
          "occupation_code": "2227",
          "occ_name": "Ground Host"
        },
        {
          "occupation_code": "2228",
          "occ_name": "Ground Hostess"
        },
        {
          "occupation_code": "2229",
          "occ_name": "Groundsman"
        },
        {
          "occupation_code": "2230",
          "occ_name": "Guard Railway Security"
        },
        {
          "occupation_code": "2231",
          "occ_name": "Guard Train"
        },
        {
          "occupation_code": "2232",
          "occ_name": "Guest House Owner"
        },
        {
          "occupation_code": "2233",
          "occ_name": "Guidance Counsellor"
        },
        {
          "occupation_code": "2234",
          "occ_name": "Guide Fishing"
        },
        {
          "occupation_code": "2235",
          "occ_name": "Guide Hunting"
        },
        {
          "occupation_code": "2236",
          "occ_name": "Guide Safari"
        },
        {
          "occupation_code": "2237",
          "occ_name": "Guide Snorkelling"
        },
        {
          "occupation_code": "2238",
          "occ_name": "Guide Whitewater Rafting"
        },
        {
          "occupation_code": "2239",
          "occ_name": "Guide Zoo"
        },
        {
          "occupation_code": "2240",
          "occ_name": "Guitar Teacher"
        },
        {
          "occupation_code": "2241",
          "occ_name": "Guitarist"
        },
        {
          "occupation_code": "2242",
          "occ_name": "Gun Dealer"
        },
        {
          "occupation_code": "2243",
          "occ_name": "Gun Hand"
        },
        {
          "occupation_code": "2244",
          "occ_name": "Gun Perforator Loader"
        },
        {
          "occupation_code": "2245",
          "occ_name": "Gunsmith"
        },
        {
          "occupation_code": "2246",
          "occ_name": "Gym Instructor"
        },
        {
          "occupation_code": "2247",
          "occ_name": "Gym instructor Full Time"
        },
        {
          "occupation_code": "2248",
          "occ_name": "Gym Instructor Part Time"
        },
        {
          "occupation_code": "2249",
          "occ_name": "Gymnasium Instructor Competes in Bodybuilding Competitions"
        },
        {
          "occupation_code": "2250",
          "occ_name": "Gymnasium Instructor Does Not Compete in Bodybuilding Competitions"
        },
        {
          "occupation_code": "2251",
          "occ_name": "Gymnasium Manager"
        },
        {
          "occupation_code": "2252",
          "occ_name": "Gymnast"
        },
        {
          "occupation_code": "2253",
          "occ_name": "Gynaecologist"
        },
        {
          "occupation_code": "2254",
          "occ_name": "Haberdasher"
        },
        {
          "occupation_code": "2255",
          "occ_name": "Haematologist"
        },
        {
          "occupation_code": "2256",
          "occ_name": "Hair Salon Manager"
        },
        {
          "occupation_code": "2257",
          "occ_name": "Hair Stylist"
        },
        {
          "occupation_code": "2258",
          "occ_name": "Hairdresser"
        },
        {
          "occupation_code": "2259",
          "occ_name": "Hairdresser Home"
        },
        {
          "occupation_code": "2260",
          "occ_name": "Hairdresser Mobile"
        },
        {
          "occupation_code": "2261",
          "occ_name": "Hairstyler"
        },
        {
          "occupation_code": "2262",
          "occ_name": "Hand Jetty"
        },
        {
          "occupation_code": "2263",
          "occ_name": "Handicraft Master"
        },
        {
          "occupation_code": "2264",
          "occ_name": "Handicraft Teacher"
        },
        {
          "occupation_code": "2265",
          "occ_name": "Handicraft Timber Worker"
        },
        {
          "occupation_code": "2266",
          "occ_name": "Handler Large Animals"
        },
        {
          "occupation_code": "2267",
          "occ_name": "Handler Small Animals"
        },
        {
          "occupation_code": "2268",
          "occ_name": "Handyman"
        },
        {
          "occupation_code": "2269",
          "occ_name": "Hanger Wallpaper"
        },
        {
          "occupation_code": "2270",
          "occ_name": "Harbour Master"
        },
        {
          "occupation_code": "2271",
          "occ_name": "Harbour Pilot"
        },
        {
          "occupation_code": "2272",
          "occ_name": "Hardware Design Engineer"
        },
        {
          "occupation_code": "2273",
          "occ_name": "Harpooner"
        },
        {
          "occupation_code": "2274",
          "occ_name": "Harvest Worker"
        },
        {
          "occupation_code": "2275",
          "occ_name": "Harvester Driver"
        },
        {
          "occupation_code": "2276",
          "occ_name": "Haulage Clerk"
        },
        {
          "occupation_code": "2277",
          "occ_name": "Haulage Contractor"
        },
        {
          "occupation_code": "2278",
          "occ_name": "Head Coach"
        },
        {
          "occupation_code": "2279",
          "occ_name": "Head Hunter"
        },
        {
          "occupation_code": "2280",
          "occ_name": "Head Keeper Zoo"
        },
        {
          "occupation_code": "2281",
          "occ_name": "Head of a Fire Department"
        },
        {
          "occupation_code": "2282",
          "occ_name": "Head Of Communications"
        },
        {
          "occupation_code": "2283",
          "occ_name": "Head of Consulting"
        },
        {
          "occupation_code": "2284",
          "occ_name": "Head of Kindergarten"
        },
        {
          "occupation_code": "2285",
          "occ_name": "Head of Marketing"
        },
        {
          "occupation_code": "2286",
          "occ_name": "Head of Personnel"
        },
        {
          "occupation_code": "2287",
          "occ_name": "Head of Sales"
        },
        {
          "occupation_code": "2288",
          "occ_name": "Head of Strategy"
        },
        {
          "occupation_code": "2289",
          "occ_name": "Headmistress"
        },
        {
          "occupation_code": "2290",
          "occ_name": "Health and Safety Executives"
        },
        {
          "occupation_code": "2291",
          "occ_name": "Health and Safety Officer"
        },
        {
          "occupation_code": "2292",
          "occ_name": "Health Commissioner"
        },
        {
          "occupation_code": "2293",
          "occ_name": "Health Work Technician"
        },
        {
          "occupation_code": "2294",
          "occ_name": "Hearing Aid Acoustician"
        },
        {
          "occupation_code": "2295",
          "occ_name": "Hearing Specialist"
        },
        {
          "occupation_code": "2296",
          "occ_name": "Heart Specialist"
        },
        {
          "occupation_code": "2297",
          "occ_name": "Heat Insulator"
        },
        {
          "occupation_code": "2298",
          "occ_name": "Heating Builder"
        },
        {
          "occupation_code": "2299",
          "occ_name": "Heating Engineer"
        },
        {
          "occupation_code": "2300",
          "occ_name": "Heating Fitter"
        },
        {
          "occupation_code": "2301",
          "occ_name": "Heating Installer"
        },
        {
          "occupation_code": "2302",
          "occ_name": "Heating Systems Planner"
        },
        {
          "occupation_code": "2303",
          "occ_name": "Heavy Duty Flying Construction"
        },
        {
          "occupation_code": "2304",
          "occ_name": "Heavy Duty Flying Explosives Transportation"
        },
        {
          "occupation_code": "2305",
          "occ_name": "Heavy Duty Flying Inspection of Pipe and or Power Lines"
        },
        {
          "occupation_code": "2306",
          "occ_name": "Heavy Duty Flying Mining and or Quarrying"
        },
        {
          "occupation_code": "2307",
          "occ_name": "Heavy Duty Flying Off Shore Rig"
        },
        {
          "occupation_code": "2308",
          "occ_name": "Heavy Duty Flying Oil and Gas Exploration"
        },
        {
          "occupation_code": "2309",
          "occ_name": "Heavy Duty Flying Oil and Gas Prospecting"
        },
        {
          "occupation_code": "2310",
          "occ_name": "Heavy Duty Flying Oil and Gas Supply and Personnel"
        },
        {
          "occupation_code": "2311",
          "occ_name": "Heavy Equipment Operator"
        },
        {
          "occupation_code": "2312",
          "occ_name": "Heavy Goods Vehicle Driver"
        },
        {
          "occupation_code": "2313",
          "occ_name": "Heavy Vehicles Driver"
        },
        {
          "occupation_code": "2314",
          "occ_name": "Helicopter Pilot Commercial"
        },
        {
          "occupation_code": "2315",
          "occ_name": "Helminthologist"
        },
        {
          "occupation_code": "2316",
          "occ_name": "Help Desk Technician"
        },
        {
          "occupation_code": "2317",
          "occ_name": "Hepatologist"
        },
        {
          "occupation_code": "2318",
          "occ_name": "Herdsman"
        },
        {
          "occupation_code": "2319",
          "occ_name": "Heritage Officer"
        },
        {
          "occupation_code": "2320",
          "occ_name": "Hide and Skin Processing Machine Operator"
        },
        {
          "occupation_code": "2321",
          "occ_name": "High Court Bailiff"
        },
        {
          "occupation_code": "2322",
          "occ_name": "High Performance Flying Aerobatics"
        },
        {
          "occupation_code": "2323",
          "occ_name": "High Performance Flying Racing"
        },
        {
          "occupation_code": "2324",
          "occ_name": "High Performance Flying Testing"
        },
        {
          "occupation_code": "2325",
          "occ_name": "High Performance Flying Testing Approved Fixed Wing"
        },
        {
          "occupation_code": "2326",
          "occ_name": "High Performance Flying Testing Approved Rotocraft"
        },
        {
          "occupation_code": "2327",
          "occ_name": "High Performance Flying Testing Experimental Aircraft"
        },
        {
          "occupation_code": "2328",
          "occ_name": "High Performance Flying Testing Prototype Aircraft"
        },
        {
          "occupation_code": "2329",
          "occ_name": "High Rise Window Cleaner"
        },
        {
          "occupation_code": "2330",
          "occ_name": "High School Principle"
        },
        {
          "occupation_code": "2331",
          "occ_name": "High School Teacher"
        },
        {
          "occupation_code": "2332",
          "occ_name": "High Voltage Installer"
        },
        {
          "occupation_code": "2333",
          "occ_name": "Histopathologist"
        },
        {
          "occupation_code": "2334",
          "occ_name": "Historian"
        },
        {
          "occupation_code": "2335",
          "occ_name": "Hoist Driver"
        },
        {
          "occupation_code": "2336",
          "occ_name": "Hoist Operator"
        },
        {
          "occupation_code": "2337",
          "occ_name": "Hoist Operator Diving"
        },
        {
          "occupation_code": "2338",
          "occ_name": "Hoist Worker"
        },
        {
          "occupation_code": "2339",
          "occ_name": "Holistic Healer"
        },
        {
          "occupation_code": "2340",
          "occ_name": "Home Economist"
        },
        {
          "occupation_code": "2341",
          "occ_name": "Home Maker"
        },
        {
          "occupation_code": "2342",
          "occ_name": "Home Schooler"
        },
        {
          "occupation_code": "2343",
          "occ_name": "Home Window Cleaner"
        },
        {
          "occupation_code": "2344",
          "occ_name": "Homeopathic Chemist"
        },
        {
          "occupation_code": "2345",
          "occ_name": "Horologist"
        },
        {
          "occupation_code": "2346",
          "occ_name": "Horse Groom"
        },
        {
          "occupation_code": "2347",
          "occ_name": "Horse Trainer"
        },
        {
          "occupation_code": "2348",
          "occ_name": "Horticultural Scientist"
        },
        {
          "occupation_code": "2349",
          "occ_name": "Horticulturalist"
        },
        {
          "occupation_code": "2350",
          "occ_name": "Horticulture Caretaker"
        },
        {
          "occupation_code": "2351",
          "occ_name": "Horticulture Curator"
        },
        {
          "occupation_code": "2352",
          "occ_name": "Horticulturist"
        },
        {
          "occupation_code": "2353",
          "occ_name": "Hospital Orderly"
        },
        {
          "occupation_code": "2354",
          "occ_name": "Hospital Ward Assistant"
        },
        {
          "occupation_code": "2355",
          "occ_name": "Hospital Ward Clerk"
        },
        {
          "occupation_code": "2356",
          "occ_name": "Hospitality Manager"
        },
        {
          "occupation_code": "2357",
          "occ_name": "Hostel Manager"
        },
        {
          "occupation_code": "2358",
          "occ_name": "Hostess"
        },
        {
          "occupation_code": "2359",
          "occ_name": "Hot Air Balloon Pilot"
        },
        {
          "occupation_code": "2360",
          "occ_name": "Hotel Manager"
        },
        {
          "occupation_code": "2361",
          "occ_name": "Hotel Owner"
        },
        {
          "occupation_code": "2362",
          "occ_name": "Hotel Worker"
        },
        {
          "occupation_code": "2363",
          "occ_name": "Hotelier"
        },
        {
          "occupation_code": "2364",
          "occ_name": "House Man"
        },
        {
          "occupation_code": "2365",
          "occ_name": "House Systems Technician"
        },
        {
          "occupation_code": "2366",
          "occ_name": "House Wife"
        },
        {
          "occupation_code": "2367",
          "occ_name": "Househusband"
        },
        {
          "occupation_code": "2368",
          "occ_name": "Housekeeper"
        },
        {
          "occupation_code": "2369",
          "occ_name": "Housemaster"
        },
        {
          "occupation_code": "2370",
          "occ_name": "Housewife"
        },
        {
          "occupation_code": "2371",
          "occ_name": "Human Resource Officer"
        },
        {
          "occupation_code": "2372",
          "occ_name": "Human Resource Specialist"
        },
        {
          "occupation_code": "2373",
          "occ_name": "Human Resources Administrator"
        },
        {
          "occupation_code": "2374",
          "occ_name": "Human Resources Adviser"
        },
        {
          "occupation_code": "2375",
          "occ_name": "Human Resources Analyst"
        },
        {
          "occupation_code": "2376",
          "occ_name": "Human Resources Director"
        },
        {
          "occupation_code": "2377",
          "occ_name": "Human Resources Officer"
        },
        {
          "occupation_code": "2378",
          "occ_name": "Hunter"
        },
        {
          "occupation_code": "2379",
          "occ_name": "Hunting Administrator"
        },
        {
          "occupation_code": "2380",
          "occ_name": "Hydraulics Engineer"
        },
        {
          "occupation_code": "2381",
          "occ_name": "Hydraulics Fitter"
        },
        {
          "occupation_code": "2382",
          "occ_name": "Hydraulics Installer"
        },
        {
          "occupation_code": "2383",
          "occ_name": "Hydraulics Mechanic"
        },
        {
          "occupation_code": "2384",
          "occ_name": "Hydrobiologist"
        },
        {
          "occupation_code": "2385",
          "occ_name": "Hydroblaster"
        },
        {
          "occupation_code": "2386",
          "occ_name": "Hydrographer"
        },
        {
          "occupation_code": "2387",
          "occ_name": "Hydrologist"
        },
        {
          "occupation_code": "2388",
          "occ_name": "Hydroponics Grower"
        },
        {
          "occupation_code": "2389",
          "occ_name": "Hydrotherapist"
        },
        {
          "occupation_code": "2390",
          "occ_name": "Hygienist Dental"
        },
        {
          "occupation_code": "2391",
          "occ_name": "Hypnotherapist"
        },
        {
          "occupation_code": "2392",
          "occ_name": "Hypnotist"
        },
        {
          "occupation_code": "2393",
          "occ_name": "Ice Cream Van Driver"
        },
        {
          "occupation_code": "2394",
          "occ_name": "Ichthyology"
        },
        {
          "occupation_code": "2395",
          "occ_name": "Illusionist"
        },
        {
          "occupation_code": "2396",
          "occ_name": "Illustrator Graphic"
        },
        {
          "occupation_code": "2397",
          "occ_name": "Image Consultant"
        },
        {
          "occupation_code": "2398",
          "occ_name": "Imaging Technician"
        },
        {
          "occupation_code": "2399",
          "occ_name": "Imam"
        },
        {
          "occupation_code": "2400",
          "occ_name": "Immigration Consultant"
        },
        {
          "occupation_code": "2401",
          "occ_name": "Immunologist"
        },
        {
          "occupation_code": "2402",
          "occ_name": "Import Export Administrator"
        },
        {
          "occupation_code": "2403",
          "occ_name": "Import Export Agent"
        },
        {
          "occupation_code": "2404",
          "occ_name": "Import Export Clerk"
        },
        {
          "occupation_code": "2405",
          "occ_name": "Import Export Controller"
        },
        {
          "occupation_code": "2406",
          "occ_name": "Import Export Supervisor"
        },
        {
          "occupation_code": "2407",
          "occ_name": "Import Export Trader"
        },
        {
          "occupation_code": "2408",
          "occ_name": "Import Manager"
        },
        {
          "occupation_code": "2409",
          "occ_name": "Importer Exporter"
        },
        {
          "occupation_code": "2410",
          "occ_name": "Impresario"
        },
        {
          "occupation_code": "2411",
          "occ_name": "Impressionist"
        },
        {
          "occupation_code": "2412",
          "occ_name": "Incinerator Worker"
        },
        {
          "occupation_code": "2413",
          "occ_name": "Independent financial advisor"
        },
        {
          "occupation_code": "2414",
          "occ_name": "InDrive Driver"
        },
        {
          "occupation_code": "2415",
          "occ_name": "Industrial Chemist"
        },
        {
          "occupation_code": "2416",
          "occ_name": "Industrial Climber"
        },
        {
          "occupation_code": "2417",
          "occ_name": "Industrial Editor"
        },
        {
          "occupation_code": "2418",
          "occ_name": "Industrial Hygienist"
        },
        {
          "occupation_code": "2419",
          "occ_name": "Industrial Manager"
        },
        {
          "occupation_code": "2420",
          "occ_name": "Industrial Mechanic"
        },
        {
          "occupation_code": "2421",
          "occ_name": "Industrial Microbiologist"
        },
        {
          "occupation_code": "2422",
          "occ_name": "Industrial Officer"
        },
        {
          "occupation_code": "2423",
          "occ_name": "Industrial Philosopher"
        },
        {
          "occupation_code": "2424",
          "occ_name": "Industrial Psychologist"
        },
        {
          "occupation_code": "2425",
          "occ_name": "Industrial Relations Adviser"
        },
        {
          "occupation_code": "2426",
          "occ_name": "Industrial Relations Officer"
        },
        {
          "occupation_code": "2427",
          "occ_name": "Industrial Sociologist"
        },
        {
          "occupation_code": "2428",
          "occ_name": "Industrial Technician"
        },
        {
          "occupation_code": "2429",
          "occ_name": "Information Analyst"
        },
        {
          "occupation_code": "2430",
          "occ_name": "Information Architect"
        },
        {
          "occupation_code": "2431",
          "occ_name": "Information Manager"
        },
        {
          "occupation_code": "2432",
          "occ_name": "Information Officer"
        },
        {
          "occupation_code": "2433",
          "occ_name": "Information System Manager"
        },
        {
          "occupation_code": "2434",
          "occ_name": "Information Systems Manager"
        },
        {
          "occupation_code": "2435",
          "occ_name": "Information Technology Consultant"
        },
        {
          "occupation_code": "2436",
          "occ_name": "Information Technology Director"
        },
        {
          "occupation_code": "2437",
          "occ_name": "Information Technology Manager"
        },
        {
          "occupation_code": "2438",
          "occ_name": "Information Technology Programmer"
        },
        {
          "occupation_code": "2439",
          "occ_name": "Information Technology Security Technician"
        },
        {
          "occupation_code": "2440",
          "occ_name": "Information Technology Specialist"
        },
        {
          "occupation_code": "2441",
          "occ_name": "Innkeeper"
        },
        {
          "occupation_code": "2442",
          "occ_name": "Inspection Flights Aviation"
        },
        {
          "occupation_code": "2443",
          "occ_name": "Inspection Officer Farms Livestock Land"
        },
        {
          "occupation_code": "2444",
          "occ_name": "Inspector Coil"
        },
        {
          "occupation_code": "2445",
          "occ_name": "Inspector Farm Products"
        },
        {
          "occupation_code": "2446",
          "occ_name": "Inspector Fishery"
        },
        {
          "occupation_code": "2447",
          "occ_name": "Inspector Food"
        },
        {
          "occupation_code": "2448",
          "occ_name": "Inspector Health"
        },
        {
          "occupation_code": "2449",
          "occ_name": "Inspector Meat"
        },
        {
          "occupation_code": "2450",
          "occ_name": "Inspector Motor Vehicle"
        },
        {
          "occupation_code": "2451",
          "occ_name": "Inspector Safety"
        },
        {
          "occupation_code": "2452",
          "occ_name": "Inspector Water Supply and Sewage"
        },
        {
          "occupation_code": "2453",
          "occ_name": "Inspector Weed"
        },
        {
          "occupation_code": "2454",
          "occ_name": "Inspector Weights and Measures"
        },
        {
          "occupation_code": "2455",
          "occ_name": "Installation Consultant"
        },
        {
          "occupation_code": "2456",
          "occ_name": "Installation Engineer"
        },
        {
          "occupation_code": "2457",
          "occ_name": "Installation Technician"
        },
        {
          "occupation_code": "2458",
          "occ_name": "Installation Worker"
        },
        {
          "occupation_code": "2459",
          "occ_name": "Installer Electric gate"
        },
        {
          "occupation_code": "2460",
          "occ_name": "Installer Equipment"
        },
        {
          "occupation_code": "2461",
          "occ_name": "Installer Floor"
        },
        {
          "occupation_code": "2462",
          "occ_name": "Installer Line"
        },
        {
          "occupation_code": "2463",
          "occ_name": "Installer of Electrical Appliances"
        },
        {
          "occupation_code": "2464",
          "occ_name": "Installer Security Alarm"
        },
        {
          "occupation_code": "2465",
          "occ_name": "Installer Security System"
        },
        {
          "occupation_code": "2466",
          "occ_name": "Installer Sign"
        },
        {
          "occupation_code": "2467",
          "occ_name": "Installer Sound System"
        },
        {
          "occupation_code": "2468",
          "occ_name": "Installer Sprinkler System"
        },
        {
          "occupation_code": "2469",
          "occ_name": "Installer Telephone"
        },
        {
          "occupation_code": "2470",
          "occ_name": "Instructional Designer"
        },
        {
          "occupation_code": "2471",
          "occ_name": "Instructor Diving"
        },
        {
          "occupation_code": "2472",
          "occ_name": "Instructor Driving"
        },
        {
          "occupation_code": "2473",
          "occ_name": "Instructor First Aid"
        },
        {
          "occupation_code": "2474",
          "occ_name": "Instructor Horse Riding"
        },
        {
          "occupation_code": "2475",
          "occ_name": "Instructor Meditation"
        },
        {
          "occupation_code": "2476",
          "occ_name": "Instructor Snow Sport"
        },
        {
          "occupation_code": "2477",
          "occ_name": "Instrument Maker"
        },
        {
          "occupation_code": "2478",
          "occ_name": "Instrument Technician"
        },
        {
          "occupation_code": "2479",
          "occ_name": "Instrumentologist"
        },
        {
          "occupation_code": "2480",
          "occ_name": "Insurance Agent"
        },
        {
          "occupation_code": "2481",
          "occ_name": "Insurance Assessor"
        },
        {
          "occupation_code": "2482",
          "occ_name": "Insurance broker"
        },
        {
          "occupation_code": "2483",
          "occ_name": "Insurance Broker Consultant External"
        },
        {
          "occupation_code": "2484",
          "occ_name": "Insurance Broker Salesperson"
        },
        {
          "occupation_code": "2485",
          "occ_name": "Insurance Compliance Officer"
        },
        {
          "occupation_code": "2486",
          "occ_name": "Insurance Manager"
        },
        {
          "occupation_code": "2487",
          "occ_name": "Insurance Salesperson"
        },
        {
          "occupation_code": "2488",
          "occ_name": "Insurance Underwriter"
        },
        {
          "occupation_code": "2489",
          "occ_name": "Intensive Care Specialist"
        },
        {
          "occupation_code": "2490",
          "occ_name": "Intensivist"
        },
        {
          "occupation_code": "2491",
          "occ_name": "Interior Consultant"
        },
        {
          "occupation_code": "2492",
          "occ_name": "Interior Decorator"
        },
        {
          "occupation_code": "2493",
          "occ_name": "Interior Designer"
        },
        {
          "occupation_code": "2494",
          "occ_name": "Interior Plantscaper"
        },
        {
          "occupation_code": "2495",
          "occ_name": "Intermediary"
        },
        {
          "occupation_code": "2496",
          "occ_name": "Internal Auditor"
        },
        {
          "occupation_code": "2497",
          "occ_name": "International Communications Manager"
        },
        {
          "occupation_code": "2498",
          "occ_name": "Internet Of Things Solutions Specialist"
        },
        {
          "occupation_code": "2499",
          "occ_name": "Internet Services and Support Person"
        },
        {
          "occupation_code": "2500",
          "occ_name": "Interpreter"
        },
        {
          "occupation_code": "2501",
          "occ_name": "Interviewer Market Research"
        },
        {
          "occupation_code": "2502",
          "occ_name": "Inventory Clerk"
        },
        {
          "occupation_code": "2503",
          "occ_name": "Inventory Controller"
        },
        {
          "occupation_code": "2504",
          "occ_name": "Investigator Fire"
        },
        {
          "occupation_code": "2505",
          "occ_name": "Investigator Insurance"
        },
        {
          "occupation_code": "2506",
          "occ_name": "Investigator Legal"
        },
        {
          "occupation_code": "2507",
          "occ_name": "Investigator Private"
        },
        {
          "occupation_code": "2508",
          "occ_name": "Investment Adviser"
        },
        {
          "occupation_code": "2509",
          "occ_name": "Investment Advisor"
        },
        {
          "occupation_code": "2510",
          "occ_name": "Investment Banker"
        },
        {
          "occupation_code": "2511",
          "occ_name": "Investment Consultant"
        },
        {
          "occupation_code": "2512",
          "occ_name": "Investment Officer"
        },
        {
          "occupation_code": "2513",
          "occ_name": "Investment Specialist"
        },
        {
          "occupation_code": "2514",
          "occ_name": "Investor Relations Analyst"
        },
        {
          "occupation_code": "2515",
          "occ_name": "Investor Relations Executive"
        },
        {
          "occupation_code": "2516",
          "occ_name": "Invoicing Clerk"
        },
        {
          "occupation_code": "2517",
          "occ_name": "Iridologist"
        },
        {
          "occupation_code": "2518",
          "occ_name": "Ironsmith"
        },
        {
          "occupation_code": "2519",
          "occ_name": "Ironworker"
        },
        {
          "occupation_code": "2520",
          "occ_name": "Irrigation Consultant"
        },
        {
          "occupation_code": "2521",
          "occ_name": "Irrigation Installer"
        },
        {
          "occupation_code": "2522",
          "occ_name": "Irrigation Specialist"
        },
        {
          "occupation_code": "2523",
          "occ_name": "IT Analyst"
        },
        {
          "occupation_code": "2524",
          "occ_name": "IT Computer Analyst"
        },
        {
          "occupation_code": "2525",
          "occ_name": "IT Consultant"
        },
        {
          "occupation_code": "2526",
          "occ_name": "IT Developer"
        },
        {
          "occupation_code": "2527",
          "occ_name": "IT Engineer"
        },
        {
          "occupation_code": "2528",
          "occ_name": "IT Manager"
        },
        {
          "occupation_code": "2529",
          "occ_name": "IT Network Administrator"
        },
        {
          "occupation_code": "2530",
          "occ_name": "IT Programmer"
        },
        {
          "occupation_code": "2531",
          "occ_name": "IT Repairer"
        },
        {
          "occupation_code": "2532",
          "occ_name": "IT Software Developer"
        },
        {
          "occupation_code": "2533",
          "occ_name": "IT Solutions Integration Analyst"
        },
        {
          "occupation_code": "2534",
          "occ_name": "IT Specialist"
        },
        {
          "occupation_code": "2535",
          "occ_name": "IT Strategist"
        },
        {
          "occupation_code": "2536",
          "occ_name": "IT Systems Engineer"
        },
        {
          "occupation_code": "2537",
          "occ_name": "IT Systems Support"
        },
        {
          "occupation_code": "2538",
          "occ_name": "IT Technical Writer"
        },
        {
          "occupation_code": "2539",
          "occ_name": "IT Technician"
        },
        {
          "occupation_code": "2540",
          "occ_name": "Jet Ski Mechanic"
        },
        {
          "occupation_code": "2541",
          "occ_name": "Jeweler"
        },
        {
          "occupation_code": "2542",
          "occ_name": "Jeweller"
        },
        {
          "occupation_code": "2543",
          "occ_name": "Jewellery Broker"
        },
        {
          "occupation_code": "2544",
          "occ_name": "Jewellery Polisher"
        },
        {
          "occupation_code": "2545",
          "occ_name": "Job Coach"
        },
        {
          "occupation_code": "2546",
          "occ_name": "Job Placement Specialist"
        },
        {
          "occupation_code": "2547",
          "occ_name": "Joiner"
        },
        {
          "occupation_code": "2548",
          "occ_name": "Journalist"
        },
        {
          "occupation_code": "2549",
          "occ_name": "Journalist International Assignment"
        },
        {
          "occupation_code": "2550",
          "occ_name": "Journalist Media Local Assignment"
        },
        {
          "occupation_code": "2551",
          "occ_name": "Judges Registrar"
        },
        {
          "occupation_code": "2552",
          "occ_name": "Juggler"
        },
        {
          "occupation_code": "2553",
          "occ_name": "Junior Fire Fighter"
        },
        {
          "occupation_code": "2554",
          "occ_name": "Justice Executive"
        },
        {
          "occupation_code": "2555",
          "occ_name": "Justice Of The Peace"
        },
        {
          "occupation_code": "2556",
          "occ_name": "Keeper Game"
        },
        {
          "occupation_code": "2557",
          "occ_name": "Keeper Park"
        },
        {
          "occupation_code": "2558",
          "occ_name": "Keeper Zoo"
        },
        {
          "occupation_code": "2559",
          "occ_name": "Keno Writer"
        },
        {
          "occupation_code": "2560",
          "occ_name": "Kerb Layer"
        },
        {
          "occupation_code": "2561",
          "occ_name": "Key Account Manager"
        },
        {
          "occupation_code": "2562",
          "occ_name": "Key Account Manager No Travelling"
        },
        {
          "occupation_code": "2563",
          "occ_name": "Key Account Manager Travelling"
        },
        {
          "occupation_code": "2564",
          "occ_name": "Key Grip"
        },
        {
          "occupation_code": "2565",
          "occ_name": "Keyboard Player"
        },
        {
          "occupation_code": "2566",
          "occ_name": "Kindergarten Teacher"
        },
        {
          "occupation_code": "2567",
          "occ_name": "Kinderkinetics"
        },
        {
          "occupation_code": "2568",
          "occ_name": "Kinesiologist"
        },
        {
          "occupation_code": "2569",
          "occ_name": "Kiosk Operator"
        },
        {
          "occupation_code": "2570",
          "occ_name": "Kitchen Assistant"
        },
        {
          "occupation_code": "2571",
          "occ_name": "Knifegrinder"
        },
        {
          "occupation_code": "2572",
          "occ_name": "Knitter Hand"
        },
        {
          "occupation_code": "2573",
          "occ_name": "Knowledge Management Analyst"
        },
        {
          "occupation_code": "2574",
          "occ_name": "Knowledge Management Officer"
        },
        {
          "occupation_code": "2575",
          "occ_name": "Knowledge Management Practitioner"
        },
        {
          "occupation_code": "2576",
          "occ_name": "Knowledge Management Specialist"
        },
        {
          "occupation_code": "2577",
          "occ_name": "Knowledge Manager"
        },
        {
          "occupation_code": "2578",
          "occ_name": "Lab Technician"
        },
        {
          "occupation_code": "2579",
          "occ_name": "Laboratory Analyst"
        },
        {
          "occupation_code": "2580",
          "occ_name": "Laboratory Animal Technician"
        },
        {
          "occupation_code": "2581",
          "occ_name": "Laboratory Assistant"
        },
        {
          "occupation_code": "2582",
          "occ_name": "Laboratory Assistant Laboratory Analyst"
        },
        {
          "occupation_code": "2583",
          "occ_name": "Laboratory Doctor"
        },
        {
          "occupation_code": "2584",
          "occ_name": "Laboratory Manager"
        },
        {
          "occupation_code": "2585",
          "occ_name": "Laboratory Research"
        },
        {
          "occupation_code": "2586",
          "occ_name": "Laboratory Researcher"
        },
        {
          "occupation_code": "2587",
          "occ_name": "Laboratory Technician"
        },
        {
          "occupation_code": "2588",
          "occ_name": "Laboratory Technologist"
        },
        {
          "occupation_code": "2589",
          "occ_name": "Labour Broker"
        },
        {
          "occupation_code": "2590",
          "occ_name": "Labour Consultant"
        },
        {
          "occupation_code": "2591",
          "occ_name": "Labour Law Consultant"
        },
        {
          "occupation_code": "2592",
          "occ_name": "Labour Relations Consultant"
        },
        {
          "occupation_code": "2593",
          "occ_name": "Labour Relations Manager"
        },
        {
          "occupation_code": "2594",
          "occ_name": "Labour Relations Practitioner"
        },
        {
          "occupation_code": "2595",
          "occ_name": "Labourer"
        },
        {
          "occupation_code": "2596",
          "occ_name": "Labourer Agriculture"
        },
        {
          "occupation_code": "2597",
          "occ_name": "Labourer Construction"
        },
        {
          "occupation_code": "2598",
          "occ_name": "Labourer Mining"
        },
        {
          "occupation_code": "2599",
          "occ_name": "Labourer Oil Rig"
        },
        {
          "occupation_code": "2600",
          "occ_name": "Labourer Stormwater"
        },
        {
          "occupation_code": "2601",
          "occ_name": "Labourer Wharf"
        },
        {
          "occupation_code": "2602",
          "occ_name": "Laminator"
        },
        {
          "occupation_code": "2603",
          "occ_name": "Lamp Keeper Mining"
        },
        {
          "occupation_code": "2604",
          "occ_name": "LAN Engineer"
        },
        {
          "occupation_code": "2605",
          "occ_name": "Land Surveyor"
        },
        {
          "occupation_code": "2606",
          "occ_name": "Landscape Consultant"
        },
        {
          "occupation_code": "2607",
          "occ_name": "Landscape Contractor"
        },
        {
          "occupation_code": "2608",
          "occ_name": "Landscape Designer"
        },
        {
          "occupation_code": "2609",
          "occ_name": "Landscape Engineer"
        },
        {
          "occupation_code": "2610",
          "occ_name": "Landscape Technologist"
        },
        {
          "occupation_code": "2611",
          "occ_name": "Landscaper"
        },
        {
          "occupation_code": "2612",
          "occ_name": "Language Consultant"
        },
        {
          "occupation_code": "2613",
          "occ_name": "Language Practitioner"
        },
        {
          "occupation_code": "2614",
          "occ_name": "Language Serviced Administrator"
        },
        {
          "occupation_code": "2615",
          "occ_name": "Large Animal Vet"
        },
        {
          "occupation_code": "2616",
          "occ_name": "Laser Optical Designer"
        },
        {
          "occupation_code": "2617",
          "occ_name": "Lathe Operator"
        },
        {
          "occupation_code": "2618",
          "occ_name": "Laundry Worker"
        },
        {
          "occupation_code": "2619",
          "occ_name": "Lawn Layer"
        },
        {
          "occupation_code": "2620",
          "occ_name": "Lawn Mower Mechanic"
        },
        {
          "occupation_code": "2621",
          "occ_name": "Lawn Mower Repairer"
        },
        {
          "occupation_code": "2622",
          "occ_name": "Lawnmower"
        },
        {
          "occupation_code": "2623",
          "occ_name": "Lawyer"
        },
        {
          "occupation_code": "2624",
          "occ_name": "Layer Linoleum"
        },
        {
          "occupation_code": "2625",
          "occ_name": "Layer Tarmac"
        },
        {
          "occupation_code": "2626",
          "occ_name": "Layer Vinyl Floor"
        },
        {
          "occupation_code": "2627",
          "occ_name": "Layout Designer"
        },
        {
          "occupation_code": "2628",
          "occ_name": "Lead Burner"
        },
        {
          "occupation_code": "2629",
          "occ_name": "Lead Planning Specialist"
        },
        {
          "occupation_code": "2630",
          "occ_name": "Leadership Consultant"
        },
        {
          "occupation_code": "2631",
          "occ_name": "Leadhand Oil Rig"
        },
        {
          "occupation_code": "2632",
          "occ_name": "Leading Fireman"
        },
        {
          "occupation_code": "2633",
          "occ_name": "Leadlight Worker"
        },
        {
          "occupation_code": "2634",
          "occ_name": "Learner"
        },
        {
          "occupation_code": "2635",
          "occ_name": "Learning Development Lead"
        },
        {
          "occupation_code": "2636",
          "occ_name": "Leasehand Oil Rig"
        },
        {
          "occupation_code": "2637",
          "occ_name": "Leather Technologist"
        },
        {
          "occupation_code": "2638",
          "occ_name": "Lecture Assistant"
        },
        {
          "occupation_code": "2639",
          "occ_name": "Lecturer"
        },
        {
          "occupation_code": "2640",
          "occ_name": "Ledger Clerk"
        },
        {
          "occupation_code": "2641",
          "occ_name": "Legal Adviser"
        },
        {
          "occupation_code": "2642",
          "occ_name": "Legal Advisor"
        },
        {
          "occupation_code": "2643",
          "occ_name": "Legal Agent"
        },
        {
          "occupation_code": "2644",
          "occ_name": "Legal And Compliance Manager"
        },
        {
          "occupation_code": "2645",
          "occ_name": "Legal Assistant"
        },
        {
          "occupation_code": "2646",
          "occ_name": "Legal Consultant"
        },
        {
          "occupation_code": "2647",
          "occ_name": "Legal Counsel"
        },
        {
          "occupation_code": "2648",
          "occ_name": "Legal Officer"
        },
        {
          "occupation_code": "2649",
          "occ_name": "Legal Practitioner"
        },
        {
          "occupation_code": "2650",
          "occ_name": "Legal Researcher"
        },
        {
          "occupation_code": "2651",
          "occ_name": "Legal Typist"
        },
        {
          "occupation_code": "2652",
          "occ_name": "Legislator"
        },
        {
          "occupation_code": "2653",
          "occ_name": "Level Brusher Mining"
        },
        {
          "occupation_code": "2654",
          "occ_name": "Liaison Consultant"
        },
        {
          "occupation_code": "2655",
          "occ_name": "Liaison Manager"
        },
        {
          "occupation_code": "2656",
          "occ_name": "Liaison Officer"
        },
        {
          "occupation_code": "2657",
          "occ_name": "Librarian"
        },
        {
          "occupation_code": "2658",
          "occ_name": "Library Assistant"
        },
        {
          "occupation_code": "2659",
          "occ_name": "Library Clerk"
        },
        {
          "occupation_code": "2660",
          "occ_name": "Library Technician"
        },
        {
          "occupation_code": "2661",
          "occ_name": "Licensed Practical Nurse LPN"
        },
        {
          "occupation_code": "2662",
          "occ_name": "Life Coach"
        },
        {
          "occupation_code": "2663",
          "occ_name": "Life Insurance Agent"
        },
        {
          "occupation_code": "2664",
          "occ_name": "Life Underwriter"
        },
        {
          "occupation_code": "2665",
          "occ_name": "Lifeguard"
        },
        {
          "occupation_code": "2666",
          "occ_name": "Light Goods Vehicle Driver"
        },
        {
          "occupation_code": "2667",
          "occ_name": "Light Metal Worker"
        },
        {
          "occupation_code": "2668",
          "occ_name": "Light Vehicles Driver"
        },
        {
          "occupation_code": "2669",
          "occ_name": "Lighterman Quarry"
        },
        {
          "occupation_code": "2670",
          "occ_name": "Lighting Contractor"
        },
        {
          "occupation_code": "2671",
          "occ_name": "Lighting Designer"
        },
        {
          "occupation_code": "2672",
          "occ_name": "Lighting Manager"
        },
        {
          "occupation_code": "2673",
          "occ_name": "Lightkeeper"
        },
        {
          "occupation_code": "2674",
          "occ_name": "Lightning Technician"
        },
        {
          "occupation_code": "2675",
          "occ_name": "Limonologist"
        },
        {
          "occupation_code": "2676",
          "occ_name": "Line Dancer"
        },
        {
          "occupation_code": "2677",
          "occ_name": "Line Inspector"
        },
        {
          "occupation_code": "2678",
          "occ_name": "Linesman Diving Surface worker"
        },
        {
          "occupation_code": "2679",
          "occ_name": "Linesman Mining"
        },
        {
          "occupation_code": "2680",
          "occ_name": "Linesman Telecommunication"
        },
        {
          "occupation_code": "2681",
          "occ_name": "Linguistic Liaison"
        },
        {
          "occupation_code": "2682",
          "occ_name": "Linotype Operator"
        },
        {
          "occupation_code": "2683",
          "occ_name": "Linotype Operators"
        },
        {
          "occupation_code": "2684",
          "occ_name": "Liquidator"
        },
        {
          "occupation_code": "2685",
          "occ_name": "Liquor Store Owner"
        },
        {
          "occupation_code": "2686",
          "occ_name": "Literacy Facilitator"
        },
        {
          "occupation_code": "2687",
          "occ_name": "Litigation Manager"
        },
        {
          "occupation_code": "2688",
          "occ_name": "Livestock Inseminator"
        },
        {
          "occupation_code": "2689",
          "occ_name": "Livestock Inspector"
        },
        {
          "occupation_code": "2690",
          "occ_name": "Livestock Producer"
        },
        {
          "occupation_code": "2691",
          "occ_name": "Load Dispatcher"
        },
        {
          "occupation_code": "2692",
          "occ_name": "Loader Operator"
        },
        {
          "occupation_code": "2693",
          "occ_name": "Loan Officer"
        },
        {
          "occupation_code": "2694",
          "occ_name": "Locksmith"
        },
        {
          "occupation_code": "2695",
          "occ_name": "Lodge Manager"
        },
        {
          "occupation_code": "2696",
          "occ_name": "Log Bucker"
        },
        {
          "occupation_code": "2697",
          "occ_name": "Log Haulier Driver"
        },
        {
          "occupation_code": "2698",
          "occ_name": "Log Marker"
        },
        {
          "occupation_code": "2699",
          "occ_name": "Log Scaler"
        },
        {
          "occupation_code": "2700",
          "occ_name": "Logger River"
        },
        {
          "occupation_code": "2701",
          "occ_name": "Logging Specialist"
        },
        {
          "occupation_code": "2702",
          "occ_name": "Logging Truck Driver"
        },
        {
          "occupation_code": "2703",
          "occ_name": "Logistician"
        },
        {
          "occupation_code": "2704",
          "occ_name": "Logistics Analyst"
        },
        {
          "occupation_code": "2705",
          "occ_name": "Logistics Controller"
        },
        {
          "occupation_code": "2706",
          "occ_name": "Logistics Coordinator"
        },
        {
          "occupation_code": "2707",
          "occ_name": "Logistics Director"
        },
        {
          "occupation_code": "2708",
          "occ_name": "Logistics Engineer"
        },
        {
          "occupation_code": "2709",
          "occ_name": "Logistics Manager"
        },
        {
          "occupation_code": "2710",
          "occ_name": "Logistics Manager Transport"
        },
        {
          "occupation_code": "2711",
          "occ_name": "Logistics Sales Representative No Travelling"
        },
        {
          "occupation_code": "2712",
          "occ_name": "Logistics Sales Representative Travelling"
        },
        {
          "occupation_code": "2713",
          "occ_name": "Logistics Specialist"
        },
        {
          "occupation_code": "2714",
          "occ_name": "Long Liner"
        },
        {
          "occupation_code": "2715",
          "occ_name": "Loom Operator"
        },
        {
          "occupation_code": "2716",
          "occ_name": "Loom Technician"
        },
        {
          "occupation_code": "2717",
          "occ_name": "Loss Assessor"
        },
        {
          "occupation_code": "2718",
          "occ_name": "Lumberjack"
        },
        {
          "occupation_code": "2719",
          "occ_name": "Lumberman"
        },
        {
          "occupation_code": "2720",
          "occ_name": "Luthier"
        },
        {
          "occupation_code": "2721",
          "occ_name": "Lyricist"
        },
        {
          "occupation_code": "2722",
          "occ_name": "Machine Builder"
        },
        {
          "occupation_code": "2723",
          "occ_name": "Machine Building Engineer"
        },
        {
          "occupation_code": "2724",
          "occ_name": "Machine Building Mechanic"
        },
        {
          "occupation_code": "2725",
          "occ_name": "Machine Building Technician"
        },
        {
          "occupation_code": "2726",
          "occ_name": "Machine Fitter"
        },
        {
          "occupation_code": "2727",
          "occ_name": "Machine Machinist"
        },
        {
          "occupation_code": "2728",
          "occ_name": "Machine Operator"
        },
        {
          "occupation_code": "2729",
          "occ_name": "Machine Operator Rubber Injection Molding"
        },
        {
          "occupation_code": "2730",
          "occ_name": "Machine Operator Rubber Knitting"
        },
        {
          "occupation_code": "2731",
          "occ_name": "Machine Operator Rubber Molding"
        },
        {
          "occupation_code": "2732",
          "occ_name": "Machine Operator Rubber Processing"
        },
        {
          "occupation_code": "2733",
          "occ_name": "Machine Operator Rubber Production"
        },
        {
          "occupation_code": "2734",
          "occ_name": "Machine Operator Textile Dyeing"
        },
        {
          "occupation_code": "2735",
          "occ_name": "Machine Operator Textile Production"
        },
        {
          "occupation_code": "2736",
          "occ_name": "Machine Operator Weaving"
        },
        {
          "occupation_code": "2737",
          "occ_name": "Machine Tool Setter"
        },
        {
          "occupation_code": "2738",
          "occ_name": "Machinist"
        },
        {
          "occupation_code": "2739",
          "occ_name": "Machinist Sewing"
        },
        {
          "occupation_code": "2740",
          "occ_name": "Machinist Textiles"
        },
        {
          "occupation_code": "2741",
          "occ_name": "Magazine Editor"
        },
        {
          "occupation_code": "2742",
          "occ_name": "Magician"
        },
        {
          "occupation_code": "2743",
          "occ_name": "Magistrate"
        },
        {
          "occupation_code": "2744",
          "occ_name": "Maid"
        },
        {
          "occupation_code": "2745",
          "occ_name": "Mail Carrier Aviation"
        },
        {
          "occupation_code": "2746",
          "occ_name": "Mail Delivery"
        },
        {
          "occupation_code": "2747",
          "occ_name": "Maintenance Engineer Amusement Parks and Circuses"
        },
        {
          "occupation_code": "2748",
          "occ_name": "Maintenance Fitter"
        },
        {
          "occupation_code": "2749",
          "occ_name": "Maintenance Manager"
        },
        {
          "occupation_code": "2750",
          "occ_name": "Maintenance Mechanic"
        },
        {
          "occupation_code": "2751",
          "occ_name": "Maintenance Worker Track"
        },
        {
          "occupation_code": "2752",
          "occ_name": "Maître d'"
        },
        {
          "occupation_code": "2753",
          "occ_name": "Maître d'hôtel"
        },
        {
          "occupation_code": "2754",
          "occ_name": "Maker Furniture"
        },
        {
          "occupation_code": "2755",
          "occ_name": "Maker Hat"
        },
        {
          "occupation_code": "2756",
          "occ_name": "Maker Instrument Case"
        },
        {
          "occupation_code": "2757",
          "occ_name": "Maker Model"
        },
        {
          "occupation_code": "2758",
          "occ_name": "Maker Musical Instruments"
        },
        {
          "occupation_code": "2759",
          "occ_name": "Maker Pallet"
        },
        {
          "occupation_code": "2760",
          "occ_name": "Maker Toy"
        },
        {
          "occupation_code": "2761",
          "occ_name": "Malaria Sprayer"
        },
        {
          "occupation_code": "2762",
          "occ_name": "Mammalogist"
        },
        {
          "occupation_code": "2763",
          "occ_name": "Manager Building"
        },
        {
          "occupation_code": "2764",
          "occ_name": "Manager Building Society"
        },
        {
          "occupation_code": "2765",
          "occ_name": "Manager Casino"
        },
        {
          "occupation_code": "2766",
          "occ_name": "Manager Catering"
        },
        {
          "occupation_code": "2767",
          "occ_name": "Manager Cemetery"
        },
        {
          "occupation_code": "2768",
          "occ_name": "Manager Cinema"
        },
        {
          "occupation_code": "2769",
          "occ_name": "Manager Conference"
        },
        {
          "occupation_code": "2770",
          "occ_name": "Manager Construction Project"
        },
        {
          "occupation_code": "2771",
          "occ_name": "Manager Convention"
        },
        {
          "occupation_code": "2772",
          "occ_name": "Manager Corporate Services"
        },
        {
          "occupation_code": "2773",
          "occ_name": "Manager Department Store"
        },
        {
          "occupation_code": "2774",
          "occ_name": "Manager Export"
        },
        {
          "occupation_code": "2775",
          "occ_name": "Manager Facilities"
        },
        {
          "occupation_code": "2776",
          "occ_name": "Manager Finance"
        },
        {
          "occupation_code": "2777",
          "occ_name": "Manager Fish Farmer"
        },
        {
          "occupation_code": "2778",
          "occ_name": "Manager Gaming"
        },
        {
          "occupation_code": "2779",
          "occ_name": "Manager Gymnasium"
        },
        {
          "occupation_code": "2780",
          "occ_name": "Manager Health and Safety"
        },
        {
          "occupation_code": "2781",
          "occ_name": "Manager Hotel"
        },
        {
          "occupation_code": "2782",
          "occ_name": "Manager Import"
        },
        {
          "occupation_code": "2783",
          "occ_name": "Manager Investment"
        },
        {
          "occupation_code": "2784",
          "occ_name": "Manager Media"
        },
        {
          "occupation_code": "2785",
          "occ_name": "Manager No Manual Work"
        },
        {
          "occupation_code": "2786",
          "occ_name": "Manager Office based No Manual Duties"
        },
        {
          "occupation_code": "2787",
          "occ_name": "Manager Operations"
        },
        {
          "occupation_code": "2788",
          "occ_name": "Manager Personnel"
        },
        {
          "occupation_code": "2789",
          "occ_name": "Manager Portfolio"
        },
        {
          "occupation_code": "2790",
          "occ_name": "Manager Power Station"
        },
        {
          "occupation_code": "2791",
          "occ_name": "Manager Practice"
        },
        {
          "occupation_code": "2792",
          "occ_name": "Manager Product"
        },
        {
          "occupation_code": "2793",
          "occ_name": "Manager Production"
        },
        {
          "occupation_code": "2794",
          "occ_name": "Manager Project"
        },
        {
          "occupation_code": "2795",
          "occ_name": "Manager Public Relations"
        },
        {
          "occupation_code": "2796",
          "occ_name": "Manager Records"
        },
        {
          "occupation_code": "2797",
          "occ_name": "Manager Resort"
        },
        {
          "occupation_code": "2798",
          "occ_name": "Manager Restaurant"
        },
        {
          "occupation_code": "2799",
          "occ_name": "Manager Securities"
        },
        {
          "occupation_code": "2800",
          "occ_name": "Manager Security Administrative Only"
        },
        {
          "occupation_code": "2801",
          "occ_name": "Manager Sewage Works Sedentary Duties"
        },
        {
          "occupation_code": "2802",
          "occ_name": "Manager Supermarket Supervision Only"
        },
        {
          "occupation_code": "2803",
          "occ_name": "Manager Tavern"
        },
        {
          "occupation_code": "2804",
          "occ_name": "Manager Works"
        },
        {
          "occupation_code": "2805",
          "occ_name": "Manager Youth Hostel"
        },
        {
          "occupation_code": "2806",
          "occ_name": "Manicurist"
        },
        {
          "occupation_code": "2807",
          "occ_name": "Manual Labourer"
        },
        {
          "occupation_code": "2808",
          "occ_name": "Manufacturing Engineer"
        },
        {
          "occupation_code": "2809",
          "occ_name": "Manufacturing Inspector"
        },
        {
          "occupation_code": "2810",
          "occ_name": "Manufacturing Manager"
        },
        {
          "occupation_code": "2811",
          "occ_name": "Manufacturing Planner"
        },
        {
          "occupation_code": "2812",
          "occ_name": "Manufacturing Technician"
        },
        {
          "occupation_code": "2813",
          "occ_name": "Map Maker"
        },
        {
          "occupation_code": "2814",
          "occ_name": "Mapping Pilot"
        },
        {
          "occupation_code": "2815",
          "occ_name": "Marijuana Retail Salesperson"
        },
        {
          "occupation_code": "2816",
          "occ_name": "Marine Biologist"
        },
        {
          "occupation_code": "2817",
          "occ_name": "Marine Engineer"
        },
        {
          "occupation_code": "2818",
          "occ_name": "Marine Harvester"
        },
        {
          "occupation_code": "2819",
          "occ_name": "Marine Microbiologist"
        },
        {
          "occupation_code": "2820",
          "occ_name": "Marine Researcher"
        },
        {
          "occupation_code": "2821",
          "occ_name": "Marine Salesperson"
        },
        {
          "occupation_code": "2822",
          "occ_name": "Marine Scientist"
        },
        {
          "occupation_code": "2823",
          "occ_name": "Maritime Agent"
        },
        {
          "occupation_code": "2824",
          "occ_name": "Maritime Cook"
        },
        {
          "occupation_code": "2825",
          "occ_name": "Maritime Navigation"
        },
        {
          "occupation_code": "2826",
          "occ_name": "Market Research Consultant"
        },
        {
          "occupation_code": "2827",
          "occ_name": "Market Research Executive"
        },
        {
          "occupation_code": "2828",
          "occ_name": "Market Stock Trader"
        },
        {
          "occupation_code": "2829",
          "occ_name": "Marketer"
        },
        {
          "occupation_code": "2830",
          "occ_name": "Marketing Administrator"
        },
        {
          "occupation_code": "2831",
          "occ_name": "Marketing Advisor"
        },
        {
          "occupation_code": "2832",
          "occ_name": "Marketing Analyst"
        },
        {
          "occupation_code": "2833",
          "occ_name": "Marketing Assistant"
        },
        {
          "occupation_code": "2834",
          "occ_name": "Marketing Consultant"
        },
        {
          "occupation_code": "2835",
          "occ_name": "Marketing Design and Communications Manager"
        },
        {
          "occupation_code": "2836",
          "occ_name": "Marketing Director"
        },
        {
          "occupation_code": "2837",
          "occ_name": "Marketing Economist"
        },
        {
          "occupation_code": "2838",
          "occ_name": "Marketing Executive"
        },
        {
          "occupation_code": "2839",
          "occ_name": "Marketing Manager"
        },
        {
          "occupation_code": "2840",
          "occ_name": "Marketing Official"
        },
        {
          "occupation_code": "2841",
          "occ_name": "Marketing Representative No Travelling"
        },
        {
          "occupation_code": "2842",
          "occ_name": "Marketing Representative Travelling"
        },
        {
          "occupation_code": "2843",
          "occ_name": "Marketing Specialist"
        },
        {
          "occupation_code": "2844",
          "occ_name": "Marketing Trainer"
        },
        {
          "occupation_code": "2845",
          "occ_name": "Markets and Fairs Merchant"
        },
        {
          "occupation_code": "2846",
          "occ_name": "Marksman Police"
        },
        {
          "occupation_code": "2847",
          "occ_name": "Marriage Counselor"
        },
        {
          "occupation_code": "2848",
          "occ_name": "Marshal Sky"
        },
        {
          "occupation_code": "2849",
          "occ_name": "Mason"
        },
        {
          "occupation_code": "2850",
          "occ_name": "Mason Cement"
        },
        {
          "occupation_code": "2851",
          "occ_name": "Mason Street"
        },
        {
          "occupation_code": "2852",
          "occ_name": "Massage Therapist"
        },
        {
          "occupation_code": "2853",
          "occ_name": "Massage Therapist Working from Home"
        },
        {
          "occupation_code": "2854",
          "occ_name": "Master Chimney Sweep"
        },
        {
          "occupation_code": "2855",
          "occ_name": "Master Gardener"
        },
        {
          "occupation_code": "2856",
          "occ_name": "Master Of High Court"
        },
        {
          "occupation_code": "2857",
          "occ_name": "Master Of The Supreme Court"
        },
        {
          "occupation_code": "2858",
          "occ_name": "Matador"
        },
        {
          "occupation_code": "2859",
          "occ_name": "Material Handler"
        },
        {
          "occupation_code": "2860",
          "occ_name": "Materials Controller"
        },
        {
          "occupation_code": "2861",
          "occ_name": "Materials Scientist"
        },
        {
          "occupation_code": "2862",
          "occ_name": "Mathematical Scientist"
        },
        {
          "occupation_code": "2863",
          "occ_name": "Matron Nursing"
        },
        {
          "occupation_code": "2864",
          "occ_name": "Maxillo Facial Technician"
        },
        {
          "occupation_code": "2865",
          "occ_name": "Maxillofacial Surgeon"
        },
        {
          "occupation_code": "2866",
          "occ_name": "Measurement Engineer"
        },
        {
          "occupation_code": "2867",
          "occ_name": "Meat Cutter"
        },
        {
          "occupation_code": "2868",
          "occ_name": "Meat Handler"
        },
        {
          "occupation_code": "2869",
          "occ_name": "Meat Inspector"
        },
        {
          "occupation_code": "2870",
          "occ_name": "Mechanic Bicycle"
        },
        {
          "occupation_code": "2871",
          "occ_name": "Mechanic Heavy Vehicle"
        },
        {
          "occupation_code": "2872",
          "occ_name": "Mechanic Knitting Machine"
        },
        {
          "occupation_code": "2873",
          "occ_name": "Mechanic Leading Hand"
        },
        {
          "occupation_code": "2874",
          "occ_name": "Mechanic Lift"
        },
        {
          "occupation_code": "2875",
          "occ_name": "Mechanic Light Vehicle"
        },
        {
          "occupation_code": "2876",
          "occ_name": "Mechanic Marine"
        },
        {
          "occupation_code": "2877",
          "occ_name": "Mechanic Mobile"
        },
        {
          "occupation_code": "2878",
          "occ_name": "Mechanic Motor Cycle"
        },
        {
          "occupation_code": "2879",
          "occ_name": "Mechanic Motor vehicle"
        },
        {
          "occupation_code": "2880",
          "occ_name": "Mechanic Refrigerator"
        },
        {
          "occupation_code": "2881",
          "occ_name": "Mechanic Spinning Machine"
        },
        {
          "occupation_code": "2882",
          "occ_name": "Mechanic Textile"
        },
        {
          "occupation_code": "2883",
          "occ_name": "Mechanic Truck"
        },
        {
          "occupation_code": "2884",
          "occ_name": "Mechanic Weaving"
        },
        {
          "occupation_code": "2885",
          "occ_name": "Mechanical Fitter"
        },
        {
          "occupation_code": "2886",
          "occ_name": "Mechanical Road Sweeper Driver"
        },
        {
          "occupation_code": "2887",
          "occ_name": "Mechanical Subsystem Integrator"
        },
        {
          "occupation_code": "2888",
          "occ_name": "Mechanical Technician"
        },
        {
          "occupation_code": "2889",
          "occ_name": "Mechatronic Technician"
        },
        {
          "occupation_code": "2890",
          "occ_name": "Media Consultant"
        },
        {
          "occupation_code": "2891",
          "occ_name": "Media Editor Associate International Assignment"
        },
        {
          "occupation_code": "2892",
          "occ_name": "Media Editor Associate Local Assignment"
        },
        {
          "occupation_code": "2893",
          "occ_name": "Media Editor International Assignment"
        },
        {
          "occupation_code": "2894",
          "occ_name": "Media Editor Local Assignment"
        },
        {
          "occupation_code": "2895",
          "occ_name": "Media Editorial Assistant International Assignment"
        },
        {
          "occupation_code": "2896",
          "occ_name": "Media Editorial Assistant Local Assignment"
        },
        {
          "occupation_code": "2897",
          "occ_name": "Media Executive"
        },
        {
          "occupation_code": "2898",
          "occ_name": "Media Expert"
        },
        {
          "occupation_code": "2899",
          "occ_name": "Media Flying"
        },
        {
          "occupation_code": "2900",
          "occ_name": "Media Flying Advertising"
        },
        {
          "occupation_code": "2901",
          "occ_name": "Media Flying News Crew"
        },
        {
          "occupation_code": "2902",
          "occ_name": "Media Flying Photography"
        },
        {
          "occupation_code": "2903",
          "occ_name": "Media Flying Reporting"
        },
        {
          "occupation_code": "2904",
          "occ_name": "Media Planner"
        },
        {
          "occupation_code": "2905",
          "occ_name": "Media Relations Specialist"
        },
        {
          "occupation_code": "2906",
          "occ_name": "Media Sub Editor International Assignment"
        },
        {
          "occupation_code": "2907",
          "occ_name": "Media Sub Editor Local Assignment"
        },
        {
          "occupation_code": "2908",
          "occ_name": "Media Writer"
        },
        {
          "occupation_code": "2909",
          "occ_name": "Mediamatician"
        },
        {
          "occupation_code": "2910",
          "occ_name": "Mediator"
        },
        {
          "occupation_code": "2911",
          "occ_name": "Medic Oil Rig"
        },
        {
          "occupation_code": "2912",
          "occ_name": "Medical Assistant"
        },
        {
          "occupation_code": "2913",
          "occ_name": "Medical Consultant"
        },
        {
          "occupation_code": "2914",
          "occ_name": "Medical Emergency Care Assistant"
        },
        {
          "occupation_code": "2915",
          "occ_name": "Medical Engineer"
        },
        {
          "occupation_code": "2916",
          "occ_name": "Medical Flying"
        },
        {
          "occupation_code": "2917",
          "occ_name": "Medical Flying Air ambulance"
        },
        {
          "occupation_code": "2918",
          "occ_name": "Medical Flying Medical Evacuation"
        },
        {
          "occupation_code": "2919",
          "occ_name": "Medical Illustrator"
        },
        {
          "occupation_code": "2920",
          "occ_name": "Medical Laboratory Scientist"
        },
        {
          "occupation_code": "2921",
          "occ_name": "Medical Laboratory Technician"
        },
        {
          "occupation_code": "2922",
          "occ_name": "Medical Marijuana Employee"
        },
        {
          "occupation_code": "2923",
          "occ_name": "Medical Mycologist"
        },
        {
          "occupation_code": "2924",
          "occ_name": "Medical Physicist"
        },
        {
          "occupation_code": "2925",
          "occ_name": "Medical Practitioner"
        },
        {
          "occupation_code": "2926",
          "occ_name": "Medical Representative"
        },
        {
          "occupation_code": "2927",
          "occ_name": "Medical Representative External"
        },
        {
          "occupation_code": "2928",
          "occ_name": "Medical Research Scientist"
        },
        {
          "occupation_code": "2929",
          "occ_name": "Medical Sales Consultant"
        },
        {
          "occupation_code": "2930",
          "occ_name": "Medical Scientist"
        },
        {
          "occupation_code": "2931",
          "occ_name": "Medical Secretary"
        },
        {
          "occupation_code": "2932",
          "occ_name": "Medical Services Coordinator"
        },
        {
          "occupation_code": "2933",
          "occ_name": "Medical Technologist"
        },
        {
          "occupation_code": "2934",
          "occ_name": "Medical Transport Pilot"
        },
        {
          "occupation_code": "2935",
          "occ_name": "Medical Writer"
        },
        {
          "occupation_code": "2936",
          "occ_name": "Medicine Man"
        },
        {
          "occupation_code": "2937",
          "occ_name": "Medicines Registration Officer"
        },
        {
          "occupation_code": "2938",
          "occ_name": "Medium"
        },
        {
          "occupation_code": "2939",
          "occ_name": "Member Services Manager"
        },
        {
          "occupation_code": "2940",
          "occ_name": "Merchandise Planner"
        },
        {
          "occupation_code": "2941",
          "occ_name": "Merchandiser"
        },
        {
          "occupation_code": "2942",
          "occ_name": "Merchant Marine Sailor"
        },
        {
          "occupation_code": "2943",
          "occ_name": "Merchant Marine Seafaring Personnel"
        },
        {
          "occupation_code": "2944",
          "occ_name": "Merchant Marine Seaman"
        },
        {
          "occupation_code": "2945",
          "occ_name": "Merchant Wine"
        },
        {
          "occupation_code": "2946",
          "occ_name": "Metal Arts Worker"
        },
        {
          "occupation_code": "2947",
          "occ_name": "Metal Caster"
        },
        {
          "occupation_code": "2948",
          "occ_name": "Metal Coating Specialists"
        },
        {
          "occupation_code": "2949",
          "occ_name": "Metal Foundry Labourer"
        },
        {
          "occupation_code": "2950",
          "occ_name": "Metal Furnace Worker"
        },
        {
          "occupation_code": "2951",
          "occ_name": "Metal Mechanic"
        },
        {
          "occupation_code": "2952",
          "occ_name": "Metal Work and Fabrication Pattern Maker"
        },
        {
          "occupation_code": "2953",
          "occ_name": "Metallographer"
        },
        {
          "occupation_code": "2954",
          "occ_name": "Metallographer No Field Work Lab and Office Only"
        },
        {
          "occupation_code": "2955",
          "occ_name": "Metallurgical Chemist"
        },
        {
          "occupation_code": "2956",
          "occ_name": "Metallurgical Engineer"
        },
        {
          "occupation_code": "2957",
          "occ_name": "Metallurgist"
        },
        {
          "occupation_code": "2958",
          "occ_name": "Metalworker"
        },
        {
          "occupation_code": "2959",
          "occ_name": "Meteorological Technician"
        },
        {
          "occupation_code": "2960",
          "occ_name": "Meteorologist"
        },
        {
          "occupation_code": "2961",
          "occ_name": "Meter Taxi Driver"
        },
        {
          "occupation_code": "2962",
          "occ_name": "Meterological Pilot"
        },
        {
          "occupation_code": "2963",
          "occ_name": "Metrologist"
        },
        {
          "occupation_code": "2964",
          "occ_name": "Micro Lender"
        },
        {
          "occupation_code": "2965",
          "occ_name": "Microbiologist"
        },
        {
          "occupation_code": "2966",
          "occ_name": "Microfilm Technician"
        },
        {
          "occupation_code": "2967",
          "occ_name": "Midshipman Merchant Marine"
        },
        {
          "occupation_code": "2968",
          "occ_name": "Midwife"
        },
        {
          "occupation_code": "2969",
          "occ_name": "Miller"
        },
        {
          "occupation_code": "2970",
          "occ_name": "Milliner"
        },
        {
          "occupation_code": "2971",
          "occ_name": "Millwright"
        },
        {
          "occupation_code": "2972",
          "occ_name": "Mine Binder"
        },
        {
          "occupation_code": "2973",
          "occ_name": "Mine Blaster"
        },
        {
          "occupation_code": "2974",
          "occ_name": "Mine Boilermaker"
        },
        {
          "occupation_code": "2975",
          "occ_name": "Mine Captain"
        },
        {
          "occupation_code": "2976",
          "occ_name": "Mine Contractor"
        },
        {
          "occupation_code": "2977",
          "occ_name": "Mine Developer"
        },
        {
          "occupation_code": "2978",
          "occ_name": "Mine Dewatering Specialist"
        },
        {
          "occupation_code": "2979",
          "occ_name": "Mine Director"
        },
        {
          "occupation_code": "2980",
          "occ_name": "Mine Driller"
        },
        {
          "occupation_code": "2981",
          "occ_name": "Mine Dust Inspector"
        },
        {
          "occupation_code": "2982",
          "occ_name": "Mine Early Examiner"
        },
        {
          "occupation_code": "2983",
          "occ_name": "Mine Electrician"
        },
        {
          "occupation_code": "2984",
          "occ_name": "Mine Electromechanic"
        },
        {
          "occupation_code": "2985",
          "occ_name": "Mine Engineer"
        },
        {
          "occupation_code": "2986",
          "occ_name": "Mine Fitter"
        },
        {
          "occupation_code": "2987",
          "occ_name": "Mine Fitter and Turner"
        },
        {
          "occupation_code": "2988",
          "occ_name": "Mine Foreman"
        },
        {
          "occupation_code": "2989",
          "occ_name": "Mine Geologist"
        },
        {
          "occupation_code": "2990",
          "occ_name": "Mine Handyman"
        },
        {
          "occupation_code": "2991",
          "occ_name": "Mine Hoist Lift Driver"
        },
        {
          "occupation_code": "2992",
          "occ_name": "Mine Hoist Operator"
        },
        {
          "occupation_code": "2993",
          "occ_name": "Mine Inspector"
        },
        {
          "occupation_code": "2994",
          "occ_name": "Mine Lighterman"
        },
        {
          "occupation_code": "2995",
          "occ_name": "Mine Loader"
        },
        {
          "occupation_code": "2996",
          "occ_name": "Mine Manager"
        },
        {
          "occupation_code": "2997",
          "occ_name": "Mine Master Sinker"
        },
        {
          "occupation_code": "2998",
          "occ_name": "Mine Mechanic"
        },
        {
          "occupation_code": "2999",
          "occ_name": "Mine Official"
        },
        {
          "occupation_code": "3000",
          "occ_name": "Mine Paymaster"
        },
        {
          "occupation_code": "3001",
          "occ_name": "Mine Planner"
        },
        {
          "occupation_code": "3002",
          "occ_name": "Mine Production Manager"
        },
        {
          "occupation_code": "3003",
          "occ_name": "Mine Prospector"
        },
        {
          "occupation_code": "3004",
          "occ_name": "Mine Pumpman"
        },
        {
          "occupation_code": "3005",
          "occ_name": "Mine Quality Controller"
        },
        {
          "occupation_code": "3006",
          "occ_name": "Mine Reclaimer"
        },
        {
          "occupation_code": "3007",
          "occ_name": "Mine Rescue Prototeam"
        },
        {
          "occupation_code": "3008",
          "occ_name": "Mine Rigger"
        },
        {
          "occupation_code": "3009",
          "occ_name": "Mine Rock Filler"
        },
        {
          "occupation_code": "3010",
          "occ_name": "Mine Safety Engineer"
        },
        {
          "occupation_code": "3011",
          "occ_name": "Mine Safety Officer"
        },
        {
          "occupation_code": "3012",
          "occ_name": "Mine Scraperman"
        },
        {
          "occupation_code": "3013",
          "occ_name": "Mine Screener"
        },
        {
          "occupation_code": "3014",
          "occ_name": "Mine Section Manager"
        },
        {
          "occupation_code": "3015",
          "occ_name": "Mine Shaft Sinker"
        },
        {
          "occupation_code": "3016",
          "occ_name": "Mine Shift Boss"
        },
        {
          "occupation_code": "3017",
          "occ_name": "Mine Shotfirer"
        },
        {
          "occupation_code": "3018",
          "occ_name": "Mine Siever"
        },
        {
          "occupation_code": "3019",
          "occ_name": "Mine Sifter"
        },
        {
          "occupation_code": "3020",
          "occ_name": "Mine Siloman"
        },
        {
          "occupation_code": "3021",
          "occ_name": "Mine Splicer"
        },
        {
          "occupation_code": "3022",
          "occ_name": "Mine Stone Breaker"
        },
        {
          "occupation_code": "3023",
          "occ_name": "Mine Stoper"
        },
        {
          "occupation_code": "3024",
          "occ_name": "Mine Storeman"
        },
        {
          "occupation_code": "3025",
          "occ_name": "Mine Supervisor"
        },
        {
          "occupation_code": "3026",
          "occ_name": "Mine Surveyor"
        },
        {
          "occupation_code": "3027",
          "occ_name": "Mine Timberman"
        },
        {
          "occupation_code": "3028",
          "occ_name": "Mine Trainer"
        },
        {
          "occupation_code": "3029",
          "occ_name": "Mine Trammer"
        },
        {
          "occupation_code": "3030",
          "occ_name": "Mine Valveman"
        },
        {
          "occupation_code": "3031",
          "occ_name": "Mine Ventilation Inspector"
        },
        {
          "occupation_code": "3032",
          "occ_name": "Mine Ventilation Specialist"
        },
        {
          "occupation_code": "3033",
          "occ_name": "Mine Waste Packer"
        },
        {
          "occupation_code": "3034",
          "occ_name": "Mine Winch Transporter"
        },
        {
          "occupation_code": "3035",
          "occ_name": "Miner Open Pit Miner"
        },
        {
          "occupation_code": "3036",
          "occ_name": "Miner Strip Mining"
        },
        {
          "occupation_code": "3037",
          "occ_name": "Miner Surface Worker Mining"
        },
        {
          "occupation_code": "3038",
          "occ_name": "Miner Underground"
        },
        {
          "occupation_code": "3039",
          "occ_name": "Mineral Economist"
        },
        {
          "occupation_code": "3040",
          "occ_name": "Mineral Processing Plant Attendant"
        },
        {
          "occupation_code": "3041",
          "occ_name": "Mineral Resource Manager"
        },
        {
          "occupation_code": "3042",
          "occ_name": "Mineralogist"
        },
        {
          "occupation_code": "3043",
          "occ_name": "Miner's Assistant"
        },
        {
          "occupation_code": "3044",
          "occ_name": "Mini Bus Taxi Owner"
        },
        {
          "occupation_code": "3045",
          "occ_name": "Minibus Taxi Driver"
        },
        {
          "occupation_code": "3046",
          "occ_name": "Minibus Taxi Owner"
        },
        {
          "occupation_code": "3047",
          "occ_name": "Mining Banksman"
        },
        {
          "occupation_code": "3048",
          "occ_name": "Mining Cageman"
        },
        {
          "occupation_code": "3049",
          "occ_name": "Mining Clipper"
        },
        {
          "occupation_code": "3050",
          "occ_name": "Mining Economist"
        },
        {
          "occupation_code": "3051",
          "occ_name": "Mining engineer"
        },
        {
          "occupation_code": "3052",
          "occ_name": "Mining Explosives Expert"
        },
        {
          "occupation_code": "3053",
          "occ_name": "Mining Fireman"
        },
        {
          "occupation_code": "3054",
          "occ_name": "Mining Geologist"
        },
        {
          "occupation_code": "3055",
          "occ_name": "Mining Machine Operator"
        },
        {
          "occupation_code": "3056",
          "occ_name": "Mining Pipefitter   Underground Pipe Installer"
        },
        {
          "occupation_code": "3057",
          "occ_name": "Mining Shunter"
        },
        {
          "occupation_code": "3058",
          "occ_name": "Mining Sinker"
        },
        {
          "occupation_code": "3059",
          "occ_name": "Mining Support Worker Pit Crew Technician"
        },
        {
          "occupation_code": "3060",
          "occ_name": "Mining Surveyor"
        },
        {
          "occupation_code": "3061",
          "occ_name": "Mining Wash Plant Operator"
        },
        {
          "occupation_code": "3062",
          "occ_name": "Minister"
        },
        {
          "occupation_code": "3063",
          "occ_name": "Mircrobiologist"
        },
        {
          "occupation_code": "3064",
          "occ_name": "Missionary"
        },
        {
          "occupation_code": "3065",
          "occ_name": "MMA Fighter"
        },
        {
          "occupation_code": "3066",
          "occ_name": "Mobile Crane Driver"
        },
        {
          "occupation_code": "3067",
          "occ_name": "Model Agency Director"
        },
        {
          "occupation_code": "3068",
          "occ_name": "Model Agency Manager"
        },
        {
          "occupation_code": "3069",
          "occ_name": "Model Agent"
        },
        {
          "occupation_code": "3070",
          "occ_name": "Model Builder"
        },
        {
          "occupation_code": "3071",
          "occ_name": "Model Carpenter"
        },
        {
          "occupation_code": "3072",
          "occ_name": "Model Fitter"
        },
        {
          "occupation_code": "3073",
          "occ_name": "Modeller"
        },
        {
          "occupation_code": "3074",
          "occ_name": "Moderator"
        },
        {
          "occupation_code": "3075",
          "occ_name": "Mold Caster"
        },
        {
          "occupation_code": "3076",
          "occ_name": "Money Market Administrator"
        },
        {
          "occupation_code": "3077",
          "occ_name": "Money Market Dealer"
        },
        {
          "occupation_code": "3078",
          "occ_name": "Money Transporter"
        },
        {
          "occupation_code": "3079",
          "occ_name": "Monitoring And Evaluation Officer"
        },
        {
          "occupation_code": "3080",
          "occ_name": "Monk"
        },
        {
          "occupation_code": "3081",
          "occ_name": "Mortgage Adviser"
        },
        {
          "occupation_code": "3082",
          "occ_name": "Mortgage Agent"
        },
        {
          "occupation_code": "3083",
          "occ_name": "Mortgage Officer"
        },
        {
          "occupation_code": "3084",
          "occ_name": "Mortgage Processor"
        },
        {
          "occupation_code": "3085",
          "occ_name": "Mortician"
        },
        {
          "occupation_code": "3086",
          "occ_name": "Mortuary Assistant"
        },
        {
          "occupation_code": "3087",
          "occ_name": "Mortuary Attendant"
        },
        {
          "occupation_code": "3088",
          "occ_name": "Mortuary Technician"
        },
        {
          "occupation_code": "3089",
          "occ_name": "Motivational Speaker"
        },
        {
          "occupation_code": "3090",
          "occ_name": "Motocross Racing Driver"
        },
        {
          "occupation_code": "3091",
          "occ_name": "Motor Assembler"
        },
        {
          "occupation_code": "3092",
          "occ_name": "Motor Racing Driver"
        },
        {
          "occupation_code": "3093",
          "occ_name": "Motor Vehicle Testing Official"
        },
        {
          "occupation_code": "3094",
          "occ_name": "Motor Vehicle Valeter"
        },
        {
          "occupation_code": "3095",
          "occ_name": "Motor Vehicle Washer"
        },
        {
          "occupation_code": "3096",
          "occ_name": "Motorhand Oil Rig"
        },
        {
          "occupation_code": "3097",
          "occ_name": "Motorman Mining"
        },
        {
          "occupation_code": "3098",
          "occ_name": "Mover House"
        },
        {
          "occupation_code": "3099",
          "occ_name": "Mud Engineer"
        },
        {
          "occupation_code": "3100",
          "occ_name": "Mud Logger Oil Rig"
        },
        {
          "occupation_code": "3101",
          "occ_name": "Mud Man Oil Rig"
        },
        {
          "occupation_code": "3102",
          "occ_name": "Mufti"
        },
        {
          "occupation_code": "3103",
          "occ_name": "Multimedia Designer"
        },
        {
          "occupation_code": "3104",
          "occ_name": "Multimedia Developer"
        },
        {
          "occupation_code": "3105",
          "occ_name": "Multimedia Programmer"
        },
        {
          "occupation_code": "3106",
          "occ_name": "Multimedia Specialist"
        },
        {
          "occupation_code": "3107",
          "occ_name": "Multishot Exploder Mining"
        },
        {
          "occupation_code": "3108",
          "occ_name": "Municipal Prosecutor"
        },
        {
          "occupation_code": "3109",
          "occ_name": "Municipality Staff Member Office Based No Manual"
        },
        {
          "occupation_code": "3110",
          "occ_name": "Museum Curator"
        },
        {
          "occupation_code": "3111",
          "occ_name": "Music Arranger"
        },
        {
          "occupation_code": "3112",
          "occ_name": "Music Composer"
        },
        {
          "occupation_code": "3113",
          "occ_name": "Music Instructor"
        },
        {
          "occupation_code": "3114",
          "occ_name": "Music Publisher"
        },
        {
          "occupation_code": "3115",
          "occ_name": "Music Teacher"
        },
        {
          "occupation_code": "3116",
          "occ_name": "Music Therapist"
        },
        {
          "occupation_code": "3117",
          "occ_name": "Musical Director"
        },
        {
          "occupation_code": "3118",
          "occ_name": "Musician"
        },
        {
          "occupation_code": "3119",
          "occ_name": "Musicologist"
        },
        {
          "occupation_code": "3120",
          "occ_name": "Mussel Farmer"
        },
        {
          "occupation_code": "3121",
          "occ_name": "Nail Artist"
        },
        {
          "occupation_code": "3122",
          "occ_name": "Nail Designer"
        },
        {
          "occupation_code": "3123",
          "occ_name": "Nail Technician"
        },
        {
          "occupation_code": "3124",
          "occ_name": "National Breakdown Patrolman"
        },
        {
          "occupation_code": "3125",
          "occ_name": "Natural Scientist"
        },
        {
          "occupation_code": "3126",
          "occ_name": "Naturopath"
        },
        {
          "occupation_code": "3127",
          "occ_name": "Naval Architect"
        },
        {
          "occupation_code": "3128",
          "occ_name": "Navy Diver"
        },
        {
          "occupation_code": "3129",
          "occ_name": "Negotiator Legal"
        },
        {
          "occupation_code": "3130",
          "occ_name": "Neonatologist"
        },
        {
          "occupation_code": "3131",
          "occ_name": "Nephrologist"
        },
        {
          "occupation_code": "3132",
          "occ_name": "Network Administrator"
        },
        {
          "occupation_code": "3133",
          "occ_name": "Network Analyst"
        },
        {
          "occupation_code": "3134",
          "occ_name": "Network Design Engineer"
        },
        {
          "occupation_code": "3135",
          "occ_name": "Network Engineer"
        },
        {
          "occupation_code": "3136",
          "occ_name": "Network Manager"
        },
        {
          "occupation_code": "3137",
          "occ_name": "Network Programmer"
        },
        {
          "occupation_code": "3138",
          "occ_name": "Network Specialist"
        },
        {
          "occupation_code": "3139",
          "occ_name": "Network Support Person"
        },
        {
          "occupation_code": "3140",
          "occ_name": "Network Systems Analyst"
        },
        {
          "occupation_code": "3141",
          "occ_name": "Network Systems Specialist"
        },
        {
          "occupation_code": "3142",
          "occ_name": "Network Technician"
        },
        {
          "occupation_code": "3143",
          "occ_name": "Networks and Communications Consultant"
        },
        {
          "occupation_code": "3144",
          "occ_name": "Networks and Communications Manager"
        },
        {
          "occupation_code": "3145",
          "occ_name": "Neurologist"
        },
        {
          "occupation_code": "3146",
          "occ_name": "Neurophysiologist"
        },
        {
          "occupation_code": "3147",
          "occ_name": "Neurosurgeon"
        },
        {
          "occupation_code": "3148",
          "occ_name": "New Business Manager"
        },
        {
          "occupation_code": "3149",
          "occ_name": "New Business Manager External"
        },
        {
          "occupation_code": "3150",
          "occ_name": "News Analyst"
        },
        {
          "occupation_code": "3151",
          "occ_name": "News Commentator"
        },
        {
          "occupation_code": "3152",
          "occ_name": "News Editor"
        },
        {
          "occupation_code": "3153",
          "occ_name": "News Photographer International Assignment"
        },
        {
          "occupation_code": "3154",
          "occ_name": "News Photographer Local Assignment"
        },
        {
          "occupation_code": "3155",
          "occ_name": "News Reporter Domestic"
        },
        {
          "occupation_code": "3156",
          "occ_name": "News Reporter International Assignment"
        },
        {
          "occupation_code": "3157",
          "occ_name": "News Researcher"
        },
        {
          "occupation_code": "3158",
          "occ_name": "News Vendors"
        },
        {
          "occupation_code": "3159",
          "occ_name": "News Writer"
        },
        {
          "occupation_code": "3160",
          "occ_name": "Newscaster"
        },
        {
          "occupation_code": "3161",
          "occ_name": "Newspaper Deliverer"
        },
        {
          "occupation_code": "3162",
          "occ_name": "Newspaper Editor"
        },
        {
          "occupation_code": "3163",
          "occ_name": "Night Watchman"
        },
        {
          "occupation_code": "3164",
          "occ_name": "Nipper Mining"
        },
        {
          "occupation_code": "3165",
          "occ_name": "Novelist"
        },
        {
          "occupation_code": "3166",
          "occ_name": "Nuclear Chemist"
        },
        {
          "occupation_code": "3167",
          "occ_name": "Nuclear Maintenance Technician"
        },
        {
          "occupation_code": "3168",
          "occ_name": "Nuclear Medicine Specialist"
        },
        {
          "occupation_code": "3169",
          "occ_name": "Nuclear Medicine Technologist"
        },
        {
          "occupation_code": "3170",
          "occ_name": "Nuclear Physician"
        },
        {
          "occupation_code": "3171",
          "occ_name": "Nuclear Physicist"
        },
        {
          "occupation_code": "3172",
          "occ_name": "Nuclear Plant Manager"
        },
        {
          "occupation_code": "3173",
          "occ_name": "Nuclear Plant Test Engineer"
        },
        {
          "occupation_code": "3174",
          "occ_name": "Nuclear Technician"
        },
        {
          "occupation_code": "3175",
          "occ_name": "Nun"
        },
        {
          "occupation_code": "3176",
          "occ_name": "Nurse Dental"
        },
        {
          "occupation_code": "3177",
          "occ_name": "Nurse Practitioner"
        },
        {
          "occupation_code": "3178",
          "occ_name": "Nurse Veterinary"
        },
        {
          "occupation_code": "3179",
          "occ_name": "Nursery School Teacher"
        },
        {
          "occupation_code": "3180",
          "occ_name": "Nursery Worker Childcare"
        },
        {
          "occupation_code": "3181",
          "occ_name": "Nurseryman"
        },
        {
          "occupation_code": "3182",
          "occ_name": "Nursing Aide Sister"
        },
        {
          "occupation_code": "3183",
          "occ_name": "Nursing Service Manager"
        },
        {
          "occupation_code": "3184",
          "occ_name": "Nutritional Scientist"
        },
        {
          "occupation_code": "3185",
          "occ_name": "Nutritionist"
        },
        {
          "occupation_code": "3186",
          "occ_name": "Observer Radar"
        },
        {
          "occupation_code": "3187",
          "occ_name": "Obstetrician"
        },
        {
          "occupation_code": "3188",
          "occ_name": "Occupational Health Practitioner"
        },
        {
          "occupation_code": "3189",
          "occ_name": "Occupational Relation Specialist"
        },
        {
          "occupation_code": "3190",
          "occ_name": "Occupational Therapist"
        },
        {
          "occupation_code": "3191",
          "occ_name": "Oceanographer"
        },
        {
          "occupation_code": "3192",
          "occ_name": "Oceanographic Engineering"
        },
        {
          "occupation_code": "3193",
          "occ_name": "Oceonographic Researcher"
        },
        {
          "occupation_code": "3194",
          "occ_name": "Oculist"
        },
        {
          "occupation_code": "3195",
          "occ_name": "Odontologist"
        },
        {
          "occupation_code": "3196",
          "occ_name": "Office Administrator"
        },
        {
          "occupation_code": "3197",
          "occ_name": "Office Assistant"
        },
        {
          "occupation_code": "3198",
          "occ_name": "Office Machine Mechanic"
        },
        {
          "occupation_code": "3199",
          "occ_name": "Office Manager"
        },
        {
          "occupation_code": "3200",
          "occ_name": "Office Planner"
        },
        {
          "occupation_code": "3201",
          "occ_name": "Office Systems Analyst"
        },
        {
          "occupation_code": "3202",
          "occ_name": "Office Systems Manager"
        },
        {
          "occupation_code": "3203",
          "occ_name": "Office Worker"
        },
        {
          "occupation_code": "3204",
          "occ_name": "Officer Catering"
        },
        {
          "occupation_code": "3205",
          "occ_name": "Officer Container Ship"
        },
        {
          "occupation_code": "3206",
          "occ_name": "Officer Court"
        },
        {
          "occupation_code": "3207",
          "occ_name": "Officer Cruise Liner"
        },
        {
          "occupation_code": "3208",
          "occ_name": "Officer Customs"
        },
        {
          "occupation_code": "3209",
          "occ_name": "Officer Disabilities services"
        },
        {
          "occupation_code": "3210",
          "occ_name": "Officer Entertainment"
        },
        {
          "occupation_code": "3211",
          "occ_name": "Officer Environmental"
        },
        {
          "occupation_code": "3212",
          "occ_name": "Officer Escrow"
        },
        {
          "occupation_code": "3213",
          "occ_name": "Officer Facilities Procurement"
        },
        {
          "occupation_code": "3214",
          "occ_name": "Officer Family support"
        },
        {
          "occupation_code": "3215",
          "occ_name": "Officer Ferry"
        },
        {
          "occupation_code": "3216",
          "occ_name": "Officer Fire Prevention"
        },
        {
          "occupation_code": "3217",
          "occ_name": "Officer Fishery"
        },
        {
          "occupation_code": "3218",
          "occ_name": "Officer Forestry"
        },
        {
          "occupation_code": "3219",
          "occ_name": "Officer Hearing"
        },
        {
          "occupation_code": "3220",
          "occ_name": "Officer Housing"
        },
        {
          "occupation_code": "3221",
          "occ_name": "Officer Hovercraft"
        },
        {
          "occupation_code": "3222",
          "occ_name": "Officer Immigration"
        },
        {
          "occupation_code": "3223",
          "occ_name": "Officer Payroll"
        },
        {
          "occupation_code": "3224",
          "occ_name": "Officer Public Affairs"
        },
        {
          "occupation_code": "3225",
          "occ_name": "Officer Radio"
        },
        {
          "occupation_code": "3226",
          "occ_name": "Officer Safety Training Mining Quarrying Oil Rig"
        },
        {
          "occupation_code": "3227",
          "occ_name": "Officer Salvage Vessel"
        },
        {
          "occupation_code": "3228",
          "occ_name": "Officer Sports Development"
        },
        {
          "occupation_code": "3229",
          "occ_name": "Officer Welfare"
        },
        {
          "occupation_code": "3230",
          "occ_name": "Official Trade Union"
        },
        {
          "occupation_code": "3231",
          "occ_name": "Offset Printer"
        },
        {
          "occupation_code": "3232",
          "occ_name": "Offshore driller"
        },
        {
          "occupation_code": "3233",
          "occ_name": "Offshore Fishermen"
        },
        {
          "occupation_code": "3234",
          "occ_name": "Offshore Welder"
        },
        {
          "occupation_code": "3235",
          "occ_name": "Oil Heating Installer"
        },
        {
          "occupation_code": "3236",
          "occ_name": "Oil Platform Security Guard"
        },
        {
          "occupation_code": "3237",
          "occ_name": "Oil Rig Pipefitter   Offshore Pipe Installer"
        },
        {
          "occupation_code": "3238",
          "occ_name": "Oil Rig Worker Underwater"
        },
        {
          "occupation_code": "3239",
          "occ_name": "Oiler"
        },
        {
          "occupation_code": "3240",
          "occ_name": "Old Book Restorer"
        },
        {
          "occupation_code": "3241",
          "occ_name": "Oncologist"
        },
        {
          "occupation_code": "3242",
          "occ_name": "Onshore Driller"
        },
        {
          "occupation_code": "3243",
          "occ_name": "Operational Research"
        },
        {
          "occupation_code": "3244",
          "occ_name": "Operations Analyst"
        },
        {
          "occupation_code": "3245",
          "occ_name": "Operations Consultant"
        },
        {
          "occupation_code": "3246",
          "occ_name": "Operator Clay Machine"
        },
        {
          "occupation_code": "3247",
          "occ_name": "Operator Compressor"
        },
        {
          "occupation_code": "3248",
          "occ_name": "Operator Concrete machine"
        },
        {
          "occupation_code": "3249",
          "occ_name": "Operator Crane"
        },
        {
          "occupation_code": "3250",
          "occ_name": "Operator Crane Oil rig"
        },
        {
          "occupation_code": "3251",
          "occ_name": "Operator Crushing Plant Quarry"
        },
        {
          "occupation_code": "3252",
          "occ_name": "Operator Cutting Machine Mining"
        },
        {
          "occupation_code": "3253",
          "occ_name": "Operator Drag Line Quarry"
        },
        {
          "occupation_code": "3254",
          "occ_name": "Operator Dumper Bailer Oil rig"
        },
        {
          "occupation_code": "3255",
          "occ_name": "Operator Earth Moving Equipment Quarry"
        },
        {
          "occupation_code": "3256",
          "occ_name": "Operator Earthmoving"
        },
        {
          "occupation_code": "3257",
          "occ_name": "Operator Equipment"
        },
        {
          "occupation_code": "3258",
          "occ_name": "Operator Filmsetting Machine"
        },
        {
          "occupation_code": "3259",
          "occ_name": "Operator Filter"
        },
        {
          "occupation_code": "3260",
          "occ_name": "Operator Gas Pumping Station"
        },
        {
          "occupation_code": "3261",
          "occ_name": "Operator Hoist"
        },
        {
          "occupation_code": "3262",
          "occ_name": "Operator Hydro Electric Station"
        },
        {
          "occupation_code": "3263",
          "occ_name": "Operator Incinerator"
        },
        {
          "occupation_code": "3264",
          "occ_name": "Operator Jackhammer"
        },
        {
          "occupation_code": "3265",
          "occ_name": "Operator Machinery Quarry"
        },
        {
          "occupation_code": "3266",
          "occ_name": "Operator Mineral Processing"
        },
        {
          "occupation_code": "3267",
          "occ_name": "Operator Paper and Pulp Mill"
        },
        {
          "occupation_code": "3268",
          "occ_name": "Operator Paper Machine"
        },
        {
          "occupation_code": "3269",
          "occ_name": "Operator Plant"
        },
        {
          "occupation_code": "3270",
          "occ_name": "Operator Plant Quarry"
        },
        {
          "occupation_code": "3271",
          "occ_name": "Operator Pneumatic Drill"
        },
        {
          "occupation_code": "3272",
          "occ_name": "Operator Pulp and Paper Mill"
        },
        {
          "occupation_code": "3273",
          "occ_name": "Operator Reactor"
        },
        {
          "occupation_code": "3274",
          "occ_name": "Operator Rubber Extruder"
        },
        {
          "occupation_code": "3275",
          "occ_name": "Operator Rubber Mill"
        },
        {
          "occupation_code": "3276",
          "occ_name": "Operator Sawmill"
        },
        {
          "occupation_code": "3277",
          "occ_name": "Operator Spinning Machine"
        },
        {
          "occupation_code": "3278",
          "occ_name": "Operator Stone Machine"
        },
        {
          "occupation_code": "3279",
          "occ_name": "Operator Switchboard"
        },
        {
          "occupation_code": "3280",
          "occ_name": "Operator Systems"
        },
        {
          "occupation_code": "3281",
          "occ_name": "Operator Transmitter"
        },
        {
          "occupation_code": "3282",
          "occ_name": "Operator Word Processing"
        },
        {
          "occupation_code": "3283",
          "occ_name": "Operator Yarn Carding Machine"
        },
        {
          "occupation_code": "3284",
          "occ_name": "Ophthalmic Surgeon"
        },
        {
          "occupation_code": "3285",
          "occ_name": "Ophthalmologist"
        },
        {
          "occupation_code": "3286",
          "occ_name": "Opthalmologist"
        },
        {
          "occupation_code": "3287",
          "occ_name": "Optical Device Mechanic"
        },
        {
          "occupation_code": "3288",
          "occ_name": "Optician"
        },
        {
          "occupation_code": "3289",
          "occ_name": "Options Trader"
        },
        {
          "occupation_code": "3290",
          "occ_name": "Optomechanical Engineering"
        },
        {
          "occupation_code": "3291",
          "occ_name": "Optometrist"
        },
        {
          "occupation_code": "3292",
          "occ_name": "Oracle"
        },
        {
          "occupation_code": "3293",
          "occ_name": "Oral Hygienist"
        },
        {
          "occupation_code": "3294",
          "occ_name": "Oral Pathologist"
        },
        {
          "occupation_code": "3295",
          "occ_name": "Oral Surgeon"
        },
        {
          "occupation_code": "3296",
          "occ_name": "Orchardist"
        },
        {
          "occupation_code": "3297",
          "occ_name": "Orchestra Conductor"
        },
        {
          "occupation_code": "3298",
          "occ_name": "Orderly Hospital"
        },
        {
          "occupation_code": "3299",
          "occ_name": "Orderly In Home"
        },
        {
          "occupation_code": "3300",
          "occ_name": "Ordinance Examiner"
        },
        {
          "occupation_code": "3301",
          "occ_name": "Ore Sampler"
        },
        {
          "occupation_code": "3302",
          "occ_name": "Organic Chemist"
        },
        {
          "occupation_code": "3303",
          "occ_name": "Organisational Manager"
        },
        {
          "occupation_code": "3304",
          "occ_name": "Organizer Conference"
        },
        {
          "occupation_code": "3305",
          "occ_name": "Ornamenter"
        },
        {
          "occupation_code": "3306",
          "occ_name": "Ornithologist"
        },
        {
          "occupation_code": "3307",
          "occ_name": "Orthodontist"
        },
        {
          "occupation_code": "3308",
          "occ_name": "Orthodontist Assistant"
        },
        {
          "occupation_code": "3309",
          "occ_name": "Orthopaedic Appliance Maker"
        },
        {
          "occupation_code": "3310",
          "occ_name": "Orthopaedic Specialist"
        },
        {
          "occupation_code": "3311",
          "occ_name": "Orthopaedic Surgeon"
        },
        {
          "occupation_code": "3312",
          "occ_name": "Orthopedic Specialist"
        },
        {
          "occupation_code": "3313",
          "occ_name": "Orthopedic Surgeon"
        },
        {
          "occupation_code": "3314",
          "occ_name": "Orthotist"
        },
        {
          "occupation_code": "3315",
          "occ_name": "Orthotist Prosthetist"
        },
        {
          "occupation_code": "3316",
          "occ_name": "Osteopath"
        },
        {
          "occupation_code": "3317",
          "occ_name": "Otolaryngologist"
        },
        {
          "occupation_code": "3318",
          "occ_name": "Otorhinolaryngologist"
        },
        {
          "occupation_code": "3319",
          "occ_name": "Otorhinolaryngologists"
        },
        {
          "occupation_code": "3320",
          "occ_name": "Overhead Line Equipment Worker Rail Industry"
        },
        {
          "occupation_code": "3321",
          "occ_name": "Oyster Diver"
        },
        {
          "occupation_code": "3322",
          "occ_name": "Oyster Harvester"
        },
        {
          "occupation_code": "3323",
          "occ_name": "PA"
        },
        {
          "occupation_code": "3324",
          "occ_name": "Packaging Designer"
        },
        {
          "occupation_code": "3325",
          "occ_name": "Packaging Engineer"
        },
        {
          "occupation_code": "3326",
          "occ_name": "Packaging Technical Trainee"
        },
        {
          "occupation_code": "3327",
          "occ_name": "Packaging Technologist"
        },
        {
          "occupation_code": "3328",
          "occ_name": "Packer"
        },
        {
          "occupation_code": "3330",
          "occ_name": "Packer Mining"
        },
        {
          "occupation_code": "3331",
          "occ_name": "Packer Supermarket"
        },
        {
          "occupation_code": "3332",
          "occ_name": "Paint Repair Technician"
        },
        {
          "occupation_code": "3333",
          "occ_name": "Painter Building Construction"
        },
        {
          "occupation_code": "3334",
          "occ_name": "Painter Building Construction Exterior"
        },
        {
          "occupation_code": "3335",
          "occ_name": "Painter Building Construction Interior"
        },
        {
          "occupation_code": "3336",
          "occ_name": "Painter Fine Arts"
        },
        {
          "occupation_code": "3337",
          "occ_name": "Painter Industrial Spray"
        },
        {
          "occupation_code": "3338",
          "occ_name": "Palaeontologist"
        },
        {
          "occupation_code": "3339",
          "occ_name": "Paleontologist"
        },
        {
          "occupation_code": "3340",
          "occ_name": "Palmist"
        },
        {
          "occupation_code": "3341",
          "occ_name": "Paper Maker"
        },
        {
          "occupation_code": "3342",
          "occ_name": "Paper Processing Engineer"
        },
        {
          "occupation_code": "3343",
          "occ_name": "Paper Processing Technician"
        },
        {
          "occupation_code": "3344",
          "occ_name": "Paraprofessional"
        },
        {
          "occupation_code": "3345",
          "occ_name": "Parasitologist"
        },
        {
          "occupation_code": "3346",
          "occ_name": "Park Ranger"
        },
        {
          "occupation_code": "3347",
          "occ_name": "Parking Inspector"
        },
        {
          "occupation_code": "3348",
          "occ_name": "Parks and Gardens Caretaker"
        },
        {
          "occupation_code": "3349",
          "occ_name": "Parks and Gardens Curator"
        },
        {
          "occupation_code": "3350",
          "occ_name": "Parliament member"
        },
        {
          "occupation_code": "3351",
          "occ_name": "Partnership Officer"
        },
        {
          "occupation_code": "3352",
          "occ_name": "Parts Interpreter"
        },
        {
          "occupation_code": "3353",
          "occ_name": "Party Service Provider"
        },
        {
          "occupation_code": "3354",
          "occ_name": "Pastor"
        },
        {
          "occupation_code": "3355",
          "occ_name": "Pastry Maker"
        },
        {
          "occupation_code": "3356",
          "occ_name": "Patent Attorney"
        },
        {
          "occupation_code": "3357",
          "occ_name": "Patentor"
        },
        {
          "occupation_code": "3358",
          "occ_name": "Pathologist"
        },
        {
          "occupation_code": "3359",
          "occ_name": "Pathologist Forensic"
        },
        {
          "occupation_code": "3360",
          "occ_name": "Pathologist Speech"
        },
        {
          "occupation_code": "3361",
          "occ_name": "Patient Coordinator"
        },
        {
          "occupation_code": "3362",
          "occ_name": "Patisserie"
        },
        {
          "occupation_code": "3363",
          "occ_name": "Patrolman Security"
        },
        {
          "occupation_code": "3364",
          "occ_name": "Pattern Maker Metal Work and Fabrication"
        },
        {
          "occupation_code": "3365",
          "occ_name": "Pattern Maker Textiles Clothing and Footwear"
        },
        {
          "occupation_code": "3366",
          "occ_name": "Pattern Technician"
        },
        {
          "occupation_code": "3367",
          "occ_name": "Pavement Repairer"
        },
        {
          "occupation_code": "3368",
          "occ_name": "Paver"
        },
        {
          "occupation_code": "3369",
          "occ_name": "Pay Clerk"
        },
        {
          "occupation_code": "3370",
          "occ_name": "Paymaster"
        },
        {
          "occupation_code": "3371",
          "occ_name": "Payroll Assistant"
        },
        {
          "occupation_code": "3372",
          "occ_name": "Payroll Manager"
        },
        {
          "occupation_code": "3373",
          "occ_name": "Payroll Supervisor"
        },
        {
          "occupation_code": "3374",
          "occ_name": "Pearl Diver"
        },
        {
          "occupation_code": "3375",
          "occ_name": "Pearl Harvester"
        },
        {
          "occupation_code": "3376",
          "occ_name": "Pediatrician"
        },
        {
          "occupation_code": "3377",
          "occ_name": "Pedicurist"
        },
        {
          "occupation_code": "3378",
          "occ_name": "Pelt dresser"
        },
        {
          "occupation_code": "3379",
          "occ_name": "Pensioner"
        },
        {
          "occupation_code": "3380",
          "occ_name": "Pensions Clerk"
        },
        {
          "occupation_code": "3381",
          "occ_name": "Pensions Manager"
        },
        {
          "occupation_code": "3382",
          "occ_name": "Percussionist"
        },
        {
          "occupation_code": "3383",
          "occ_name": "Performer"
        },
        {
          "occupation_code": "3384",
          "occ_name": "Performing Artist"
        },
        {
          "occupation_code": "3385",
          "occ_name": "Perfusionist"
        },
        {
          "occupation_code": "3386",
          "occ_name": "Periodontist"
        },
        {
          "occupation_code": "3387",
          "occ_name": "Person Wardrobe"
        },
        {
          "occupation_code": "3388",
          "occ_name": "Personal Assistant"
        },
        {
          "occupation_code": "3389",
          "occ_name": "Personal Development Coach"
        },
        {
          "occupation_code": "3390",
          "occ_name": "Personal Trainer"
        },
        {
          "occupation_code": "3391",
          "occ_name": "Personal Trainer Self Employed"
        },
        {
          "occupation_code": "3392",
          "occ_name": "Personnel Analyst"
        },
        {
          "occupation_code": "3393",
          "occ_name": "Personnel Assistant"
        },
        {
          "occupation_code": "3394",
          "occ_name": "Personnel Clerk"
        },
        {
          "occupation_code": "3395",
          "occ_name": "Personnel Consultant"
        },
        {
          "occupation_code": "3396",
          "occ_name": "Personnel Manager"
        },
        {
          "occupation_code": "3397",
          "occ_name": "Personnel Officer"
        },
        {
          "occupation_code": "3398",
          "occ_name": "Personnel Practitioner"
        },
        {
          "occupation_code": "3399",
          "occ_name": "Personnel Services"
        },
        {
          "occupation_code": "3400",
          "occ_name": "Personnel Specialist"
        },
        {
          "occupation_code": "3401",
          "occ_name": "Pescary Fischers"
        },
        {
          "occupation_code": "3402",
          "occ_name": "Pest Control Inspector"
        },
        {
          "occupation_code": "3403",
          "occ_name": "Pet Sitter"
        },
        {
          "occupation_code": "3404",
          "occ_name": "Pet Walker"
        },
        {
          "occupation_code": "3405",
          "occ_name": "Petrol Attendant"
        },
        {
          "occupation_code": "3406",
          "occ_name": "Petrol Attendant Service Station"
        },
        {
          "occupation_code": "3407",
          "occ_name": "Petrol Pump Attendant"
        },
        {
          "occupation_code": "3408",
          "occ_name": "Petrol Station Attendant"
        },
        {
          "occupation_code": "3409",
          "occ_name": "Petrol Station Cashier"
        },
        {
          "occupation_code": "3410",
          "occ_name": "Petroleum Trader"
        },
        {
          "occupation_code": "3411",
          "occ_name": "Pharmaceutical Chemist"
        },
        {
          "occupation_code": "3412",
          "occ_name": "Pharmaceutical Consultant"
        },
        {
          "occupation_code": "3413",
          "occ_name": "Pharmaceutical Technician"
        },
        {
          "occupation_code": "3414",
          "occ_name": "Pharmacologist"
        },
        {
          "occupation_code": "3415",
          "occ_name": "Pharmacometrician"
        },
        {
          "occupation_code": "3416",
          "occ_name": "Pharmacy Clerk"
        },
        {
          "occupation_code": "3417",
          "occ_name": "Philosopher"
        },
        {
          "occupation_code": "3418",
          "occ_name": "Phlebotomist"
        },
        {
          "occupation_code": "3419",
          "occ_name": "Photogrammetrist"
        },
        {
          "occupation_code": "3420",
          "occ_name": "Photograph Developing and Processing"
        },
        {
          "occupation_code": "3421",
          "occ_name": "Photographer"
        },
        {
          "occupation_code": "3422",
          "occ_name": "Photographer Advertising"
        },
        {
          "occupation_code": "3423",
          "occ_name": "Photographer Fashion"
        },
        {
          "occupation_code": "3424",
          "occ_name": "Photographer Freelance Paparazzi"
        },
        {
          "occupation_code": "3425",
          "occ_name": "Photographer International Assignments"
        },
        {
          "occupation_code": "3426",
          "occ_name": "Photographer Medical"
        },
        {
          "occupation_code": "3427",
          "occ_name": "Photographer Police"
        },
        {
          "occupation_code": "3428",
          "occ_name": "Photographer Portrait"
        },
        {
          "occupation_code": "3429",
          "occ_name": "Photographer Scientific"
        },
        {
          "occupation_code": "3430",
          "occ_name": "Photographer Underwater"
        },
        {
          "occupation_code": "3431",
          "occ_name": "Photographer Wedding"
        },
        {
          "occupation_code": "3432",
          "occ_name": "Photographer Wildlife"
        },
        {
          "occupation_code": "3433",
          "occ_name": "Photographers Assistant"
        },
        {
          "occupation_code": "3434",
          "occ_name": "Photographic Model"
        },
        {
          "occupation_code": "3435",
          "occ_name": "Photography Director"
        },
        {
          "occupation_code": "3436",
          "occ_name": "Photojournalist"
        },
        {
          "occupation_code": "3437",
          "occ_name": "Photolithographer"
        },
        {
          "occupation_code": "3438",
          "occ_name": "Photovoltaic Installer"
        },
        {
          "occupation_code": "3439",
          "occ_name": "Physiatrist"
        },
        {
          "occupation_code": "3440",
          "occ_name": "Physical Education Teacher School"
        },
        {
          "occupation_code": "3441",
          "occ_name": "Physical Engineer"
        },
        {
          "occupation_code": "3442",
          "occ_name": "Physical Therapist"
        },
        {
          "occupation_code": "3443",
          "occ_name": "Physical Therapist Assistance"
        },
        {
          "occupation_code": "3444",
          "occ_name": "Physician"
        },
        {
          "occupation_code": "3445",
          "occ_name": "Physician Assistant"
        },
        {
          "occupation_code": "3446",
          "occ_name": "Physician Specialist"
        },
        {
          "occupation_code": "3447",
          "occ_name": "Physics Lab Technician"
        },
        {
          "occupation_code": "3448",
          "occ_name": "Physiologist"
        },
        {
          "occupation_code": "3449",
          "occ_name": "Physiotherapist Large Animals"
        },
        {
          "occupation_code": "3450",
          "occ_name": "Phytotherapist"
        },
        {
          "occupation_code": "3451",
          "occ_name": "Pianist"
        },
        {
          "occupation_code": "3452",
          "occ_name": "Piano Builder"
        },
        {
          "occupation_code": "3453",
          "occ_name": "Picadores"
        },
        {
          "occupation_code": "3454",
          "occ_name": "Picker Flower"
        },
        {
          "occupation_code": "3455",
          "occ_name": "Picker Fruit"
        },
        {
          "occupation_code": "3456",
          "occ_name": "Pier Man"
        },
        {
          "occupation_code": "3457",
          "occ_name": "Pier Master"
        },
        {
          "occupation_code": "3458",
          "occ_name": "Pig Farmer"
        },
        {
          "occupation_code": "3459",
          "occ_name": "Piggery Worker"
        },
        {
          "occupation_code": "3460",
          "occ_name": "Pile Driver Operator"
        },
        {
          "occupation_code": "3461",
          "occ_name": "Pile Driver"
        },
        {
          "occupation_code": "3462",
          "occ_name": "Piling Rig Operator"
        },
        {
          "occupation_code": "3463",
          "occ_name": "Pilot"
        },
        {
          "occupation_code": "3464",
          "occ_name": "Pilot Air Ambulance"
        },
        {
          "occupation_code": "3465",
          "occ_name": "Pilot Animal Herding Mustering"
        },
        {
          "occupation_code": "3466",
          "occ_name": "Pilot Commercial Cargo Private Passenger"
        },
        {
          "occupation_code": "3467",
          "occ_name": "Pilot Commercial Public Passenger"
        },
        {
          "occupation_code": "3468",
          "occ_name": "Pilot Crop Duster"
        },
        {
          "occupation_code": "3469",
          "occ_name": "Pilot Crop Sprayer"
        },
        {
          "occupation_code": "3470",
          "occ_name": "Pilot Freight"
        },
        {
          "occupation_code": "3471",
          "occ_name": "Pilot Harbour"
        },
        {
          "occupation_code": "3472",
          "occ_name": "Pilot Hunting"
        },
        {
          "occupation_code": "3473",
          "occ_name": "Pilot Passenger Transport"
        },
        {
          "occupation_code": "3474",
          "occ_name": "Pilot Surveying"
        },
        {
          "occupation_code": "3475",
          "occ_name": "Pilot Towing"
        },
        {
          "occupation_code": "3476",
          "occ_name": "Pilot Trainer"
        },
        {
          "occupation_code": "3477",
          "occ_name": "Pilot Training"
        },
        {
          "occupation_code": "3478",
          "occ_name": "Pilot Weather Control Cloud Seeding"
        },
        {
          "occupation_code": "3479",
          "occ_name": "Pilot Weather Control Reconnaissance"
        },
        {
          "occupation_code": "3480",
          "occ_name": "Pipe Cable Laying Rig Maintenance Diving"
        },
        {
          "occupation_code": "3481",
          "occ_name": "Pipehandling Technician Oil Rig"
        },
        {
          "occupation_code": "3482",
          "occ_name": "Pipeworker Mining"
        },
        {
          "occupation_code": "3483",
          "occ_name": "Pit Crew Support Worker Mining"
        },
        {
          "occupation_code": "3484",
          "occ_name": "Pizza Chef"
        },
        {
          "occupation_code": "3485",
          "occ_name": "Pizza Cook"
        },
        {
          "occupation_code": "3486",
          "occ_name": "Pizza Maker"
        },
        {
          "occupation_code": "3487",
          "occ_name": "Pizzaiolo"
        },
        {
          "occupation_code": "3488",
          "occ_name": "Planner Town"
        },
        {
          "occupation_code": "3489",
          "occ_name": "Planning Engineer"
        },
        {
          "occupation_code": "3490",
          "occ_name": "Planning Manager"
        },
        {
          "occupation_code": "3491",
          "occ_name": "Plant Attendant Power Generation"
        },
        {
          "occupation_code": "3492",
          "occ_name": "Plant Geneticist"
        },
        {
          "occupation_code": "3493",
          "occ_name": "Plant Manager"
        },
        {
          "occupation_code": "3494",
          "occ_name": "Plant Operator Chemical"
        },
        {
          "occupation_code": "3495",
          "occ_name": "Plant Operator Gas"
        },
        {
          "occupation_code": "3496",
          "occ_name": "Plant Operator Steam and Pressure"
        },
        {
          "occupation_code": "3497",
          "occ_name": "Plant Pathologist"
        },
        {
          "occupation_code": "3498",
          "occ_name": "Plant Physiologist"
        },
        {
          "occupation_code": "3499",
          "occ_name": "Plant Scientist"
        },
        {
          "occupation_code": "3500",
          "occ_name": "Plasterboard Fixer"
        },
        {
          "occupation_code": "3501",
          "occ_name": "Plastic Surgeon"
        },
        {
          "occupation_code": "3502",
          "occ_name": "Plastics Technician"
        },
        {
          "occupation_code": "3503",
          "occ_name": "Plumber"
        },
        {
          "occupation_code": "3504",
          "occ_name": "Plumber Heating and Ventilation"
        },
        {
          "occupation_code": "3505",
          "occ_name": "PM Project Manager"
        },
        {
          "occupation_code": "3506",
          "occ_name": "Pneumatics Specialist"
        },
        {
          "occupation_code": "3507",
          "occ_name": "Podiatrist"
        },
        {
          "occupation_code": "3508",
          "occ_name": "Poet"
        },
        {
          "occupation_code": "3509",
          "occ_name": "Police Aviation"
        },
        {
          "occupation_code": "3510",
          "occ_name": "Police Bomb Squad"
        },
        {
          "occupation_code": "3511",
          "occ_name": "Police Cadet"
        },
        {
          "occupation_code": "3512",
          "occ_name": "Police Chief"
        },
        {
          "occupation_code": "3513",
          "occ_name": "Police Commissioner"
        },
        {
          "occupation_code": "3514",
          "occ_name": "Police Community Officer"
        },
        {
          "occupation_code": "3515",
          "occ_name": "Police Detective"
        },
        {
          "occupation_code": "3516",
          "occ_name": "Police Diver"
        },
        {
          "occupation_code": "3517",
          "occ_name": "Police Force Member"
        },
        {
          "occupation_code": "3518",
          "occ_name": "Police Inspector"
        },
        {
          "occupation_code": "3519",
          "occ_name": "Police Mounted"
        },
        {
          "occupation_code": "3520",
          "occ_name": "Police Officer Administrative"
        },
        {
          "occupation_code": "3521",
          "occ_name": "Police Search and Rescue Aviation"
        },
        {
          "occupation_code": "3522",
          "occ_name": "Police Sergeant"
        },
        {
          "occupation_code": "3523",
          "occ_name": "Police Service Air Wing Pilot"
        },
        {
          "occupation_code": "3524",
          "occ_name": "Police Service Brigadier"
        },
        {
          "occupation_code": "3525",
          "occ_name": "Police Service Captain"
        },
        {
          "occupation_code": "3526",
          "occ_name": "Police Service Colonel"
        },
        {
          "occupation_code": "3527",
          "occ_name": "Police Service Commissioner"
        },
        {
          "occupation_code": "3528",
          "occ_name": "Police Service Constable"
        },
        {
          "occupation_code": "3529",
          "occ_name": "Police Service Director"
        },
        {
          "occupation_code": "3530",
          "occ_name": "Police Service Diver"
        },
        {
          "occupation_code": "3531",
          "occ_name": "Police Service Force Member"
        },
        {
          "occupation_code": "3532",
          "occ_name": "Police Service General"
        },
        {
          "occupation_code": "3533",
          "occ_name": "Police Service Lieutenant"
        },
        {
          "occupation_code": "3534",
          "occ_name": "Police Service Lieutenant Colonel"
        },
        {
          "occupation_code": "3535",
          "occ_name": "Police Service Lieutenant General"
        },
        {
          "occupation_code": "3536",
          "occ_name": "Police Service Major"
        },
        {
          "occupation_code": "3537",
          "occ_name": "Police Service Major General"
        },
        {
          "occupation_code": "3538",
          "occ_name": "Police Service Office Administrator"
        },
        {
          "occupation_code": "3539",
          "occ_name": "Police Service Officer"
        },
        {
          "occupation_code": "3540",
          "occ_name": "Police Service Pointsman"
        },
        {
          "occupation_code": "3541",
          "occ_name": "Police Service Sergeant"
        },
        {
          "occupation_code": "3542",
          "occ_name": "Police Service Special Intervention Unit"
        },
        {
          "occupation_code": "3543",
          "occ_name": "Police Service Special Task Force"
        },
        {
          "occupation_code": "3544",
          "occ_name": "Police Service Special Weapons and Tactics"
        },
        {
          "occupation_code": "3545",
          "occ_name": "Police Service Superintendent Field Work"
        },
        {
          "occupation_code": "3546",
          "occ_name": "Police Service Superintendent No Field Work"
        },
        {
          "occupation_code": "3547",
          "occ_name": "Police Service SWAT"
        },
        {
          "occupation_code": "3548",
          "occ_name": "Police Service Warrant Officer"
        },
        {
          "occupation_code": "3549",
          "occ_name": "Police Service Warrant Officer Inspector"
        },
        {
          "occupation_code": "3550",
          "occ_name": "Police Tactical Unit"
        },
        {
          "occupation_code": "3551",
          "occ_name": "Police Traffic Aviation"
        },
        {
          "occupation_code": "3552",
          "occ_name": "Police Transit and Transport"
        },
        {
          "occupation_code": "3553",
          "occ_name": "Policeman"
        },
        {
          "occupation_code": "3554",
          "occ_name": "Policy Advisor"
        },
        {
          "occupation_code": "3555",
          "occ_name": "Policy Specialist"
        },
        {
          "occupation_code": "3556",
          "occ_name": "Polisher"
        },
        {
          "occupation_code": "3557",
          "occ_name": "Polisher Diamond"
        },
        {
          "occupation_code": "3558",
          "occ_name": "Polisher Furniture"
        },
        {
          "occupation_code": "3559",
          "occ_name": "Polisher Gems"
        },
        {
          "occupation_code": "3560",
          "occ_name": "Political Commentator"
        },
        {
          "occupation_code": "3561",
          "occ_name": "Political Correspondent"
        },
        {
          "occupation_code": "3562",
          "occ_name": "Political Party Worker"
        },
        {
          "occupation_code": "3563",
          "occ_name": "Political Researcher"
        },
        {
          "occupation_code": "3564",
          "occ_name": "Pollution Control Officer"
        },
        {
          "occupation_code": "3565",
          "occ_name": "Polygraph Expert"
        },
        {
          "occupation_code": "3566",
          "occ_name": "Polymechanic"
        },
        {
          "occupation_code": "3567",
          "occ_name": "Pool Superintendent"
        },
        {
          "occupation_code": "3568",
          "occ_name": "Pope"
        },
        {
          "occupation_code": "3569",
          "occ_name": "Population Analyst"
        },
        {
          "occupation_code": "3570",
          "occ_name": "Port Labourer"
        },
        {
          "occupation_code": "3571",
          "occ_name": "Porter"
        },
        {
          "occupation_code": "3572",
          "occ_name": "Porter Hospital"
        },
        {
          "occupation_code": "3573",
          "occ_name": "Porter Luggage"
        },
        {
          "occupation_code": "3574",
          "occ_name": "Porter Meat"
        },
        {
          "occupation_code": "3575",
          "occ_name": "Post Office Manager"
        },
        {
          "occupation_code": "3576",
          "occ_name": "Post Sorter"
        },
        {
          "occupation_code": "3577",
          "occ_name": "Postal Delivery Driver"
        },
        {
          "occupation_code": "3578",
          "occ_name": "Potter Working at Home"
        },
        {
          "occupation_code": "3579",
          "occ_name": "Poultry Dresser"
        },
        {
          "occupation_code": "3580",
          "occ_name": "Poultry Farm Worker"
        },
        {
          "occupation_code": "3581",
          "occ_name": "Poultry Farmer"
        },
        {
          "occupation_code": "3582",
          "occ_name": "Poultry Sexer"
        },
        {
          "occupation_code": "3583",
          "occ_name": "Poultryman"
        },
        {
          "occupation_code": "3584",
          "occ_name": "Powder Monkey Mining"
        },
        {
          "occupation_code": "3585",
          "occ_name": "Power Stower Mining"
        },
        {
          "occupation_code": "3586",
          "occ_name": "Pre Primary School Teacher"
        },
        {
          "occupation_code": "3587",
          "occ_name": "Pre School Teacher"
        },
        {
          "occupation_code": "3588",
          "occ_name": "Precision Instrument Maker"
        },
        {
          "occupation_code": "3589",
          "occ_name": "Predatory Animal Keeper"
        },
        {
          "occupation_code": "3590",
          "occ_name": "Preparer Fish"
        },
        {
          "occupation_code": "3591",
          "occ_name": "President"
        },
        {
          "occupation_code": "3592",
          "occ_name": "Press Agent"
        },
        {
          "occupation_code": "3593",
          "occ_name": "Priest"
        },
        {
          "occupation_code": "3594",
          "occ_name": "Primary School Principle"
        },
        {
          "occupation_code": "3595",
          "occ_name": "Primary School Teacher"
        },
        {
          "occupation_code": "3596",
          "occ_name": "Principal Finance Officer"
        },
        {
          "occupation_code": "3597",
          "occ_name": "Print Engineer"
        },
        {
          "occupation_code": "3598",
          "occ_name": "Printer"
        },
        {
          "occupation_code": "3599",
          "occ_name": "Printer Offset"
        },
        {
          "occupation_code": "3600",
          "occ_name": "Printer Screen"
        },
        {
          "occupation_code": "3601",
          "occ_name": "Printer Small Offset"
        },
        {
          "occupation_code": "3602",
          "occ_name": "Printer Textile"
        },
        {
          "occupation_code": "3603",
          "occ_name": "Printer Woodblock"
        },
        {
          "occupation_code": "3604",
          "occ_name": "Printing Hand"
        },
        {
          "occupation_code": "3605",
          "occ_name": "Printmaker"
        },
        {
          "occupation_code": "3606",
          "occ_name": "Private Consultant"
        },
        {
          "occupation_code": "3607",
          "occ_name": "Private Equity Analyst"
        },
        {
          "occupation_code": "3608",
          "occ_name": "Private Equity Associate"
        },
        {
          "occupation_code": "3609",
          "occ_name": "Private Equity Manager"
        },
        {
          "occupation_code": "3610",
          "occ_name": "Private Tutor"
        },
        {
          "occupation_code": "3611",
          "occ_name": "Process Controller"
        },
        {
          "occupation_code": "3612",
          "occ_name": "Process Engineer"
        },
        {
          "occupation_code": "3613",
          "occ_name": "Processor Fish"
        },
        {
          "occupation_code": "3614",
          "occ_name": "Processor Rubber"
        },
        {
          "occupation_code": "3615",
          "occ_name": "Processor Seafood"
        },
        {
          "occupation_code": "3616",
          "occ_name": "Proctologist"
        },
        {
          "occupation_code": "3617",
          "occ_name": "Procurement Coordinator"
        },
        {
          "occupation_code": "3618",
          "occ_name": "Procurement Officer"
        },
        {
          "occupation_code": "3619",
          "occ_name": "Procurer"
        },
        {
          "occupation_code": "3620",
          "occ_name": "Producer"
        },
        {
          "occupation_code": "3621",
          "occ_name": "Product Analyst"
        },
        {
          "occupation_code": "3622",
          "occ_name": "Product Controller"
        },
        {
          "occupation_code": "3623",
          "occ_name": "Product Designer"
        },
        {
          "occupation_code": "3624",
          "occ_name": "Product Developer"
        },
        {
          "occupation_code": "3625",
          "occ_name": "Product Strategist"
        },
        {
          "occupation_code": "3626",
          "occ_name": "Product Tester"
        },
        {
          "occupation_code": "3627",
          "occ_name": "Production Assistant"
        },
        {
          "occupation_code": "3628",
          "occ_name": "Production Operative"
        },
        {
          "occupation_code": "3629",
          "occ_name": "Production Planner"
        },
        {
          "occupation_code": "3630",
          "occ_name": "Production Scheduler"
        },
        {
          "occupation_code": "3631",
          "occ_name": "Production Supervisor"
        },
        {
          "occupation_code": "3632",
          "occ_name": "Production Worker Clothing"
        },
        {
          "occupation_code": "3633",
          "occ_name": "Production Worker Glass"
        },
        {
          "occupation_code": "3634",
          "occ_name": "Production Worker Soft Furnishing"
        },
        {
          "occupation_code": "3635",
          "occ_name": "Professional Accountant"
        },
        {
          "occupation_code": "3636",
          "occ_name": "Professional Boxer"
        },
        {
          "occupation_code": "3637",
          "occ_name": "Professional Cyclist"
        },
        {
          "occupation_code": "3638",
          "occ_name": "Professional E Sports Player"
        },
        {
          "occupation_code": "3639",
          "occ_name": "Professional Hunter"
        },
        {
          "occupation_code": "3640",
          "occ_name": "Professional Judo Contestant"
        },
        {
          "occupation_code": "3641",
          "occ_name": "Professional Karate Contestant"
        },
        {
          "occupation_code": "3642",
          "occ_name": "Professional Kick Boxer"
        },
        {
          "occupation_code": "3643",
          "occ_name": "Professional Kung Fu Contestant"
        },
        {
          "occupation_code": "3644",
          "occ_name": "Professional Pilates Instructor"
        },
        {
          "occupation_code": "3645",
          "occ_name": "Professional Pilot"
        },
        {
          "occupation_code": "3646",
          "occ_name": "Professional Racing Driver"
        },
        {
          "occupation_code": "3647",
          "occ_name": "Professional Soccer Player"
        },
        {
          "occupation_code": "3648",
          "occ_name": "Professional Target Shooter"
        },
        {
          "occupation_code": "3649",
          "occ_name": "Professional Trapper"
        },
        {
          "occupation_code": "3650",
          "occ_name": "Professional Wrestler"
        },
        {
          "occupation_code": "3651",
          "occ_name": "Professional Yachtsperson"
        },
        {
          "occupation_code": "3652",
          "occ_name": "Professional Yoga Instructor"
        },
        {
          "occupation_code": "3653",
          "occ_name": "Program Analyst"
        },
        {
          "occupation_code": "3654",
          "occ_name": "Program Consultant"
        },
        {
          "occupation_code": "3655",
          "occ_name": "Program Director"
        },
        {
          "occupation_code": "3656",
          "occ_name": "Program Manager"
        },
        {
          "occupation_code": "3657",
          "occ_name": "Programme Coordinator"
        },
        {
          "occupation_code": "3658",
          "occ_name": "Programme Manager"
        },
        {
          "occupation_code": "3659",
          "occ_name": "Programme Officer"
        },
        {
          "occupation_code": "3660",
          "occ_name": "Programmer"
        },
        {
          "occupation_code": "3661",
          "occ_name": "Project Administrator"
        },
        {
          "occupation_code": "3662",
          "occ_name": "Project Consultant"
        },
        {
          "occupation_code": "3663",
          "occ_name": "Project Coordinator"
        },
        {
          "occupation_code": "3664",
          "occ_name": "Project Financier"
        },
        {
          "occupation_code": "3665",
          "occ_name": "Project Manager Engineering"
        },
        {
          "occupation_code": "3666",
          "occ_name": "Project Officer"
        },
        {
          "occupation_code": "3667",
          "occ_name": "Projectionist"
        },
        {
          "occupation_code": "3668",
          "occ_name": "Promotions Coordinator"
        },
        {
          "occupation_code": "3669",
          "occ_name": "Prompter"
        },
        {
          "occupation_code": "3670",
          "occ_name": "Proofreader"
        },
        {
          "occupation_code": "3671",
          "occ_name": "Prop Master"
        },
        {
          "occupation_code": "3672",
          "occ_name": "Property Investment Consultant"
        },
        {
          "occupation_code": "3673",
          "occ_name": "Property Maintenance"
        },
        {
          "occupation_code": "3674",
          "occ_name": "Property Managing Agent"
        },
        {
          "occupation_code": "3675",
          "occ_name": "Property Valuer"
        },
        {
          "occupation_code": "3676",
          "occ_name": "Proprietor Guest House"
        },
        {
          "occupation_code": "3677",
          "occ_name": "Proprietor Motel"
        },
        {
          "occupation_code": "3678",
          "occ_name": "Proprietor Stable"
        },
        {
          "occupation_code": "3679",
          "occ_name": "Proprietor Tavern"
        },
        {
          "occupation_code": "3680",
          "occ_name": "Prosecutor"
        },
        {
          "occupation_code": "3681",
          "occ_name": "Prosecutor Public"
        },
        {
          "occupation_code": "3682",
          "occ_name": "Prosthodontist"
        },
        {
          "occupation_code": "3683",
          "occ_name": "Protection Officer"
        },
        {
          "occupation_code": "3684",
          "occ_name": "Pruner"
        },
        {
          "occupation_code": "3685",
          "occ_name": "Psychiatrist"
        },
        {
          "occupation_code": "3686",
          "occ_name": "Psychic"
        },
        {
          "occupation_code": "3687",
          "occ_name": "Psychologist"
        },
        {
          "occupation_code": "3688",
          "occ_name": "Psychometrist"
        },
        {
          "occupation_code": "3689",
          "occ_name": "Psychometrist Consultant"
        },
        {
          "occupation_code": "3690",
          "occ_name": "Psychotherapist"
        },
        {
          "occupation_code": "3691",
          "occ_name": "Public Administrator"
        },
        {
          "occupation_code": "3692",
          "occ_name": "Public Affairs Consultant"
        },
        {
          "occupation_code": "3693",
          "occ_name": "Public Finance Management Specialist"
        },
        {
          "occupation_code": "3694",
          "occ_name": "Public Health Administrator"
        },
        {
          "occupation_code": "3695",
          "occ_name": "Public Health Consultant"
        },
        {
          "occupation_code": "3696",
          "occ_name": "Public Management Consultant"
        },
        {
          "occupation_code": "3697",
          "occ_name": "Public Manager"
        },
        {
          "occupation_code": "3698",
          "occ_name": "Public Notary"
        },
        {
          "occupation_code": "3699",
          "occ_name": "Public Policy Analyst"
        },
        {
          "occupation_code": "3700",
          "occ_name": "Public Prosecutor"
        },
        {
          "occupation_code": "3701",
          "occ_name": "Public Relations Consultant"
        },
        {
          "occupation_code": "3702",
          "occ_name": "Public Relations Coordinator"
        },
        {
          "occupation_code": "3703",
          "occ_name": "Public Relations Director"
        },
        {
          "occupation_code": "3704",
          "occ_name": "Public Relations Executive"
        },
        {
          "occupation_code": "3705",
          "occ_name": "Public Relations Manager"
        },
        {
          "occupation_code": "3706",
          "occ_name": "Public Relations Practitioner"
        },
        {
          "occupation_code": "3707",
          "occ_name": "Public Relations Specialist"
        },
        {
          "occupation_code": "3708",
          "occ_name": "Publicist"
        },
        {
          "occupation_code": "3709",
          "occ_name": "Publicity Agent"
        },
        {
          "occupation_code": "3710",
          "occ_name": "Publicity Manager"
        },
        {
          "occupation_code": "3711",
          "occ_name": "Publisher"
        },
        {
          "occupation_code": "3712",
          "occ_name": "Puller Wool"
        },
        {
          "occupation_code": "3713",
          "occ_name": "Pulmonologist"
        },
        {
          "occupation_code": "3714",
          "occ_name": "Pulp and Paper Mill Operator"
        },
        {
          "occupation_code": "3715",
          "occ_name": "Pulp and Paper Technician"
        },
        {
          "occupation_code": "3716",
          "occ_name": "Pump Attendant Garage Attendant"
        },
        {
          "occupation_code": "3717",
          "occ_name": "Pump Attendant Service Station"
        },
        {
          "occupation_code": "3718",
          "occ_name": "Pumpman"
        },
        {
          "occupation_code": "3719",
          "occ_name": "Pumpman Gas"
        },
        {
          "occupation_code": "3720",
          "occ_name": "Pumpman Oil Rig"
        },
        {
          "occupation_code": "3721",
          "occ_name": "Pumpman Quarry"
        },
        {
          "occupation_code": "3722",
          "occ_name": "Pumpman Water Supply and Sewage"
        },
        {
          "occupation_code": "3723",
          "occ_name": "Puppeteer"
        },
        {
          "occupation_code": "3724",
          "occ_name": "Purchase Analyst"
        },
        {
          "occupation_code": "3725",
          "occ_name": "Purchase Ledger Clerk"
        },
        {
          "occupation_code": "3726",
          "occ_name": "Purchasing Agent"
        },
        {
          "occupation_code": "3727",
          "occ_name": "Purchasing Clerk"
        },
        {
          "occupation_code": "3728",
          "occ_name": "Purchasing Manager"
        },
        {
          "occupation_code": "3729",
          "occ_name": "Purser"
        },
        {
          "occupation_code": "3730",
          "occ_name": "Pusher Oil Rig"
        },
        {
          "occupation_code": "3731",
          "occ_name": "Quality Assurance Tester IT"
        },
        {
          "occupation_code": "3732",
          "occ_name": "Quality Consultant"
        },
        {
          "occupation_code": "3733",
          "occ_name": "Quarry Banksman"
        },
        {
          "occupation_code": "3734",
          "occ_name": "Quarry Blaster"
        },
        {
          "occupation_code": "3735",
          "occ_name": "Quarry Clay Getter"
        },
        {
          "occupation_code": "3736",
          "occ_name": "Quarry Equipment Operator"
        },
        {
          "occupation_code": "3737",
          "occ_name": "Quarry Equipment Operator Rock Crusher Operator"
        },
        {
          "occupation_code": "3738",
          "occ_name": "Quarry Explosives Technician"
        },
        {
          "occupation_code": "3739",
          "occ_name": "Quarry Valve Operator"
        },
        {
          "occupation_code": "3740",
          "occ_name": "Quarryman"
        },
        {
          "occupation_code": "3741",
          "occ_name": "Quartermaster"
        },
        {
          "occupation_code": "3742",
          "occ_name": "Rabbi"
        },
        {
          "occupation_code": "3743",
          "occ_name": "Racer"
        },
        {
          "occupation_code": "3744",
          "occ_name": "Racing Driver"
        },
        {
          "occupation_code": "3745",
          "occ_name": "Radar Operator"
        },
        {
          "occupation_code": "3746",
          "occ_name": "Radar Technician"
        },
        {
          "occupation_code": "3747",
          "occ_name": "Radiation Biologist"
        },
        {
          "occupation_code": "3748",
          "occ_name": "Radiation Oncologist"
        },
        {
          "occupation_code": "3749",
          "occ_name": "Radiation Physicist"
        },
        {
          "occupation_code": "3750",
          "occ_name": "Radio Director"
        },
        {
          "occupation_code": "3751",
          "occ_name": "Radio Engineer"
        },
        {
          "occupation_code": "3752",
          "occ_name": "Radio Equipment Mechanic"
        },
        {
          "occupation_code": "3753",
          "occ_name": "Radio Operator Oil Rig"
        },
        {
          "occupation_code": "3754",
          "occ_name": "Radio Presenter"
        },
        {
          "occupation_code": "3755",
          "occ_name": "Radio Producer"
        },
        {
          "occupation_code": "3756",
          "occ_name": "Radiobiology Oncologist"
        },
        {
          "occupation_code": "3757",
          "occ_name": "Radiologist"
        },
        {
          "occupation_code": "3758",
          "occ_name": "Radiology Technologist"
        },
        {
          "occupation_code": "3759",
          "occ_name": "Radiopharmacist"
        },
        {
          "occupation_code": "3760",
          "occ_name": "Radiotherapist"
        },
        {
          "occupation_code": "3761",
          "occ_name": "Rafting Timber"
        },
        {
          "occupation_code": "3762",
          "occ_name": "Rag Dealer"
        },
        {
          "occupation_code": "3763",
          "occ_name": "Rail Operations Manager"
        },
        {
          "occupation_code": "3764",
          "occ_name": "Railway Announcer"
        },
        {
          "occupation_code": "3765",
          "occ_name": "Railway Police"
        },
        {
          "occupation_code": "3766",
          "occ_name": "Railway Security Guard"
        },
        {
          "occupation_code": "3767",
          "occ_name": "Railway Shunter"
        },
        {
          "occupation_code": "3768",
          "occ_name": "Railway Signal Operator"
        },
        {
          "occupation_code": "3769",
          "occ_name": "Railway Worker"
        },
        {
          "occupation_code": "3770",
          "occ_name": "Railways Signal Engineer"
        },
        {
          "occupation_code": "3771",
          "occ_name": "Rally Driver"
        },
        {
          "occupation_code": "3772",
          "occ_name": "Rancher"
        },
        {
          "occupation_code": "3773",
          "occ_name": "Range Conservationist"
        },
        {
          "occupation_code": "3774",
          "occ_name": "Ranger Estate"
        },
        {
          "occupation_code": "3775",
          "occ_name": "Ranger Fire"
        },
        {
          "occupation_code": "3776",
          "occ_name": "Ranger Forest"
        },
        {
          "occupation_code": "3777",
          "occ_name": "Ranger Park"
        },
        {
          "occupation_code": "3778",
          "occ_name": "Rapids Guide"
        },
        {
          "occupation_code": "3779",
          "occ_name": "Rapper"
        },
        {
          "occupation_code": "3780",
          "occ_name": "Reactor Physicist"
        },
        {
          "occupation_code": "3781",
          "occ_name": "Reader Meter"
        },
        {
          "occupation_code": "3782",
          "occ_name": "Real Estate Assessors"
        },
        {
          "occupation_code": "3783",
          "occ_name": "Real Estate Auctioneer"
        },
        {
          "occupation_code": "3784",
          "occ_name": "Real Estate Property Manager"
        },
        {
          "occupation_code": "3785",
          "occ_name": "Real Estate Salesperson"
        },
        {
          "occupation_code": "3786",
          "occ_name": "Real Estate Valuer"
        },
        {
          "occupation_code": "3787",
          "occ_name": "Realtor"
        },
        {
          "occupation_code": "3788",
          "occ_name": "Receiver and Liquidator"
        },
        {
          "occupation_code": "3789",
          "occ_name": "Receptionist"
        },
        {
          "occupation_code": "3790",
          "occ_name": "Record Producer"
        },
        {
          "occupation_code": "3791",
          "occ_name": "Recorder Court"
        },
        {
          "occupation_code": "3792",
          "occ_name": "Recording Engineer"
        },
        {
          "occupation_code": "3793",
          "occ_name": "Recreation Manager"
        },
        {
          "occupation_code": "3794",
          "occ_name": "Recruiter"
        },
        {
          "occupation_code": "3795",
          "occ_name": "Recruitment Assistant"
        },
        {
          "occupation_code": "3796",
          "occ_name": "Recruitment Manager"
        },
        {
          "occupation_code": "3797",
          "occ_name": "Recruitment Officer"
        },
        {
          "occupation_code": "3798",
          "occ_name": "Rector"
        },
        {
          "occupation_code": "3799",
          "occ_name": "Referee"
        },
        {
          "occupation_code": "3800",
          "occ_name": "Refiner"
        },
        {
          "occupation_code": "3801",
          "occ_name": "Refinery Labourer"
        },
        {
          "occupation_code": "3802",
          "occ_name": "Reflexologist"
        },
        {
          "occupation_code": "3803",
          "occ_name": "Refrigeration Plant Builder"
        },
        {
          "occupation_code": "3804",
          "occ_name": "Refuse Collector"
        },
        {
          "occupation_code": "3805",
          "occ_name": "Regional Manager"
        },
        {
          "occupation_code": "3806",
          "occ_name": "Regional Sales Manager No Travelling"
        },
        {
          "occupation_code": "3807",
          "occ_name": "Regional Sales Manager Travelling"
        },
        {
          "occupation_code": "3808",
          "occ_name": "Registered Nurse"
        },
        {
          "occupation_code": "3809",
          "occ_name": "Registered Nurse Administrative Only"
        },
        {
          "occupation_code": "3810",
          "occ_name": "Registered Nurse District Nurse"
        },
        {
          "occupation_code": "3811",
          "occ_name": "Registered Nurse Educator"
        },
        {
          "occupation_code": "3812",
          "occ_name": "Registered Nurse Patient Care"
        },
        {
          "occupation_code": "3813",
          "occ_name": "Registered Professional Engineer Chemical"
        },
        {
          "occupation_code": "3814",
          "occ_name": "Registered Professional Engineer Civil"
        },
        {
          "occupation_code": "3815",
          "occ_name": "Registered Professional Engineer Electrical"
        },
        {
          "occupation_code": "3816",
          "occ_name": "Registered Professional Engineer Industrial"
        },
        {
          "occupation_code": "3817",
          "occ_name": "Registered Professional Engineer Mechanical"
        },
        {
          "occupation_code": "3818",
          "occ_name": "Registered Professional Engineer Metallurgical"
        },
        {
          "occupation_code": "3819",
          "occ_name": "Registered Professional Engineer Mining"
        },
        {
          "occupation_code": "3820",
          "occ_name": "Registered Professional Engineer Refractory"
        },
        {
          "occupation_code": "3821",
          "occ_name": "Registrar Court"
        },
        {
          "occupation_code": "3822",
          "occ_name": "Registrar of Births"
        },
        {
          "occupation_code": "3823",
          "occ_name": "Registrar of Births Marriages Deaths"
        },
        {
          "occupation_code": "3824",
          "occ_name": "Registrar of Deaths"
        },
        {
          "occupation_code": "3825",
          "occ_name": "Registrar of Deeds"
        },
        {
          "occupation_code": "3826",
          "occ_name": "Registrar of Marriages"
        },
        {
          "occupation_code": "3827",
          "occ_name": "Registrar of Stock"
        },
        {
          "occupation_code": "3828",
          "occ_name": "Regulatory Affairs Manager"
        },
        {
          "occupation_code": "3829",
          "occ_name": "Regulatory Affairs Officer"
        },
        {
          "occupation_code": "3830",
          "occ_name": "Rehabilitation Specialist"
        },
        {
          "occupation_code": "3831",
          "occ_name": "Rehabilitation therapist"
        },
        {
          "occupation_code": "3832",
          "occ_name": "Rehabilitator Wildlife"
        },
        {
          "occupation_code": "3833",
          "occ_name": "Reinforcing Ironworker"
        },
        {
          "occupation_code": "3834",
          "occ_name": "Reinsurance Broker"
        },
        {
          "occupation_code": "3835",
          "occ_name": "Relations Officer"
        },
        {
          "occupation_code": "3836",
          "occ_name": "Relationship Manager"
        },
        {
          "occupation_code": "3837",
          "occ_name": "Relationship Manager No Travelling"
        },
        {
          "occupation_code": "3838",
          "occ_name": "Relationship Manager Travelling"
        },
        {
          "occupation_code": "3839",
          "occ_name": "Relief Printer"
        },
        {
          "occupation_code": "3840",
          "occ_name": "Religion Teacher"
        },
        {
          "occupation_code": "3841",
          "occ_name": "Religious Worker"
        },
        {
          "occupation_code": "3842",
          "occ_name": "Remedial Consultant"
        },
        {
          "occupation_code": "3843",
          "occ_name": "Remedial Therapist"
        },
        {
          "occupation_code": "3844",
          "occ_name": "Remote Angler"
        },
        {
          "occupation_code": "3845",
          "occ_name": "Remote Fishermen"
        },
        {
          "occupation_code": "3846",
          "occ_name": "Remote Heating Installer"
        },
        {
          "occupation_code": "3847",
          "occ_name": "Removalist"
        },
        {
          "occupation_code": "3848",
          "occ_name": "Renderer"
        },
        {
          "occupation_code": "3849",
          "occ_name": "Rent Collector Field"
        },
        {
          "occupation_code": "3850",
          "occ_name": "Rent Collector Office Bound"
        },
        {
          "occupation_code": "3851",
          "occ_name": "Repair Shop Supervisor"
        },
        {
          "occupation_code": "3852",
          "occ_name": "Repairer"
        },
        {
          "occupation_code": "3853",
          "occ_name": "Repairer Boat"
        },
        {
          "occupation_code": "3854",
          "occ_name": "Repairer Clock"
        },
        {
          "occupation_code": "3855",
          "occ_name": "Repairer Equipment"
        },
        {
          "occupation_code": "3856",
          "occ_name": "Repairer Line"
        },
        {
          "occupation_code": "3857",
          "occ_name": "Repairer Saw"
        },
        {
          "occupation_code": "3858",
          "occ_name": "Repairer Telephone"
        },
        {
          "occupation_code": "3859",
          "occ_name": "Repairer Watch"
        },
        {
          "occupation_code": "3860",
          "occ_name": "Reporter Court"
        },
        {
          "occupation_code": "3861",
          "occ_name": "Representative Sales"
        },
        {
          "occupation_code": "3862",
          "occ_name": "Reproduction Photographer"
        },
        {
          "occupation_code": "3863",
          "occ_name": "Reprographer"
        },
        {
          "occupation_code": "3864",
          "occ_name": "Rescue Worker"
        },
        {
          "occupation_code": "3865",
          "occ_name": "Research And Development Technologist"
        },
        {
          "occupation_code": "3866",
          "occ_name": "Research Assistant"
        },
        {
          "occupation_code": "3867",
          "occ_name": "Research Associate"
        },
        {
          "occupation_code": "3868",
          "occ_name": "Research Audiologist"
        },
        {
          "occupation_code": "3869",
          "occ_name": "Research Biochemist"
        },
        {
          "occupation_code": "3870",
          "occ_name": "Research Chemist"
        },
        {
          "occupation_code": "3871",
          "occ_name": "Research Coordinator"
        },
        {
          "occupation_code": "3872",
          "occ_name": "Research Development"
        },
        {
          "occupation_code": "3873",
          "occ_name": "Research Development Chemist"
        },
        {
          "occupation_code": "3874",
          "occ_name": "Research Entomology"
        },
        {
          "occupation_code": "3875",
          "occ_name": "Research Laboratory Technician"
        },
        {
          "occupation_code": "3876",
          "occ_name": "Research Manager"
        },
        {
          "occupation_code": "3877",
          "occ_name": "Research Nurse"
        },
        {
          "occupation_code": "3878",
          "occ_name": "Research Psychologist"
        },
        {
          "occupation_code": "3879",
          "occ_name": "Research Scientist"
        },
        {
          "occupation_code": "3880",
          "occ_name": "Researcher"
        },
        {
          "occupation_code": "3881",
          "occ_name": "Researcher Media"
        },
        {
          "occupation_code": "3882",
          "occ_name": "Reservations Clerk"
        },
        {
          "occupation_code": "3883",
          "occ_name": "Reservations Manager"
        },
        {
          "occupation_code": "3884",
          "occ_name": "Reservoir Attendant"
        },
        {
          "occupation_code": "3885",
          "occ_name": "Reservoir Tester"
        },
        {
          "occupation_code": "3886",
          "occ_name": "Residential Window Washer"
        },
        {
          "occupation_code": "3887",
          "occ_name": "Resort manager"
        },
        {
          "occupation_code": "3888",
          "occ_name": "Resources Analyst"
        },
        {
          "occupation_code": "3889",
          "occ_name": "Respiratory Therapist"
        },
        {
          "occupation_code": "3890",
          "occ_name": "Restaurant Owner"
        },
        {
          "occupation_code": "3891",
          "occ_name": "Restauranteur"
        },
        {
          "occupation_code": "3892",
          "occ_name": "Restauration Painting"
        },
        {
          "occupation_code": "3893",
          "occ_name": "Restorer"
        },
        {
          "occupation_code": "3894",
          "occ_name": "Restorer Furniture"
        },
        {
          "occupation_code": "3895",
          "occ_name": "Retail Administrator"
        },
        {
          "occupation_code": "3896",
          "occ_name": "Retail Construction Worker"
        },
        {
          "occupation_code": "3897",
          "occ_name": "Retail Fitter"
        },
        {
          "occupation_code": "3898",
          "occ_name": "Retail Manager"
        },
        {
          "occupation_code": "3899",
          "occ_name": "Retail Merchandiser"
        },
        {
          "occupation_code": "3900",
          "occ_name": "Retail Salesperson External"
        },
        {
          "occupation_code": "3901",
          "occ_name": "Retail Store Employee"
        },
        {
          "occupation_code": "3902",
          "occ_name": "Retoucher"
        },
        {
          "occupation_code": "3903",
          "occ_name": "Revenue Assistant"
        },
        {
          "occupation_code": "3904",
          "occ_name": "Revenue Officer"
        },
        {
          "occupation_code": "3905",
          "occ_name": "Reverend"
        },
        {
          "occupation_code": "3906",
          "occ_name": "Rheumatologist"
        },
        {
          "occupation_code": "3907",
          "occ_name": "Rickshaw Driver"
        },
        {
          "occupation_code": "3908",
          "occ_name": "Ride Hail Driver"
        },
        {
          "occupation_code": "3909",
          "occ_name": "Rig Floorhand"
        },
        {
          "occupation_code": "3910",
          "occ_name": "Rig Flow Technician"
        },
        {
          "occupation_code": "3911",
          "occ_name": "Rig Forklift Operator"
        },
        {
          "occupation_code": "3912",
          "occ_name": "Rig hand Oil rig"
        },
        {
          "occupation_code": "3913",
          "occ_name": "Rig Manager"
        },
        {
          "occupation_code": "3914",
          "occ_name": "Rig Valve Operator"
        },
        {
          "occupation_code": "3915",
          "occ_name": "Rig Watchstander"
        },
        {
          "occupation_code": "3916",
          "occ_name": "Rig Welder"
        },
        {
          "occupation_code": "3917",
          "occ_name": "Rigger Boat"
        },
        {
          "occupation_code": "3918",
          "occ_name": "Rigger Docks"
        },
        {
          "occupation_code": "3919",
          "occ_name": "Rigger Oil Rig"
        },
        {
          "occupation_code": "3920",
          "occ_name": "Ringmaster"
        },
        {
          "occupation_code": "3921",
          "occ_name": "Ripper Mining"
        },
        {
          "occupation_code": "3922",
          "occ_name": "Risk Analyst"
        },
        {
          "occupation_code": "3923",
          "occ_name": "Risk Assessor"
        },
        {
          "occupation_code": "3924",
          "occ_name": "Risk Manager"
        },
        {
          "occupation_code": "3925",
          "occ_name": "River Guide"
        },
        {
          "occupation_code": "3926",
          "occ_name": "Riveter"
        },
        {
          "occupation_code": "3927",
          "occ_name": "Road Cleaner"
        },
        {
          "occupation_code": "3928",
          "occ_name": "Road Patrol"
        },
        {
          "occupation_code": "3929",
          "occ_name": "Road Sweeper"
        },
        {
          "occupation_code": "3930",
          "occ_name": "Road Sweeper Driver"
        },
        {
          "occupation_code": "3931",
          "occ_name": "Roadie Self Employed"
        },
        {
          "occupation_code": "3932",
          "occ_name": "Roadman"
        },
        {
          "occupation_code": "3933",
          "occ_name": "Roads Lengthsman"
        },
        {
          "occupation_code": "3934",
          "occ_name": "Roadworthy inspector"
        },
        {
          "occupation_code": "3935",
          "occ_name": "Robotics Engineer"
        },
        {
          "occupation_code": "3936",
          "occ_name": "Rock Musician"
        },
        {
          "occupation_code": "3937",
          "occ_name": "Rock Splitter Quarry"
        },
        {
          "occupation_code": "3938",
          "occ_name": "Rodeo"
        },
        {
          "occupation_code": "3939",
          "occ_name": "Rodman Rodmen"
        },
        {
          "occupation_code": "3940",
          "occ_name": "Roof Bolter Mining"
        },
        {
          "occupation_code": "3941",
          "occ_name": "Roof Shingler"
        },
        {
          "occupation_code": "3942",
          "occ_name": "Roof Tiler"
        },
        {
          "occupation_code": "3943",
          "occ_name": "Roofer"
        },
        {
          "occupation_code": "3944",
          "occ_name": "Ropemaker"
        },
        {
          "occupation_code": "3945",
          "occ_name": "Roughneck Oil Rig"
        },
        {
          "occupation_code": "3946",
          "occ_name": "Roustabout Oil Rig"
        },
        {
          "occupation_code": "3947",
          "occ_name": "ROV Pilot"
        },
        {
          "occupation_code": "3948",
          "occ_name": "ROV Supervisor"
        },
        {
          "occupation_code": "3949",
          "occ_name": "Rubber Roll Builder"
        },
        {
          "occupation_code": "3950",
          "occ_name": "SA Air Force Deployed"
        },
        {
          "occupation_code": "3951",
          "occ_name": "SA Air Force Non Deployed"
        },
        {
          "occupation_code": "3952",
          "occ_name": "SA Army Deployed"
        },
        {
          "occupation_code": "3953",
          "occ_name": "South African Military Not  Deployed"
        },
        {
          "occupation_code": "3954",
          "occ_name": "Sacristan"
        },
        {
          "occupation_code": "3955",
          "occ_name": "Saddler"
        },
        {
          "occupation_code": "3956",
          "occ_name": "Safari Pilot"
        },
        {
          "occupation_code": "3957",
          "occ_name": "Safety Manager"
        },
        {
          "occupation_code": "3958",
          "occ_name": "Sailmaker"
        },
        {
          "occupation_code": "3959",
          "occ_name": "Sailor"
        },
        {
          "occupation_code": "3960",
          "occ_name": "Salary Administration Manager"
        },
        {
          "occupation_code": "3961",
          "occ_name": "Salary Administration Supervisor"
        },
        {
          "occupation_code": "3962",
          "occ_name": "Salary Administrator"
        },
        {
          "occupation_code": "3963",
          "occ_name": "Sales Analyst"
        },
        {
          "occupation_code": "3964",
          "occ_name": "Sales Assistant"
        },
        {
          "occupation_code": "3965",
          "occ_name": "Sales Assistant External"
        },
        {
          "occupation_code": "3966",
          "occ_name": "Sales Clerk External"
        },
        {
          "occupation_code": "3967",
          "occ_name": "Sales Consultant"
        },
        {
          "occupation_code": "3968",
          "occ_name": "Sales Consultant External"
        },
        {
          "occupation_code": "3969",
          "occ_name": "Sales Coordinator"
        },
        {
          "occupation_code": "3970",
          "occ_name": "Sales Coordinator External"
        },
        {
          "occupation_code": "3971",
          "occ_name": "Sales Director"
        },
        {
          "occupation_code": "3972",
          "occ_name": "Sales Director External"
        },
        {
          "occupation_code": "3973",
          "occ_name": "Sales Engineer"
        },
        {
          "occupation_code": "3974",
          "occ_name": "Sales Executive No Travelling"
        },
        {
          "occupation_code": "3975",
          "occ_name": "Sales Executive Travelling"
        },
        {
          "occupation_code": "3976",
          "occ_name": "Sales Manager"
        },
        {
          "occupation_code": "3977",
          "occ_name": "Sales Manager External"
        },
        {
          "occupation_code": "3978",
          "occ_name": "Sales Manager No Deliveries"
        },
        {
          "occupation_code": "3979",
          "occ_name": "Sales Representative Liquor"
        },
        {
          "occupation_code": "3980",
          "occ_name": "Sales Representative Liquor External"
        },
        {
          "occupation_code": "3981",
          "occ_name": "Sales Representative Wholesale"
        },
        {
          "occupation_code": "3982",
          "occ_name": "Salesman"
        },
        {
          "occupation_code": "3983",
          "occ_name": "Salesperson"
        },
        {
          "occupation_code": "3984",
          "occ_name": "Salesperson External"
        },
        {
          "occupation_code": "3985",
          "occ_name": "Salesperson Insurance"
        },
        {
          "occupation_code": "3986",
          "occ_name": "Salesperson Supermarket"
        },
        {
          "occupation_code": "3987",
          "occ_name": "Saloon Car Racing Driver"
        },
        {
          "occupation_code": "3988",
          "occ_name": "Saloon Employee"
        },
        {
          "occupation_code": "3989",
          "occ_name": "Salvage Diver"
        },
        {
          "occupation_code": "3990",
          "occ_name": "Salvage Man Mining"
        },
        {
          "occupation_code": "3991",
          "occ_name": "Salvage Worker"
        },
        {
          "occupation_code": "3992",
          "occ_name": "Salvage Worker Underwater"
        },
        {
          "occupation_code": "3993",
          "occ_name": "Sandblaster"
        },
        {
          "occupation_code": "3994",
          "occ_name": "Sandboarding Instructor"
        },
        {
          "occupation_code": "3995",
          "occ_name": "Sander"
        },
        {
          "occupation_code": "3996",
          "occ_name": "Sander Floor"
        },
        {
          "occupation_code": "3997",
          "occ_name": "Sangha"
        },
        {
          "occupation_code": "3998",
          "occ_name": "Sangoma"
        },
        {
          "occupation_code": "3999",
          "occ_name": "Sanitary Installer"
        },
        {
          "occupation_code": "4000",
          "occ_name": "Sanitary Waste Handler"
        },
        {
          "occupation_code": "4001",
          "occ_name": "Sanitation Worker"
        },
        {
          "occupation_code": "4002",
          "occ_name": "Savings Bank Specialist"
        },
        {
          "occupation_code": "4003",
          "occ_name": "Saw Repairer"
        },
        {
          "occupation_code": "4004",
          "occ_name": "Sawmill Technician"
        },
        {
          "occupation_code": "4005",
          "occ_name": "Sawmill Worker"
        },
        {
          "occupation_code": "4006",
          "occ_name": "Scaffold Erector"
        },
        {
          "occupation_code": "4007",
          "occ_name": "Scaffolder Oil Rig"
        },
        {
          "occupation_code": "4008",
          "occ_name": "Scenery Painter"
        },
        {
          "occupation_code": "4009",
          "occ_name": "Scenery Shifter"
        },
        {
          "occupation_code": "4010",
          "occ_name": "Scholar"
        },
        {
          "occupation_code": "4011",
          "occ_name": "School Administrator"
        },
        {
          "occupation_code": "4012",
          "occ_name": "School Counselor"
        },
        {
          "occupation_code": "4013",
          "occ_name": "School Inspector"
        },
        {
          "occupation_code": "4014",
          "occ_name": "School Psychologist"
        },
        {
          "occupation_code": "4015",
          "occ_name": "School Teacher"
        },
        {
          "occupation_code": "4016",
          "occ_name": "School Teacher Primary or High School"
        },
        {
          "occupation_code": "4017",
          "occ_name": "Scientific Diver"
        },
        {
          "occupation_code": "4018",
          "occ_name": "Scientist"
        },
        {
          "occupation_code": "4019",
          "occ_name": "Scientist Generic"
        },
        {
          "occupation_code": "4020",
          "occ_name": "Scientist Physical"
        },
        {
          "occupation_code": "4021",
          "occ_name": "Scientist Political"
        },
        {
          "occupation_code": "4022",
          "occ_name": "Scrap Dealer"
        },
        {
          "occupation_code": "4023",
          "occ_name": "Scrap Metal Collector"
        },
        {
          "occupation_code": "4024",
          "occ_name": "Scrap Metal Dealer"
        },
        {
          "occupation_code": "4025",
          "occ_name": "Scrap Yard Owner"
        },
        {
          "occupation_code": "4026",
          "occ_name": "Screening Plant Grader Quarry"
        },
        {
          "occupation_code": "4027",
          "occ_name": "Screenwriter"
        },
        {
          "occupation_code": "4028",
          "occ_name": "Scrum Master"
        },
        {
          "occupation_code": "4029",
          "occ_name": "Sea Cucumber Diver"
        },
        {
          "occupation_code": "4030",
          "occ_name": "Sea Cucumber Harvester"
        },
        {
          "occupation_code": "4031",
          "occ_name": "Sea Port Manager"
        },
        {
          "occupation_code": "4032",
          "occ_name": "Sea Urchin Diver"
        },
        {
          "occupation_code": "4033",
          "occ_name": "Sea Urchin Harvester"
        },
        {
          "occupation_code": "4034",
          "occ_name": "Sea Vessel Second Mate"
        },
        {
          "occupation_code": "4035",
          "occ_name": "Seafood Bargainer"
        },
        {
          "occupation_code": "4036",
          "occ_name": "Seafood Dealer"
        },
        {
          "occupation_code": "4037",
          "occ_name": "Seafood Peddlers"
        },
        {
          "occupation_code": "4038",
          "occ_name": "Seafood Trader"
        },
        {
          "occupation_code": "4039",
          "occ_name": "Seafood Vendor"
        },
        {
          "occupation_code": "4040",
          "occ_name": "Seaman"
        },
        {
          "occupation_code": "4041",
          "occ_name": "Seamen"
        },
        {
          "occupation_code": "4042",
          "occ_name": "Seamstress"
        },
        {
          "occupation_code": "4043",
          "occ_name": "Second Mate Sea Vessel"
        },
        {
          "occupation_code": "4044",
          "occ_name": "Secretary"
        },
        {
          "occupation_code": "4045",
          "occ_name": "Secretary Administrative Assistant"
        },
        {
          "occupation_code": "4046",
          "occ_name": "Secretary Company"
        },
        {
          "occupation_code": "4047",
          "occ_name": "Secretary Legal"
        },
        {
          "occupation_code": "4048",
          "occ_name": "Secretary Racing"
        },
        {
          "occupation_code": "4049",
          "occ_name": "Securities Trade Manager"
        },
        {
          "occupation_code": "4050",
          "occ_name": "Security Analyst"
        },
        {
          "occupation_code": "4051",
          "occ_name": "Security Consultant"
        },
        {
          "occupation_code": "4052",
          "occ_name": "Security Guard"
        },
        {
          "occupation_code": "4053",
          "occ_name": "Security guard Bar Club or other Premises Serving Alcohol"
        },
        {
          "occupation_code": "4054",
          "occ_name": "Security Guard Cash In Transit"
        },
        {
          "occupation_code": "4055",
          "occ_name": "Security Officer"
        },
        {
          "occupation_code": "4056",
          "occ_name": "Security Patrolman"
        },
        {
          "occupation_code": "4057",
          "occ_name": "Seeding Pilot"
        },
        {
          "occupation_code": "4058",
          "occ_name": "Seer"
        },
        {
          "occupation_code": "4059",
          "occ_name": "Seismic Blaster Mining"
        },
        {
          "occupation_code": "4060",
          "occ_name": "Seismologist"
        },
        {
          "occupation_code": "4061",
          "occ_name": "Seller Ticket"
        },
        {
          "occupation_code": "4062",
          "occ_name": "Senior Construction Manager"
        },
        {
          "occupation_code": "4063",
          "occ_name": "Senior Fire Divisional Officer"
        },
        {
          "occupation_code": "4064",
          "occ_name": "Senior Firefighter"
        },
        {
          "occupation_code": "4065",
          "occ_name": "Senior Lecturer"
        },
        {
          "occupation_code": "4066",
          "occ_name": "Senior Manager"
        },
        {
          "occupation_code": "4067",
          "occ_name": "Senior Police Inspector"
        },
        {
          "occupation_code": "4068",
          "occ_name": "Senior Policy Advisor"
        },
        {
          "occupation_code": "4069",
          "occ_name": "Sergeant"
        },
        {
          "occupation_code": "4070",
          "occ_name": "Servant Public"
        },
        {
          "occupation_code": "4071",
          "occ_name": "Service Manager"
        },
        {
          "occupation_code": "4072",
          "occ_name": "Service Station Shop Attendant"
        },
        {
          "occupation_code": "4073",
          "occ_name": "Service Technician"
        },
        {
          "occupation_code": "4074",
          "occ_name": "Serviceperson Steering and Suspension"
        },
        {
          "occupation_code": "4075",
          "occ_name": "Set Architect"
        },
        {
          "occupation_code": "4076",
          "occ_name": "Set Designer"
        },
        {
          "occupation_code": "4077",
          "occ_name": "Sewage Treatment Plant Manager"
        },
        {
          "occupation_code": "4078",
          "occ_name": "Sewer Sewing"
        },
        {
          "occupation_code": "4079",
          "occ_name": "Sewing Machine Mechanic"
        },
        {
          "occupation_code": "4080",
          "occ_name": "Sewing Machine Technician"
        },
        {
          "occupation_code": "4081",
          "occ_name": "Shaft Operator"
        },
        {
          "occupation_code": "4082",
          "occ_name": "Shaft Sinker"
        },
        {
          "occupation_code": "4083",
          "occ_name": "Shaftsman Mining"
        },
        {
          "occupation_code": "4084",
          "occ_name": "Shaman"
        },
        {
          "occupation_code": "4085",
          "occ_name": "Sheep Farmer"
        },
        {
          "occupation_code": "4086",
          "occ_name": "Sheet Fixer"
        },
        {
          "occupation_code": "4087",
          "occ_name": "Sheet Metal Fabricator"
        },
        {
          "occupation_code": "4088",
          "occ_name": "Sheet Metal Factory Worker"
        },
        {
          "occupation_code": "4089",
          "occ_name": "Sheet Metal Fixer"
        },
        {
          "occupation_code": "4090",
          "occ_name": "Sheet Metal Worker"
        },
        {
          "occupation_code": "4091",
          "occ_name": "Sheeter Paper"
        },
        {
          "occupation_code": "4092",
          "occ_name": "Shelf Filler Supermarket"
        },
        {
          "occupation_code": "4093",
          "occ_name": "Shelf Stacker Supermarket"
        },
        {
          "occupation_code": "4094",
          "occ_name": "Sheriff Deputy"
        },
        {
          "occupation_code": "4095",
          "occ_name": "Sheriff of the Court"
        },
        {
          "occupation_code": "4096",
          "occ_name": "Shesha Driver"
        },
        {
          "occupation_code": "4097",
          "occ_name": "Shift Boss"
        },
        {
          "occupation_code": "4098",
          "occ_name": "Shingler"
        },
        {
          "occupation_code": "4099",
          "occ_name": "Ship Broker"
        },
        {
          "occupation_code": "4100",
          "occ_name": "Ship Building"
        },
        {
          "occupation_code": "4101",
          "occ_name": "Ship Master"
        },
        {
          "occupation_code": "4102",
          "occ_name": "Shipbuilding Salesperson"
        },
        {
          "occupation_code": "4103",
          "occ_name": "Shipping Agent"
        },
        {
          "occupation_code": "4104",
          "occ_name": "Shipping Broker"
        },
        {
          "occupation_code": "4105",
          "occ_name": "Shipping Director"
        },
        {
          "occupation_code": "4106",
          "occ_name": "Shipping Manager"
        },
        {
          "occupation_code": "4107",
          "occ_name": "Ships Cook"
        },
        {
          "occupation_code": "4108",
          "occ_name": "Ships Officer"
        },
        {
          "occupation_code": "4109",
          "occ_name": "Ships Pilot"
        },
        {
          "occupation_code": "4110",
          "occ_name": "Shipwright"
        },
        {
          "occupation_code": "4111",
          "occ_name": "Shipyard Labourer"
        },
        {
          "occupation_code": "4112",
          "occ_name": "Shipyard Worker"
        },
        {
          "occupation_code": "4113",
          "occ_name": "Shoe Finisher"
        },
        {
          "occupation_code": "4114",
          "occ_name": "Shoe Machinist"
        },
        {
          "occupation_code": "4115",
          "occ_name": "Shoe Repairer"
        },
        {
          "occupation_code": "4116",
          "occ_name": "Shoe Stuffcutter"
        },
        {
          "occupation_code": "4117",
          "occ_name": "Shoe Tableworker"
        },
        {
          "occupation_code": "4118",
          "occ_name": "Shooter"
        },
        {
          "occupation_code": "4119",
          "occ_name": "Shop Attendant Service Station"
        },
        {
          "occupation_code": "4120",
          "occ_name": "Shop Games"
        },
        {
          "occupation_code": "4121",
          "occ_name": "Shopfitter"
        },
        {
          "occupation_code": "4122",
          "occ_name": "Shopping Trolley Collector"
        },
        {
          "occupation_code": "4123",
          "occ_name": "Shotblaster"
        },
        {
          "occupation_code": "4124",
          "occ_name": "Shotfirer"
        },
        {
          "occupation_code": "4125",
          "occ_name": "Shotfirer Quarry"
        },
        {
          "occupation_code": "4126",
          "occ_name": "Shunter Mining"
        },
        {
          "occupation_code": "4127",
          "occ_name": "Shunter Railways"
        },
        {
          "occupation_code": "4128",
          "occ_name": "Shutter Intaller"
        },
        {
          "occupation_code": "4129",
          "occ_name": "Shutter Maker"
        },
        {
          "occupation_code": "4130",
          "occ_name": "Shuttering Carpenter"
        },
        {
          "occupation_code": "4131",
          "occ_name": "Shuttle Service Driver"
        },
        {
          "occupation_code": "4132",
          "occ_name": "Sideshow Operator"
        },
        {
          "occupation_code": "4133",
          "occ_name": "Sideshow Performer"
        },
        {
          "occupation_code": "4134",
          "occ_name": "Sifter Quarry"
        },
        {
          "occupation_code": "4135",
          "occ_name": "Sign Painter"
        },
        {
          "occupation_code": "4136",
          "occ_name": "Sign Writer"
        },
        {
          "occupation_code": "4137",
          "occ_name": "Signage Installer"
        },
        {
          "occupation_code": "4138",
          "occ_name": "Signal Engineer Railways"
        },
        {
          "occupation_code": "4139",
          "occ_name": "Signal Installer Railways"
        },
        {
          "occupation_code": "4140",
          "occ_name": "Signal Supervisor Railways"
        },
        {
          "occupation_code": "4141",
          "occ_name": "Signalman Port Control"
        },
        {
          "occupation_code": "4142",
          "occ_name": "Silk Flower Maker"
        },
        {
          "occupation_code": "4143",
          "occ_name": "Silk Screen Printer"
        },
        {
          "occupation_code": "4144",
          "occ_name": "Silver Artisan"
        },
        {
          "occupation_code": "4145",
          "occ_name": "Silversmith"
        },
        {
          "occupation_code": "4146",
          "occ_name": "Singing Teacher"
        },
        {
          "occupation_code": "4147",
          "occ_name": "Site Manager"
        },
        {
          "occupation_code": "4148",
          "occ_name": "Site Seeing Aviation"
        },
        {
          "occupation_code": "4149",
          "occ_name": "Ski Instructor"
        },
        {
          "occupation_code": "4150",
          "occ_name": "Skills Trainer"
        },
        {
          "occupation_code": "4151",
          "occ_name": "Skin Diver Armed Forces"
        },
        {
          "occupation_code": "4152",
          "occ_name": "Skin Specialist"
        },
        {
          "occupation_code": "4153",
          "occ_name": "Skipper"
        },
        {
          "occupation_code": "4154",
          "occ_name": "Skipper Commercial Fishing"
        },
        {
          "occupation_code": "4155",
          "occ_name": "Slater"
        },
        {
          "occupation_code": "4156",
          "occ_name": "Slaughterer"
        },
        {
          "occupation_code": "4157",
          "occ_name": "Slaughterhouse Operative"
        },
        {
          "occupation_code": "4158",
          "occ_name": "Slaughterhouse Worker"
        },
        {
          "occupation_code": "4159",
          "occ_name": "Sleep Consultant"
        },
        {
          "occupation_code": "4160",
          "occ_name": "Slicer"
        },
        {
          "occupation_code": "4161",
          "occ_name": "Slot Machine Attendants"
        },
        {
          "occupation_code": "4162",
          "occ_name": "Small Animal Vet"
        },
        {
          "occupation_code": "4163",
          "occ_name": "Small Engine Mechanic"
        },
        {
          "occupation_code": "4164",
          "occ_name": "Smelter"
        },
        {
          "occupation_code": "4165",
          "occ_name": "Smoke Jumper"
        },
        {
          "occupation_code": "4166",
          "occ_name": "Snorkel Instructor"
        },
        {
          "occupation_code": "4167",
          "occ_name": "Snowboarding Instructor"
        },
        {
          "occupation_code": "4168",
          "occ_name": "Snowmobile Mechanic"
        },
        {
          "occupation_code": "4169",
          "occ_name": "Social Assistance"
        },
        {
          "occupation_code": "4170",
          "occ_name": "Social Educationalist"
        },
        {
          "occupation_code": "4171",
          "occ_name": "Social Educator"
        },
        {
          "occupation_code": "4172",
          "occ_name": "Social Insurance Expert"
        },
        {
          "occupation_code": "4173",
          "occ_name": "Social Planner"
        },
        {
          "occupation_code": "4174",
          "occ_name": "Social Researcher"
        },
        {
          "occupation_code": "4175",
          "occ_name": "Social Scientist"
        },
        {
          "occupation_code": "4176",
          "occ_name": "Soft Furnishing Production Worker"
        },
        {
          "occupation_code": "4177",
          "occ_name": "Soft Shoe Dancer"
        },
        {
          "occupation_code": "4178",
          "occ_name": "Software Analyst"
        },
        {
          "occupation_code": "4179",
          "occ_name": "Software and Applications Programmer"
        },
        {
          "occupation_code": "4180",
          "occ_name": "Software Architect"
        },
        {
          "occupation_code": "4181",
          "occ_name": "Software Consultant"
        },
        {
          "occupation_code": "4182",
          "occ_name": "Software Designer"
        },
        {
          "occupation_code": "4183",
          "occ_name": "Software Developer"
        },
        {
          "occupation_code": "4184",
          "occ_name": "Software Developer IT"
        },
        {
          "occupation_code": "4185",
          "occ_name": "Software Engineer"
        },
        {
          "occupation_code": "4186",
          "occ_name": "Software Information Technology Architect"
        },
        {
          "occupation_code": "4187",
          "occ_name": "Software Manager"
        },
        {
          "occupation_code": "4188",
          "occ_name": "Software Technician"
        },
        {
          "occupation_code": "4189",
          "occ_name": "Software Tester"
        },
        {
          "occupation_code": "4190",
          "occ_name": "Soil Conservationist"
        },
        {
          "occupation_code": "4191",
          "occ_name": "Soil Scientist"
        },
        {
          "occupation_code": "4192",
          "occ_name": "Soil Specialist"
        },
        {
          "occupation_code": "4193",
          "occ_name": "Solar Panel Installer"
        },
        {
          "occupation_code": "4194",
          "occ_name": "Solderer"
        },
        {
          "occupation_code": "4195",
          "occ_name": "Soldering Technician"
        },
        {
          "occupation_code": "4196",
          "occ_name": "Solicitor"
        },
        {
          "occupation_code": "4197",
          "occ_name": "Solicitors Clerk"
        },
        {
          "occupation_code": "4198",
          "occ_name": "Solution Architect"
        },
        {
          "occupation_code": "4199",
          "occ_name": "Sommelier"
        },
        {
          "occupation_code": "4200",
          "occ_name": "Songwriter"
        },
        {
          "occupation_code": "4201",
          "occ_name": "Sonographer"
        },
        {
          "occupation_code": "4202",
          "occ_name": "Sonologist"
        },
        {
          "occupation_code": "4203",
          "occ_name": "Sorter"
        },
        {
          "occupation_code": "4204",
          "occ_name": "Sorter Agricultural Produce"
        },
        {
          "occupation_code": "4205",
          "occ_name": "Sorter Log"
        },
        {
          "occupation_code": "4206",
          "occ_name": "Sorter Wool"
        },
        {
          "occupation_code": "4207",
          "occ_name": "Sound Engineer"
        },
        {
          "occupation_code": "4208",
          "occ_name": "Sourcing Manager Pharmaceuticals"
        },
        {
          "occupation_code": "4209",
          "occ_name": "Sous Chef"
        },
        {
          "occupation_code": "4210",
          "occ_name": "South African Air Force Deployed"
        },
        {
          "occupation_code": "4211",
          "occ_name": "South African Air Force Non Deployed"
        },
        {
          "occupation_code": "4212",
          "occ_name": "South African Army Deployed"
        },
        {
          "occupation_code": "4213",
          "occ_name": "South African Military Deployed"
        },
        {
          "occupation_code": "4214",
          "occ_name": "Space Planner"
        },
        {
          "occupation_code": "4215",
          "occ_name": "Spatial Information Systems Technician"
        },
        {
          "occupation_code": "4216",
          "occ_name": "Special Effects Coordinator"
        },
        {
          "occupation_code": "4217",
          "occ_name": "Special Forces"
        },
        {
          "occupation_code": "4218",
          "occ_name": "Specialist Anaesthetist"
        },
        {
          "occupation_code": "4219",
          "occ_name": "Specialist Attorney"
        },
        {
          "occupation_code": "4220",
          "occ_name": "Specialist ENT"
        },
        {
          "occupation_code": "4221",
          "occ_name": "Speech And Hearing Therapist"
        },
        {
          "occupation_code": "4222",
          "occ_name": "Speech Therapist"
        },
        {
          "occupation_code": "4223",
          "occ_name": "Speech Therapist Audiologist"
        },
        {
          "occupation_code": "4224",
          "occ_name": "Speech Writer"
        },
        {
          "occupation_code": "4225",
          "occ_name": "Speedboat Driver"
        },
        {
          "occupation_code": "4226",
          "occ_name": "Speedboat Pilot"
        },
        {
          "occupation_code": "4227",
          "occ_name": "Spinner"
        },
        {
          "occupation_code": "4228",
          "occ_name": "Spinning Technician"
        },
        {
          "occupation_code": "4229",
          "occ_name": "Spiritual Healer"
        },
        {
          "occupation_code": "4230",
          "occ_name": "Spiritualist"
        },
        {
          "occupation_code": "4231",
          "occ_name": "Sponge Diver"
        },
        {
          "occupation_code": "4232",
          "occ_name": "Sponge Harvester"
        },
        {
          "occupation_code": "4233",
          "occ_name": "Sport Scientist"
        },
        {
          "occupation_code": "4234",
          "occ_name": "Sport Talent Scout"
        },
        {
          "occupation_code": "4235",
          "occ_name": "Sporting Equipment Manager"
        },
        {
          "occupation_code": "4236",
          "occ_name": "Sports Agent"
        },
        {
          "occupation_code": "4237",
          "occ_name": "Sports Centre Manager"
        },
        {
          "occupation_code": "4238",
          "occ_name": "Sports Coordinator"
        },
        {
          "occupation_code": "4239",
          "occ_name": "Sports Equipment Builder"
        },
        {
          "occupation_code": "4240",
          "occ_name": "Sports Equipment Maker"
        },
        {
          "occupation_code": "4241",
          "occ_name": "Sports Equipment Sales"
        },
        {
          "occupation_code": "4242",
          "occ_name": "Sports Gear Salesperson"
        },
        {
          "occupation_code": "4243",
          "occ_name": "Sports Instructor"
        },
        {
          "occupation_code": "4244",
          "occ_name": "Sports Manager"
        },
        {
          "occupation_code": "4245",
          "occ_name": "Sports Team Manager"
        },
        {
          "occupation_code": "4246",
          "occ_name": "Sportsperson Professional"
        },
        {
          "occupation_code": "4247",
          "occ_name": "Spray Enameller"
        },
        {
          "occupation_code": "4248",
          "occ_name": "Stable Groom"
        },
        {
          "occupation_code": "4249",
          "occ_name": "Stable Hand"
        },
        {
          "occupation_code": "4250",
          "occ_name": "Stable Owner"
        },
        {
          "occupation_code": "4251",
          "occ_name": "Staff Writer"
        },
        {
          "occupation_code": "4252",
          "occ_name": "Stage Designer"
        },
        {
          "occupation_code": "4253",
          "occ_name": "Stage director"
        },
        {
          "occupation_code": "4254",
          "occ_name": "Stage Doorkeeper"
        },
        {
          "occupation_code": "4255",
          "occ_name": "Stage Manager"
        },
        {
          "occupation_code": "4256",
          "occ_name": "Stage Technician"
        },
        {
          "occupation_code": "4257",
          "occ_name": "Stagehand"
        },
        {
          "occupation_code": "4258",
          "occ_name": "Stained Glass Antiques Restorer"
        },
        {
          "occupation_code": "4259",
          "occ_name": "Stall Holder"
        },
        {
          "occupation_code": "4260",
          "occ_name": "Stand Up Comic"
        },
        {
          "occupation_code": "4261",
          "occ_name": "State Advocate"
        },
        {
          "occupation_code": "4262",
          "occ_name": "State Attorney"
        },
        {
          "occupation_code": "4263",
          "occ_name": "State Employee Office Based No Manual"
        },
        {
          "occupation_code": "4264",
          "occ_name": "State Prosecutor"
        },
        {
          "occupation_code": "4265",
          "occ_name": "Station Agent"
        },
        {
          "occupation_code": "4266",
          "occ_name": "Station Foreman"
        },
        {
          "occupation_code": "4267",
          "occ_name": "Station Janitor"
        },
        {
          "occupation_code": "4268",
          "occ_name": "Station Manager Film"
        },
        {
          "occupation_code": "4269",
          "occ_name": "Station Officer"
        },
        {
          "occupation_code": "4270",
          "occ_name": "Station Worker"
        },
        {
          "occupation_code": "4271",
          "occ_name": "Stationer"
        },
        {
          "occupation_code": "4272",
          "occ_name": "Stationmaster"
        },
        {
          "occupation_code": "4273",
          "occ_name": "Statistic Economist"
        },
        {
          "occupation_code": "4274",
          "occ_name": "Statistical Adviser"
        },
        {
          "occupation_code": "4275",
          "occ_name": "Statistical Analyst"
        },
        {
          "occupation_code": "4276",
          "occ_name": "Statistical Clerk"
        },
        {
          "occupation_code": "4277",
          "occ_name": "Statistical Consultant"
        },
        {
          "occupation_code": "4278",
          "occ_name": "Statistician"
        },
        {
          "occupation_code": "4279",
          "occ_name": "Statistics Clerk"
        },
        {
          "occupation_code": "4280",
          "occ_name": "Statistics Consultant"
        },
        {
          "occupation_code": "4281",
          "occ_name": "Stay at Home Dad"
        },
        {
          "occupation_code": "4282",
          "occ_name": "Stay at Home Mom"
        },
        {
          "occupation_code": "4283",
          "occ_name": "Stay at Home Parent"
        },
        {
          "occupation_code": "4284",
          "occ_name": "Steam and pressure plant operator"
        },
        {
          "occupation_code": "4285",
          "occ_name": "Steel Erector"
        },
        {
          "occupation_code": "4286",
          "occ_name": "Steel Worker"
        },
        {
          "occupation_code": "4287",
          "occ_name": "Steeplejack"
        },
        {
          "occupation_code": "4288",
          "occ_name": "Stevedore"
        },
        {
          "occupation_code": "4289",
          "occ_name": "Steward"
        },
        {
          "occupation_code": "4290",
          "occ_name": "Steward Assistant"
        },
        {
          "occupation_code": "4291",
          "occ_name": "Steward Race Track"
        },
        {
          "occupation_code": "4292",
          "occ_name": "Steward Second"
        },
        {
          "occupation_code": "4293",
          "occ_name": "Steward Sport"
        },
        {
          "occupation_code": "4294",
          "occ_name": "Stewardess"
        },
        {
          "occupation_code": "4295",
          "occ_name": "Stitcher"
        },
        {
          "occupation_code": "4296",
          "occ_name": "Stock Broker"
        },
        {
          "occupation_code": "4297",
          "occ_name": "Stock Clerk"
        },
        {
          "occupation_code": "4298",
          "occ_name": "Stock Control Manager"
        },
        {
          "occupation_code": "4299",
          "occ_name": "Stock Taker"
        },
        {
          "occupation_code": "4300",
          "occ_name": "Stockbrokers Analyst"
        },
        {
          "occupation_code": "4301",
          "occ_name": "Stockbrokers Clerk"
        },
        {
          "occupation_code": "4302",
          "occ_name": "Stockbroking Manager"
        },
        {
          "occupation_code": "4303",
          "occ_name": "Stockman"
        },
        {
          "occupation_code": "4304",
          "occ_name": "Stockperson Department Store"
        },
        {
          "occupation_code": "4305",
          "occ_name": "Stockperson Supermarket"
        },
        {
          "occupation_code": "4306",
          "occ_name": "Stomatherapist"
        },
        {
          "occupation_code": "4307",
          "occ_name": "Stone breaker Quarry"
        },
        {
          "occupation_code": "4308",
          "occ_name": "Stonemason"
        },
        {
          "occupation_code": "4309",
          "occ_name": "Store Assistant Department Store"
        },
        {
          "occupation_code": "4310",
          "occ_name": "Store Builder"
        },
        {
          "occupation_code": "4311",
          "occ_name": "Store Designer"
        },
        {
          "occupation_code": "4312",
          "occ_name": "Store Employee Liquor"
        },
        {
          "occupation_code": "4313",
          "occ_name": "Store Manager"
        },
        {
          "occupation_code": "4314",
          "occ_name": "Store Manager Liquor"
        },
        {
          "occupation_code": "4315",
          "occ_name": "Store Supervisor"
        },
        {
          "occupation_code": "4316",
          "occ_name": "Storm Chaser"
        },
        {
          "occupation_code": "4317",
          "occ_name": "Storm Researcher"
        },
        {
          "occupation_code": "4318",
          "occ_name": "Storyboard Artist"
        },
        {
          "occupation_code": "4319",
          "occ_name": "Strapper"
        },
        {
          "occupation_code": "4320",
          "occ_name": "Strata Control Officer"
        },
        {
          "occupation_code": "4321",
          "occ_name": "Strategic Accounts Manager No Travelling"
        },
        {
          "occupation_code": "4322",
          "occ_name": "Strategic Accounts Manager Travelling"
        },
        {
          "occupation_code": "4323",
          "occ_name": "Strategic Consultant"
        },
        {
          "occupation_code": "4324",
          "occ_name": "Street Artist"
        },
        {
          "occupation_code": "4325",
          "occ_name": "Street Performer"
        },
        {
          "occupation_code": "4326",
          "occ_name": "Street Sweeper"
        },
        {
          "occupation_code": "4327",
          "occ_name": "Street Vendors"
        },
        {
          "occupation_code": "4328",
          "occ_name": "Streetcar Driver"
        },
        {
          "occupation_code": "4329",
          "occ_name": "Stringed Musical Instrument Maker"
        },
        {
          "occupation_code": "4330",
          "occ_name": "Structural Engineer"
        },
        {
          "occupation_code": "4331",
          "occ_name": "Structural Steel Erector"
        },
        {
          "occupation_code": "4332",
          "occ_name": "Structural Technician"
        },
        {
          "occupation_code": "4333",
          "occ_name": "Student"
        },
        {
          "occupation_code": "4334",
          "occ_name": "Student Advisor"
        },
        {
          "occupation_code": "4335",
          "occ_name": "Student Commercial Pilot"
        },
        {
          "occupation_code": "4336",
          "occ_name": "Student Pilot Fixed Wing"
        },
        {
          "occupation_code": "4337",
          "occ_name": "Studio Photographer"
        },
        {
          "occupation_code": "4338",
          "occ_name": "Stunt Arranger"
        },
        {
          "occupation_code": "4339",
          "occ_name": "Stunt Artist"
        },
        {
          "occupation_code": "4340",
          "occ_name": "Stunt Coordinator"
        },
        {
          "occupation_code": "4341",
          "occ_name": "Stunt Performer"
        },
        {
          "occupation_code": "4342",
          "occ_name": "Stuntwoman"
        },
        {
          "occupation_code": "4343",
          "occ_name": "Sub Editor"
        },
        {
          "occupation_code": "4344",
          "occ_name": "Sub Officer"
        },
        {
          "occupation_code": "4345",
          "occ_name": "Sub Officer Fire Service"
        },
        {
          "occupation_code": "4346",
          "occ_name": "Submarine Cable Installer"
        },
        {
          "occupation_code": "4347",
          "occ_name": "Subsea Engineer Oil Rig"
        },
        {
          "occupation_code": "4348",
          "occ_name": "Subsea Pipeline Technician"
        },
        {
          "occupation_code": "4349",
          "occ_name": "Substitute Teacher"
        },
        {
          "occupation_code": "4350",
          "occ_name": "Sun And Weather Protection Technician"
        },
        {
          "occupation_code": "4351",
          "occ_name": "Superannuation Funds Administrator"
        },
        {
          "occupation_code": "4352",
          "occ_name": "Supermarket Assistant"
        },
        {
          "occupation_code": "4353",
          "occ_name": "Supermarket Packer"
        },
        {
          "occupation_code": "4354",
          "occ_name": "Supermarket Shelf Filler"
        },
        {
          "occupation_code": "4355",
          "occ_name": "Supermarket Shelf Stacker"
        },
        {
          "occupation_code": "4356",
          "occ_name": "Supervisor"
        },
        {
          "occupation_code": "4357",
          "occ_name": "Supervisor Floor"
        },
        {
          "occupation_code": "4358",
          "occ_name": "Supervisor Gaming"
        },
        {
          "occupation_code": "4359",
          "occ_name": "Supervisor Light Manual"
        },
        {
          "occupation_code": "4360",
          "occ_name": "Supervisor Manual"
        },
        {
          "occupation_code": "4361",
          "occ_name": "Supervisor Office Work Only"
        },
        {
          "occupation_code": "4362",
          "occ_name": "Supervisor Travel No Manual"
        },
        {
          "occupation_code": "4364",
          "occ_name": "Supervisory Office duties Only"
        },
        {
          "occupation_code": "4365",
          "occ_name": "Supply Chain Consultant"
        },
        {
          "occupation_code": "4366",
          "occ_name": "Supply Chain Manager"
        },
        {
          "occupation_code": "4367",
          "occ_name": "Support Centre Manager"
        },
        {
          "occupation_code": "4368",
          "occ_name": "Support Worker Legal"
        },
        {
          "occupation_code": "4369",
          "occ_name": "Surf Casters"
        },
        {
          "occupation_code": "4370",
          "occ_name": "Surgeon Dental"
        },
        {
          "occupation_code": "4371",
          "occ_name": "Surgeon ENT"
        },
        {
          "occupation_code": "4372",
          "occ_name": "Surgical Appliance Maker"
        },
        {
          "occupation_code": "4373",
          "occ_name": "Surgical Assistant"
        },
        {
          "occupation_code": "4374",
          "occ_name": "Surgical Technologist"
        },
        {
          "occupation_code": "4375",
          "occ_name": "Survey Diver"
        },
        {
          "occupation_code": "4376",
          "occ_name": "Survey Methodologist"
        },
        {
          "occupation_code": "4377",
          "occ_name": "Survey Statistician"
        },
        {
          "occupation_code": "4378",
          "occ_name": "Surveying Technologist IT"
        },
        {
          "occupation_code": "4379",
          "occ_name": "Surveyor"
        },
        {
          "occupation_code": "4380",
          "occ_name": "Surveyor Hydrographic"
        },
        {
          "occupation_code": "4381",
          "occ_name": "Surveyor Quantity"
        },
        {
          "occupation_code": "4382",
          "occ_name": "Surveyor's Assistant"
        },
        {
          "occupation_code": "4383",
          "occ_name": "Sustainability Consultant"
        },
        {
          "occupation_code": "4384",
          "occ_name": "Swine Herder"
        },
        {
          "occupation_code": "4385",
          "occ_name": "Switchgear Assembler"
        },
        {
          "occupation_code": "4386",
          "occ_name": "Sword Polisher"
        },
        {
          "occupation_code": "4387",
          "occ_name": "Sword Swallower"
        },
        {
          "occupation_code": "4388",
          "occ_name": "System And Network Administration"
        },
        {
          "occupation_code": "4389",
          "occ_name": "System Audit Specialist"
        },
        {
          "occupation_code": "4390",
          "occ_name": "System Manager"
        },
        {
          "occupation_code": "4391",
          "occ_name": "Systems Analyst"
        },
        {
          "occupation_code": "4392",
          "occ_name": "Systems Architect"
        },
        {
          "occupation_code": "4393",
          "occ_name": "Systems Consultant"
        },
        {
          "occupation_code": "4394",
          "occ_name": "Systems Designer"
        },
        {
          "occupation_code": "4395",
          "occ_name": "Systems Developer"
        },
        {
          "occupation_code": "4396",
          "occ_name": "Systems Programmer"
        },
        {
          "occupation_code": "4397",
          "occ_name": "Systems Researcher"
        },
        {
          "occupation_code": "4398",
          "occ_name": "Tailor"
        },
        {
          "occupation_code": "4399",
          "occ_name": "Talent Agent"
        },
        {
          "occupation_code": "4400",
          "occ_name": "Tanker Driver"
        },
        {
          "occupation_code": "4401",
          "occ_name": "Tanner"
        },
        {
          "occupation_code": "4402",
          "occ_name": "Tap Dancer"
        },
        {
          "occupation_code": "4403",
          "occ_name": "Tapper Resin"
        },
        {
          "occupation_code": "4404",
          "occ_name": "Tapper Rubber"
        },
        {
          "occupation_code": "4405",
          "occ_name": "Tarot Card Reader"
        },
        {
          "occupation_code": "4406",
          "occ_name": "Taster"
        },
        {
          "occupation_code": "4407",
          "occ_name": "Tattooist"
        },
        {
          "occupation_code": "4408",
          "occ_name": "Tavern Proprietor"
        },
        {
          "occupation_code": "4409",
          "occ_name": "Tax Assistant"
        },
        {
          "occupation_code": "4410",
          "occ_name": "Tax Consultant"
        },
        {
          "occupation_code": "4411",
          "occ_name": "Tax Director"
        },
        {
          "occupation_code": "4412",
          "occ_name": "Tax Inspector"
        },
        {
          "occupation_code": "4413",
          "occ_name": "Tax Manager"
        },
        {
          "occupation_code": "4414",
          "occ_name": "Tax Officer"
        },
        {
          "occupation_code": "4415",
          "occ_name": "Tax Specialist"
        },
        {
          "occupation_code": "4416",
          "occ_name": "Taxi Driver"
        },
        {
          "occupation_code": "4417",
          "occ_name": "Taxi Owner"
        },
        {
          "occupation_code": "4418",
          "occ_name": "Taxidermist"
        },
        {
          "occupation_code": "4419",
          "occ_name": "Taxonomist"
        },
        {
          "occupation_code": "4420",
          "occ_name": "Teacher Classroom"
        },
        {
          "occupation_code": "4421",
          "occ_name": "Teacher Drama"
        },
        {
          "occupation_code": "4422",
          "occ_name": "Teacher Governing Body"
        },
        {
          "occupation_code": "4423",
          "occ_name": "Teacher Head"
        },
        {
          "occupation_code": "4424",
          "occ_name": "Teacher Nursery School"
        },
        {
          "occupation_code": "4425",
          "occ_name": "Teacher Private School"
        },
        {
          "occupation_code": "4426",
          "occ_name": "Teacher School"
        },
        {
          "occupation_code": "4427",
          "occ_name": "Teacher Singing"
        },
        {
          "occupation_code": "4428",
          "occ_name": "Teacher State Employed"
        },
        {
          "occupation_code": "4429",
          "occ_name": "Teacher Technical"
        },
        {
          "occupation_code": "4430",
          "occ_name": "Teacher Vocation School"
        },
        {
          "occupation_code": "4431",
          "occ_name": "Team Lead"
        },
        {
          "occupation_code": "4432",
          "occ_name": "Technical Account Manager"
        },
        {
          "occupation_code": "4433",
          "occ_name": "Technical Advisor"
        },
        {
          "occupation_code": "4434",
          "occ_name": "Technical Analyst"
        },
        {
          "occupation_code": "4435",
          "occ_name": "Technical Application Specialist"
        },
        {
          "occupation_code": "4436",
          "occ_name": "Technical Business Administrator"
        },
        {
          "occupation_code": "4437",
          "occ_name": "Technical Business Analyst"
        },
        {
          "occupation_code": "4438",
          "occ_name": "Technical Director Film TV Theatre Radio"
        },
        {
          "occupation_code": "4439",
          "occ_name": "Technical Employee"
        },
        {
          "occupation_code": "4440",
          "occ_name": "Technical Expert"
        },
        {
          "occupation_code": "4441",
          "occ_name": "Technical Manager"
        },
        {
          "occupation_code": "4442",
          "occ_name": "Technical Marketing Engineer"
        },
        {
          "occupation_code": "4443",
          "occ_name": "Technical Officer"
        },
        {
          "occupation_code": "4444",
          "occ_name": "Technical Project Manager"
        },
        {
          "occupation_code": "4445",
          "occ_name": "Technical Specialist"
        },
        {
          "occupation_code": "4446",
          "occ_name": "Technician Central Heating"
        },
        {
          "occupation_code": "4447",
          "occ_name": "Technician Chief Lighting"
        },
        {
          "occupation_code": "4448",
          "occ_name": "Technician Dental"
        },
        {
          "occupation_code": "4449",
          "occ_name": "Technician Dye"
        },
        {
          "occupation_code": "4450",
          "occ_name": "Technician Electrical Engineering"
        },
        {
          "occupation_code": "4451",
          "occ_name": "Technician Food processing"
        },
        {
          "occupation_code": "4452",
          "occ_name": "Technician Forensic"
        },
        {
          "occupation_code": "4453",
          "occ_name": "Technician Lighting"
        },
        {
          "occupation_code": "4454",
          "occ_name": "Technician Maintenance"
        },
        {
          "occupation_code": "4455",
          "occ_name": "Technician Optician"
        },
        {
          "occupation_code": "4456",
          "occ_name": "Technician Petroleum"
        },
        {
          "occupation_code": "4457",
          "occ_name": "Technician Piano"
        },
        {
          "occupation_code": "4458",
          "occ_name": "Technician Radiology"
        },
        {
          "occupation_code": "4459",
          "occ_name": "Technician Security System"
        },
        {
          "occupation_code": "4460",
          "occ_name": "Technician Textile"
        },
        {
          "occupation_code": "4461",
          "occ_name": "Technician Vehicle Maintenance"
        },
        {
          "occupation_code": "4462",
          "occ_name": "Technician X Ray"
        },
        {
          "occupation_code": "4463",
          "occ_name": "Technologist"
        },
        {
          "occupation_code": "4464",
          "occ_name": "Technologist Dairy"
        },
        {
          "occupation_code": "4465",
          "occ_name": "Technologist Food"
        },
        {
          "occupation_code": "4466",
          "occ_name": "Technologist Glass"
        },
        {
          "occupation_code": "4467",
          "occ_name": "Technologist Polymer"
        },
        {
          "occupation_code": "4468",
          "occ_name": "Technologist Textile"
        },
        {
          "occupation_code": "4469",
          "occ_name": "Technology Consultant"
        },
        {
          "occupation_code": "4470",
          "occ_name": "Technology Design Specialist"
        },
        {
          "occupation_code": "4471",
          "occ_name": "Technology Manager"
        },
        {
          "occupation_code": "4472",
          "occ_name": "Telecommunication Engineer"
        },
        {
          "occupation_code": "4473",
          "occ_name": "Telecommunication Linesman Ground Work or Overhead"
        },
        {
          "occupation_code": "4474",
          "occ_name": "Telecommunication Technician"
        },
        {
          "occupation_code": "4475",
          "occ_name": "Telemarketer"
        },
        {
          "occupation_code": "4476",
          "occ_name": "Telematics Technician"
        },
        {
          "occupation_code": "4477",
          "occ_name": "Telephone Installer"
        },
        {
          "occupation_code": "4478",
          "occ_name": "Telephone Operator"
        },
        {
          "occupation_code": "4479",
          "occ_name": "Telephone Repairer"
        },
        {
          "occupation_code": "4480",
          "occ_name": "Telephone Technician"
        },
        {
          "occupation_code": "4481",
          "occ_name": "Telephonist"
        },
        {
          "occupation_code": "4482",
          "occ_name": "Telesales Agent"
        },
        {
          "occupation_code": "4483",
          "occ_name": "Telesales Agent External"
        },
        {
          "occupation_code": "4484",
          "occ_name": "Telesales Manager"
        },
        {
          "occupation_code": "4485",
          "occ_name": "Telesales Manager External"
        },
        {
          "occupation_code": "4486",
          "occ_name": "Television and Radio Repairs"
        },
        {
          "occupation_code": "4487",
          "occ_name": "Television Presenter"
        },
        {
          "occupation_code": "4488",
          "occ_name": "Temperer"
        },
        {
          "occupation_code": "4489",
          "occ_name": "Temporary Show Business Worker"
        },
        {
          "occupation_code": "4490",
          "occ_name": "Tender Winding Machine"
        },
        {
          "occupation_code": "4491",
          "occ_name": "Tennis Instructor"
        },
        {
          "occupation_code": "4492",
          "occ_name": "Terrazzo Worker"
        },
        {
          "occupation_code": "4493",
          "occ_name": "Tertiary Placement Counselor"
        },
        {
          "occupation_code": "4494",
          "occ_name": "Test Dresser Oil Rig"
        },
        {
          "occupation_code": "4495",
          "occ_name": "Test Pilot"
        },
        {
          "occupation_code": "4496",
          "occ_name": "Tester"
        },
        {
          "occupation_code": "4497",
          "occ_name": "Tester Cylinder"
        },
        {
          "occupation_code": "4498",
          "occ_name": "Tester Electrical"
        },
        {
          "occupation_code": "4499",
          "occ_name": "Text Processor"
        },
        {
          "occupation_code": "4500",
          "occ_name": "Textile Chemist"
        },
        {
          "occupation_code": "4501",
          "occ_name": "Textile Cleaner"
        },
        {
          "occupation_code": "4502",
          "occ_name": "Textile Colourist"
        },
        {
          "occupation_code": "4503",
          "occ_name": "Textile Engineer"
        },
        {
          "occupation_code": "4504",
          "occ_name": "Textile Finisher"
        },
        {
          "occupation_code": "4505",
          "occ_name": "Textile Machine Operator"
        },
        {
          "occupation_code": "4506",
          "occ_name": "Textile Operator"
        },
        {
          "occupation_code": "4507",
          "occ_name": "Textile Weaver"
        },
        {
          "occupation_code": "4508",
          "occ_name": "Textiles Clothing and Footwear Pattern Maker"
        },
        {
          "occupation_code": "4509",
          "occ_name": "Thatcher"
        },
        {
          "occupation_code": "4510",
          "occ_name": "Theatre Attendant"
        },
        {
          "occupation_code": "4511",
          "occ_name": "Theatre Director"
        },
        {
          "occupation_code": "4512",
          "occ_name": "Theatre Mechanist"
        },
        {
          "occupation_code": "4513",
          "occ_name": "Theatre Nurse"
        },
        {
          "occupation_code": "4514",
          "occ_name": "Theatre Producer"
        },
        {
          "occupation_code": "4515",
          "occ_name": "Theologian"
        },
        {
          "occupation_code": "4516",
          "occ_name": "Theologist"
        },
        {
          "occupation_code": "4517",
          "occ_name": "Therapist Dental"
        },
        {
          "occupation_code": "4518",
          "occ_name": "Therapist Massage Working from Organizations i.e. Sport Clubs"
        },
        {
          "occupation_code": "4519",
          "occ_name": "Therapist Recreational"
        },
        {
          "occupation_code": "4520",
          "occ_name": "Therapist Rehabilitation"
        },
        {
          "occupation_code": "4521",
          "occ_name": "Therapist Respiratory"
        },
        {
          "occupation_code": "4522",
          "occ_name": "Therapist Speech"
        },
        {
          "occupation_code": "4523",
          "occ_name": "Thermodynamist"
        },
        {
          "occupation_code": "4524",
          "occ_name": "Ticket Agent"
        },
        {
          "occupation_code": "4525",
          "occ_name": "Ticket Inspector"
        },
        {
          "occupation_code": "4526",
          "occ_name": "Tightrope Artist"
        },
        {
          "occupation_code": "4527",
          "occ_name": "Tightrope Walker"
        },
        {
          "occupation_code": "4528",
          "occ_name": "Tile Installer"
        },
        {
          "occupation_code": "4529",
          "occ_name": "Tile Layer"
        },
        {
          "occupation_code": "4530",
          "occ_name": "Tiled Stove and Air Heating Builder"
        },
        {
          "occupation_code": "4531",
          "occ_name": "Tiler Floor"
        },
        {
          "occupation_code": "4532",
          "occ_name": "Timber Contractor"
        },
        {
          "occupation_code": "4533",
          "occ_name": "Timber Engineer"
        },
        {
          "occupation_code": "4534",
          "occ_name": "Timber Equipment Operator"
        },
        {
          "occupation_code": "4535",
          "occ_name": "Timber Rafter"
        },
        {
          "occupation_code": "4536",
          "occ_name": "Timberman"
        },
        {
          "occupation_code": "4537",
          "occ_name": "Time Motion Study Officer"
        },
        {
          "occupation_code": "4538",
          "occ_name": "Time Study Expert"
        },
        {
          "occupation_code": "4539",
          "occ_name": "Timekeeper"
        },
        {
          "occupation_code": "4540",
          "occ_name": "Timepiece Repairer"
        },
        {
          "occupation_code": "4541",
          "occ_name": "Tinsmith"
        },
        {
          "occupation_code": "4542",
          "occ_name": "Tobacconist"
        },
        {
          "occupation_code": "4543",
          "occ_name": "Tool and Die Maker"
        },
        {
          "occupation_code": "4544",
          "occ_name": "Tool Dresser Oil Rig"
        },
        {
          "occupation_code": "4545",
          "occ_name": "Tool maker"
        },
        {
          "occupation_code": "4546",
          "occ_name": "Tool Pusher Mining"
        },
        {
          "occupation_code": "4547",
          "occ_name": "Toolpusher Oil Rig"
        },
        {
          "occupation_code": "4548",
          "occ_name": "Topman Oil Rig"
        },
        {
          "occupation_code": "4549",
          "occ_name": "Topographic Surveyor"
        },
        {
          "occupation_code": "4550",
          "occ_name": "Touring Manager Entertainment"
        },
        {
          "occupation_code": "4551",
          "occ_name": "Tourist Agent"
        },
        {
          "occupation_code": "4552",
          "occ_name": "Tow Truck Driver"
        },
        {
          "occupation_code": "4553",
          "occ_name": "Town and Regional Planner"
        },
        {
          "occupation_code": "4554",
          "occ_name": "Town Secretary"
        },
        {
          "occupation_code": "4555",
          "occ_name": "Town Treasurer"
        },
        {
          "occupation_code": "4556",
          "occ_name": "Toxicologist"
        },
        {
          "occupation_code": "4557",
          "occ_name": "Track Inspector"
        },
        {
          "occupation_code": "4558",
          "occ_name": "Tractor Driver"
        },
        {
          "occupation_code": "4559",
          "occ_name": "Trade Officer"
        },
        {
          "occupation_code": "4560",
          "occ_name": "Trade Representative"
        },
        {
          "occupation_code": "4561",
          "occ_name": "Trademark Agent"
        },
        {
          "occupation_code": "4562",
          "occ_name": "Trader Market stock"
        },
        {
          "occupation_code": "4563",
          "occ_name": "Trader Stock Market"
        },
        {
          "occupation_code": "4564",
          "occ_name": "Trading Operator"
        },
        {
          "occupation_code": "4565",
          "occ_name": "Traditional Healer"
        },
        {
          "occupation_code": "4566",
          "occ_name": "Traditional Leader"
        },
        {
          "occupation_code": "4567",
          "occ_name": "Traffic Officer"
        },
        {
          "occupation_code": "4568",
          "occ_name": "Train Attendant"
        },
        {
          "occupation_code": "4569",
          "occ_name": "Train Conductor"
        },
        {
          "occupation_code": "4570",
          "occ_name": "Train Crew Supervisor"
        },
        {
          "occupation_code": "4571",
          "occ_name": "Train Driver"
        },
        {
          "occupation_code": "4572",
          "occ_name": "Train Driver Assistant"
        },
        {
          "occupation_code": "4573",
          "occ_name": "Train Signal Engineer"
        },
        {
          "occupation_code": "4574",
          "occ_name": "Trainee Accountant"
        },
        {
          "occupation_code": "4575",
          "occ_name": "Trainee Pilot"
        },
        {
          "occupation_code": "4576",
          "occ_name": "Trainer"
        },
        {
          "occupation_code": "4577",
          "occ_name": "Trainer Office Environment"
        },
        {
          "occupation_code": "4578",
          "occ_name": "Trainer Personal"
        },
        {
          "occupation_code": "4579",
          "occ_name": "Trainer Underground"
        },
        {
          "occupation_code": "4580",
          "occ_name": "Training Advisor"
        },
        {
          "occupation_code": "4581",
          "occ_name": "Training And Development Manager"
        },
        {
          "occupation_code": "4582",
          "occ_name": "Training Consultant"
        },
        {
          "occupation_code": "4583",
          "occ_name": "Training Coordinator"
        },
        {
          "occupation_code": "4584",
          "occ_name": "Training Facilitator for Adults"
        },
        {
          "occupation_code": "4585",
          "occ_name": "Training Manager"
        },
        {
          "occupation_code": "4586",
          "occ_name": "Training Officer"
        },
        {
          "occupation_code": "4587",
          "occ_name": "Tram Driver"
        },
        {
          "occupation_code": "4588",
          "occ_name": "Tram Signal Engineer"
        },
        {
          "occupation_code": "4589",
          "occ_name": "Transcriber"
        },
        {
          "occupation_code": "4590",
          "occ_name": "Translator"
        },
        {
          "occupation_code": "4591",
          "occ_name": "Transplanter"
        },
        {
          "occupation_code": "4592",
          "occ_name": "Transport Administrator"
        },
        {
          "occupation_code": "4593",
          "occ_name": "Transport Broker"
        },
        {
          "occupation_code": "4594",
          "occ_name": "Transport Clerk"
        },
        {
          "occupation_code": "4595",
          "occ_name": "Transport Consultant"
        },
        {
          "occupation_code": "4596",
          "occ_name": "Transport Contractor"
        },
        {
          "occupation_code": "4597",
          "occ_name": "Transport Coordinator"
        },
        {
          "occupation_code": "4598",
          "occ_name": "Transport Economist"
        },
        {
          "occupation_code": "4599",
          "occ_name": "Transport Entrepreneur"
        },
        {
          "occupation_code": "4600",
          "occ_name": "Transport Management Analyst"
        },
        {
          "occupation_code": "4601",
          "occ_name": "Transport Manager"
        },
        {
          "occupation_code": "4602",
          "occ_name": "Transport Planner"
        },
        {
          "occupation_code": "4603",
          "occ_name": "Transport Porter"
        },
        {
          "occupation_code": "4604",
          "occ_name": "Trapeze Artist"
        },
        {
          "occupation_code": "4605",
          "occ_name": "Trapper"
        },
        {
          "occupation_code": "4606",
          "occ_name": "Trauma Counsellor"
        },
        {
          "occupation_code": "4607",
          "occ_name": "Travel Agent External"
        },
        {
          "occupation_code": "4608",
          "occ_name": "Travel Agent Manager"
        },
        {
          "occupation_code": "4609",
          "occ_name": "Travel Consultant"
        },
        {
          "occupation_code": "4610",
          "occ_name": "Travel Organizer"
        },
        {
          "occupation_code": "4611",
          "occ_name": "Travelling Salesperson"
        },
        {
          "occupation_code": "4612",
          "occ_name": "Trawler Crew"
        },
        {
          "occupation_code": "4613",
          "occ_name": "Trawlerman"
        },
        {
          "occupation_code": "4614",
          "occ_name": "Trawlermen"
        },
        {
          "occupation_code": "4615",
          "occ_name": "Trawlers"
        },
        {
          "occupation_code": "4616",
          "occ_name": "Treasurer"
        },
        {
          "occupation_code": "4617",
          "occ_name": "Treasury Administrator"
        },
        {
          "occupation_code": "4618",
          "occ_name": "Treasury Dealer"
        },
        {
          "occupation_code": "4619",
          "occ_name": "Treater Gas"
        },
        {
          "occupation_code": "4620",
          "occ_name": "Tree Feller"
        },
        {
          "occupation_code": "4621",
          "occ_name": "Tree Lopper"
        },
        {
          "occupation_code": "4622",
          "occ_name": "Trichologist"
        },
        {
          "occupation_code": "4623",
          "occ_name": "Trimmer"
        },
        {
          "occupation_code": "4624",
          "occ_name": "Trollers"
        },
        {
          "occupation_code": "4625",
          "occ_name": "Trolley Car Driver"
        },
        {
          "occupation_code": "4626",
          "occ_name": "Trolley Car Signal Engineer"
        },
        {
          "occupation_code": "4627",
          "occ_name": "Trolley Retriever"
        },
        {
          "occupation_code": "4628",
          "occ_name": "Trowel Worker"
        },
        {
          "occupation_code": "4629",
          "occ_name": "Truck Driver Oil Rig"
        },
        {
          "occupation_code": "4630",
          "occ_name": "Truck Driver Quarry"
        },
        {
          "occupation_code": "4631",
          "occ_name": "Truck Electrician"
        },
        {
          "occupation_code": "4632",
          "occ_name": "Trust Administrator"
        },
        {
          "occupation_code": "4633",
          "occ_name": "Trust And Estate Practitioner"
        },
        {
          "occupation_code": "4634",
          "occ_name": "Trust Fund Manager"
        },
        {
          "occupation_code": "4635",
          "occ_name": "Tufting Mechanic"
        },
        {
          "occupation_code": "4636",
          "occ_name": "Tuk Tuk Driver"
        },
        {
          "occupation_code": "4637",
          "occ_name": "Tuner Piano"
        },
        {
          "occupation_code": "4638",
          "occ_name": "Tunnel Maintenance Worker"
        },
        {
          "occupation_code": "4639",
          "occ_name": "Tunneler"
        },
        {
          "occupation_code": "4640",
          "occ_name": "Turner"
        },
        {
          "occupation_code": "4641",
          "occ_name": "Tutor"
        },
        {
          "occupation_code": "4642",
          "occ_name": "TV Announcer"
        },
        {
          "occupation_code": "4643",
          "occ_name": "TV Director"
        },
        {
          "occupation_code": "4644",
          "occ_name": "TV Producer"
        },
        {
          "occupation_code": "4645",
          "occ_name": "Tympanist"
        },
        {
          "occupation_code": "4646",
          "occ_name": "Typesetter"
        },
        {
          "occupation_code": "4647",
          "occ_name": "Typist"
        },
        {
          "occupation_code": "4648",
          "occ_name": "Tyre Fitter"
        },
        {
          "occupation_code": "4649",
          "occ_name": "Tyre Repair Specialist"
        },
        {
          "occupation_code": "4650",
          "occ_name": "Uber Driver"
        },
        {
          "occupation_code": "4651",
          "occ_name": "UIF Consultant"
        },
        {
          "occupation_code": "4652",
          "occ_name": "Ultrasonographer"
        },
        {
          "occupation_code": "4653",
          "occ_name": "Underground Blaster"
        },
        {
          "occupation_code": "4654",
          "occ_name": "Underground Train Driver"
        },
        {
          "occupation_code": "4655",
          "occ_name": "Underground Ventilation Operator"
        },
        {
          "occupation_code": "4656",
          "occ_name": "Undersea Cable Technician"
        },
        {
          "occupation_code": "4657",
          "occ_name": "Undertaker"
        },
        {
          "occupation_code": "4658",
          "occ_name": "Underwater Cable Laying"
        },
        {
          "occupation_code": "4659",
          "occ_name": "Underwater Linesman"
        },
        {
          "occupation_code": "4660",
          "occ_name": "Underwater Pipe Installer"
        },
        {
          "occupation_code": "4661",
          "occ_name": "Underwater Vehicle Worker"
        },
        {
          "occupation_code": "4662",
          "occ_name": "Underwriter"
        },
        {
          "occupation_code": "4663",
          "occ_name": "Underwriting Manager"
        },
        {
          "occupation_code": "4664",
          "occ_name": "Unemployed"
        },
        {
          "occupation_code": "4665",
          "occ_name": "University Administrator"
        },
        {
          "occupation_code": "4666",
          "occ_name": "University Docent"
        },
        {
          "occupation_code": "4667",
          "occ_name": "University Professor"
        },
        {
          "occupation_code": "4668",
          "occ_name": "University Student"
        },
        {
          "occupation_code": "4669",
          "occ_name": "Unskilled Manual Worker"
        },
        {
          "occupation_code": "4670",
          "occ_name": "Upholsterer"
        },
        {
          "occupation_code": "4671",
          "occ_name": "Upholsterer Furniture"
        },
        {
          "occupation_code": "4672",
          "occ_name": "Upholsterer Marine"
        },
        {
          "occupation_code": "4673",
          "occ_name": "Upholstery Craftsman"
        },
        {
          "occupation_code": "4674",
          "occ_name": "Upholstery Technician"
        },
        {
          "occupation_code": "4675",
          "occ_name": "Urinary Specialist"
        },
        {
          "occupation_code": "4676",
          "occ_name": "Urogynaecologist"
        },
        {
          "occupation_code": "4677",
          "occ_name": "Urological Surgeon"
        },
        {
          "occupation_code": "4678",
          "occ_name": "Urologist"
        },
        {
          "occupation_code": "4679",
          "occ_name": "Validation Officer"
        },
        {
          "occupation_code": "4680",
          "occ_name": "Valuation Expert"
        },
        {
          "occupation_code": "4681",
          "occ_name": "Valuation Officer"
        },
        {
          "occupation_code": "4682",
          "occ_name": "Valuator"
        },
        {
          "occupation_code": "4683",
          "occ_name": "Value Analyst"
        },
        {
          "occupation_code": "4684",
          "occ_name": "Valuer"
        },
        {
          "occupation_code": "4685",
          "occ_name": "Valuer Property"
        },
        {
          "occupation_code": "4686",
          "occ_name": "Valve Technician"
        },
        {
          "occupation_code": "4687",
          "occ_name": "Valveman Gas"
        },
        {
          "occupation_code": "4688",
          "occ_name": "Valveman Oil Rig"
        },
        {
          "occupation_code": "4689",
          "occ_name": "Valveman Quarry"
        },
        {
          "occupation_code": "4690",
          "occ_name": "Varnisher"
        },
        {
          "occupation_code": "4691",
          "occ_name": "VAT Inspector"
        },
        {
          "occupation_code": "4692",
          "occ_name": "VAT Officer"
        },
        {
          "occupation_code": "4693",
          "occ_name": "Vegetable Farmer"
        },
        {
          "occupation_code": "4694",
          "occ_name": "Vehicle Interior Specialist"
        },
        {
          "occupation_code": "4695",
          "occ_name": "Vehicle Rental Worker"
        },
        {
          "occupation_code": "4696",
          "occ_name": "Vehicle Saddler"
        },
        {
          "occupation_code": "4697",
          "occ_name": "Vehicle Salvage Operator"
        },
        {
          "occupation_code": "4698",
          "occ_name": "Vehicle Upholsterer"
        },
        {
          "occupation_code": "4699",
          "occ_name": "Venepuncturist"
        },
        {
          "occupation_code": "4700",
          "occ_name": "Venereologist"
        },
        {
          "occupation_code": "4701",
          "occ_name": "Ventilation Builder"
        },
        {
          "occupation_code": "4702",
          "occ_name": "Ventilation Installer"
        },
        {
          "occupation_code": "4703",
          "occ_name": "Ventilation Officer"
        },
        {
          "occupation_code": "4704",
          "occ_name": "Ventilation System Technician"
        },
        {
          "occupation_code": "4705",
          "occ_name": "Ventriloquist"
        },
        {
          "occupation_code": "4706",
          "occ_name": "Vet"
        },
        {
          "occupation_code": "4707",
          "occ_name": "Vet Nurse"
        },
        {
          "occupation_code": "4708",
          "occ_name": "Veterinarian"
        },
        {
          "occupation_code": "4709",
          "occ_name": "Veterinarian Large Animals"
        },
        {
          "occupation_code": "4710",
          "occ_name": "Veterinarian Small Animals"
        },
        {
          "occupation_code": "4711",
          "occ_name": "Veterinary Advisor"
        },
        {
          "occupation_code": "4712",
          "occ_name": "Veterinary Opthalmologist"
        },
        {
          "occupation_code": "4713",
          "occ_name": "Veterinary Researcher"
        },
        {
          "occupation_code": "4714",
          "occ_name": "Veterinary Surgeon"
        },
        {
          "occupation_code": "4715",
          "occ_name": "Veterinary Technician"
        },
        {
          "occupation_code": "4716",
          "occ_name": "Vicar"
        },
        {
          "occupation_code": "4717",
          "occ_name": "Vice Chancellor Education"
        },
        {
          "occupation_code": "4718",
          "occ_name": "Vice President"
        },
        {
          "occupation_code": "4719",
          "occ_name": "Vice President Marketing And Sales"
        },
        {
          "occupation_code": "4720",
          "occ_name": "Video Editor"
        },
        {
          "occupation_code": "4721",
          "occ_name": "Video Mixer"
        },
        {
          "occupation_code": "4722",
          "occ_name": "Video Producer"
        },
        {
          "occupation_code": "4723",
          "occ_name": "Video Rental Store Manager"
        },
        {
          "occupation_code": "4724",
          "occ_name": "Video Shop Manager"
        },
        {
          "occupation_code": "4725",
          "occ_name": "Video Store Manager"
        },
        {
          "occupation_code": "4726",
          "occ_name": "Videographer"
        },
        {
          "occupation_code": "4727",
          "occ_name": "Vineyard Advisor"
        },
        {
          "occupation_code": "4728",
          "occ_name": "Vineyard Hand"
        },
        {
          "occupation_code": "4729",
          "occ_name": "Vineyard Labourer"
        },
        {
          "occupation_code": "4730",
          "occ_name": "Vineyard Worker"
        },
        {
          "occupation_code": "4731",
          "occ_name": "Vintner"
        },
        {
          "occupation_code": "4732",
          "occ_name": "Vinyl Floor Installer"
        },
        {
          "occupation_code": "4733",
          "occ_name": "Vinyl Flooring Specialist"
        },
        {
          "occupation_code": "4734",
          "occ_name": "Violinist"
        },
        {
          "occupation_code": "4735",
          "occ_name": "Virologist"
        },
        {
          "occupation_code": "4736",
          "occ_name": "Vision Mixer"
        },
        {
          "occupation_code": "4737",
          "occ_name": "Visual Artist"
        },
        {
          "occupation_code": "4738",
          "occ_name": "Visual Communicator"
        },
        {
          "occupation_code": "4739",
          "occ_name": "Vocal Performer"
        },
        {
          "occupation_code": "4740",
          "occ_name": "Vocalist"
        },
        {
          "occupation_code": "4741",
          "occ_name": "Vocational Counsellor"
        },
        {
          "occupation_code": "4742",
          "occ_name": "Vocational Instructor"
        },
        {
          "occupation_code": "4743",
          "occ_name": "Vocational Officer"
        },
        {
          "occupation_code": "4744",
          "occ_name": "Vocational Trainer"
        },
        {
          "occupation_code": "4745",
          "occ_name": "Voice Actor"
        },
        {
          "occupation_code": "4746",
          "occ_name": "Voice Performer"
        },
        {
          "occupation_code": "4747",
          "occ_name": "Voice Talent"
        },
        {
          "occupation_code": "4748",
          "occ_name": "Voice Thrower"
        },
        {
          "occupation_code": "4749",
          "occ_name": "Vulcanizer"
        },
        {
          "occupation_code": "4750",
          "occ_name": "Wages Clerk"
        },
        {
          "occupation_code": "4751",
          "occ_name": "Wages Controller"
        },
        {
          "occupation_code": "4752",
          "occ_name": "Wages Inspector"
        },
        {
          "occupation_code": "4753",
          "occ_name": "Wages Officer"
        },
        {
          "occupation_code": "4754",
          "occ_name": "Wages Supervisor"
        },
        {
          "occupation_code": "4755",
          "occ_name": "Wagon Maker"
        },
        {
          "occupation_code": "4756",
          "occ_name": "Waiter"
        },
        {
          "occupation_code": "4757",
          "occ_name": "Waitstaff"
        },
        {
          "occupation_code": "4758",
          "occ_name": "Wall and Floor Tiler"
        },
        {
          "occupation_code": "4759",
          "occ_name": "Wall Decorator"
        },
        {
          "occupation_code": "4760",
          "occ_name": "Wallcovering Installer"
        },
        {
          "occupation_code": "4761",
          "occ_name": "WAN Engineer"
        },
        {
          "occupation_code": "4762",
          "occ_name": "Ward Counsellor"
        },
        {
          "occupation_code": "4763",
          "occ_name": "Ward Secretary"
        },
        {
          "occupation_code": "4764",
          "occ_name": "Warden Fishing"
        },
        {
          "occupation_code": "4765",
          "occ_name": "Warden Forestry"
        },
        {
          "occupation_code": "4766",
          "occ_name": "Warden Game"
        },
        {
          "occupation_code": "4767",
          "occ_name": "Warden Traffic"
        },
        {
          "occupation_code": "4768",
          "occ_name": "Wardrobe Assistant"
        },
        {
          "occupation_code": "4769",
          "occ_name": "Wardrobe Stylist"
        },
        {
          "occupation_code": "4770",
          "occ_name": "Wardsman"
        },
        {
          "occupation_code": "4771",
          "occ_name": "Warehouse Assistant"
        },
        {
          "occupation_code": "4772",
          "occ_name": "Warehouse Clerk"
        },
        {
          "occupation_code": "4773",
          "occ_name": "Warehouse Manager"
        },
        {
          "occupation_code": "4774",
          "occ_name": "Warehouse Team Lead"
        },
        {
          "occupation_code": "4775",
          "occ_name": "Warehouseperson"
        },
        {
          "occupation_code": "4776",
          "occ_name": "Wash Plant Attendant Mining"
        },
        {
          "occupation_code": "4777",
          "occ_name": "Washer Pet"
        },
        {
          "occupation_code": "4778",
          "occ_name": "Waste Disposal Worker"
        },
        {
          "occupation_code": "4779",
          "occ_name": "Watchmaker"
        },
        {
          "occupation_code": "4780",
          "occ_name": "Watchman"
        },
        {
          "occupation_code": "4781",
          "occ_name": "Watchstander Oil rig"
        },
        {
          "occupation_code": "4782",
          "occ_name": "Water Infusion Man Mining"
        },
        {
          "occupation_code": "4783",
          "occ_name": "Water Injection Technician"
        },
        {
          "occupation_code": "4784",
          "occ_name": "Watermen"
        },
        {
          "occupation_code": "4785",
          "occ_name": "Waterside Worker"
        },
        {
          "occupation_code": "4786",
          "occ_name": "Waterside Worker Shipping Industry"
        },
        {
          "occupation_code": "4787",
          "occ_name": "Wealth Manager"
        },
        {
          "occupation_code": "4788",
          "occ_name": "Weapon Salesman"
        },
        {
          "occupation_code": "4789",
          "occ_name": "Weapons Inspector"
        },
        {
          "occupation_code": "4790",
          "occ_name": "Weather Modificatiom Pilot"
        },
        {
          "occupation_code": "4791",
          "occ_name": "Weather Reporter Pilot"
        },
        {
          "occupation_code": "4792",
          "occ_name": "Weatherman"
        },
        {
          "occupation_code": "4793",
          "occ_name": "Weaving Machine Operator"
        },
        {
          "occupation_code": "4794",
          "occ_name": "Web Designer"
        },
        {
          "occupation_code": "4795",
          "occ_name": "Web Developer"
        },
        {
          "occupation_code": "4796",
          "occ_name": "Webmaster"
        },
        {
          "occupation_code": "4797",
          "occ_name": "Website Administrator"
        },
        {
          "occupation_code": "4798",
          "occ_name": "Wedding Planner"
        },
        {
          "occupation_code": "4799",
          "occ_name": "Weighbridge Clerk"
        },
        {
          "occupation_code": "4800",
          "occ_name": "Weighbridge Operator"
        },
        {
          "occupation_code": "4801",
          "occ_name": "Weights and Measures Inspector"
        },
        {
          "occupation_code": "4802",
          "occ_name": "Welder Oil Rig"
        },
        {
          "occupation_code": "4803",
          "occ_name": "Welding Specialist"
        },
        {
          "occupation_code": "4804",
          "occ_name": "Well Logger Oil Rig"
        },
        {
          "occupation_code": "4805",
          "occ_name": "Well Logging Engineer"
        },
        {
          "occupation_code": "4806",
          "occ_name": "Well Production Operator"
        },
        {
          "occupation_code": "4807",
          "occ_name": "Well Pusher Oil Rig"
        },
        {
          "occupation_code": "4808",
          "occ_name": "Well Tester Oil Rig"
        },
        {
          "occupation_code": "4809",
          "occ_name": "Wellness Conlsultant"
        },
        {
          "occupation_code": "4810",
          "occ_name": "Wellness Manager"
        },
        {
          "occupation_code": "4811",
          "occ_name": "Wellness Officer"
        },
        {
          "occupation_code": "4812",
          "occ_name": "Wharf Labourer"
        },
        {
          "occupation_code": "4813",
          "occ_name": "Wharf Manager"
        },
        {
          "occupation_code": "4814",
          "occ_name": "Wheel Maker"
        },
        {
          "occupation_code": "4815",
          "occ_name": "Wheelwright"
        },
        {
          "occupation_code": "4816",
          "occ_name": "Wholesale Salesperson"
        },
        {
          "occupation_code": "4817",
          "occ_name": "Wild Animal Trainer"
        },
        {
          "occupation_code": "4818",
          "occ_name": "Wildlife Biologist"
        },
        {
          "occupation_code": "4819",
          "occ_name": "Wildlife Custodian Zoo"
        },
        {
          "occupation_code": "4820",
          "occ_name": "Wildlife Interpreter Zoo"
        },
        {
          "occupation_code": "4821",
          "occ_name": "Wildlife Manager Zoo"
        },
        {
          "occupation_code": "4822",
          "occ_name": "Wildlife Park Director"
        },
        {
          "occupation_code": "4823",
          "occ_name": "Wildlife Rescue Worker"
        },
        {
          "occupation_code": "4824",
          "occ_name": "Wildlife Trader Zoo"
        },
        {
          "occupation_code": "4825",
          "occ_name": "Wills Drafter"
        },
        {
          "occupation_code": "4826",
          "occ_name": "Winch Driver"
        },
        {
          "occupation_code": "4827",
          "occ_name": "Winchman"
        },
        {
          "occupation_code": "4828",
          "occ_name": "Winder Operator"
        },
        {
          "occupation_code": "4829",
          "occ_name": "Window Blinds And Shutters Technician"
        },
        {
          "occupation_code": "4830",
          "occ_name": "Window Blinds Maker"
        },
        {
          "occupation_code": "4831",
          "occ_name": "Window Cleaner"
        },
        {
          "occupation_code": "4832",
          "occ_name": "Window Dresser"
        },
        {
          "occupation_code": "4833",
          "occ_name": "Window fitter"
        },
        {
          "occupation_code": "4834",
          "occ_name": "Window Installer"
        },
        {
          "occupation_code": "4835",
          "occ_name": "Window Technician"
        },
        {
          "occupation_code": "4836",
          "occ_name": "Window Treatment Specialist"
        },
        {
          "occupation_code": "4837",
          "occ_name": "Wine Consultant"
        },
        {
          "occupation_code": "4838",
          "occ_name": "Wine Expert"
        },
        {
          "occupation_code": "4839",
          "occ_name": "Wine Maker"
        },
        {
          "occupation_code": "4840",
          "occ_name": "Wine Master"
        },
        {
          "occupation_code": "4841",
          "occ_name": "Wine Merchant"
        },
        {
          "occupation_code": "4842",
          "occ_name": "Wine Producer"
        },
        {
          "occupation_code": "4843",
          "occ_name": "Wine Production Specialist"
        },
        {
          "occupation_code": "4844",
          "occ_name": "Wine Retailer"
        },
        {
          "occupation_code": "4845",
          "occ_name": "Wine Seller"
        },
        {
          "occupation_code": "4846",
          "occ_name": "Wine Steward"
        },
        {
          "occupation_code": "4847",
          "occ_name": "Wine Taster"
        },
        {
          "occupation_code": "4848",
          "occ_name": "Winemaker"
        },
        {
          "occupation_code": "4849",
          "occ_name": "Wireline Engineer"
        },
        {
          "occupation_code": "4850",
          "occ_name": "Wireline Operator"
        },
        {
          "occupation_code": "4851",
          "occ_name": "Wood Engineer"
        },
        {
          "occupation_code": "4852",
          "occ_name": "Wood Finisher"
        },
        {
          "occupation_code": "4853",
          "occ_name": "Wood Polisher"
        },
        {
          "occupation_code": "4854",
          "occ_name": "Wood Processing Specialist"
        },
        {
          "occupation_code": "4855",
          "occ_name": "Wood Technologist"
        },
        {
          "occupation_code": "4856",
          "occ_name": "Wood Varnisher"
        },
        {
          "occupation_code": "4857",
          "occ_name": "Woodcut Artist"
        },
        {
          "occupation_code": "4858",
          "occ_name": "Wooden Handicraft Worker Artist"
        },
        {
          "occupation_code": "4859",
          "occ_name": "Woodland Engineer"
        },
        {
          "occupation_code": "4860",
          "occ_name": "Woodland Inspector"
        },
        {
          "occupation_code": "4861",
          "occ_name": "Woodland manager"
        },
        {
          "occupation_code": "4862",
          "occ_name": "Woodland Officer"
        },
        {
          "occupation_code": "4863",
          "occ_name": "Woodland Overseer"
        },
        {
          "occupation_code": "4864",
          "occ_name": "Woodworker Machine"
        },
        {
          "occupation_code": "4865",
          "occ_name": "Wool Assessor"
        },
        {
          "occupation_code": "4866",
          "occ_name": "Wool Classer"
        },
        {
          "occupation_code": "4867",
          "occ_name": "Wool Classifier"
        },
        {
          "occupation_code": "4868",
          "occ_name": "Wool Grader"
        },
        {
          "occupation_code": "4869",
          "occ_name": "Wool Handler"
        },
        {
          "occupation_code": "4870",
          "occ_name": "Wool Inspector"
        },
        {
          "occupation_code": "4871",
          "occ_name": "Wool Merchant"
        },
        {
          "occupation_code": "4872",
          "occ_name": "Wool Processor"
        },
        {
          "occupation_code": "4873",
          "occ_name": "Wool Puller"
        },
        {
          "occupation_code": "4874",
          "occ_name": "Wool Purchaser"
        },
        {
          "occupation_code": "4875",
          "occ_name": "Wool Sorter"
        },
        {
          "occupation_code": "4876",
          "occ_name": "Wool Trader"
        },
        {
          "occupation_code": "4877",
          "occ_name": "Word Processing Operator"
        },
        {
          "occupation_code": "4878",
          "occ_name": "Work Study Analyst"
        },
        {
          "occupation_code": "4879",
          "occ_name": "Work Study Officer Factory Environment"
        },
        {
          "occupation_code": "4880",
          "occ_name": "Work Study Officer Sedentary Environment"
        },
        {
          "occupation_code": "4881",
          "occ_name": "Worker Child Care"
        },
        {
          "occupation_code": "4882",
          "occ_name": "Worker Explosives"
        },
        {
          "occupation_code": "4883",
          "occ_name": "Worker Fish farmer"
        },
        {
          "occupation_code": "4884",
          "occ_name": "Worker Foundry"
        },
        {
          "occupation_code": "4885",
          "occ_name": "Worker Hydroponics"
        },
        {
          "occupation_code": "4886",
          "occ_name": "Worker Insulation"
        },
        {
          "occupation_code": "4887",
          "occ_name": "Worker Meat"
        },
        {
          "occupation_code": "4888",
          "occ_name": "Worker Orchard"
        },
        {
          "occupation_code": "4889",
          "occ_name": "Worker Recycling Plant"
        },
        {
          "occupation_code": "4890",
          "occ_name": "Workmens Compensation Specialist"
        },
        {
          "occupation_code": "4891",
          "occ_name": "Works Manager"
        },
        {
          "occupation_code": "4892",
          "occ_name": "Workshop Manager"
        },
        {
          "occupation_code": "4893",
          "occ_name": "Wrecking and Salvage Yard Worker"
        },
        {
          "occupation_code": "4894",
          "occ_name": "Writer"
        },
        {
          "occupation_code": "4895",
          "occ_name": "Writer Employed"
        },
        {
          "occupation_code": "4896",
          "occ_name": "Writer Technical"
        },
        {
          "occupation_code": "4897",
          "occ_name": "X Ray Engineering"
        },
        {
          "occupation_code": "4898",
          "occ_name": "X Ray Technologist"
        },
        {
          "occupation_code": "4899",
          "occ_name": "Xylologist"
        },
        {
          "occupation_code": "4900",
          "occ_name": "Yacht Crew Member"
        },
        {
          "occupation_code": "4901",
          "occ_name": "Yacht Manufacturer"
        },
        {
          "occupation_code": "4902",
          "occ_name": "Yard Worker Salvage and Wrecking"
        },
        {
          "occupation_code": "4903",
          "occ_name": "Yard Worker Timber"
        },
        {
          "occupation_code": "4904",
          "occ_name": "Yoga Instructor"
        },
        {
          "occupation_code": "4905",
          "occ_name": "Yoga Trainer"
        },
        {
          "occupation_code": "4906",
          "occ_name": "Zebra Cab Driver"
        },
        {
          "occupation_code": "4907",
          "occ_name": "Zoo Administrator"
        },
        {
          "occupation_code": "4908",
          "occ_name": "Zoo Animal Caretaker"
        },
        {
          "occupation_code": "4909",
          "occ_name": "Zoo Animal Keeper"
        },
        {
          "occupation_code": "4910",
          "occ_name": "Zoo Curator"
        },
        {
          "occupation_code": "4911",
          "occ_name": "Zoo Dealer"
        },
        {
          "occupation_code": "4912",
          "occ_name": "Zoo Director"
        },
        {
          "occupation_code": "4913",
          "occ_name": "Zoo Docent"
        },
        {
          "occupation_code": "4914",
          "occ_name": "Zoo Educator"
        },
        {
          "occupation_code": "4915",
          "occ_name": "Zoo Keeper"
        },
        {
          "occupation_code": "4916",
          "occ_name": "Zoo Management"
        },
        {
          "occupation_code": "4917",
          "occ_name": "Zoo Outreach Coordinator"
        },
        {
          "occupation_code": "4918",
          "occ_name": "Zoo Researcher"
        },
        {
          "occupation_code": "4919",
          "occ_name": "Zoo Sanitation Worker"
        },
        {
          "occupation_code": "4920",
          "occ_name": "Zoo Supplier"
        },
        {
          "occupation_code": "4921",
          "occ_name": "Zoo Tour Guide"
        },
        {
          "occupation_code": "4922",
          "occ_name": "Zoologist"
        },
        {
          "occupation_code": "4923",
          "occ_name": "Zoology Technical Officer"
        },
        {
          "occupation_code": "4924",
          "occ_name": "Ombudsman"
        },
        {
          "occupation_code": "4925",
          "occ_name": "Politician"
        },
        {
          "occupation_code": "4926",
          "occ_name": "Abalone Diver"
        },
        {
          "occupation_code": "4927",
          "occ_name": "Physiotherapist"
        },
        {
          "occupation_code": "1484",
          "occ_name": "GPT Prompt Engineer"
        }
      ];

      return occupations;
    };
    return {
        sliderConfig: _sliderConfig,
        covers: covers,
      	occupations: _occupations
  };
});
