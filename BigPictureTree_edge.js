/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['asap, sans-serif']='<script src=\"http://use.edgefonts.net/asap:n7,i4,n4,i7:all.js\"></script>';
    fonts['\'Signika Negative\'']='<link href=\'http://fonts.googleapis.com/css?family=Signika+Negative:400,600,300,700\' rel=\'stylesheet\' type=\'text/css\'>';

var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "both",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'treestumpphotofortree2Copy',
                type: 'image',
                rect: ['2px', '-5px','955px','636px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"treestumpphotofortree2.jpg",'0px','0px'],
                transform: [[],[],[],['1.11695','1.11695']]
            },
            {
                id: 'whatisthetreeoflifeCopy',
                type: 'rect',
                rect: ['235px', '4375','auto','auto','auto', 'auto']
            },
            {
                id: 'whatisthetreeoflife_subtext',
                type: 'rect',
                rect: ['642px', '381px','auto','auto','auto', 'auto']
            },
            {
                id: 'PUBLIC-TREE-OF-LIFE-RESIZE-5-14',
                type: 'image',
                rect: ['0px', '0px','960px','5414px','auto', 'auto'],
                clip: ['rect(0px 960px 5414px 353px)'],
                fill: ["rgba(0,0,0,0)",im+"PUBLIC-TREE-OF-LIFE-RESIZE-5-14.png",'0px','0px']
            },
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['-20px', '-32px','952px','638px','auto', 'auto'],
                fill: ["rgba(0,0,0,1)"],
                stroke: [0,"rgb(255, 255, 255)","solid"]
            },
            {
                id: 'MAINCONTROL',
                type: 'group',
                rect: ['5px', '-5084','955','5076','auto', 'auto'],
                c: [
                {
                    id: 'LONGTREECopy',
                    type: 'image',
                    rect: ['97px', '-2034px','764px','4061px','auto', 'auto'],
                    clip: ['rect(0px 764px 4061px 0px)'],
                    fill: ["rgba(0,0,0,0)",im+"LONGTREE.png",'0px','0px'],
                    filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                },
                {
                    id: 'Lateral-Gene-transfer-LGT-linespng-02',
                    type: 'image',
                    rect: ['361px', '5711px','419px','2915px','auto', 'auto'],
                    clip: ['rect(0px 419px 2915px 0px)'],
                    fill: ["rgba(0,0,0,0)",im+"Lateral-Gene-transfer-LGT-lines.png-02.png",'0px','0px']
                },
                {
                    id: 'EarlyLifeGroup',
                    type: 'group',
                    rect: ['433px', '8403px','419','454','auto', 'auto'],
                    clip: ['rect(0px 419px 454px 0px)'],
                    c: [
                    {
                        id: 'ORIGIN-ARROWS',
                        type: 'image',
                        rect: ['26px', '0px','365px','454px','auto', 'auto'],
                        clip: ['rect(0px 365px 454px 0px)'],
                        fill: ["rgba(0,0,0,0)",im+"ORIGIN-ARROWS.png",'0px','0px']
                    }]
                },
                {
                    id: 'Rectangle4',
                    type: 'rect',
                    rect: ['933px', '9453px','27px','577px','auto', 'auto'],
                    fill: ["rgba(119,147,162,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'ERAS',
                    type: 'image',
                    rect: ['101px', '5616px','854px','4538px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"ERAS.png",'0px','0px']
                },
                {
                    id: 'primordialsoup',
                    type: 'text',
                    rect: ['567px', '9358px','155px','28px','auto', 'auto'],
                    text: "PRIMORDIAL SOUP",
                    align: "center",
                    font: ['asap, sans-serif', 16, "rgba(255,255,255,1.00)", "700", "none", "normal"]
                },
                {
                    id: 'earthsatmosphere',
                    type: 'text',
                    rect: ['550px', '9280px','191px','28px','auto', 'auto'],
                    text: "EARTH'S ATMOSPHERE",
                    align: "center",
                    font: ['asap, sans-serif', 16, "rgba(255,255,255,1.00)", "700", "none", "normal"]
                },
                {
                    id: 'sunsradiation',
                    type: 'text',
                    rect: ['567px', '9208px','155px','28px','auto', 'auto'],
                    text: "SUN'S RADIATION",
                    align: "center",
                    font: ['asap, sans-serif', 16, "rgba(255,255,255,1.00)", "700", "none", "normal"]
                },
                {
                    id: 'firstoceans',
                    type: 'text',
                    rect: ['567px', '9135px','155px','28px','auto', 'auto'],
                    text: "FIRST OCEANS",
                    align: "center",
                    font: ['asap, sans-serif', 16, "rgba(255,255,255,1.00)", "700", "none", "normal"]
                },
                {
                    id: 'organisms',
                    type: 'text',
                    rect: ['355px', '9005px','155px','28px','auto', 'auto'],
                    text: "ORGANISMS",
                    align: "center",
                    font: ['asap, sans-serif', 16, "rgba(255,255,255,1.00)", "700", "none", "normal"]
                },
                {
                    id: 'stars',
                    type: 'image',
                    rect: ['-16', '9453','1002px','720px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"stars.png",'0px','0px']
                },
                {
                    id: 'EARTHformation',
                    type: 'rect',
                    rect: ['944', '9428','auto','auto','auto', 'auto']
                },
                {
                    id: 'long_white_arrowCopy3',
                    type: 'image',
                    rect: ['512px', '8389px','297px','50px','auto', 'auto'],
                    clip: ['rect(0px 274px 50px 0px)'],
                    fill: ["rgba(0,0,0,0)",im+"long_white_arrow.png",'0px','0px'],
                    transform: [[],['97'],[],['0.65','0.65']]
                },
                {
                    id: 'long_white_arrowCopy4',
                    type: 'image',
                    rect: ['500px', '8380px','297px','50px','auto', 'auto'],
                    clip: ['rect(0px 274px 50px 0px)'],
                    fill: ["rgba(0,0,0,0)",im+"long_white_arrow.png",'0px','0px'],
                    transform: [[],['29'],[],['0.65','0.65']]
                },
                {
                    id: 'TextCopy5',
                    type: 'text',
                    rect: ['492px', '8719px','14px','20px','auto', 'auto'],
                    text: "X",
                    align: "left",
                    font: ['asap, sans-serif', 17, "rgba(255,255,255,1)", "100", "none", "normal"]
                },
                {
                    id: 'TextCopy4',
                    type: 'text',
                    rect: ['397px', '8476px','14px','20px','auto', 'auto'],
                    text: "X",
                    align: "left",
                    font: ['asap, sans-serif', 17, "rgba(255,255,255,1)", "100", "none", "normal"]
                },
                {
                    id: 'TextCopy3',
                    type: 'text',
                    rect: ['557px', '8348px','14px','20px','auto', 'auto'],
                    text: "X",
                    align: "left",
                    font: ['asap, sans-serif', 17, "rgba(255,255,255,1)", "100", "none", "normal"]
                },
                {
                    id: 'TextCopy2',
                    type: 'text',
                    rect: ['666px', '8307px','14px','20px','auto', 'auto'],
                    text: "X",
                    align: "left",
                    font: ['asap, sans-serif', 17, "rgba(255,255,255,1)", "100", "none", "normal"]
                },
                {
                    id: 'TextCopy',
                    type: 'text',
                    rect: ['748px', '8284px','14px','20px','auto', 'auto'],
                    text: "X",
                    align: "left",
                    font: ['asap, sans-serif', 17, "rgba(255,255,255,1)", "100", "none", "normal"]
                },
                {
                    id: 'eukaryapopup',
                    type: 'rect',
                    rect: ['564px', '7155px','auto','auto','auto', 'auto']
                },
                {
                    id: 'audioicon',
                    type: 'image',
                    rect: ['411px', '7751px','60px','60px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(0,0,0,0)",im+"audioicon.png",'0px','0px']
                },
                {
                    id: 'bacteriapopup',
                    type: 'rect',
                    rect: ['401px', '7807px','auto','auto','auto', 'auto']
                },
                {
                    id: 'littletree',
                    type: 'image',
                    rect: ['741px', '8585px','163px','181px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"littletree.jpg",'0px','0px']
                },
                {
                    id: 'extinction_event',
                    type: 'rect',
                    rect: ['-1px', '3104px','auto','auto','auto', 'auto']
                },
                {
                    id: 'archaeapopup',
                    type: 'rect',
                    rect: ['698px', '5924px','auto','auto','auto', 'auto']
                },
                {
                    id: 'extinction_event2',
                    type: 'rect',
                    rect: ['-1px', '3104px','auto','auto','auto', 'auto']
                },
                {
                    id: 'AUDIO_BTN_PRELIFE1',
                    type: 'image',
                    rect: ['640px', '9309px','60px','60px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(0,0,0,0)",im+"audioicon.png",'0px','0px'],
                    transform: [[],[],[],['0.4','0.4']]
                },
                {
                    id: 'TEXT_BTN_PRELIFE1',
                    type: 'rect',
                    rect: ['598px', '4894px','auto','auto','auto', 'auto'],
                    cursor: ['pointer'],
                    transform: [[],[],[],['0.5','0.5']]
                },
                {
                    id: 'AUDIO_BTN_PRELIFE2',
                    type: 'image',
                    rect: ['640px', '9232px','60px','60px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(0,0,0,0)",im+"audioicon.png",'0px','0px'],
                    transform: [[],[],[],['0.4','0.4']]
                },
                {
                    id: 'TEXT_BTN_PRELIFE2',
                    type: 'rect',
                    rect: ['598px', '4894px','auto','auto','auto', 'auto'],
                    cursor: ['pointer'],
                    transform: [[],[],[],['0.5','0.5']]
                },
                {
                    id: 'AUDIO_BTN_PRELIFE3',
                    type: 'image',
                    rect: ['640px', '9154px','60px','60px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(0,0,0,0)",im+"audioicon.png",'0px','0px'],
                    transform: [[],[],[],['0.4','0.4']]
                },
                {
                    id: 'TEXT_BTN_PRELIFE3',
                    type: 'rect',
                    rect: ['598px', '4894px','auto','auto','auto', 'auto'],
                    cursor: ['pointer'],
                    transform: [[],[],[],['0.5','0.5']]
                },
                {
                    id: 'AUDIO_BTN_PRELIFE4',
                    type: 'image',
                    rect: ['640px', '9081px','60px','60px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(0,0,0,0)",im+"audioicon.png",'0px','0px'],
                    transform: [[],[],[],['0.4','0.4']]
                },
                {
                    id: 'TEXT_BTN_PRELIFE4',
                    type: 'rect',
                    rect: ['598px', '4894px','auto','auto','auto', 'auto'],
                    cursor: ['pointer'],
                    transform: [[],[],[],['0.5','0.5']]
                },
                {
                    id: 'AUDIO_BTN_ORGANISMS',
                    type: 'image',
                    rect: ['427px', '8951px','60px','60px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(0,0,0,0)",im+"audioicon.png",'0px','0px'],
                    transform: [[],[],[],['0.4','0.4']]
                },
                {
                    id: 'TEXT_BTN_ORGANISMS',
                    type: 'rect',
                    rect: ['385px', '4894px','auto','auto','auto', 'auto'],
                    cursor: ['pointer'],
                    transform: [[],[],[],['0.5','0.5']]
                },
                {
                    id: 'evolutionarybranching',
                    type: 'text',
                    rect: ['344px', '8627px','155px','28px','auto', 'auto'],
                    text: "Evolutionary <br>Branching",
                    align: "center",
                    font: ['asap, sans-serif', 16, "rgba(255,255,255,1.00)", "700", "none", "normal"]
                },
                {
                    id: 'AUDIO_BTN_BRANCHING',
                    type: 'image',
                    rect: ['416px', '8577px','60px','60px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(0,0,0,0)",im+"audioicon.png",'0px','0px'],
                    transform: [[],[],[],['0.4','0.4']]
                },
                {
                    id: 'TEXT_BTN_BRANCHING',
                    type: 'rect',
                    rect: ['374px', '4894px','auto','auto','auto', 'auto'],
                    cursor: ['pointer'],
                    transform: [[],[],[],['0.5','0.5']]
                },
                {
                    id: 'lateralgenetransfer',
                    type: 'text',
                    rect: ['515px', '8579px','155px','28px','auto', 'auto'],
                    text: "Lateral Gene Transfer",
                    align: "center",
                    font: ['asap, sans-serif', 16, "rgba(255,255,255,1.00)", "700", "none", "normal"]
                },
                {
                    id: 'AUDIO_BTN_LGT',
                    type: 'image',
                    rect: ['587px', '8529px','60px','60px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(0,0,0,0)",im+"audioicon.png",'0px','0px'],
                    transform: [[],[],[],['0.4','0.4']]
                },
                {
                    id: 'TEXT_BTN_LGT',
                    type: 'rect',
                    rect: ['545px', '4894px','auto','auto','auto', 'auto'],
                    cursor: ['pointer'],
                    transform: [[],[],[],['0.5','0.5']]
                },
                {
                    id: 'long_white_arrowCopy',
                    type: 'image',
                    rect: ['453px', '8600px','297px','50px','auto', 'auto'],
                    clip: ['rect(0px 85px 50px 0px)'],
                    fill: ["rgba(0,0,0,0)",im+"long_white_arrow.png",'0px','0px'],
                    transform: [[],['131']]
                },
                {
                    id: 'long_white_arrowCopy5',
                    type: 'image',
                    rect: ['453px', '8600px','297px','50px','auto', 'auto'],
                    clip: ['rect(0px 85px 50px 0px)'],
                    fill: ["rgba(0,0,0,0)",im+"long_white_arrow.png",'0px','0px'],
                    transform: [[],['131']]
                },
                {
                    id: 'popup_BASE',
                    type: 'rect',
                    rect: ['632px', '10816px','auto','auto','auto', 'auto']
                },
                {
                    id: 'AUDIO_BTN_TREE',
                    type: 'image',
                    rect: ['843px', '8664px','60px','60px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(0,0,0,0)",im+"audioicon.png",'0px','0px'],
                    transform: [[],[],[],['0.4','0.4']]
                },
                {
                    id: 'TEXT_BTN_TREE',
                    type: 'rect',
                    rect: ['801px', '4894px','auto','auto','auto', 'auto'],
                    cursor: ['pointer'],
                    transform: [[],[],[],['0.5','0.5']]
                },
                {
                    id: 'lateralgenetransferCopy',
                    type: 'text',
                    rect: ['650px', '8229px','207px','28px','auto', 'auto'],
                    text: "Domain Archaea is Born",
                    align: "center",
                    font: ['asap, sans-serif', 16, "rgba(255,255,255,1.00)", "700", "none", "normal"]
                },
                {
                    id: 'AUDIO_BTN_ARCHAEABEGIN',
                    type: 'image',
                    rect: ['748px', '8186px','60px','60px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(0,0,0,0)",im+"audioicon.png",'0px','0px'],
                    transform: [[],[],[],['0.4','0.4']]
                },
                {
                    id: 'TEXT_BTN_ARCHAEABEGIN',
                    type: 'rect',
                    rect: ['824px', '4894px','auto','auto','auto', 'auto'],
                    cursor: ['pointer'],
                    transform: [[],[],[],['0.5','0.5']]
                },
                {
                    id: 'Domain_Eukarya_is_Born',
                    type: 'text',
                    rect: ['650px', '7386px','207px','28px','auto', 'auto'],
                    text: "Domain Eukarya is Born",
                    align: "center",
                    font: ['asap, sans-serif', 16, "rgba(255,255,255,1.00)", "700", "none", "normal"]
                },
                {
                    id: 'AUDIO_BTN_EUKARYABEGIN',
                    type: 'image',
                    rect: ['748px', '8186px','60px','60px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(0,0,0,0)",im+"audioicon.png",'0px','0px'],
                    transform: [[],[],[],['0.4','0.4']]
                },
                {
                    id: 'TEXT_BTN_EUKARYABEGIN',
                    type: 'rect',
                    rect: ['824px', '4894px','auto','auto','auto', 'auto'],
                    cursor: ['pointer'],
                    transform: [[],[],[],['0.5','0.5']]
                },
                {
                    id: 'Domain_Eukarya_is_BornCopy',
                    type: 'text',
                    rect: ['650px', '8229px','207px','28px','auto', 'auto'],
                    text: "Sponges &amp; Fungi<br>",
                    align: "center",
                    font: ['asap, sans-serif', 16, "rgba(255,255,255,1.00)", "700", "none", "normal"]
                },
                {
                    id: 'AUDIO_BTN_EUKARYABEGINCopy',
                    type: 'image',
                    rect: ['748px', '8186px','60px','60px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(0,0,0,0)",im+"audioicon.png",'0px','0px'],
                    transform: [[],[],[],['0.4','0.4']]
                },
                {
                    id: 'TEXT_BTN_EUKARYABEGINCopy',
                    type: 'rect',
                    rect: ['824px', '4894px','auto','auto','auto', 'auto'],
                    cursor: ['pointer'],
                    transform: [[],[],[],['0.5','0.5']]
                },
                {
                    id: 'Domain_Eukarya_is_BornCopy2',
                    type: 'text',
                    rect: ['650px', '8229px','207px','28px','auto', 'auto'],
                    text: "The (brrr) ice age",
                    align: "center",
                    font: ['asap, sans-serif', 16, "rgba(255,255,255,1.00)", "700", "none", "normal"]
                },
                {
                    id: 'AUDIO_BTN_EUKARYABEGINCopy2',
                    type: 'image',
                    rect: ['748px', '8186px','60px','60px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(0,0,0,0)",im+"audioicon.png",'0px','0px'],
                    transform: [[],[],[],['0.4','0.4']]
                },
                {
                    id: 'TEXT_BTN_ICEAGE',
                    type: 'rect',
                    rect: ['824px', '4894px','auto','auto','auto', 'auto'],
                    cursor: ['pointer'],
                    transform: [[],[],[],['0.5','0.5']]
                },
                {
                    id: 'Domain_Eukarya_is_BornCopy3',
                    type: 'text',
                    rect: ['650px', '8229px','207px','28px','auto', 'auto'],
                    text: "Oxygen nears today's levels",
                    align: "center",
                    font: ['asap, sans-serif', 16, "rgba(255,255,255,1.00)", "700", "none", "normal"]
                },
                {
                    id: 'AUDIO_BTN_EUKARYABEGINCopy3',
                    type: 'image',
                    rect: ['748px', '8186px','60px','60px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(0,0,0,0)",im+"audioicon.png",'0px','0px'],
                    transform: [[],[],[],['0.4','0.4']]
                },
                {
                    id: 'TEXT_BTN_EUKARYABEGINCopy3',
                    type: 'rect',
                    rect: ['824px', '4894px','auto','auto','auto', 'auto'],
                    cursor: ['pointer'],
                    transform: [[],[],[],['0.5','0.5']]
                },
                {
                    id: 'Domain_Eukarya_is_BornCopy4',
                    type: 'text',
                    rect: ['650px', '8229px','207px','28px','auto', 'auto'],
                    text: "Explosion of species!",
                    align: "center",
                    font: ['asap, sans-serif', 16, "rgba(255,255,255,1.00)", "700", "none", "normal"]
                },
                {
                    id: 'AUDIO_BTN_EUKARYABEGINCopy4',
                    type: 'image',
                    rect: ['748px', '8186px','60px','60px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(0,0,0,0)",im+"audioicon.png",'0px','0px'],
                    transform: [[],[],[],['0.4','0.4']]
                },
                {
                    id: 'TEXT_BTN_EUKARYABEGINCopy4',
                    type: 'rect',
                    rect: ['824px', '4894px','auto','auto','auto', 'auto'],
                    cursor: ['pointer'],
                    transform: [[],[],[],['0.5','0.5']]
                },
                {
                    id: 'Domain_Eukarya_is_BornCopy5',
                    type: 'text',
                    rect: ['650px', '8229px','207px','28px','auto', 'auto'],
                    text: "Origin of land plants",
                    align: "center",
                    font: ['asap, sans-serif', 16, "rgba(255,255,255,1.00)", "700", "none", "normal"]
                },
                {
                    id: 'AUDIO_BTN_EUKARYABEGINCopy5',
                    type: 'image',
                    rect: ['748px', '8186px','60px','60px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(0,0,0,0)",im+"audioicon.png",'0px','0px'],
                    transform: [[],[],[],['0.4','0.4']]
                },
                {
                    id: 'TEXT_BTN_EUKARYABEGINCopy5',
                    type: 'rect',
                    rect: ['824px', '4894px','auto','auto','auto', 'auto'],
                    cursor: ['pointer'],
                    transform: [[],[],[],['0.5','0.5']]
                },
                {
                    id: 'Domain_Eukarya_is_BornCopy6',
                    type: 'text',
                    rect: ['650px', '8229px','207px','28px','auto', 'auto'],
                    text: "Continents start to form",
                    align: "center",
                    font: ['asap, sans-serif', 16, "rgba(255,255,255,1.00)", "700", "none", "normal"]
                },
                {
                    id: 'AUDIO_BTN_EUKARYABEGINCopy6',
                    type: 'image',
                    rect: ['748px', '8186px','60px','60px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(0,0,0,0)",im+"audioicon.png",'0px','0px'],
                    transform: [[],[],[],['0.4','0.4']]
                },
                {
                    id: 'TEXT_BTN_EUKARYABEGINCopy6',
                    type: 'rect',
                    rect: ['824px', '4894px','auto','auto','auto', 'auto'],
                    cursor: ['pointer'],
                    transform: [[],[],[],['0.5','0.5']]
                },
                {
                    id: 'Domain_Eukarya_is_BornCopy7',
                    type: 'text',
                    rect: ['650px', '8229px','207px','28px','auto', 'auto'],
                    text: "The 'Great Dying' in the oceans",
                    align: "center",
                    font: ['asap, sans-serif', 16, "rgba(255,255,255,1.00)", "700", "none", "normal"]
                },
                {
                    id: 'AUDIO_BTN_EUKARYABEGINCopy7',
                    type: 'image',
                    rect: ['748px', '8186px','60px','60px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(0,0,0,0)",im+"audioicon.png",'0px','0px'],
                    transform: [[],[],[],['0.4','0.4']]
                },
                {
                    id: 'TEXT_BTN_EUKARYABEGINCopy7',
                    type: 'rect',
                    rect: ['824px', '4894px','auto','auto','auto', 'auto'],
                    cursor: ['pointer'],
                    transform: [[],[],[],['0.5','0.5']]
                },
                {
                    id: 'Domain_Eukarya_is_BornCopy8',
                    type: 'text',
                    rect: ['650px', '8229px','207px','28px','auto', 'auto'],
                    text: "Mass extinction on land",
                    align: "center",
                    font: ['asap, sans-serif', 16, "rgba(255,255,255,1.00)", "700", "none", "normal"]
                },
                {
                    id: 'AUDIO_BTN_EUKARYABEGINCopy8',
                    type: 'image',
                    rect: ['748px', '8186px','60px','60px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(0,0,0,0)",im+"audioicon.png",'0px','0px'],
                    transform: [[],[],[],['0.4','0.4']]
                },
                {
                    id: 'TEXT_BTN_EUKARYABEGINCopy8',
                    type: 'rect',
                    rect: ['824px', '4894px','auto','auto','auto', 'auto'],
                    cursor: ['pointer'],
                    transform: [[],[],[],['0.5','0.5']]
                },
                {
                    id: 'Domain_Eukarya_is_BornCopy9',
                    type: 'text',
                    rect: ['650px', '8229px','207px','28px','auto', 'auto'],
                    text: "Mass extinction on land",
                    align: "center",
                    font: ['asap, sans-serif', 16, "rgba(255,255,255,1.00)", "700", "none", "normal"]
                },
                {
                    id: 'AUDIO_BTN_EUKARYABEGINCopy9',
                    type: 'image',
                    rect: ['748px', '8186px','60px','60px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(0,0,0,0)",im+"audioicon.png",'0px','0px'],
                    transform: [[],[],[],['0.4','0.4']]
                },
                {
                    id: 'TEXT_BTN_EUKARYABEGINCopy9',
                    type: 'rect',
                    rect: ['824px', '4894px','auto','auto','auto', 'auto'],
                    cursor: ['pointer'],
                    transform: [[],[],[],['0.5','0.5']]
                },
                {
                    id: 'Domain_Eukarya_is_BornCopy10',
                    type: 'text',
                    rect: ['650px', '8229px','207px','28px','auto', 'auto'],
                    text: "Humans and Chimps split",
                    align: "center",
                    font: ['asap, sans-serif', 16, "rgba(255,255,255,1.00)", "700", "none", "normal"]
                },
                {
                    id: 'AUDIO_BTN_EUKARYABEGINCopy10',
                    type: 'image',
                    rect: ['748px', '8186px','60px','60px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(0,0,0,0)",im+"audioicon.png",'0px','0px'],
                    transform: [[],[],[],['0.4','0.4']]
                },
                {
                    id: 'TEXT_BTN_EUKARYABEGINCopy10',
                    type: 'rect',
                    rect: ['824px', '4894px','auto','auto','auto', 'auto'],
                    cursor: ['pointer'],
                    transform: [[],[],[],['0.5','0.5']]
                },
                {
                    id: 'Domain_Eukarya_is_BornCopy11',
                    type: 'text',
                    rect: ['650px', '8229px','207px','28px','auto', 'auto'],
                    text: "Origin of modern humans",
                    align: "center",
                    font: ['asap, sans-serif', 16, "rgba(255,255,255,1.00)", "700", "none", "normal"]
                },
                {
                    id: 'AUDIO_BTN_EUKARYABEGINCopy11',
                    type: 'image',
                    rect: ['748px', '8186px','60px','60px','auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ["rgba(0,0,0,0)",im+"audioicon.png",'0px','0px'],
                    transform: [[],[],[],['0.4','0.4']]
                },
                {
                    id: 'TEXT_BTN_EUKARYABEGINCopy11',
                    type: 'rect',
                    rect: ['824px', '4894px','auto','auto','auto', 'auto'],
                    cursor: ['pointer'],
                    transform: [[],[],[],['0.5','0.5']]
                },
                {
                    id: 'long_white_arrow',
                    type: 'image',
                    rect: ['549px', '8192px','297px','50px','auto', 'auto'],
                    clip: ['rect(0px 274px 50px 0px)'],
                    fill: ["rgba(0,0,0,0)",im+"long_white_arrow.png",'0px','0px']
                },
                {
                    id: 'long_white_arrowCopy2',
                    type: 'image',
                    rect: ['539px', '8351px','297px','50px','auto', 'auto'],
                    clip: ['rect(0px 274px 50px 0px)'],
                    fill: ["rgba(0,0,0,0)",im+"long_white_arrow.png",'0px','0px'],
                    transform: [[],['130'],[],['0.65','0.65']]
                },
                {
                    id: 'Genetic_Drift_Popup',
                    type: 'rect',
                    rect: ['722px', '7694px','auto','auto','auto', 'auto']
                }]
            },
            {
                id: 'BOX-PAGE3Copy',
                type: 'rect',
                rect: ['0px', '35px','285px','497px','auto', 'auto'],
                fill: ["rgba(209,209,194,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'vcontainer1',
                type: 'rect',
                rect: ['18px', '340px','244px','168px','auto', 'auto'],
                fill: ["rgba(114,114,114,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'TOC-bodyCopy2',
                type: 'text',
                rect: ['14px', '139px','234px','154px','auto', 'auto'],
                text: "4.6 billion years ago, Earth had just been born out of the swirling mess of cosmic dust, rocks and other minerals floating through space. It definitely did not look the same way it does today! Earth originally had no oxygen in the atmosphere, and the surface of the Earth was  molten (liquid) rock, so hot that it would need to cool down for the next 800 million years before the earth’s crust become solid.",
                align: "left",
                font: ['asap, sans-serif', 41, "rgba(0,0,0,1.00)", "100", "none", "normal"]
            },
            {
                id: 'Origin_of_LifeCopy2',
                type: 'text',
                rect: ['14px', '87px','305px','43px','auto', 'auto'],
                text: "Tree of Life?",
                align: "left",
                font: ['asap, sans-serif', 35, "rgba(0,0,0,1.00)", "900", "none", "normal"]
            },
            {
                id: 'ONe_yes_oneCopy2',
                type: 'text',
                rect: ['14px', '60px','234px','37px','auto', 'auto'],
                text: "What is the",
                align: "left",
                font: ['asap, sans-serif', 30, "rgba(0,0,0,1.00)", "100", "none", "normal"]
            },
            {
                id: 'BOX-PAGE3Copy5',
                type: 'rect',
                rect: ['0px', '35px','285px','497px','auto', 'auto'],
                fill: ["rgba(209,209,194,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'VIDEO-1Copy7',
                type: 'rect',
                rect: ['18px', '340px','244px','168px','auto', 'auto'],
                fill: ["rgba(114,114,114,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'TOC-bodyCopy7',
                type: 'text',
                rect: ['14px', '139px','234px','154px','auto', 'auto'],
                text: "All life on earth seems to have come from a single lineage of early life on Earth, sometime over 3.4 Billion years ago. There are many theories as to what 'sparked' like on Earth, including primordial soup, hydrothermal vents, evenpanspermia, the theory that life could have originated elsewhere in the universe.",
                align: "left",
                font: ['asap, sans-serif', 41, "rgba(0,0,0,1.00)", "100", "none", "normal"]
            },
            {
                id: 'Origin_of_LifeCopy7',
                type: 'text',
                rect: ['14px', '87px','305px','43px','auto', 'auto'],
                text: "Origin of Life",
                align: "left",
                font: ['asap, sans-serif', 35, "rgba(0,0,0,1.00)", "900", "none", "normal"]
            },
            {
                id: 'ONe_yes_oneCopy9',
                type: 'text',
                rect: ['14px', '60px','234px','37px','auto', 'auto'],
                text: "One(yes, one)",
                align: "left",
                font: ['asap, sans-serif', 30, "rgba(0,0,0,1.00)", "100", "none", "normal"]
            },
            {
                id: 'BOX-PAGE3Copy6',
                type: 'rect',
                rect: ['0px', '35px','285px','497px','auto', 'auto'],
                fill: ["rgba(209,209,194,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'VIDEO-1Copy8',
                type: 'rect',
                rect: ['18px', '340px','244px','168px','auto', 'auto'],
                fill: ["rgba(114,114,114,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'TOC-bodyCopy8',
                type: 'text',
                rect: ['14px', '139px','234px','154px','auto', 'auto'],
                text: "Lateral Gene Transfer is an important part of evolution we are only beginning to understand. Two unrelated species can sometimes swap DNA, occasionally resulting in new evolutionary developments. This was a very important force for early single-celled organisms, responsible for many key changes, including photosynthesis as well as multicellular organisms.",
                align: "left",
                font: ['asap, sans-serif', 41, "rgba(0,0,0,1.00)", "100", "none", "normal"]
            },
            {
                id: 'Origin_of_LifeCopy8',
                type: 'text',
                rect: ['14px', '87px','305px','43px','auto', 'auto'],
                text: "In Early Life",
                align: "left",
                font: ['asap, sans-serif', 35, "rgba(0,0,0,1.00)", "900", "none", "normal"]
            },
            {
                id: 'ONe_yes_oneCopy10',
                type: 'text',
                rect: ['14px', '60px','234px','37px','auto', 'auto'],
                text: "Lateral Gene Transfer",
                align: "left",
                font: ['asap, sans-serif', 30, "rgba(0,0,0,1.00)", "100", "none", "normal"]
            },
            {
                id: 'BOX-PAGE3Copy7',
                type: 'rect',
                rect: ['0px', '35px','285px','497px','auto', 'auto'],
                fill: ["rgba(209,209,194,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'VIDEO-1Copy9',
                type: 'rect',
                rect: ['18px', '340px','244px','168px','auto', 'auto'],
                fill: ["rgba(114,114,114,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'TOC-bodyCopy9',
                type: 'text',
                rect: ['14px', '139px','234px','154px','auto', 'auto'],
                text: "Around 3 Billion years ago, we know a landmark event occurred. Two types of life became so distinct that their lineages are traceable to today. We call these largest groupings of species 'Domains'. The Three domains of life are Bacteria, Archaea, and Eukaryota, which hasn't shown up yet on our timeline.  ",
                align: "left",
                font: ['asap, sans-serif', 41, "rgba(0,0,0,1.00)", "100", "none", "normal"]
            },
            {
                id: 'Origin_of_LifeCopy9',
                type: 'text',
                rect: ['14px', '87px','305px','43px','auto', 'auto'],
                text: "Categories",
                align: "left",
                font: ['asap, sans-serif', 35, "rgba(0,0,0,1.00)", "900", "none", "normal"]
            },
            {
                id: 'ONe_yes_oneCopy11',
                type: 'text',
                rect: ['14px', '60px','234px','37px','auto', 'auto'],
                text: "Splitting Life into",
                align: "left",
                font: ['asap, sans-serif', 30, "rgba(0,0,0,1.00)", "100", "none", "normal"]
            },
            {
                id: 'BOX-PAGE3Copy8',
                type: 'rect',
                rect: ['0px', '35px','285px','497px','auto', 'auto'],
                fill: ["rgba(209,209,194,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'VIDEO-1Copy10',
                type: 'rect',
                rect: ['18px', '340px','244px','168px','auto', 'auto'],
                fill: ["rgba(114,114,114,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'TOC-bodyCopy10',
                type: 'text',
                rect: ['14px', '139px','234px','154px','auto', 'auto'],
                text: "Common Ancestors are an important part of studying the tree of life because they act as anchor points showing where one species may have diverged from another. Looking all the way at the base of the tree you would find our Last Universal Common Ancestor, or LUCA, the last species that is related to all current life on earth. ",
                align: "left",
                font: ['asap, sans-serif', 41, "rgba(0,0,0,1.00)", "100", "none", "normal"]
            },
            {
                id: 'Origin_of_LifeCopy10',
                type: 'text',
                rect: ['14px', '87px','305px','43px','auto', 'auto'],
                text: "Connect Us",
                align: "left",
                font: ['asap, sans-serif', 35, "rgba(0,0,0,1.00)", "900", "none", "normal"]
            },
            {
                id: 'ONe_yes_oneCopy12',
                type: 'text',
                rect: ['14px', '60px','234px','37px','auto', 'auto'],
                text: "Our Ancestors",
                align: "left",
                font: ['asap, sans-serif', 30, "rgba(0,0,0,1.00)", "100", "none", "normal"]
            },
            {
                id: 'BOX-PAGE3Copy9',
                type: 'rect',
                rect: ['0px', '35px','285px','497px','auto', 'auto'],
                fill: ["rgba(209,209,194,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'VIDEO-1Copy11',
                type: 'rect',
                rect: ['18px', '340px','244px','168px','auto', 'auto'],
                fill: ["rgba(114,114,114,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'TOC-bodyCopy11',
                type: 'text',
                rect: ['14px', '139px','234px','154px','auto', 'auto'],
                text: "Extinction, the dying out of an entire species, has been a part of life since it began over 3.5 Billion years ago. Countless millions of species have disappeared for one reason or another, often due to environmental impacts such as habitat destruction.",
                align: "left",
                font: ['asap, sans-serif', 41, "rgba(0,0,0,1.00)", "100", "none", "normal"]
            },
            {
                id: 'Origin_of_LifeCopy11',
                type: 'text',
                rect: ['14px', '87px','305px','43px','auto', 'auto'],
                text: "Species Gone?",
                align: "left",
                font: ['asap, sans-serif', 35, "rgba(0,0,0,1.00)", "900", "none", "normal"]
            },
            {
                id: 'ONe_yes_oneCopy13',
                type: 'text',
                rect: ['14px', '60px','234px','37px','auto', 'auto'],
                text: "Where have all",
                align: "left",
                font: ['asap, sans-serif', 30, "rgba(0,0,0,1.00)", "100", "none", "normal"]
            },
            {
                id: 'BOX-PAGE3Copy10',
                type: 'rect',
                rect: ['0px', '35px','285px','497px','auto', 'auto'],
                fill: ["rgba(209,209,194,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'VIDEO-1Copy12',
                type: 'rect',
                rect: ['18px', '340px','244px','168px','auto', 'auto'],
                fill: ["rgba(114,114,114,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'TOC-bodyCopy12',
                type: 'text',
                rect: ['14px', '139px','234px','154px','auto', 'auto'],
                text: "Biodiversity is an important part of maintaining a balanced ecosystem: It is the mix of different species within any given environment. Lots of diversity means lots of different evolutionary answers to drastic changes. It also means replacements to key parts of the food chain. If one predator goes extinct, a highly diverse ecosystem will shortly replace it.",
                align: "left",
                font: ['asap, sans-serif', 41, "rgba(0,0,0,1.00)", "100", "none", "normal"]
            },
            {
                id: 'Origin_of_LifeCopy12',
                type: 'text',
                rect: ['14px', '87px','305px','43px','auto', 'auto'],
                text: "Life on Earth",
                align: "left",
                font: ['asap, sans-serif', 35, "rgba(0,0,0,1.00)", "900", "none", "normal"]
            },
            {
                id: 'ONe_yes_oneCopy14',
                type: 'text',
                rect: ['14px', '60px','234px','37px','auto', 'auto'],
                text: "A Rich Diversity of",
                align: "left",
                font: ['asap, sans-serif', 30, "rgba(0,0,0,1.00)", "100", "none", "normal"]
            },
            {
                id: 'Rectangle2',
                type: 'rect',
                rect: ['866px', '120px','2px','324px','auto', 'auto'],
                fill: ["rgba(0,0,0,1)"],
                stroke: [0,"rgba(255,255,255,1.00)","solid"]
            },
            {
                id: 'BacteriaAudio1',
                type: 'audio',
                tag: 'audio',
                rect: ['675', '203','320px','45px','auto', 'auto'],
                source: ['publishtree/Bacteria.MP3']
            },
            {
                id: 'Rectangle3',
                type: 'rect',
                rect: ['959px', '0px','59px','577px','auto', 'auto'],
                fill: ["rgba(0,0,0,1.00)"],
                stroke: [0,"rgb(255, 255, 255)","solid"]
            },
            {
                id: 'LongTreeChapters',
                type: 'image',
                rect: ['594px', '-1731px','764px','4061px','auto', 'auto'],
                clip: ['rect(452px 764px 3167px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"LONGTREE.png",'0px','0px'],
                transform: [[],[],[],['0.13526','0.13526']]
            },
            {
                id: 'navlife',
                type: 'rect',
                rect: ['435px', '-1024px','auto','auto','auto', 'auto']
            },
            {
                id: 'ORIGIN',
                type: 'image',
                rect: ['542px', '53px','203px','206px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"ORIGIN.png",'0px','0px']
            },
            {
                id: 'section3text1',
                type: 'text',
                rect: ['588px', '85px','auto','83px','auto', 'auto'],
                text: "Life on<br>Earth",
                align: "center",
                font: ['asap, sans-serif', 39, "rgba(0,0,0,1.00)", "700", "none", "normal"]
            },
            {
                id: 'section3-text2',
                type: 'text',
                rect: ['592px', '175px','auto','83px','auto', 'auto'],
                text: "3.6 billion<br>years ago",
                align: "center",
                font: ['asap, sans-serif', 24, "rgba(0,0,0,1.00)", "100", "none", "normal"],
                textShadow: ["rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'UP',
                type: 'rect',
                rect: ['824', '26','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            },
            {
                id: 'EARTHFORMS2',
                type: 'image',
                rect: ['613px', '124px','754px','754px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"EARTHFORMS.png",'0px','0px'],
                transform: [[],[],[],['0.06','0.06']]
            },
            {
                id: 'Ellipse',
                type: 'ellipse',
                rect: ['982px', '430px','14px','13px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(237,255,116,1.00)"],
                stroke: [1,"rgb(255, 255, 255)","solid"]
            },
            {
                id: 'DOWN',
                type: 'rect',
                rect: ['824', '466','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            },
            {
                id: 'button-162',
                type: 'audio',
                tag: 'audio',
                rect: ['388', '476','320px','45px','auto', 'auto'],
                source: ['media/button-16.mp3']
            },
            {
                id: 'section1chapter',
                type: 'rect',
                rect: ['959px', '478px','59px','43px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0.00)"],
                stroke: [1,"rgb(255, 255, 255)","solid"],
                transform: [[],[],[],['1','1.05']]
            },
            {
                id: 'section2chapter',
                type: 'rect',
                rect: ['959px', '425px','59px','50px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0.00)"],
                stroke: [1,"rgb(255, 255, 255)","solid"],
                transform: [[],[],[],['1','1.05']]
            },
            {
                id: 'section3chapter',
                type: 'rect',
                rect: ['959px', '359px','59px','62px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0.00)"],
                stroke: [1,"rgb(255, 255, 255)","solid"],
                transform: [[],[],[],['1','1.05']]
            },
            {
                id: 'section4chapter',
                type: 'rect',
                rect: ['959px', '293px','59px','62px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0.00)"],
                stroke: [1,"rgb(255, 255, 255)","solid"],
                transform: [[],[],[],['1','1.05']]
            },
            {
                id: 'section5chapter',
                type: 'rect',
                rect: ['959px', '227px','59px','62px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0.00)"],
                stroke: [1,"rgb(255, 255, 255)","solid"],
                transform: [[],[],[],['1','1.05']]
            },
            {
                id: 'section6chapter',
                type: 'rect',
                rect: ['959px', '161px','59px','62px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0.00)"],
                stroke: [1,"rgb(255, 255, 255)","solid"],
                transform: [[],[],[],['1','1.05']]
            },
            {
                id: 'section7chapter',
                type: 'rect',
                rect: ['959px', '89px','59px','68px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0.00)"],
                stroke: [1,"rgb(255, 255, 255)","solid"],
                transform: [[],[],[],['1','1.05']]
            },
            {
                id: 'TIMELINE_TEXT1',
                type: 'rect',
                rect: ['760', '480px','auto','auto','auto', 'auto']
            },
            {
                id: 'TIMELINE_TEXT2',
                type: 'rect',
                rect: ['759', '425','auto','auto','auto', 'auto']
            },
            {
                id: 'TIMELINE_TEXT3',
                type: 'rect',
                rect: ['760', '425','auto','auto','auto', 'auto']
            },
            {
                id: 'TIMELINE_TEXT4',
                type: 'rect',
                rect: ['760', '292px','auto','auto','auto', 'auto']
            },
            {
                id: 'TIMELINE_TEXT5',
                type: 'rect',
                rect: ['760', '226px','auto','auto','auto', 'auto']
            },
            {
                id: 'TIMELINE_TEXT6',
                type: 'rect',
                rect: ['760', '160px','auto','auto','auto', 'auto']
            },
            {
                id: 'TIMELINE_TEXT7',
                type: 'rect',
                rect: ['760', '87px','auto','auto','auto', 'auto']
            },
            {
                id: 'TEXTBUTTONPARENT',
                type: 'rect',
                rect: ['645', '488','auto','auto','auto', 'auto']
            },
            {
                id: 'POPUP_PRELIFE1',
                type: 'rect',
                rect: ['285', '35px','auto','auto','auto', 'auto']
            },
            {
                id: 'POPUP_PRELIFE2',
                type: 'rect',
                rect: ['285', '35','auto','auto','auto', 'auto']
            },
            {
                id: 'POPUP_PRELIFE3',
                type: 'rect',
                rect: ['285', '35','auto','auto','auto', 'auto']
            },
            {
                id: 'POPUP_PRELIFE4',
                type: 'rect',
                rect: ['285', '35','auto','auto','auto', 'auto']
            },
            {
                id: 'POPUP_ORGANISMS',
                type: 'rect',
                rect: ['285', '35','auto','auto','auto', 'auto']
            },
            {
                id: 'POPUP_THEPLANET',
                type: 'rect',
                rect: ['285', '35','auto','auto','auto', 'auto']
            },
            {
                id: 'POPUP_LIFEONEARTH',
                type: 'rect',
                rect: ['285', '35','auto','auto','auto', 'auto']
            },
            {
                id: 'POPUP_LITTLETREE',
                type: 'rect',
                rect: ['285', '35','auto','auto','auto', 'auto']
            },
            {
                id: 'POPUP_LGT',
                type: 'rect',
                rect: ['285', '35','auto','auto','auto', 'auto']
            },
            {
                id: 'POPUP_BRANCHING',
                type: 'rect',
                rect: ['285', '35','auto','auto','auto', 'auto']
            },
            {
                id: 'POPUP_ARCHAEABEGINS',
                type: 'rect',
                rect: ['285', '35','auto','auto','auto', 'auto']
            },
            {
                id: 'POPUP_EUKARYABEGIN',
                type: 'rect',
                rect: ['285', '35','auto','auto','auto', 'auto']
            },
            {
                id: 'POPUP_SPONGEFUNGI',
                type: 'rect',
                rect: ['285', '35','auto','auto','auto', 'auto']
            },
            {
                id: 'POPUP_ICEAGE',
                type: 'rect',
                rect: ['285', '35','auto','auto','auto', 'auto']
            },
            {
                id: 'POPUP_OXYGEN',
                type: 'rect',
                rect: ['283px', '35','auto','auto','auto', 'auto']
            },
            {
                id: 'POPUP_EXPLOSION',
                type: 'rect',
                rect: ['285', '35','auto','auto','auto', 'auto']
            },
            {
                id: 'POPUP_LANDPLANTS',
                type: 'rect',
                rect: ['285', '35','auto','auto','auto', 'auto']
            },
            {
                id: 'POPUP_CONTINENTS',
                type: 'rect',
                rect: ['285', '35','auto','auto','auto', 'auto']
            },
            {
                id: 'POPUP_GREATDYING',
                type: 'rect',
                rect: ['285', '35','auto','auto','auto', 'auto']
            },
            {
                id: 'POPUP_LANDEXTINCTION',
                type: 'rect',
                rect: ['285', '35','auto','auto','auto', 'auto']
            },
            {
                id: 'POPUP_HUMANCHIMP',
                type: 'rect',
                rect: ['285', '35','auto','auto','auto', 'auto']
            },
            {
                id: 'POPUP_MODERNHUMAN',
                type: 'rect',
                rect: ['285', '35','auto','auto','auto', 'auto']
            },
            {
                id: 'help_button',
                type: 'rect',
                rect: ['642', '534px','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            },
            {
                id: 'POPUP_HELPBAR',
                type: 'image',
                rect: ['-481px', '128px','1925px','600px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"helpbar.png",'0px','0px'],
                transform: [[],[],[],['0.5','0.5']]
            },
            {
                id: 'EXIT_BUTTON',
                type: 'rect',
                rect: ['923', '43','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            },
            {
                id: 'HELPEXIT_BUTTON2',
                type: 'rect',
                rect: ['952', '265','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            }],
            symbolInstances: [
            {
                id: 'POPUP_HUMANCHIMP',
                symbolName: 'POPUP_HUMANCHIMP',
                autoPlay: {

                }
            },
            {
                id: 'TEXT_BTN_EUKARYABEGINCopy11',
                symbolName: 'TEXTBUTTONPARENT',
                autoPlay: {

                }
            },
            {
                id: 'POPUP_ICEAGE',
                symbolName: 'POPUP_ICEAGE',
                autoPlay: {

                }
            },
            {
                id: 'POPUP_CONTINENTS',
                symbolName: 'POPUP_CONTINENTS',
                autoPlay: {

                }
            },
            {
                id: 'TEXT_BTN_EUKARYABEGINCopy',
                symbolName: 'TEXTBUTTONPARENT',
                autoPlay: {

                }
            },
            {
                id: 'POPUP_MODERNHUMAN',
                symbolName: 'POPUP_MODERNHUMAN',
                autoPlay: {

                }
            },
            {
                id: 'TEXT_BTN_EUKARYABEGIN',
                symbolName: 'TEXTBUTTONPARENT',
                autoPlay: {

                }
            },
            {
                id: 'TEXT_BTN_PRELIFE4',
                symbolName: 'TEXTBUTTONPARENT',
                autoPlay: {

                }
            },
            {
                id: 'DOWN',
                symbolName: 'DOWN',
                autoPlay: {

                }
            },
            {
                id: 'POPUP_LANDEXTINCTION',
                symbolName: 'POPUP_LANDEXTINCTION',
                autoPlay: {

                }
            },
            {
                id: 'TEXT_BTN_EUKARYABEGINCopy9',
                symbolName: 'TEXTBUTTONPARENT',
                autoPlay: {

                }
            },
            {
                id: 'Genetic_Drift_Popup',
                symbolName: 'Genetic_Drift_Popup',
                autoPlay: {

                }
            },
            {
                id: 'TEXT_BTN_PRELIFE2',
                symbolName: 'TEXTBUTTONPARENT',
                autoPlay: {

                }
            },
            {
                id: 'TEXT_BTN_EUKARYABEGINCopy6',
                symbolName: 'TEXTBUTTONPARENT',
                autoPlay: {

                }
            },
            {
                id: 'TEXT_BTN_EUKARYABEGINCopy4',
                symbolName: 'TEXTBUTTONPARENT',
                autoPlay: {

                }
            },
            {
                id: 'TIMELINE_TEXT4',
                symbolName: 'TIMELINE_TEXT4',
                autoPlay: {

                }
            },
            {
                id: 'POPUP_GREATDYING',
                symbolName: 'POPUP_GREATDYING',
                autoPlay: {

                }
            },
            {
                id: 'TIMELINE_TEXT6',
                symbolName: 'TIMELINE_TEXT6',
                autoPlay: {

                }
            },
            {
                id: 'UP',
                symbolName: 'UP',
                autoPlay: {

                }
            },
            {
                id: 'TIMELINE_TEXT3',
                symbolName: 'TIMELINE_TEXT3',
                autoPlay: {

                }
            },
            {
                id: 'archaeapopup',
                symbolName: 'archaeapopup',
                autoPlay: {

                }
            },
            {
                id: 'TEXT_BTN_TREE',
                symbolName: 'TEXTBUTTONPARENT',
                autoPlay: {

                }
            },
            {
                id: 'TEXT_BTN_PRELIFE1',
                symbolName: 'TEXTBUTTONPARENT',
                autoPlay: {

                }
            },
            {
                id: 'TEXT_BTN_EUKARYABEGINCopy10',
                symbolName: 'TEXTBUTTONPARENT',
                autoPlay: {

                }
            },
            {
                id: 'eukaryapopup',
                symbolName: 'eukaryapopup',
                autoPlay: {

                }
            },
            {
                id: 'POPUP_PRELIFE1',
                symbolName: 'POPUP_PRELIFE1',
                autoPlay: {

                }
            },
            {
                id: 'TEXT_BTN_BRANCHING',
                symbolName: 'TEXTBUTTONPARENT',
                autoPlay: {

                }
            },
            {
                id: 'TEXTBUTTONPARENT',
                symbolName: 'TEXTBUTTONPARENT',
                autoPlay: {

                }
            },
            {
                id: 'whatisthetreeoflife_subtext',
                symbolName: 'whatisthetreeoflife_subtext',
                autoPlay: {

                }
            },
            {
                id: 'POPUP_LITTLETREE',
                symbolName: 'POPUP_LITTLETREE',
                autoPlay: {

                }
            },
            {
                id: 'TEXT_BTN_LGT',
                symbolName: 'TEXTBUTTONPARENT',
                autoPlay: {

                }
            },
            {
                id: 'POPUP_ORGANISMS',
                symbolName: 'POPUP_ORGANISMS',
                autoPlay: {

                }
            },
            {
                id: 'POPUP_BRANCHING',
                symbolName: 'POPUP_BRANCHING',
                autoPlay: {

                }
            },
            {
                id: 'TEXT_BTN_PRELIFE3',
                symbolName: 'TEXTBUTTONPARENT',
                autoPlay: {

                }
            },
            {
                id: 'TEXT_BTN_EUKARYABEGINCopy3',
                symbolName: 'TEXTBUTTONPARENT',
                autoPlay: {

                }
            },
            {
                id: 'POPUP_THEPLANET',
                symbolName: 'POPUP_THEPLANET',
                autoPlay: {

                }
            },
            {
                id: 'TIMELINE_TEXT2',
                symbolName: 'TIMELINE_TEXT2',
                autoPlay: {

                }
            },
            {
                id: 'POPUP_PRELIFE3',
                symbolName: 'POPUP_PRELIFE3',
                autoPlay: {

                }
            },
            {
                id: 'POPUP_PRELIFE2',
                symbolName: 'POPUP_PRELIFE2',
                autoPlay: {

                }
            },
            {
                id: 'bacteriapopup',
                symbolName: 'bacteriapopup',
                autoPlay: {

                }
            },
            {
                id: 'POPUP_LANDPLANTS',
                symbolName: 'POPUP_LANDPLANTS',
                autoPlay: {

                }
            },
            {
                id: 'TIMELINE_TEXT1',
                symbolName: 'timeline_text1',
                autoPlay: {

                }
            },
            {
                id: 'HELPEXIT_BUTTON2',
                symbolName: 'HELPEXIT_BUTTON',
                autoPlay: {

                }
            },
            {
                id: 'EXIT_BUTTON',
                symbolName: 'EXIT_BUTTON',
                autoPlay: {

                }
            },
            {
                id: 'POPUP_PRELIFE4',
                symbolName: 'POPUP_PRELIFE4',
                autoPlay: {

                }
            },
            {
                id: 'help_button',
                symbolName: 'help_button',
                autoPlay: {

                }
            },
            {
                id: 'EARTHformation',
                symbolName: 'EARTHformation',
                autoPlay: {

                }
            },
            {
                id: 'TEXT_BTN_EUKARYABEGINCopy8',
                symbolName: 'TEXTBUTTONPARENT',
                autoPlay: {

                }
            },
            {
                id: 'TIMELINE_TEXT5',
                symbolName: 'TIMELINE_TEXT5',
                autoPlay: {

                }
            },
            {
                id: 'POPUP_EXPLOSION',
                symbolName: 'POPUP_EXPLOSION',
                autoPlay: {

                }
            },
            {
                id: 'POPUP_LGT',
                symbolName: 'POPUP_LGT',
                autoPlay: {

                }
            },
            {
                id: 'POPUP_OXYGEN',
                symbolName: 'POPUP_OXYGEN',
                autoPlay: {

                }
            },
            {
                id: 'POPUP_SPONGEFUNGI',
                symbolName: 'POPUP_SPONGEFUNGI',
                autoPlay: {

                }
            },
            {
                id: 'TIMELINE_TEXT7',
                symbolName: 'TIMELINE_TEXT7',
                autoPlay: {

                }
            },
            {
                id: 'POPUP_EUKARYABEGIN',
                symbolName: 'POPUP_EUKARYABEGINS',
                autoPlay: {

                }
            },
            {
                id: 'extinction_event',
                symbolName: 'extinction_event',
                autoPlay: {

                }
            },
            {
                id: 'TEXT_BTN_EUKARYABEGINCopy7',
                symbolName: 'TEXTBUTTONPARENT',
                autoPlay: {

                }
            },
            {
                id: 'POPUP_ARCHAEABEGINS',
                symbolName: 'POPUP_ARCHAEABEGINS',
                autoPlay: {

                }
            },
            {
                id: 'extinction_event2',
                symbolName: 'extinction_event',
                autoPlay: {

                }
            },
            {
                id: 'TEXT_BTN_ICEAGE',
                symbolName: 'TEXTBUTTONPARENT',
                autoPlay: {

                }
            },
            {
                id: 'whatisthetreeoflifeCopy',
                symbolName: 'whatisthetreeoflife',
                autoPlay: {

                }
            },
            {
                id: 'TEXT_BTN_ORGANISMS',
                symbolName: 'TEXTBUTTONPARENT',
                autoPlay: {

                }
            },
            {
                id: 'TEXT_BTN_ARCHAEABEGIN',
                symbolName: 'TEXTBUTTONPARENT',
                autoPlay: {

                }
            },
            {
                id: 'TEXT_BTN_EUKARYABEGINCopy5',
                symbolName: 'TEXTBUTTONPARENT',
                autoPlay: {

                }
            },
            {
                id: 'popup_BASE',
                symbolName: 'extinctdomains_1',
                autoPlay: {

                }
            },
            {
                id: 'navlife',
                symbolName: 'navlife',
                autoPlay: {

                }
            },
            {
                id: 'POPUP_LIFEONEARTH',
                symbolName: 'POPUP_LIFEONEARTH',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_TEXT_BTN_EUKARYABEGINCopy4}": [
                ["style", "top", '6644px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "left", '537px'],
                ["style", "cursor", 'pointer']
            ],
            "${_POPUP_OXYGEN}": [
                ["style", "left", '283px']
            ],
            "${_section3chapter}": [
                ["style", "top", '359px'],
                ["transform", "scaleY", '1.05'],
                ["color", "background-color", 'rgba(0,0,0,0)'],
                ["style", "height", '62px'],
                ["style", "border-width", '1px'],
                ["style", "left", '959px'],
                ["style", "cursor", 'pointer']
            ],
            "${_EARTHFORMS2}": [
                ["style", "top", '124px'],
                ["transform", "scaleX", '0.06'],
                ["transform", "scaleY", '0.06'],
                ["style", "left", '613px']
            ],
            "${_TIMELINE_TEXT2}": [
                ["style", "top", '424px']
            ],
            "${_TEXT_BTN_PRELIFE2}": [
                ["style", "top", '9237px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "left", '598px'],
                ["style", "cursor", 'pointer']
            ],
            "${_AUDIO_BTN_EUKARYABEGINCopy6}": [
                ["style", "top", '6479px'],
                ["transform", "scaleY", '0.4'],
                ["transform", "scaleX", '0.4'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '579px']
            ],
            "${_TEXT_BTN_BRANCHING}": [
                ["style", "top", '8582px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "left", '374px'],
                ["style", "cursor", 'pointer']
            ],
            "${_organismsCopy2}": [
                ["style", "top", '9005px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '355px'],
                ["style", "width", '155px']
            ],
            "${_TIMELINE_TEXT6}": [
                ["style", "top", '160px']
            ],
            "${_Ellipse}": [
                ["style", "top", '430px'],
                ["style", "height", '13px'],
                ["color", "background-color", 'rgba(237,255,116,1.00)'],
                ["style", "left", '982px'],
                ["style", "width", '14px']
            ],
            "${_TEXT_BTN_ORGANISMS}": [
                ["style", "top", '8956px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "left", '385px'],
                ["style", "cursor", 'pointer']
            ],
            "${_TextCopy}": [
                ["style", "height", '20px'],
                ["style", "top", '8284px'],
                ["style", "left", '748px'],
                ["style", "width", '14px']
            ],
            "${_VIDEO-1Copy11}": [
                ["style", "top", '340px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "height", '168px'],
                ["style", "opacity", '1'],
                ["style", "left", '-290px'],
                ["color", "background-color", 'rgba(114,114,114,1)']
            ],
            "${_ONe_yes_oneCopy14}": [
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "opacity", '1'],
                ["style", "left", '-294px'],
                ["style", "font-size", '30px'],
                ["style", "top", '60px'],
                ["transform", "scaleY", '1'],
                ["subproperty", "filter.blur", '0px'],
                ["transform", "scaleX", '1'],
                ["style", "width", '259px']
            ],
            "${_TEXT_BTN_PRELIFE1}": [
                ["style", "top", '9314px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "left", '598px'],
                ["style", "cursor", 'pointer']
            ],
            "${_VIDEO-1Copy10}": [
                ["style", "top", '340px'],
                ["color", "background-color", 'rgba(114,114,114,1)'],
                ["style", "height", '168px'],
                ["style", "opacity", '1'],
                ["style", "left", '-290px'],
                ["subproperty", "filter.blur", '0px']
            ],
            "${_BOX-PAGE3Copy6}": [
                ["style", "top", '35px'],
                ["color", "background-color", 'rgba(209,209,194,1)'],
                ["style", "height", '497px'],
                ["style", "opacity", '1'],
                ["style", "left", '-308px'],
                ["subproperty", "filter.blur", '0px']
            ],
            "${_eukaryapopup}": [
                ["style", "top", '7069px'],
                ["style", "opacity", '0'],
                ["style", "left", '548px']
            ],
            "${_section4chapter}": [
                ["style", "top", '293px'],
                ["transform", "scaleY", '1.05'],
                ["style", "left", '959px'],
                ["style", "height", '62px'],
                ["style", "border-width", '1px'],
                ["style", "cursor", 'pointer'],
                ["color", "background-color", 'rgba(0,0,0,0)']
            ],
            "${_TEXT_BTN_ARCHAEABEGIN}": [
                ["style", "top", '8191px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "left", '706px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Origin_of_LifeCopy7}": [
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "font-weight", '900'],
                ["style", "left", '-294px'],
                ["style", "width", '305px'],
                ["style", "top", '87px'],
                ["style", "opacity", '1'],
                ["transform", "scaleY", '1'],
                ["style", "font-size", '35px'],
                ["style", "height", '43px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "word-spacing", '0px'],
                ["transform", "scaleX", '1']
            ],
            "${_AUDIO_BTN_EUKARYABEGIN}": [
                ["style", "top", '7339px'],
                ["transform", "scaleY", '0.4'],
                ["transform", "scaleX", '0.4'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '577px']
            ],
            "${_section3-text2}": [
                ["style", "top", '175px'],
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "opacity", '0'],
                ["style", "height", '83px'],
                ["style", "font-weight", '100'],
                ["style", "left", '596px'],
                ["style", "font-size", '24px']
            ],
            "${_ONe_yes_oneCopy8}": [
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "opacity", '1'],
                ["style", "left", '-294px'],
                ["style", "font-size", '30px'],
                ["style", "top", '60px'],
                ["transform", "scaleY", '1'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "width", '234px'],
                ["transform", "scaleX", '1']
            ],
            "${_TEXT_BTN_EUKARYABEGINCopy10}": [
                ["style", "top", '5804px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "left", '537px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Origin_of_LifeCopy12}": [
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "font-weight", '900'],
                ["style", "left", '-294px'],
                ["style", "width", '305px'],
                ["style", "top", '87px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "font-size", '35px'],
                ["style", "height", '43px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "word-spacing", '0px'],
                ["style", "opacity", '1']
            ],
            "${_TEXT_BTN_EUKARYABEGINCopy5}": [
                ["style", "top", '6549px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "left", '537px'],
                ["style", "cursor", 'pointer']
            ],
            "${_TIMELINE_TEXT1}": [
                ["style", "top", '477px'],
                ["style", "overflow", 'hidden']
            ],
            "${_TEXT_BTN_LGT}": [
                ["style", "top", '8534px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "left", '545px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '579px'],
                ["style", "width", '1020px']
            ],
            "${_POPUP_HELPBAR}": [
                ["style", "top", '128px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "left", '-481px'],
                ["style", "width", '1925px']
            ],
            "${_ONe_yes_oneCopy}": [
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "opacity", '1'],
                ["style", "left", '14px'],
                ["style", "font-size", '30px'],
                ["style", "top", '3026px'],
                ["transform", "scaleY", '1'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "width", '234px'],
                ["transform", "scaleX", '1']
            ],
            "${_Origin_of_LifeCopy}": [
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "font-weight", '900'],
                ["style", "left", '14px'],
                ["style", "width", '255px'],
                ["style", "top", '3053px'],
                ["style", "opacity", '1'],
                ["transform", "scaleY", '1'],
                ["style", "font-size", '41px'],
                ["style", "height", '43px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "word-spacing", '0px'],
                ["transform", "scaleX", '1']
            ],
            "${_EarlyLifeGroup}": [
                ["style", "top", '9149px'],
                ["style", "left", '433px'],
                ["style", "clip", [454,419,454,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_TOC-bodyCopy6}": [
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "font-weight", '100'],
                ["style", "left", '-294px'],
                ["style", "width", '234px'],
                ["style", "top", '139px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "font-size", '15px'],
                ["style", "height", '154px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "word-spacing", '0px'],
                ["style", "opacity", '1']
            ],
            "${_TEXT_BTN_TREE}": [
                ["style", "top", '8669px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "left", '801px'],
                ["style", "cursor", 'pointer']
            ],
            "${_primordialsoup}": [
                ["style", "top", '9358px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '567px'],
                ["style", "width", '155px']
            ],
            "${_TEXT_BTN_PRELIFE3}": [
                ["style", "top", '9159px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "left", '598px'],
                ["style", "cursor", 'pointer']
            ],
            "${_ONe_yes_oneCopy6}": [
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "opacity", '1'],
                ["style", "left", '-294px'],
                ["style", "font-size", '30px'],
                ["style", "top", '60px'],
                ["transform", "scaleY", '1'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "width", '234px'],
                ["transform", "scaleX", '1']
            ],
            "${_EXIT_BUTTON}": [
                ["style", "cursor", 'pointer']
            ],
            "${_archaeapopup}": [
                ["style", "top", '7807px'],
                ["style", "opacity", '0'],
                ["style", "left", '680px']
            ],
            "${_Domain_Eukarya_is_BornCopy9}": [
                ["style", "top", '6068px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '481px'],
                ["style", "width", '207px']
            ],
            "${_Origin_of_Life}": [
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "font-weight", '900'],
                ["style", "left", '13px'],
                ["style", "width", '255px'],
                ["style", "top", '2551px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "font-size", '41px'],
                ["style", "height", '43px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "word-spacing", '0px'],
                ["style", "opacity", '1']
            ],
            "${_MAINCONTROL}": [
                ["style", "top", '-10173px'],
                ["style", "left", '5px']
            ],
            "${_popup_BASE}": [
                ["style", "left", '611px'],
                ["style", "top", '8376px']
            ],
            "${_whatisthetreeoflife_subtext}": [
                ["style", "top", '381px'],
                ["style", "left", '642px']
            ],
            "${_LongTreeChapters}": [
                ["style", "top", '-1731px'],
                ["transform", "scaleY", '0.13526'],
                ["transform", "scaleX", '0.13526'],
                ["style", "left", '594px'],
                ["style", "clip", [452,764,3167,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_evolutionarybranching}": [
                ["style", "top", '8627px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '344px'],
                ["style", "width", '155px']
            ],
            "${_AUDIO_BTN_EUKARYABEGINCopy2}": [
                ["style", "top", '6757px'],
                ["transform", "scaleY", '0.4'],
                ["transform", "scaleX", '0.4'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '579px']
            ],
            "${_TEXTBUTTONPARENT}": [
                ["style", "left", '1093px']
            ],
            "${_AUDIO_BTN_PRELIFE2}": [
                ["style", "top", '9232px'],
                ["transform", "scaleY", '0.4'],
                ["transform", "scaleX", '0.4'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '640px']
            ],
            "${_ONe_yes_one}": [
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "opacity", '1'],
                ["style", "left", '13px'],
                ["style", "font-size", '30px'],
                ["style", "top", '2524px'],
                ["transform", "scaleY", '1'],
                ["subproperty", "filter.blur", '0px'],
                ["transform", "scaleX", '1'],
                ["style", "width", '234px']
            ],
            "${_TIMELINE_TEXT7}": [
                ["style", "top", '87px']
            ],
            "${_ONe_yes_oneCopy10}": [
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "opacity", '1'],
                ["style", "left", '-294px'],
                ["style", "font-size", '27px'],
                ["style", "top", '60px'],
                ["transform", "scaleY", '1'],
                ["subproperty", "filter.blur", '0px'],
                ["transform", "scaleX", '1'],
                ["style", "width", '271px']
            ],
            "${_whatisthetreeoflifeCopy}": [
                ["style", "top", '120px'],
                ["transform", "scaleY", '1.24027'],
                ["transform", "scaleX", '1.24027'],
                ["style", "opacity", '1'],
                ["style", "left", '235px']
            ],
            "${_AUDIO_BTN_ORGANISMS}": [
                ["style", "top", '8951px'],
                ["transform", "scaleY", '0.4'],
                ["transform", "scaleX", '0.4'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '427px']
            ],
            "${_ERAS}": [
                ["style", "top", '5616px'],
                ["style", "height", '4538px'],
                ["style", "left", '101px'],
                ["style", "width", '854px']
            ],
            "${_Domain_Eukarya_is_BornCopy3}": [
                ["style", "top", '6736px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '481px'],
                ["style", "width", '207px']
            ],
            "${_Domain_Eukarya_is_BornCopy2}": [
                ["style", "top", '6800px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '481px'],
                ["style", "width", '207px']
            ],
            "${_organisms}": [
                ["style", "top", '9005px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '355px'],
                ["style", "width", '155px']
            ],
            "${_AUDIO_BTN_PRELIFE4}": [
                ["style", "top", '9081px'],
                ["transform", "scaleY", '0.4'],
                ["transform", "scaleX", '0.4'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '640px']
            ],
            "${_extinction_event}": [
                ["style", "top", '7787px'],
                ["transform", "scaleX", '0.34667'],
                ["transform", "scaleY", '0.34668'],
                ["style", "left", '656px']
            ],
            "${_Domain_Eukarya_is_BornCopy7}": [
                ["style", "top", '6447px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '481px'],
                ["style", "width", '207px']
            ],
            "${_help_button}": [
                ["style", "top", '588px'],
                ["style", "left", '642px'],
                ["style", "cursor", 'pointer']
            ],
            "${_lateralgenetransfer}": [
                ["style", "top", '8579px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '515px'],
                ["style", "width", '155px']
            ],
            "${_firstoceans}": [
                ["style", "top", '9135px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '567px'],
                ["style", "width", '155px']
            ],
            "${_TEXT_BTN_EUKARYABEGINCopy7}": [
                ["style", "top", '6409px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "left", '537px'],
                ["style", "cursor", 'pointer']
            ],
            "${_littletree}": [
                ["style", "top", '8769px'],
                ["style", "height", '181px'],
                ["style", "opacity", '0'],
                ["style", "left", '767px'],
                ["style", "width", '163px']
            ],
            "${_TextCopy4}": [
                ["style", "top", '8476px'],
                ["style", "height", '20px'],
                ["style", "left", '397px'],
                ["style", "width", '14px']
            ],
            "${_AUDIO_BTN_PRELIFE3}": [
                ["style", "top", '9154px'],
                ["transform", "scaleY", '0.4'],
                ["transform", "scaleX", '0.4'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '640px']
            ],
            "${_ONe_yes_oneCopy9}": [
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "opacity", '1'],
                ["style", "left", '-294px'],
                ["style", "font-size", '30px'],
                ["style", "top", '60px'],
                ["transform", "scaleY", '1'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "width", '234px'],
                ["transform", "scaleX", '1']
            ],
            "${_AUDIO_BTN_PRELIFE1}": [
                ["style", "top", '9309px'],
                ["transform", "scaleY", '0.4'],
                ["transform", "scaleX", '0.4'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '640px']
            ],
            "${_TOC-bodyCopy8}": [
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "font-weight", '100'],
                ["style", "left", '-294px'],
                ["style", "width", '248px'],
                ["style", "top", '139px'],
                ["style", "opacity", '1'],
                ["transform", "scaleY", '1'],
                ["style", "font-size", '15px'],
                ["style", "height", '154px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "word-spacing", '0px'],
                ["transform", "scaleX", '1']
            ],
            "${_EARTHformation}": [
                ["style", "left", '947px'],
                ["style", "top", '9427px']
            ],
            "${_Domain_Eukarya_is_BornCopy6}": [
                ["style", "top", '6522px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '481px'],
                ["style", "width", '207px']
            ],
            "${_ONe_yes_oneCopy11}": [
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "opacity", '1'],
                ["style", "left", '-294px'],
                ["style", "font-size", '30px'],
                ["style", "top", '60px'],
                ["transform", "scaleY", '1'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "width", '234px'],
                ["transform", "scaleX", '1']
            ],
            "${_vcontainer1}": [
                ["style", "top", '340px'],
                ["color", "background-color", 'rgba(114,114,114,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '168px'],
                ["style", "opacity", '1'],
                ["style", "left", '-290px'],
                ["subproperty", "filter.blur", '0px']
            ],
            "${_AUDIO_BTN_EUKARYABEGINCopy8}": [
                ["style", "top", '6331px'],
                ["transform", "scaleY", '0.4'],
                ["transform", "scaleX", '0.4'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '579px']
            ],
            "${_ONe_yes_oneCopy2}": [
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "opacity", '1'],
                ["style", "left", '-294px'],
                ["style", "font-size", '30px'],
                ["style", "top", '60px'],
                ["transform", "scaleY", '1'],
                ["subproperty", "filter.blur", '0px'],
                ["transform", "scaleX", '1'],
                ["style", "width", '234px']
            ],
            "${_Genetic_Drift_Popup}": [
                ["style", "left", '682px'],
                ["style", "top", '7623px']
            ],
            "${_LONGTREECopy}": [
                ["style", "top", '5592px'],
                ["transform", "scaleY", '1.25'],
                ["transform", "scaleX", '1.25'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "left", '96px'],
                ["style", "clip", [3073,764,3080,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_long_white_arrow}": [
                ["style", "top", '8192px'],
                ["style", "left", '549px'],
                ["style", "clip", [0,150,50,150], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Rectangle}": [
                ["style", "left", '-23px'],
                ["style", "top", '-638px']
            ],
            "${_DOWN}": [
                ["style", "top", '508px'],
                ["transform", "scaleY", '0.51807'],
                ["transform", "scaleX", '0.51807'],
                ["style", "left", '947px'],
                ["style", "cursor", 'pointer']
            ],
            "${_long_white_arrowCopy3}": [
                ["style", "top", '8389px'],
                ["transform", "scaleY", '0.65'],
                ["transform", "rotateZ", '97deg'],
                ["transform", "scaleX", '0.65'],
                ["style", "left", '512px'],
                ["style", "clip", [0,150,50,150], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_TEXT_BTN_EUKARYABEGINCopy9}": [
                ["style", "top", '6030px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "left", '537px'],
                ["style", "cursor", 'pointer']
            ],
            "${_VIDEO-1Copy8}": [
                ["style", "top", '340px'],
                ["color", "background-color", 'rgba(114,114,114,1)'],
                ["style", "height", '168px'],
                ["style", "opacity", '1'],
                ["style", "left", '-290px'],
                ["subproperty", "filter.blur", '0px']
            ],
            "${_lateralgenetransferCopy}": [
                ["style", "top", '8229px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '650px'],
                ["style", "width", '207px']
            ],
            "${_Domain_Eukarya_is_BornCopy5}": [
                ["style", "top", '6587px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '481px'],
                ["style", "width", '207px']
            ],
            "${_Origin_of_LifeCopy11}": [
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "font-weight", '900'],
                ["style", "left", '-294px'],
                ["style", "width", '305px'],
                ["style", "top", '87px'],
                ["style", "opacity", '1'],
                ["transform", "scaleY", '1'],
                ["style", "font-size", '35px'],
                ["style", "height", '43px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "word-spacing", '0px'],
                ["transform", "scaleX", '1']
            ],
            "${_BOX-PAGE3Copy10}": [
                ["style", "top", '35px'],
                ["color", "background-color", 'rgba(209,209,194,1)'],
                ["style", "height", '497px'],
                ["style", "opacity", '1'],
                ["style", "left", '-308px'],
                ["subproperty", "filter.blur", '0px']
            ],
            "${_Origin_of_LifeCopy2}": [
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "font-weight", '900'],
                ["style", "left", '-294px'],
                ["style", "width", '305px'],
                ["style", "top", '87px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "font-size", '35px'],
                ["style", "height", '43px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "word-spacing", '0px'],
                ["style", "opacity", '1']
            ],
            "${_ONe_yes_oneCopy7}": [
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "opacity", '1'],
                ["style", "left", '-294px'],
                ["style", "font-size", '30px'],
                ["style", "top", '60px'],
                ["transform", "scaleY", '1'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "width", '234px'],
                ["transform", "scaleX", '1']
            ],
            "${_BOX-PAGE3Copy9}": [
                ["style", "top", '35px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "height", '497px'],
                ["style", "opacity", '1'],
                ["style", "left", '-308px'],
                ["color", "background-color", 'rgba(209,209,194,1)']
            ],
            "${_long_white_arrowCopy2}": [
                ["style", "top", '8351px'],
                ["transform", "scaleY", '0.65'],
                ["transform", "rotateZ", '130deg'],
                ["transform", "scaleX", '0.65'],
                ["style", "left", '539px'],
                ["style", "clip", [0,150,50,150], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_TIMELINE_TEXT4}": [
                ["style", "top", '292px']
            ],
            "${_TEXT_BTN_EUKARYABEGINCopy}": [
                ["style", "top", '6827px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "left", '537px'],
                ["style", "cursor", 'pointer']
            ],
            "${_long_white_arrowCopy}": [
                ["style", "top", '8600px'],
                ["style", "clip", [0,85,50,85], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '453px'],
                ["transform", "rotateZ", '131deg']
            ],
            "${_TextCopy3}": [
                ["style", "height", '20px'],
                ["style", "top", '8348px'],
                ["style", "left", '557px'],
                ["style", "width", '14px']
            ],
            "${_TOC-bodyCopy9}": [
                ["style", "-webkit-transform-origin", [50,52], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,52],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,52],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,52],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,52],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "width", '248px'],
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "font-weight", '100'],
                ["style", "left", '-294px'],
                ["style", "font-size", '15px'],
                ["style", "top", '139px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "overflow", 'visible'],
                ["style", "height", '186px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "word-spacing", '0px'],
                ["style", "opacity", '1']
            ],
            "${_BOX-PAGE3Copy}": [
                ["style", "top", '35px'],
                ["color", "background-color", 'rgba(209,209,194,1)'],
                ["style", "height", '497px'],
                ["style", "opacity", '1'],
                ["style", "left", '-308px'],
                ["subproperty", "filter.blur", '0px']
            ],
            "${_ORIGIN-ARROWS}": [
                ["style", "top", '0px'],
                ["style", "left", '26px'],
                ["style", "clip", [0,365,454,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Origin_of_LifeCopy6}": [
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "font-weight", '900'],
                ["style", "left", '-294px'],
                ["style", "width", '305px'],
                ["style", "top", '87px'],
                ["style", "opacity", '1'],
                ["transform", "scaleY", '1'],
                ["style", "font-size", '35px'],
                ["style", "height", '43px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "word-spacing", '0px'],
                ["transform", "scaleX", '1']
            ],
            "${_bacteriapopup}": [
                ["style", "top", '7807px'],
                ["style", "opacity", '0'],
                ["style", "left", '401px']
            ],
            "${_Rectangle4}": [
                ["color", "background-color", 'rgba(119,147,162,1.00)'],
                ["style", "height", '577px'],
                ["style", "top", '9453px'],
                ["style", "left", '933px'],
                ["style", "width", '27px']
            ],
            "${_TEXT_BTN_ICEAGE}": [
                ["style", "top", '6762px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "left", '706px'],
                ["style", "cursor", 'pointer']
            ],
            "${_TEXT_BTN_PRELIFE4}": [
                ["style", "top", '9086px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "left", '598px'],
                ["style", "cursor", 'pointer']
            ],
            "${_audioicon}": [
                ["style", "top", '7751px'],
                ["style", "left", '411px'],
                ["style", "cursor", 'pointer']
            ],
            "${_long_white_arrowCopy5}": [
                ["style", "top", '8404px'],
                ["style", "left", '377px'],
                ["style", "clip", [0,265,50,267], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "rotateZ", '71deg']
            ],
            "${_AUDIO_BTN_EUKARYABEGINCopy3}": [
                ["style", "top", '6693px'],
                ["transform", "scaleY", '0.4'],
                ["transform", "scaleX", '0.4'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '579px']
            ],
            "${_VIDEO-1Copy7}": [
                ["style", "top", '340px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "height", '168px'],
                ["style", "opacity", '1'],
                ["style", "left", '-290px'],
                ["color", "background-color", 'rgba(114,114,114,1)']
            ],
            "${_Rectangle2}": [
                ["style", "border-width", '0px'],
                ["style", "left", '1015px']
            ],
            "${_UP}": [
                ["style", "top", '15px'],
                ["transform", "scaleY", '0.51807'],
                ["transform", "scaleX", '0.51807'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '947px']
            ],
            "${_Domain_Eukarya_is_BornCopy11}": [
                ["style", "top", '5789px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '481px'],
                ["style", "width", '207px']
            ],
            "${_TOC-bodyCopy7}": [
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "font-weight", '100'],
                ["style", "left", '-294px'],
                ["style", "width", '259px'],
                ["style", "top", '139px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "font-size", '15px'],
                ["style", "height", '154px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "word-spacing", '0px'],
                ["style", "opacity", '1']
            ],
            "${_AUDIO_BTN_EUKARYABEGINCopy11}": [
                ["style", "top", '5746px'],
                ["transform", "scaleY", '0.4'],
                ["transform", "scaleX", '0.4'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '579px']
            ],
            "${_ONe_yes_oneCopy13}": [
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "opacity", '1'],
                ["style", "left", '-294px'],
                ["style", "font-size", '30px'],
                ["style", "top", '60px'],
                ["transform", "scaleY", '1'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "width", '234px'],
                ["transform", "scaleX", '1']
            ],
            "${_TIMELINE_TEXT3}": [
                ["style", "top", '358px']
            ],
            "${_Domain_Eukarya_is_BornCopy8}": [
                ["style", "top", '6374px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '481px'],
                ["style", "width", '207px']
            ],
            "${_AUDIO_BTN_LGT}": [
                ["style", "top", '8529px'],
                ["transform", "scaleY", '0.4'],
                ["transform", "scaleX", '0.4'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '587px']
            ],
            "${_AUDIO_BTN_EUKARYABEGINCopy9}": [
                ["style", "top", '6025px'],
                ["transform", "scaleY", '0.4'],
                ["transform", "scaleX", '0.4'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '579px']
            ],
            "${_AUDIO_BTN_EUKARYABEGINCopy}": [
                ["style", "top", '6822px'],
                ["transform", "scaleY", '0.4'],
                ["transform", "scaleX", '0.4'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '579px']
            ],
            "${_AUDIO_BTN_EUKARYABEGINCopy7}": [
                ["style", "top", '6404px'],
                ["transform", "scaleY", '0.4'],
                ["transform", "scaleX", '0.4'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '579px']
            ],
            "${_TEXT_BTN_EUKARYABEGINCopy6}": [
                ["style", "top", '6484px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "left", '537px'],
                ["style", "cursor", 'pointer']
            ],
            "${_TOC-body}": [
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "font-weight", '100'],
                ["style", "left", '13px'],
                ["style", "width", '234px'],
                ["style", "top", '2603px'],
                ["style", "opacity", '1'],
                ["transform", "scaleY", '1'],
                ["style", "font-size", '15px'],
                ["style", "height", '154px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "word-spacing", '0px'],
                ["transform", "scaleX", '1']
            ],
            "${_TEXT_BTN_EUKARYABEGINCopy8}": [
                ["style", "top", '6336px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "left", '537px'],
                ["style", "cursor", 'pointer']
            ],
            "${_section3text1}": [
                ["style", "top", '85px'],
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "height", '83px'],
                ["style", "opacity", '0'],
                ["style", "left", '592px'],
                ["style", "font-size", '39px']
            ],
            "${_Lateral-Gene-transfer-LGT-linespng-02}": [
                ["style", "top", '5711px'],
                ["style", "height", '2915px'],
                ["style", "clip", [2915,419,2915,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '361px'],
                ["style", "width", '419px']
            ],
            "${_Origin_of_LifeCopy9}": [
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "font-weight", '900'],
                ["style", "left", '-294px'],
                ["style", "width", '305px'],
                ["style", "top", '87px'],
                ["style", "opacity", '1'],
                ["transform", "scaleY", '1'],
                ["style", "font-size", '35px'],
                ["style", "height", '43px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "word-spacing", '0px'],
                ["transform", "scaleX", '1']
            ],
            "${_VIDEO-1Copy9}": [
                ["style", "top", '340px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "height", '168px'],
                ["style", "opacity", '1'],
                ["style", "left", '-290px'],
                ["color", "background-color", 'rgba(114,114,114,1)']
            ],
            "${_earthsatmosphere}": [
                ["style", "top", '9280px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '550px'],
                ["style", "width", '191px']
            ],
            "${_TOC-bodyCopy12}": [
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "font-weight", '100'],
                ["style", "left", '-294px'],
                ["style", "width", '234px'],
                ["style", "top", '139px'],
                ["style", "opacity", '1'],
                ["transform", "scaleY", '1'],
                ["style", "font-size", '15px'],
                ["style", "height", '154px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "word-spacing", '0px'],
                ["transform", "scaleX", '1']
            ],
            "${_TOC-bodyCopy10}": [
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "font-weight", '100'],
                ["style", "left", '-294px'],
                ["style", "width", '234px'],
                ["style", "top", '139px'],
                ["style", "opacity", '1'],
                ["transform", "scaleY", '1'],
                ["style", "font-size", '15px'],
                ["style", "height", '154px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "word-spacing", '0px'],
                ["transform", "scaleX", '1']
            ],
            "${_section7chapter}": [
                ["style", "top", '89px'],
                ["transform", "scaleY", '1.05'],
                ["color", "background-color", 'rgba(0,0,0,0)'],
                ["style", "height", '68px'],
                ["style", "border-width", '1px'],
                ["style", "left", '959px'],
                ["style", "cursor", 'pointer']
            ],
            "${_AUDIO_BTN_ARCHAEABEGIN}": [
                ["style", "top", '8186px'],
                ["transform", "scaleY", '0.4'],
                ["transform", "scaleX", '0.4'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '748px']
            ],
            "${_Rectangle3}": [
                ["style", "height", '577px'],
                ["style", "border-width", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)']
            ],
            "${_VIDEO-1Copy12}": [
                ["style", "top", '340px'],
                ["color", "background-color", 'rgba(114,114,114,1)'],
                ["style", "height", '168px'],
                ["style", "opacity", '1'],
                ["style", "left", '-290px'],
                ["subproperty", "filter.blur", '0px']
            ],
            "${_section1chapter}": [
                ["style", "top", '478px'],
                ["transform", "scaleY", '1.05'],
                ["color", "background-color", 'rgba(0,0,0,0.00)'],
                ["style", "left", '959px'],
                ["style", "border-width", '1px'],
                ["style", "cursor", 'pointer']
            ],
            "${_TEXT_BTN_EUKARYABEGINCopy11}": [
                ["style", "top", '5751px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "left", '537px'],
                ["style", "cursor", 'pointer']
            ],
            "${_PUBLIC-TREE-OF-LIFE-RESIZE-5-14}": [
                ["style", "top", '-5100px'],
                ["transform", "scaleY", '1.00092'],
                ["style", "bottom", 'auto'],
                ["style", "overflow", 'visible'],
                ["style", "left", '0px'],
                ["style", "clip", [0,960,5097,353], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_navlife}": [
                ["style", "top", '240px'],
                ["style", "left", '780px'],
                ["transform", "scaleY", '0.09547'],
                ["transform", "scaleX", '0.09547']
            ],
            "${_TEXT_BTN_EUKARYABEGINCopy3}": [
                ["style", "top", '6698px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "left", '537px'],
                ["style", "cursor", 'pointer']
            ],
            "${_AUDIO_BTN_EUKARYABEGINCopy10}": [
                ["style", "top", '5799px'],
                ["transform", "scaleY", '0.4'],
                ["transform", "scaleX", '0.4'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '579px']
            ],
            "${_AUDIO_BTN_BRANCHING}": [
                ["style", "top", '8577px'],
                ["transform", "scaleY", '0.4'],
                ["transform", "scaleX", '0.4'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '416px']
            ],
            "${_sunsradiation}": [
                ["style", "top", '9208px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '567px'],
                ["style", "width", '155px']
            ],
            "${_TOC-bodyCopy}": [
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "font-weight", '100'],
                ["style", "left", '14px'],
                ["style", "width", '234px'],
                ["style", "top", '3105px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "font-size", '15px'],
                ["style", "height", '154px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "word-spacing", '0px'],
                ["style", "opacity", '1']
            ],
            "${_TextCopy5}": [
                ["style", "top", '8719px'],
                ["style", "height", '20px'],
                ["style", "left", '492px'],
                ["style", "width", '14px']
            ],
            "${_BOX-PAGE3Copy5}": [
                ["style", "top", '35px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "height", '497px'],
                ["style", "opacity", '1'],
                ["style", "left", '-308px'],
                ["color", "background-color", 'rgba(209,209,194,1)']
            ],
            "${_ONe_yes_oneCopy12}": [
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "opacity", '1'],
                ["style", "left", '-294px'],
                ["style", "font-size", '30px'],
                ["style", "top", '60px'],
                ["transform", "scaleY", '1'],
                ["subproperty", "filter.blur", '0px'],
                ["transform", "scaleX", '1'],
                ["style", "width", '234px']
            ],
            "${_Domain_Eukarya_is_BornCopy4}": [
                ["style", "top", '6682px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '481px'],
                ["style", "width", '207px']
            ],
            "${_BOX-PAGE3Copy8}": [
                ["style", "top", '35px'],
                ["color", "background-color", 'rgba(209,209,194,1)'],
                ["style", "height", '497px'],
                ["style", "opacity", '1'],
                ["style", "left", '-308px'],
                ["subproperty", "filter.blur", '0px']
            ],
            "${_POPUP_PRELIFE1}": [
                ["style", "top", '35px']
            ],
            "${_AUDIO_BTN_EUKARYABEGINCopy5}": [
                ["style", "top", '6544px'],
                ["transform", "scaleY", '0.4'],
                ["transform", "scaleX", '0.4'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '579px']
            ],
            "${_TextCopy2}": [
                ["style", "top", '8307px'],
                ["style", "height", '20px'],
                ["style", "left", '666px'],
                ["style", "width", '14px']
            ],
            "${_section2chapter}": [
                ["color", "background-color", 'rgba(0,0,0,0)'],
                ["transform", "scaleY", '1.05'],
                ["style", "top", '425px'],
                ["style", "height", '50px'],
                ["style", "left", '959px'],
                ["style", "border-width", '1px'],
                ["style", "cursor", 'pointer']
            ],
            "${_TEXT_BTN_EUKARYABEGIN}": [
                ["style", "top", '7344px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "left", '535px'],
                ["style", "cursor", 'pointer']
            ],
            "${_AUDIO_BTN_EUKARYABEGINCopy4}": [
                ["style", "top", '6639px'],
                ["transform", "scaleY", '0.4'],
                ["transform", "scaleX", '0.4'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '579px']
            ],
            "${_extinction_event2}": [
                ["transform", "scaleX", '0.26529'],
                ["style", "left", '714px'],
                ["transform", "scaleY", '0.2653'],
                ["style", "top", '7181px']
            ],
            "${_section5chapter}": [
                ["color", "background-color", 'rgba(0,0,0,0)'],
                ["transform", "scaleY", '1.05'],
                ["style", "top", '227px'],
                ["style", "height", '62px'],
                ["style", "left", '959px'],
                ["style", "border-width", '1px'],
                ["style", "cursor", 'pointer']
            ],
            "${_TOC-bodyCopy2}": [
                ["style", "width", '248px'],
                ["transform", "scaleX", '1'],
                ["style", "font-weight", '100'],
                ["style", "left", '-294px'],
                ["style", "font-size", '15px'],
                ["style", "top", '139px'],
                ["style", "opacity", '1'],
                ["transform", "scaleY", '1'],
                ["style", "overflow", 'visible'],
                ["style", "height", '154px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "word-spacing", '0px'],
                ["color", "color", 'rgba(0,0,0,1)']
            ],
            "${_Domain_Eukarya_is_BornCopy10}": [
                ["style", "top", '5842px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '481px'],
                ["style", "width", '207px']
            ],
            "${_BOX-PAGE3Copy7}": [
                ["style", "top", '35px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "height", '497px'],
                ["style", "opacity", '1'],
                ["style", "left", '-308px'],
                ["color", "background-color", 'rgba(209,209,194,1)']
            ],
            "${_HELPEXIT_BUTTON2}": [
                ["style", "cursor", 'pointer']
            ],
            "${_section6chapter}": [
                ["color", "background-color", 'rgba(0,0,0,0)'],
                ["transform", "scaleY", '1.05'],
                ["style", "border-width", '1px'],
                ["style", "height", '62px'],
                ["style", "left", '959px'],
                ["style", "cursor", 'pointer'],
                ["style", "top", '161px']
            ],
            "${_Origin_of_LifeCopy10}": [
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "font-weight", '900'],
                ["style", "left", '-294px'],
                ["style", "width", '305px'],
                ["style", "top", '87px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "font-size", '35px'],
                ["style", "height", '43px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "word-spacing", '0px'],
                ["style", "opacity", '1']
            ],
            "${_ORIGIN}": [
                ["style", "top", '53px'],
                ["transform", "scaleY", '0.12135'],
                ["transform", "scaleX", '0.12135'],
                ["style", "opacity", '0'],
                ["style", "left", '546px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Domain_Eukarya_is_BornCopy}": [
                ["style", "top", '6865px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '481px'],
                ["style", "width", '207px']
            ],
            "${_Origin_of_LifeCopy8}": [
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "font-weight", '900'],
                ["style", "left", '-294px'],
                ["style", "width", '305px'],
                ["style", "top", '87px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "font-size", '35px'],
                ["style", "height", '43px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "word-spacing", '0px'],
                ["style", "opacity", '1']
            ],
            "${_treestumpphotofortree2Copy}": [
                ["style", "top", '-5px'],
                ["transform", "scaleY", '1.00523'],
                ["style", "height", '636px'],
                ["transform", "scaleX", '1.00523'],
                ["style", "left", '2px'],
                ["style", "width", '955px']
            ],
            "${_AUDIO_BTN_TREE}": [
                ["style", "top", '8664px'],
                ["transform", "scaleY", '0.4'],
                ["transform", "scaleX", '0.4'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '843px']
            ],
            "${_long_white_arrowCopy4}": [
                ["style", "top", '8380px'],
                ["transform", "scaleY", '0.65'],
                ["transform", "rotateZ", '29deg'],
                ["transform", "scaleX", '0.65'],
                ["style", "left", '500px'],
                ["style", "clip", [0,150,50,150], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Domain_Eukarya_is_Born}": [
                ["style", "top", '7386px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '479px'],
                ["style", "width", '207px']
            ],
            "${_TIMELINE_TEXT5}": [
                ["style", "top", '226px']
            ],
            "${_TOC-bodyCopy11}": [
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "font-weight", '100'],
                ["style", "left", '-294px'],
                ["style", "width", '234px'],
                ["style", "top", '139px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "font-size", '15px'],
                ["style", "height", '154px'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "word-spacing", '0px'],
                ["style", "opacity", '1']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 12500,
            autoPlay: true,
            labels: {
                "Intro": 0,
                "Section1": 2000,
                "Section2": 3500,
                "Section3": 5000,
                "Section4": 6500,
                "Section5": 8000,
                "Section6": 9500,
                "Section7": 11000,
                "Section8": 12500
            },
            timeline: [
                { id: "eid1268", tween: [ "style", "${_Genetic_Drift_Popup}", "left", '682px', { fromValue: '682px'}], position: 8000, duration: 0, easing: "easeInExpo" },
                { id: "eid172", tween: [ "style", "${_BOX-PAGE3Copy8}", "left", '0px', { fromValue: '-308px'}], position: 9000, duration: 500, easing: "easeInQuad" },
                { id: "eid173", tween: [ "style", "${_BOX-PAGE3Copy8}", "left", '-292px', { fromValue: '0px'}], position: 9500, duration: 500, easing: "easeInQuad" },
                { id: "eid1390", tween: [ "style", "${_AUDIO_BTN_EUKARYABEGIN}", "top", '7339px', { fromValue: '7339px'}], position: 9500, duration: 0 },
                { id: "eid186", tween: [ "style", "${_Origin_of_LifeCopy12}", "left", '14px', { fromValue: '-294px'}], position: 12000, duration: 500, easing: "easeInQuad" },
                { id: "eid187", tween: [ "style", "${_Origin_of_LifeCopy12}", "left", '14px', { fromValue: '14px'}], position: 12500, duration: 0, easing: "easeInQuad" },
                { id: "eid1504", tween: [ "style", "${_TEXT_BTN_EUKARYABEGINCopy10}", "top", '5804px', { fromValue: '5804px'}], position: 9500, duration: 0 },
                { id: "eid136", tween: [ "style", "${_Origin_of_LifeCopy7}", "left", '14px', { fromValue: '-294px'}], position: 4500, duration: 500, easing: "easeInQuad" },
                { id: "eid137", tween: [ "style", "${_Origin_of_LifeCopy7}", "left", '-278px', { fromValue: '14px'}], position: 5000, duration: 500, easing: "easeInQuad" },
                { id: "eid837", tween: [ "transform", "${_extinction_event2}", "scaleY", '0.2653', { fromValue: '0.2653'}], position: 11000, duration: 0 },
                { id: "eid444", tween: [ "style", "${_Rectangle}", "left", '-23px', { fromValue: '-23px'}], position: 2000, duration: 0, easing: "easeInQuad" },
                { id: "eid182", tween: [ "style", "${_BOX-PAGE3Copy9}", "left", '0px', { fromValue: '-308px'}], position: 10500, duration: 500, easing: "easeInQuad" },
                { id: "eid183", tween: [ "style", "${_BOX-PAGE3Copy9}", "left", '-292px', { fromValue: '0px'}], position: 11000, duration: 500, easing: "easeInQuad" },
                { id: "eid1170", tween: [ "style", "${_TEXT_BTN_LGT}", "top", '8534px', { fromValue: '8534px'}], position: 5000, duration: 0 },
                { id: "eid140", tween: [ "style", "${_VIDEO-1Copy7}", "left", '18px', { fromValue: '-290px'}], position: 4500, duration: 500, easing: "easeInQuad" },
                { id: "eid141", tween: [ "style", "${_VIDEO-1Copy7}", "left", '-274px', { fromValue: '18px'}], position: 5000, duration: 500, easing: "easeInQuad" },
                { id: "eid144", tween: [ "style", "${_ONe_yes_oneCopy10}", "left", '14px', { fromValue: '-294px'}], position: 6000, duration: 500, easing: "easeInQuad" },
                { id: "eid145", tween: [ "style", "${_ONe_yes_oneCopy10}", "left", '-278px', { fromValue: '14px'}], position: 6500, duration: 500, easing: "easeInQuad" },
                { id: "eid3206", tween: [ "style", "${_long_white_arrowCopy5}", "left", '377px', { fromValue: '377px'}], position: 6500, duration: 0 },
                { id: "eid25", tween: [ "style", "${_vcontainer1}", "left", '18px', { fromValue: '-290px'}], position: 3000, duration: 500, easing: "easeInQuad" },
                { id: "eid55", tween: [ "style", "${_vcontainer1}", "left", '-274px', { fromValue: '18px'}], position: 3500, duration: 500, easing: "easeInQuad" },
                { id: "eid962", tween: [ "style", "${_TEXT_BTN_PRELIFE1}", "top", '9314px', { fromValue: '9314px'}], position: 5000, duration: 0 },
                { id: "eid1450", tween: [ "style", "${_AUDIO_BTN_EUKARYABEGINCopy5}", "top", '6544px', { fromValue: '6544px'}], position: 9500, duration: 0 },
                { id: "eid3208", tween: [ "style", "${_long_white_arrowCopy5}", "clip", [0,265,50,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,265,50,267]}], position: 6250, duration: 250 },
                { id: "eid3205", tween: [ "style", "${_long_white_arrowCopy5}", "clip", [0,265,50,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,265,50,0]}], position: 6500, duration: 0 },
                { id: "eid188", tween: [ "style", "${_TOC-bodyCopy12}", "left", '14px', { fromValue: '-294px'}], position: 12000, duration: 500, easing: "easeInQuad" },
                { id: "eid1259", tween: [ "style", "${_TEXT_BTN_ARCHAEABEGIN}", "left", '706px', { fromValue: '706px'}], position: 6500, duration: 0, easing: "easeInExpo" },
                { id: "eid1510", tween: [ "style", "${_Domain_Eukarya_is_BornCopy10}", "left", '481px', { fromValue: '481px'}], position: 9500, duration: 0 },
                { id: "eid462", tween: [ "transform", "${_DOWN}", "scaleY", '0.51807', { fromValue: '0.51807'}], position: 2000, duration: 0, easing: "easeInQuad" },
                { id: "eid1425", tween: [ "style", "${_TEXT_BTN_EUKARYABEGINCopy3}", "top", '6698px', { fromValue: '6698px'}], position: 9500, duration: 0 },
                { id: "eid283", tween: [ "style", "${_PUBLIC-TREE-OF-LIFE-RESIZE-5-14}", "top", '-4463px', { fromValue: '-5100px'}], position: 2000, duration: 1000, easing: "easeInQuad" },
                { id: "eid284", tween: [ "style", "${_PUBLIC-TREE-OF-LIFE-RESIZE-5-14}", "top", '-3741px', { fromValue: '-4463px'}], position: 3500, duration: 1000, easing: "easeInQuad" },
                { id: "eid285", tween: [ "style", "${_PUBLIC-TREE-OF-LIFE-RESIZE-5-14}", "top", '-3116px', { fromValue: '-3741px'}], position: 5000, duration: 1000, easing: "easeInQuad" },
                { id: "eid286", tween: [ "style", "${_PUBLIC-TREE-OF-LIFE-RESIZE-5-14}", "top", '-2500px', { fromValue: '-3116px'}], position: 6500, duration: 1000, easing: "easeInQuad" },
                { id: "eid287", tween: [ "style", "${_PUBLIC-TREE-OF-LIFE-RESIZE-5-14}", "top", '-1875px', { fromValue: '-2500px'}], position: 8000, duration: 1000, easing: "easeInQuad" },
                { id: "eid288", tween: [ "style", "${_PUBLIC-TREE-OF-LIFE-RESIZE-5-14}", "top", '-1250px', { fromValue: '-1875px'}], position: 9500, duration: 1000, easing: "easeInQuad" },
                { id: "eid289", tween: [ "style", "${_PUBLIC-TREE-OF-LIFE-RESIZE-5-14}", "top", '-612px', { fromValue: '-1250px'}], position: 11000, duration: 1000, easing: "easeInQuad" },
                { id: "eid290", tween: [ "style", "${_PUBLIC-TREE-OF-LIFE-RESIZE-5-14}", "top", '-612px', { fromValue: '-612px'}], position: 12500, duration: 0, easing: "easeInQuad" },
                { id: "eid28", tween: [ "style", "${_Origin_of_LifeCopy2}", "left", '14px', { fromValue: '-294px'}], position: 3000, duration: 500, easing: "easeInQuad" },
                { id: "eid54", tween: [ "style", "${_Origin_of_LifeCopy2}", "left", '-278px', { fromValue: '14px'}], position: 3500, duration: 500, easing: "easeInQuad" },
                { id: "eid1403", tween: [ "style", "${_TEXT_BTN_EUKARYABEGINCopy}", "top", '6827px', { fromValue: '6827px'}], position: 9500, duration: 0 },
                { id: "eid1409", tween: [ "style", "${_Domain_Eukarya_is_BornCopy}", "left", '481px', { fromValue: '481px'}], position: 9500, duration: 0 },
                { id: "eid461", tween: [ "transform", "${_DOWN}", "scaleX", '0.51807', { fromValue: '0.51807'}], position: 2000, duration: 0, easing: "easeInQuad" },
                { id: "eid397", tween: [ "style", "${_section3text1}", "opacity", '1', { fromValue: '0'}], position: 4700, duration: 300, easing: "easeInQuad" },
                { id: "eid739", tween: [ "style", "${_EARTHformation}", "top", '9427px', { fromValue: '9427px'}], position: 3000, duration: 0, easing: "easeInQuad" },
                { id: "eid1417", tween: [ "style", "${_AUDIO_BTN_EUKARYABEGINCopy2}", "top", '6757px', { fromValue: '6757px'}], position: 9500, duration: 0 },
                { id: "eid134", tween: [ "style", "${_ONe_yes_oneCopy9}", "left", '14px', { fromValue: '-294px'}], position: 4500, duration: 500, easing: "easeInQuad" },
                { id: "eid135", tween: [ "style", "${_ONe_yes_oneCopy9}", "left", '-278px', { fromValue: '14px'}], position: 5000, duration: 500, easing: "easeInQuad" },
                { id: "eid838", tween: [ "style", "${_extinction_event2}", "left", '714px', { fromValue: '714px'}], position: 11000, duration: 0 },
                { id: "eid146", tween: [ "style", "${_Origin_of_LifeCopy8}", "left", '14px', { fromValue: '-294px'}], position: 6000, duration: 500, easing: "easeInQuad" },
                { id: "eid147", tween: [ "style", "${_Origin_of_LifeCopy8}", "left", '-278px', { fromValue: '14px'}], position: 6500, duration: 500, easing: "easeInQuad" },
                { id: "eid404", tween: [ "style", "${_section3-text2}", "left", '596px', { fromValue: '596px'}], position: 6000, duration: 0, easing: "easeInQuad" },
                { id: "eid170", tween: [ "style", "${_VIDEO-1Copy10}", "left", '18px', { fromValue: '-290px'}], position: 9000, duration: 500, easing: "easeInQuad" },
                { id: "eid171", tween: [ "style", "${_VIDEO-1Copy10}", "left", '-274px', { fromValue: '18px'}], position: 9500, duration: 500, easing: "easeInQuad" },
                { id: "eid29", tween: [ "style", "${_ONe_yes_oneCopy2}", "left", '14px', { fromValue: '-294px'}], position: 3000, duration: 500, easing: "easeInQuad" },
                { id: "eid53", tween: [ "style", "${_ONe_yes_oneCopy2}", "left", '-278px', { fromValue: '14px'}], position: 3500, duration: 500, easing: "easeInQuad" },
                { id: "eid3189", tween: [ "style", "${_TOC-bodyCopy8}", "width", '248px', { fromValue: '248px'}], position: 6500, duration: 0 },
                { id: "eid1447", tween: [ "style", "${_TEXT_BTN_EUKARYABEGINCopy5}", "top", '6549px', { fromValue: '6549px'}], position: 9500, duration: 0 },
                { id: "eid519", tween: [ "style", "${_bacteriapopup}", "opacity", '1', { fromValue: '0'}], position: 7500, duration: 500, easing: "easeInQuad" },
                { id: "eid370", tween: [ "style", "${_LONGTREECopy}", "left", '97px', { fromValue: '96px'}], position: 3000, duration: 1500, easing: "easeInQuad" },
                { id: "eid415", tween: [ "style", "${_PUBLIC-TREE-OF-LIFE-RESIZE-5-14}", "clip", [0,960,5097,353], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,960,5097,353]}], position: 2000, duration: 0, easing: "easeInQuad" },
                { id: "eid442", tween: [ "transform", "${_PUBLIC-TREE-OF-LIFE-RESIZE-5-14}", "scaleY", '1.00092', { fromValue: '1.00092'}], position: 3500, duration: 0, easing: "easeInQuad" },
                { id: "eid522", tween: [ "style", "${_eukaryapopup}", "opacity", '1', { fromValue: '0'}], position: 9000, duration: 500, easing: "easeInQuad" },
                { id: "eid1353", tween: [ "style", "${_extinction_event}", "left", '681px', { fromValue: '656px'}], position: 7854, duration: 146, easing: "easeInQuad" },
                { id: "eid3270", tween: [ "style", "${_extinction_event}", "left", '714px', { fromValue: '681px'}], position: 8000, duration: 3000 },
                { id: "eid1422", tween: [ "style", "${_TEXT_BTN_EUKARYABEGINCopy3}", "left", '537px', { fromValue: '537px'}], position: 9500, duration: 0 },
                { id: "eid1493", tween: [ "style", "${_TEXT_BTN_EUKARYABEGINCopy9}", "top", '6030px', { fromValue: '6030px'}], position: 9500, duration: 0 },
                { id: "eid178", tween: [ "style", "${_TOC-bodyCopy11}", "left", '14px', { fromValue: '-294px'}], position: 10500, duration: 500, easing: "easeInQuad" },
                { id: "eid179", tween: [ "style", "${_TOC-bodyCopy11}", "left", '-278px', { fromValue: '14px'}], position: 11000, duration: 500, easing: "easeInQuad" },
                { id: "eid164", tween: [ "style", "${_ONe_yes_oneCopy12}", "left", '14px', { fromValue: '-294px'}], position: 9000, duration: 500, easing: "easeInQuad" },
                { id: "eid165", tween: [ "style", "${_ONe_yes_oneCopy12}", "left", '-278px', { fromValue: '14px'}], position: 9500, duration: 500, easing: "easeInQuad" },
                { id: "eid1456", tween: [ "style", "${_TEXT_BTN_EUKARYABEGINCopy6}", "top", '6484px', { fromValue: '6484px'}], position: 9500, duration: 0 },
                { id: "eid2293", tween: [ "style", "${_help_button}", "left", '0px', { fromValue: '642px'}], position: 2000, duration: 1500, easing: "easeInQuad" },
                { id: "eid478", tween: [ "transform", "${_navlife}", "scaleX", '0.09547', { fromValue: '0.09547'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid1153", tween: [ "style", "${_TEXT_BTN_BRANCHING}", "top", '8582px', { fromValue: '8582px'}], position: 5000, duration: 0 },
                { id: "eid168", tween: [ "style", "${_TOC-bodyCopy10}", "left", '14px', { fromValue: '-294px'}], position: 9000, duration: 500, easing: "easeInQuad" },
                { id: "eid169", tween: [ "style", "${_TOC-bodyCopy10}", "left", '-278px', { fromValue: '14px'}], position: 9500, duration: 500, easing: "easeInQuad" },
                { id: "eid1480", tween: [ "style", "${_TEXT_BTN_EUKARYABEGINCopy8}", "top", '6336px', { fromValue: '6336px'}], position: 9500, duration: 0 },
                { id: "eid162", tween: [ "style", "${_BOX-PAGE3Copy7}", "left", '0px', { fromValue: '-308px'}], position: 7500, duration: 500, easing: "easeInQuad" },
                { id: "eid163", tween: [ "style", "${_BOX-PAGE3Copy7}", "left", '-292px', { fromValue: '0px'}], position: 8000, duration: 500, easing: "easeInQuad" },
                { id: "eid1470", tween: [ "style", "${_AUDIO_BTN_EUKARYABEGINCopy7}", "left", '579px', { fromValue: '579px'}], position: 9500, duration: 0 },
                { id: "eid1408", tween: [ "style", "${_Domain_Eukarya_is_BornCopy}", "top", '6865px', { fromValue: '6865px'}], position: 9500, duration: 0 },
                { id: "eid192", tween: [ "style", "${_BOX-PAGE3Copy10}", "left", '0px', { fromValue: '-308px'}], position: 12000, duration: 500, easing: "easeInQuad" },
                { id: "eid3223", tween: [ "style", "${_TOC-bodyCopy9}", "width", '248px', { fromValue: '248px'}], position: 8000, duration: 0 },
                { id: "eid1451", tween: [ "style", "${_Domain_Eukarya_is_BornCopy5}", "left", '481px', { fromValue: '481px'}], position: 9500, duration: 0 },
                { id: "eid408", tween: [ "style", "${_ORIGIN}", "left", '546px', { fromValue: '546px'}], position: 6000, duration: 0, easing: "easeInQuad" },
                { id: "eid1469", tween: [ "style", "${_TEXT_BTN_EUKARYABEGINCopy7}", "left", '537px', { fromValue: '537px'}], position: 9500, duration: 0 },
                { id: "eid968", tween: [ "style", "${_TEXT_BTN_PRELIFE4}", "top", '9086px', { fromValue: '9086px'}], position: 5000, duration: 0 },
                { id: "eid36", tween: [ "style", "${_treestumpphotofortree2Copy}", "top", '635px', { fromValue: '-5px'}], position: 2000, duration: 1000, easing: "easeInQuad" },
                { id: "eid166", tween: [ "style", "${_Origin_of_LifeCopy10}", "left", '14px', { fromValue: '-294px'}], position: 9000, duration: 500, easing: "easeInQuad" },
                { id: "eid167", tween: [ "style", "${_Origin_of_LifeCopy10}", "left", '-278px', { fromValue: '14px'}], position: 9500, duration: 500, easing: "easeInQuad" },
                { id: "eid1411", tween: [ "style", "${_TEXT_BTN_ICEAGE}", "left", '537px', { fromValue: '706px'}], position: 9500, duration: 0 },
                { id: "eid396", tween: [ "style", "${_section3-text2}", "opacity", '1', { fromValue: '0'}], position: 4700, duration: 300, easing: "easeInQuad" },
                { id: "eid1418", tween: [ "style", "${_Domain_Eukarya_is_BornCopy2}", "left", '481px', { fromValue: '481px'}], position: 9500, duration: 0 },
                { id: "eid1444", tween: [ "style", "${_TEXT_BTN_EUKARYABEGINCopy5}", "left", '537px', { fromValue: '537px'}], position: 9500, duration: 0 },
                { id: "eid459", tween: [ "transform", "${_UP}", "scaleX", '0.51807', { fromValue: '0.51807'}], position: 2000, duration: 0, easing: "easeInQuad" },
                { id: "eid446", tween: [ "style", "${_Rectangle}", "top", '-32px', { fromValue: '-638px'}], position: 2000, duration: 1000, easing: "easeInQuad" },
                { id: "eid1427", tween: [ "style", "${_AUDIO_BTN_EUKARYABEGINCopy3}", "top", '6693px', { fromValue: '6693px'}], position: 9500, duration: 0 },
                { id: "eid176", tween: [ "style", "${_Origin_of_LifeCopy11}", "left", '14px', { fromValue: '-294px'}], position: 10500, duration: 500, easing: "easeInQuad" },
                { id: "eid177", tween: [ "style", "${_Origin_of_LifeCopy11}", "left", '-278px', { fromValue: '14px'}], position: 11000, duration: 500, easing: "easeInQuad" },
                { id: "eid1477", tween: [ "style", "${_TEXT_BTN_EUKARYABEGINCopy8}", "left", '537px', { fromValue: '537px'}], position: 9500, duration: 0 },
                { id: "eid485", tween: [ "style", "${_UP}", "left", '947px', { fromValue: '947px'}], position: 2000, duration: 0, easing: "easeInQuad" },
                { id: "eid1428", tween: [ "style", "${_AUDIO_BTN_EUKARYABEGINCopy3}", "left", '579px', { fromValue: '579px'}], position: 9500, duration: 0 },
                { id: "eid1393", tween: [ "style", "${_TEXT_BTN_EUKARYABEGIN}", "left", '535px', { fromValue: '535px'}], position: 9500, duration: 0 },
                { id: "eid524", tween: [ "style", "${_ONe_yes_oneCopy10}", "width", '271px', { fromValue: '271px'}], position: 6500, duration: 0, easing: "easeInQuad" },
                { id: "eid953", tween: [ "style", "${_popup_BASE}", "top", '8376px', { fromValue: '8376px'}], position: 6509, duration: 0 },
                { id: "eid1208", tween: [ "style", "${_TEXT_BTN_ARCHAEABEGIN}", "top", '8191px', { fromValue: '8191px'}], position: 5000, duration: 0 },
                { id: "eid557", tween: [ "style", "${_ONe_yes_oneCopy14}", "width", '259px', { fromValue: '259px'}], position: 12500, duration: 0, easing: "easeInQuad" },
                { id: "eid839", tween: [ "style", "${_extinction_event2}", "top", '7749px', { fromValue: '7181px'}], position: 11000, duration: 0 },
                { id: "eid467", tween: [ "style", "${_DOWN}", "left", '947px', { fromValue: '947px'}], position: 2000, duration: 0, easing: "easeInQuad" },
                { id: "eid677", tween: [ "style", "${_littletree}", "top", '8585px', { fromValue: '8769px'}], position: 6000, duration: 500 },
                { id: "eid528", tween: [ "style", "${_TOC-bodyCopy9}", "-webkit-transform-origin", [50,52], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,52]}], position: 8000, duration: 0, easing: "easeInQuad" },
                { id: "eid3275", tween: [ "style", "${_TOC-bodyCopy9}", "-moz-transform-origin", [50,52], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,52]}], position: 8000, duration: 0, easing: "easeInQuad" },
                { id: "eid3276", tween: [ "style", "${_TOC-bodyCopy9}", "-ms-transform-origin", [50,52], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,52]}], position: 8000, duration: 0, easing: "easeInQuad" },
                { id: "eid3277", tween: [ "style", "${_TOC-bodyCopy9}", "msTransformOrigin", [50,52], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,52]}], position: 8000, duration: 0, easing: "easeInQuad" },
                { id: "eid3278", tween: [ "style", "${_TOC-bodyCopy9}", "-o-transform-origin", [50,52], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,52]}], position: 8000, duration: 0, easing: "easeInQuad" },
                { id: "eid1400", tween: [ "style", "${_TEXT_BTN_EUKARYABEGINCopy}", "left", '537px', { fromValue: '537px'}], position: 9500, duration: 0 },
                { id: "eid738", tween: [ "style", "${_EARTHformation}", "left", '947px', { fromValue: '947px'}], position: 3000, duration: 0, easing: "easeInQuad" },
                { id: "eid486", tween: [ "style", "${_DOWN}", "top", '508px', { fromValue: '508px'}], position: 2000, duration: 0, easing: "easeInQuad" },
                { id: "eid676", tween: [ "style", "${_littletree}", "left", '767px', { fromValue: '767px'}], position: 6000, duration: 0 },
                { id: "eid1515", tween: [ "style", "${_TEXT_BTN_EUKARYABEGINCopy11}", "top", '5751px', { fromValue: '5751px'}], position: 9500, duration: 0 },
                { id: "eid1506", tween: [ "style", "${_TEXT_BTN_EUKARYABEGINCopy10}", "left", '537px', { fromValue: '537px'}], position: 9500, duration: 0 },
                { id: "eid526", tween: [ "style", "${_ONe_yes_oneCopy10}", "font-size", '27px', { fromValue: '27px'}], position: 6500, duration: 0, easing: "easeInQuad" },
                { id: "eid1475", tween: [ "style", "${_Domain_Eukarya_is_BornCopy7}", "top", '6447px', { fromValue: '6447px'}], position: 9500, duration: 0 },
                { id: "eid1518", tween: [ "style", "${_AUDIO_BTN_EUKARYABEGINCopy11}", "left", '579px', { fromValue: '579px'}], position: 9500, duration: 0 },
                { id: "eid405", tween: [ "style", "${_section3-text2}", "top", '791px', { fromValue: '175px'}], position: 5000, duration: 1000, easing: "easeInQuad" },
                { id: "eid1453", tween: [ "style", "${_Domain_Eukarya_is_BornCopy5}", "top", '6587px', { fromValue: '6587px'}], position: 9500, duration: 0 },
                { id: "eid152", tween: [ "style", "${_BOX-PAGE3Copy6}", "left", '0px', { fromValue: '-308px'}], position: 6000, duration: 500, easing: "easeInQuad" },
                { id: "eid153", tween: [ "style", "${_BOX-PAGE3Copy6}", "left", '-292px', { fromValue: '0px'}], position: 6500, duration: 500, easing: "easeInQuad" },
                { id: "eid1464", tween: [ "style", "${_Domain_Eukarya_is_BornCopy6}", "left", '481px', { fromValue: '481px'}], position: 9500, duration: 0 },
                { id: "eid1499", tween: [ "style", "${_Domain_Eukarya_is_BornCopy9}", "left", '481px', { fromValue: '481px'}], position: 9500, duration: 0 },
                { id: "eid429", tween: [ "style", "${_LONGTREECopy}", "top", '5592px', { fromValue: '5592px'}], position: 10505, duration: 0, easing: "easeInQuad" },
                { id: "eid3202", tween: [ "transform", "${_long_white_arrowCopy5}", "rotateZ", '71deg', { fromValue: '71deg'}], position: 6500, duration: 0 },
                { id: "eid3209", tween: [ "style", "${_long_white_arrowCopy}", "clip", [0,85,50,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,85,50,85]}], position: 6250, duration: 250 },
                { id: "eid1463", tween: [ "style", "${_Domain_Eukarya_is_BornCopy6}", "top", '6522px', { fromValue: '6522px'}], position: 9500, duration: 0 },
                { id: "eid518", tween: [ "style", "${_archaeapopup}", "opacity", '1', { fromValue: '0'}], position: 7500, duration: 500, easing: "easeInQuad" },
                { id: "eid1210", tween: [ "style", "${_long_white_arrow}", "clip", [0,150,50,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,150,50,150]}], position: 6250, duration: 250, easing: "easeInExpo" },
                { id: "eid482", tween: [ "style", "${_navlife}", "left", '780px', { fromValue: '780px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid406", tween: [ "style", "${_section3text1}", "left", '592px', { fromValue: '592px'}], position: 6000, duration: 0, easing: "easeInQuad" },
                { id: "eid1352", tween: [ "transform", "${_extinction_event}", "scaleY", '0.2653', { fromValue: '0.34668'}], position: 7854, duration: 3146, easing: "easeInQuad" },
                { id: "eid1472", tween: [ "style", "${_AUDIO_BTN_EUKARYABEGINCopy7}", "top", '6404px', { fromValue: '6404px'}], position: 9500, duration: 0 },
                { id: "eid1431", tween: [ "style", "${_Domain_Eukarya_is_BornCopy3}", "top", '6736px', { fromValue: '6736px'}], position: 9500, duration: 0 },
                { id: "eid154", tween: [ "style", "${_ONe_yes_oneCopy11}", "left", '14px', { fromValue: '-294px'}], position: 7500, duration: 500, easing: "easeInQuad" },
                { id: "eid155", tween: [ "style", "${_ONe_yes_oneCopy11}", "left", '-278px', { fromValue: '14px'}], position: 8000, duration: 500, easing: "easeInQuad" },
                { id: "eid160", tween: [ "style", "${_VIDEO-1Copy9}", "left", '18px', { fromValue: '-290px'}], position: 7500, duration: 500, easing: "easeInQuad" },
                { id: "eid161", tween: [ "style", "${_VIDEO-1Copy9}", "left", '-274px', { fromValue: '18px'}], position: 8000, duration: 500, easing: "easeInQuad" },
                { id: "eid1509", tween: [ "style", "${_AUDIO_BTN_EUKARYABEGINCopy10}", "left", '579px', { fromValue: '579px'}], position: 9500, duration: 0 },
                { id: "eid398", tween: [ "transform", "${_ORIGIN}", "scaleX", '1', { fromValue: '0.12135'}], position: 4700, duration: 300, easing: "easeInQuad" },
                { id: "eid1512", tween: [ "style", "${_Domain_Eukarya_is_BornCopy10}", "top", '5842px', { fromValue: '5842px'}], position: 9500, duration: 0 },
                { id: "eid1414", tween: [ "style", "${_TEXT_BTN_ICEAGE}", "top", '6762px', { fromValue: '6762px'}], position: 9500, duration: 0 },
                { id: "eid190", tween: [ "style", "${_VIDEO-1Copy12}", "left", '18px', { fromValue: '-290px'}], position: 12000, duration: 500, easing: "easeInQuad" },
                { id: "eid2475", tween: [ "style", "${_help_button}", "top", '534px', { fromValue: '588px'}], position: 592, duration: 908, easing: "easeInOutQuad" },
                { id: "eid646", tween: [ "style", "${_Lateral-Gene-transfer-LGT-linespng-02}", "clip", [2471,419,2915,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [2915,419,2915,0]}], position: 5000, duration: 1500, easing: "easeInQuad" },
                { id: "eid645", tween: [ "style", "${_Lateral-Gene-transfer-LGT-linespng-02}", "clip", [1859,419,2915,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [2471,419,2915,0]}], position: 6500, duration: 1500, easing: "easeInQuad" },
                { id: "eid644", tween: [ "style", "${_Lateral-Gene-transfer-LGT-linespng-02}", "clip", [1239,419,2915,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [1859,419,2915,0]}], position: 8000, duration: 1500, easing: "easeInQuad" },
                { id: "eid643", tween: [ "style", "${_Lateral-Gene-transfer-LGT-linespng-02}", "clip", [624,419,2915,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [1239,419,2915,0]}], position: 9500, duration: 1500, easing: "easeInQuad" },
                { id: "eid642", tween: [ "style", "${_Lateral-Gene-transfer-LGT-linespng-02}", "clip", [0,419,2915,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [624,419,2915,0]}], position: 11000, duration: 1500, easing: "easeInQuad" },
                { id: "eid1520", tween: [ "style", "${_AUDIO_BTN_EUKARYABEGINCopy11}", "top", '5746px', { fromValue: '5746px'}], position: 9500, duration: 0 },
                { id: "eid1438", tween: [ "style", "${_AUDIO_BTN_EUKARYABEGINCopy4}", "top", '6639px', { fromValue: '6639px'}], position: 9500, duration: 0 },
                { id: "eid428", tween: [ "style", "${_EarlyLifeGroup}", "clip", [0,419,454,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [454,419,454,0]}], position: 3500, duration: 1500, easing: "easeInQuad" },
                { id: "eid148", tween: [ "style", "${_TOC-bodyCopy8}", "left", '14px', { fromValue: '-294px'}], position: 6000, duration: 500, easing: "easeInQuad" },
                { id: "eid149", tween: [ "style", "${_TOC-bodyCopy8}", "left", '-278px', { fromValue: '14px'}], position: 6500, duration: 500, easing: "easeInQuad" },
                { id: "eid511", tween: [ "style", "${_eukaryapopup}", "top", '7069px', { fromValue: '7069px'}], position: 9500, duration: 0, easing: "easeInQuad" },
                { id: "eid1405", tween: [ "style", "${_AUDIO_BTN_EUKARYABEGINCopy}", "top", '6822px', { fromValue: '6822px'}], position: 9500, duration: 0 },
                { id: "eid1269", tween: [ "style", "${_Genetic_Drift_Popup}", "top", '7623px', { fromValue: '7623px'}], position: 8000, duration: 0, easing: "easeInExpo" },
                { id: "eid2043", tween: [ "style", "${_long_white_arrowCopy2}", "clip", [0,150,50,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,150,50,150]}], position: 6250, duration: 250, easing: "easeInExpo" },
                { id: "eid1436", tween: [ "style", "${_TEXT_BTN_EUKARYABEGINCopy4}", "left", '537px', { fromValue: '537px'}], position: 9500, duration: 0 },
                { id: "eid3184", tween: [ "style", "${_TOC-bodyCopy7}", "width", '259px', { fromValue: '259px'}], position: 5000, duration: 0 },
                { id: "eid386", tween: [ "style", "${_LONGTREECopy}", "clip", [3073,764,3080,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [3073,764,3080,0]}], position: 2000, duration: 0, easing: "easeInQuad" },
                { id: "eid387", tween: [ "style", "${_LONGTREECopy}", "clip", [3080,764,3080,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [3073,764,3080,0]}], position: 3500, duration: 0, easing: "easeInQuad" },
                { id: "eid389", tween: [ "style", "${_LONGTREECopy}", "clip", [2478,764,3080,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [3080,764,3080,0]}], position: 5000, duration: 1500, easing: "easeInQuad" },
                { id: "eid390", tween: [ "style", "${_LONGTREECopy}", "clip", [1989,764,3080,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [2478,764,3080,0]}], position: 6500, duration: 1500, easing: "easeInQuad" },
                { id: "eid391", tween: [ "style", "${_LONGTREECopy}", "clip", [1485,764,3080,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [1989,764,3080,0]}], position: 8000, duration: 1500, easing: "easeInQuad" },
                { id: "eid392", tween: [ "style", "${_LONGTREECopy}", "clip", [996,764,3080,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [1485,764,3080,0]}], position: 9500, duration: 1500, easing: "easeInQuad" },
                { id: "eid393", tween: [ "style", "${_LONGTREECopy}", "clip", [486,764,3080,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [996,764,3080,0]}], position: 11000, duration: 1500, easing: "easeInQuad" },
                { id: "eid407", tween: [ "style", "${_section3text1}", "top", '701px', { fromValue: '85px'}], position: 5000, duration: 1000, easing: "easeInQuad" },
                { id: "eid27", tween: [ "style", "${_TOC-bodyCopy2}", "left", '14px', { fromValue: '-294px'}], position: 3000, duration: 500, easing: "easeInQuad" },
                { id: "eid56", tween: [ "style", "${_TOC-bodyCopy2}", "left", '-278px', { fromValue: '14px'}], position: 3500, duration: 500, easing: "easeInQuad" },
                { id: "eid1391", tween: [ "style", "${_Domain_Eukarya_is_Born}", "left", '479px', { fromValue: '479px'}], position: 9500, duration: 0 },
                { id: "eid1415", tween: [ "style", "${_AUDIO_BTN_EUKARYABEGINCopy2}", "left", '579px', { fromValue: '579px'}], position: 9500, duration: 0 },
                { id: "eid479", tween: [ "transform", "${_navlife}", "scaleY", '0.09547', { fromValue: '0.09547'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid969", tween: [ "style", "${_TEXT_BTN_ORGANISMS}", "top", '8956px', { fromValue: '8956px'}], position: 5000, duration: 0 },
                { id: "eid679", tween: [ "style", "${_littletree}", "opacity", '1', { fromValue: '0'}], position: 5980, duration: 20 },
                { id: "eid399", tween: [ "style", "${_ORIGIN}", "opacity", '1', { fromValue: '0'}], position: 4700, duration: 300, easing: "easeInQuad" },
                { id: "eid3183", tween: [ "style", "${_TOC-bodyCopy2}", "width", '248px', { fromValue: '248px'}], position: 3512, duration: 0 },
                { id: "eid954", tween: [ "style", "${_popup_BASE}", "left", '611px', { fromValue: '611px'}], position: 6509, duration: 0 },
                { id: "eid515", tween: [ "style", "${_eukaryapopup}", "left", '548px', { fromValue: '548px'}], position: 9500, duration: 0, easing: "easeInQuad" },
                { id: "eid156", tween: [ "style", "${_Origin_of_LifeCopy9}", "left", '14px', { fromValue: '-294px'}], position: 7500, duration: 500, easing: "easeInQuad" },
                { id: "eid157", tween: [ "style", "${_Origin_of_LifeCopy9}", "left", '-278px', { fromValue: '14px'}], position: 8000, duration: 500, easing: "easeInQuad" },
                { id: "eid1461", tween: [ "style", "${_AUDIO_BTN_EUKARYABEGINCopy6}", "left", '579px', { fromValue: '579px'}], position: 9500, duration: 0 },
                { id: "eid1171", tween: [ "style", "${_TEXT_BTN_TREE}", "top", '8669px', { fromValue: '8669px'}], position: 5000, duration: 0 },
                { id: "eid1420", tween: [ "style", "${_Domain_Eukarya_is_BornCopy2}", "top", '6800px', { fromValue: '6800px'}], position: 9500, duration: 0 },
                { id: "eid138", tween: [ "style", "${_TOC-bodyCopy7}", "left", '14px', { fromValue: '-294px'}], position: 4500, duration: 500, easing: "easeInQuad" },
                { id: "eid139", tween: [ "style", "${_TOC-bodyCopy7}", "left", '-278px', { fromValue: '14px'}], position: 5000, duration: 500, easing: "easeInQuad" },
                { id: "eid430", tween: [ "style", "${_MAINCONTROL}", "top", '-9453px', { fromValue: '-10173px'}], position: 2000, duration: 1000, easing: "easeInQuad" },
                { id: "eid431", tween: [ "style", "${_MAINCONTROL}", "top", '-8812px', { fromValue: '-9453px'}], position: 3500, duration: 1000, easing: "easeInQuad" },
                { id: "eid432", tween: [ "style", "${_MAINCONTROL}", "top", '-8187px', { fromValue: '-8812px'}], position: 5000, duration: 1000, easing: "easeInQuad" },
                { id: "eid433", tween: [ "style", "${_MAINCONTROL}", "top", '-7574px', { fromValue: '-8187px'}], position: 6500, duration: 1000, easing: "easeInQuad" },
                { id: "eid434", tween: [ "style", "${_MAINCONTROL}", "top", '-6946px', { fromValue: '-7574px'}], position: 8000, duration: 1000, easing: "easeInQuad" },
                { id: "eid435", tween: [ "style", "${_MAINCONTROL}", "top", '-6334px', { fromValue: '-6946px'}], position: 9500, duration: 1000, easing: "easeInQuad" },
                { id: "eid436", tween: [ "style", "${_MAINCONTROL}", "top", '-5696px', { fromValue: '-6334px'}], position: 11000, duration: 1000, easing: "easeInQuad" },
                { id: "eid437", tween: [ "style", "${_MAINCONTROL}", "top", '-5696px', { fromValue: '-5696px'}], position: 12500, duration: 0, easing: "easeInQuad" },
                { id: "eid1458", tween: [ "style", "${_TEXT_BTN_EUKARYABEGINCopy6}", "left", '537px', { fromValue: '537px'}], position: 9500, duration: 0 },
                { id: "eid26", tween: [ "style", "${_BOX-PAGE3Copy}", "left", '0px', { fromValue: '-308px'}], position: 3000, duration: 500, easing: "easeInQuad" },
                { id: "eid57", tween: [ "style", "${_BOX-PAGE3Copy}", "left", '-296px', { fromValue: '0px'}], position: 3500, duration: 500, easing: "easeInQuad" },
                { id: "eid1406", tween: [ "style", "${_AUDIO_BTN_EUKARYABEGINCopy}", "left", '579px', { fromValue: '579px'}], position: 9500, duration: 0 },
                { id: "eid180", tween: [ "style", "${_VIDEO-1Copy11}", "left", '18px', { fromValue: '-290px'}], position: 10500, duration: 500, easing: "easeInQuad" },
                { id: "eid181", tween: [ "style", "${_VIDEO-1Copy11}", "left", '-274px', { fromValue: '18px'}], position: 11000, duration: 500, easing: "easeInQuad" },
                { id: "eid959", tween: [ "style", "${_TEXTBUTTONPARENT}", "left", '1093px', { fromValue: '1093px'}], position: 5024, duration: 0 },
                { id: "eid469", tween: [ "style", "${_UP}", "top", '15px', { fromValue: '15px'}], position: 2000, duration: 0, easing: "easeInQuad" },
                { id: "eid1460", tween: [ "style", "${_AUDIO_BTN_EUKARYABEGINCopy6}", "top", '6479px', { fromValue: '6479px'}], position: 9500, duration: 0 },
                { id: "eid1354", tween: [ "style", "${_extinction_event}", "top", '7900px', { fromValue: '7787px'}], position: 7854, duration: 146, easing: "easeInQuad" },
                { id: "eid3269", tween: [ "style", "${_extinction_event}", "top", '7749px', { fromValue: '7900px'}], position: 8000, duration: 3000 },
                { id: "eid455", tween: [ "style", "${_Rectangle2}", "left", '1015px', { fromValue: '1015px'}], position: 2369, duration: 0, easing: "easeInQuad" },
                { id: "eid460", tween: [ "transform", "${_UP}", "scaleY", '0.51807', { fromValue: '0.51807'}], position: 2000, duration: 0, easing: "easeInQuad" },
                { id: "eid1429", tween: [ "style", "${_Domain_Eukarya_is_BornCopy3}", "left", '481px', { fromValue: '481px'}], position: 9500, duration: 0 },
                { id: "eid425", tween: [ "style", "${_EarlyLifeGroup}", "top", '9033px', { fromValue: '9149px'}], position: 3500, duration: 1000, easing: "easeInQuad" },
                { id: "eid1394", tween: [ "style", "${_TEXT_BTN_EUKARYABEGIN}", "top", '7344px', { fromValue: '7344px'}], position: 9500, duration: 0 },
                { id: "eid1483", tween: [ "style", "${_AUDIO_BTN_EUKARYABEGINCopy8}", "left", '579px', { fromValue: '579px'}], position: 9500, duration: 0 },
                { id: "eid2053", tween: [ "style", "${_long_white_arrowCopy4}", "clip", [0,150,50,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,150,50,150]}], position: 6250, duration: 250, easing: "easeInExpo" },
                { id: "eid142", tween: [ "style", "${_BOX-PAGE3Copy5}", "left", '0px', { fromValue: '-308px'}], position: 4500, duration: 500, easing: "easeInQuad" },
                { id: "eid143", tween: [ "style", "${_BOX-PAGE3Copy5}", "left", '-292px', { fromValue: '0px'}], position: 5000, duration: 500, easing: "easeInQuad" },
                { id: "eid158", tween: [ "style", "${_TOC-bodyCopy9}", "left", '14px', { fromValue: '-294px'}], position: 7500, duration: 500, easing: "easeInQuad" },
                { id: "eid159", tween: [ "style", "${_TOC-bodyCopy9}", "left", '-278px', { fromValue: '14px'}], position: 8000, duration: 500, easing: "easeInQuad" },
                { id: "eid1523", tween: [ "style", "${_Domain_Eukarya_is_BornCopy11}", "top", '5789px', { fromValue: '5789px'}], position: 9500, duration: 0 },
                { id: "eid1439", tween: [ "style", "${_AUDIO_BTN_EUKARYABEGINCopy4}", "left", '579px', { fromValue: '579px'}], position: 9500, duration: 0 },
                { id: "eid184", tween: [ "style", "${_ONe_yes_oneCopy14}", "left", '14px', { fromValue: '-294px'}], position: 12000, duration: 500, easing: "easeInQuad" },
                { id: "eid185", tween: [ "style", "${_ONe_yes_oneCopy14}", "left", '14px', { fromValue: '14px'}], position: 12500, duration: 0, easing: "easeInQuad" },
                { id: "eid483", tween: [ "style", "${_navlife}", "top", '240px', { fromValue: '240px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid835", tween: [ "transform", "${_extinction_event2}", "scaleX", '0.26529', { fromValue: '0.26529'}], position: 11000, duration: 0 },
                { id: "eid2289", tween: [ "style", "${_whatisthetreeoflife_subtext}", "top", '631px', { fromValue: '381px'}], position: 2000, duration: 737 },
                { id: "eid1508", tween: [ "style", "${_AUDIO_BTN_EUKARYABEGINCopy10}", "top", '5799px', { fromValue: '5799px'}], position: 9500, duration: 0 },
                { id: "eid412", tween: [ "style", "${_whatisthetreeoflifeCopy}", "opacity", '0.06', { fromValue: '1'}], position: 2000, duration: 737, easing: "easeInQuad" },
                { id: "eid411", tween: [ "style", "${_whatisthetreeoflifeCopy}", "top", '861px', { fromValue: '120px'}], position: 2000, duration: 737, easing: "easeInQuad" },
                { id: "eid1448", tween: [ "style", "${_AUDIO_BTN_EUKARYABEGINCopy5}", "left", '579px', { fromValue: '579px'}], position: 9500, duration: 0 },
                { id: "eid3207", tween: [ "style", "${_long_white_arrowCopy5}", "top", '8404px', { fromValue: '8404px'}], position: 6500, duration: 0 },
                { id: "eid1521", tween: [ "style", "${_Domain_Eukarya_is_BornCopy11}", "left", '481px', { fromValue: '481px'}], position: 9500, duration: 0 },
                { id: "eid967", tween: [ "style", "${_TEXT_BTN_PRELIFE3}", "top", '9159px', { fromValue: '9159px'}], position: 5000, duration: 0 },
                { id: "eid400", tween: [ "transform", "${_ORIGIN}", "scaleY", '1', { fromValue: '0.12135'}], position: 4700, duration: 300, easing: "easeInQuad" },
                { id: "eid1517", tween: [ "style", "${_TEXT_BTN_EUKARYABEGINCopy11}", "left", '537px', { fromValue: '537px'}], position: 9500, duration: 0 },
                { id: "eid1351", tween: [ "transform", "${_extinction_event}", "scaleX", '0.26529', { fromValue: '0.34667'}], position: 7854, duration: 3146, easing: "easeInQuad" },
                { id: "eid1498", tween: [ "style", "${_AUDIO_BTN_EUKARYABEGINCopy9}", "top", '6025px', { fromValue: '6025px'}], position: 9500, duration: 0 },
                { id: "eid3222", tween: [ "style", "${_TOC-bodyCopy9}", "height", '186px', { fromValue: '186px'}], position: 8000, duration: 0 },
                { id: "eid174", tween: [ "style", "${_ONe_yes_oneCopy13}", "left", '14px', { fromValue: '-294px'}], position: 10500, duration: 500, easing: "easeInQuad" },
                { id: "eid175", tween: [ "style", "${_ONe_yes_oneCopy13}", "left", '-278px', { fromValue: '14px'}], position: 11000, duration: 500, easing: "easeInQuad" },
                { id: "eid1495", tween: [ "style", "${_TEXT_BTN_EUKARYABEGINCopy9}", "left", '537px', { fromValue: '537px'}], position: 9500, duration: 0 },
                { id: "eid1467", tween: [ "style", "${_TEXT_BTN_EUKARYABEGINCopy7}", "top", '6409px', { fromValue: '6409px'}], position: 9500, duration: 0 },
                { id: "eid1501", tween: [ "style", "${_Domain_Eukarya_is_BornCopy9}", "top", '6068px', { fromValue: '6068px'}], position: 9500, duration: 0 },
                { id: "eid1473", tween: [ "style", "${_Domain_Eukarya_is_BornCopy7}", "left", '481px', { fromValue: '481px'}], position: 9500, duration: 0 },
                { id: "eid1441", tween: [ "style", "${_Domain_Eukarya_is_BornCopy4}", "top", '6682px', { fromValue: '6682px'}], position: 9500, duration: 0 },
                { id: "eid150", tween: [ "style", "${_VIDEO-1Copy8}", "left", '18px', { fromValue: '-290px'}], position: 6000, duration: 500, easing: "easeInQuad" },
                { id: "eid151", tween: [ "style", "${_VIDEO-1Copy8}", "left", '-274px', { fromValue: '18px'}], position: 6500, duration: 500, easing: "easeInQuad" },
                { id: "eid1482", tween: [ "style", "${_AUDIO_BTN_EUKARYABEGINCopy8}", "top", '6331px', { fromValue: '6331px'}], position: 9500, duration: 0 },
                { id: "eid1496", tween: [ "style", "${_AUDIO_BTN_EUKARYABEGINCopy9}", "left", '579px', { fromValue: '579px'}], position: 9500, duration: 0 },
                { id: "eid965", tween: [ "style", "${_TEXT_BTN_PRELIFE2}", "top", '9237px', { fromValue: '9237px'}], position: 5000, duration: 0 },
                { id: "eid1442", tween: [ "style", "${_Domain_Eukarya_is_BornCopy4}", "left", '481px', { fromValue: '481px'}], position: 9500, duration: 0 },
                { id: "eid1389", tween: [ "style", "${_AUDIO_BTN_EUKARYABEGIN}", "left", '577px', { fromValue: '577px'}], position: 9500, duration: 0 },
                { id: "eid2044", tween: [ "style", "${_long_white_arrowCopy3}", "clip", [0,150,50,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,150,50,150]}], position: 6250, duration: 250, easing: "easeInExpo" },
                { id: "eid1434", tween: [ "style", "${_TEXT_BTN_EUKARYABEGINCopy4}", "top", '6644px', { fromValue: '6644px'}], position: 9500, duration: 0 },
                { id: "eid409", tween: [ "style", "${_ORIGIN}", "top", '669px', { fromValue: '53px'}], position: 5000, duration: 1000, easing: "easeInQuad" },
                { id: "eid1486", tween: [ "style", "${_Domain_Eukarya_is_BornCopy8}", "left", '481px', { fromValue: '481px'}], position: 9500, duration: 0 },
                { id: "eid1485", tween: [ "style", "${_Domain_Eukarya_is_BornCopy8}", "top", '6374px', { fromValue: '6374px'}], position: 9500, duration: 0 }            ]
        }
    }
},
"UP": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], [], ['0.95', '0.95']],
                    id: 'uparrow',
                    type: 'image',
                    rect: ['0px', '0px', '83px', '83px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/uparrow.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '83px'],
                ["style", "width", '83px']
            ],
            "${_uparrow}": [
                ["transform", "scaleX", '0.95'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "scaleY", '0.95']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"DOWN": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], [], ['0.95', '0.95']],
                    id: 'downarrow',
                    type: 'image',
                    rect: ['0px', '0px', '83px', '83px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/downarrow.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_downarrow}": [
                ["transform", "scaleX", '0.95'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "scaleY", '0.95']
            ],
            "${symbolSelector}": [
                ["style", "height", '83px'],
                ["style", "width", '83px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"SLIDER": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], [], ['0.36', '0.36']],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    rect: ['-22px', '-22px', '69px', '69px', 'auto', 'auto'],
                    id: 'Ellipse2Copy2',
                    stroke: [0, 'rgba(0,0,0,1.00)', 'solid'],
                    type: 'ellipse',
                    fill: ['rgba(0,0,0,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Ellipse2Copy2}": [
                ["style", "top", '-22px'],
                ["style", "border-width", '0px'],
                ["transform", "scaleY", '0.36'],
                ["style", "bottom", 'auto'],
                ["transform", "scaleX", '0.36'],
                ["color", "border-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '-22px'],
                ["style", "border-style", 'solid']
            ],
            "${symbolSelector}": [
                ["style", "height", '25px'],
                ["style", "width", '25px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"scrollup": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    font: ['\'Signika Negative\'', 26, 'rgba(255,255,255,1.00)', '300', 'none', 'normal'],
                    type: 'text',
                    opacity: 0.8274906517094,
                    id: 'SignikaNegativeCopy',
                    text: 'Scroll up to find out',
                    align: 'center',
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '32px'],
                ["style", "width", '215px']
            ],
            "${_SignikaNegativeCopy}": [
                ["style", "top", '0px'],
                ["style", "text-align", 'center'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '0px'],
                ["style", "font-size", '26px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1569,
            autoPlay: true,
            timeline: [
                { id: "eid450", tween: [ "style", "${_SignikaNegativeCopy}", "opacity", '0', { fromValue: '0'}], position: 710, duration: 0, easing: "easeInOutQuad" },
                { id: "eid449", tween: [ "style", "${_SignikaNegativeCopy}", "opacity", '0.8274906517094', { fromValue: '0'}], position: 710, duration: 859, easing: "easeInOutQuad" }            ]
        }
    }
},
"whatisthetreeoflife": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'Group',
                    type: 'group',
                    rect: ['0px', '-2px', '430', '139', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['2px', '54px', '426px', '85px', 'auto', 'auto'],
                        font: ['\'Signika Negative\'', 76, 'rgba(255,255,255,1)', '700', 'none', 'normal'],
                        align: 'center',
                        id: 'Text',
                        text: 'Tree of Life?',
                        textShadow: ['rgba(0,0,0,0.65098)', 3, 3, 3],
                        type: 'text'
                    },
                    {
                        type: 'text',
                        rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto'],
                        id: 'SignikaNegative',
                        opacity: 0.8274906517094,
                        align: 'center',
                        text: 'What is the Evolutionary<br>',
                        textShadow: ['rgba(0,0,0,0.65098)', 3, 3, 3],
                        font: ['\'Signika Negative\'', 42, 'rgba(255,255,255,1.00)', '300', 'none', 'normal']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Group}": [
                ["style", "top", '-2px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_SignikaNegative}": [
                ["subproperty", "textShadow.blur", '3px'],
                ["subproperty", "textShadow.offsetH", '3px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '0px'],
                ["style", "font-size", '42px'],
                ["style", "top", '0px'],
                ["style", "text-align", 'center'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65098)'],
                ["style", "opacity", '0.8274906517094'],
                ["subproperty", "textShadow.offsetV", '3px']
            ],
            "${_Text}": [
                ["subproperty", "textShadow.blur", '3px'],
                ["subproperty", "textShadow.offsetH", '3px'],
                ["style", "top", '54px'],
                ["subproperty", "textShadow.offsetV", '3px'],
                ["style", "font-weight", '700'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65098)'],
                ["style", "left", '2px'],
                ["style", "font-size", '76px']
            ],
            "${symbolSelector}": [
                ["style", "height", '139px'],
                ["style", "width", '430px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid445", tween: [ "style", "${_Group}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeInOutQuad" }            ]
        }
    }
},
"LongTree": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'PUBLIC-TREE-OF-LIFE-RESIZE-5-14',
                    type: 'image',
                    rect: ['0px', '0px', '960px', '5414px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/PUBLIC-TREE-OF-LIFE-RESIZE-5-14.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_PUBLIC-TREE-OF-LIFE-RESIZE-5-14}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '5414px'],
                ["style", "width", '960px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 13500,
            autoPlay: true,
            timeline: [
                { id: "eid37", tween: [ "style", "${_PUBLIC-TREE-OF-LIFE-RESIZE-5-14}", "top", '722px', { fromValue: '0px'}], position: 2000, duration: 1000, easing: "easeInQuad" },
                { id: "eid39", tween: [ "style", "${_PUBLIC-TREE-OF-LIFE-RESIZE-5-14}", "top", '1384px', { fromValue: '722px'}], position: 3500, duration: 1000, easing: "easeInQuad" },
                { id: "eid41", tween: [ "style", "${_PUBLIC-TREE-OF-LIFE-RESIZE-5-14}", "top", '1982px', { fromValue: '1384px'}], position: 5000, duration: 1000, easing: "easeInQuad" },
                { id: "eid43", tween: [ "style", "${_PUBLIC-TREE-OF-LIFE-RESIZE-5-14}", "top", '2608px', { fromValue: '1982px'}], position: 6500, duration: 1000, easing: "easeInQuad" },
                { id: "eid45", tween: [ "style", "${_PUBLIC-TREE-OF-LIFE-RESIZE-5-14}", "top", '3236px', { fromValue: '2608px'}], position: 8000, duration: 1000, easing: "easeInQuad" },
                { id: "eid47", tween: [ "style", "${_PUBLIC-TREE-OF-LIFE-RESIZE-5-14}", "top", '3862px', { fromValue: '3236px'}], position: 9500, duration: 1000, easing: "easeInQuad" },
                { id: "eid49", tween: [ "style", "${_PUBLIC-TREE-OF-LIFE-RESIZE-5-14}", "top", '4486px', { fromValue: '3862px'}], position: 11000, duration: 1000, easing: "easeInQuad" },
                { id: "eid52", tween: [ "style", "${_PUBLIC-TREE-OF-LIFE-RESIZE-5-14}", "top", '5104px', { fromValue: '4486px'}], position: 12500, duration: 1000, easing: "easeInQuad" }            ]
        }
    }
},
"navlife": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'ORIGIN-ARROWSCopy',
                    rect: ['26px', '0px', '365px', '454px', 'auto', 'auto'],
                    clip: ['rect(0px 365px 454px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/ORIGIN-ARROWS.png', '0px', '0px']
                },
                {
                    id: 'EARLYLIFE-CIRCLE1Copy15',
                    type: 'image',
                    rect: ['264px', '28px', '88px', '88px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/EARLYLIFE-CIRCLE.png', '0px', '0px']
                },
                {
                    id: 'EARLYLIFE-CIRCLE1Copy14',
                    type: 'image',
                    rect: ['293px', '107px', '88px', '88px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/EARLYLIFE-CIRCLE.png', '0px', '0px']
                },
                {
                    id: 'EARLYLIFE-CIRCLE1Copy13',
                    type: 'image',
                    rect: ['315px', '184px', '88px', '88px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/EARLYLIFE-CIRCLE.png', '0px', '0px']
                },
                {
                    id: 'EARLYLIFE-CIRCLE1Copy12',
                    type: 'image',
                    rect: ['331px', '266px', '88px', '88px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/EARLYLIFE-CIRCLE.png', '0px', '0px']
                },
                {
                    id: 'EARLYLIFE-CIRCLE1Copy11',
                    type: 'image',
                    rect: ['63px', '28px', '88px', '88px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/EARLYLIFE-CIRCLE.png', '0px', '0px']
                },
                {
                    id: 'EARLYLIFE-CIRCLE1Copy10',
                    type: 'image',
                    rect: ['29px', '107px', '88px', '88px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/EARLYLIFE-CIRCLE.png', '0px', '0px']
                },
                {
                    id: 'EARLYLIFE-CIRCLE1Copy9',
                    type: 'image',
                    rect: ['8px', '184px', '88px', '88px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/EARLYLIFE-CIRCLE.png', '0px', '0px']
                },
                {
                    id: 'EARLYLIFE-CIRCLE1Copy8',
                    type: 'image',
                    rect: ['0px', '266px', '88px', '88px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/EARLYLIFE-CIRCLE.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_EARLYLIFE-CIRCLE1Copy10}": [
                ["transform", "scaleX", '1'],
                ["style", "top", '107px'],
                ["style", "left", '29px'],
                ["transform", "scaleY", '1']
            ],
            "${_EARLYLIFE-CIRCLE1Copy12}": [
                ["style", "top", '266px'],
                ["transform", "scaleY", '1'],
                ["style", "left", '331px'],
                ["transform", "scaleX", '1']
            ],
            "${_EARLYLIFE-CIRCLE1Copy8}": [
                ["style", "top", '266px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "left", '0px']
            ],
            "${_EARLYLIFE-CIRCLE1Copy11}": [
                ["transform", "scaleX", '1'],
                ["style", "left", '63px'],
                ["transform", "scaleY", '1'],
                ["style", "top", '28px']
            ],
            "${_ORIGIN-ARROWSCopy}": [
                ["style", "top", '0px'],
                ["style", "left", '26px'],
                ["style", "clip", [0,365,454,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '454px'],
                ["style", "width", '419px']
            ],
            "${_EARLYLIFE-CIRCLE1Copy15}": [
                ["style", "top", '28px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["style", "left", '264px']
            ],
            "${_EARLYLIFE-CIRCLE1Copy9}": [
                ["style", "top", '184px'],
                ["transform", "scaleY", '1'],
                ["style", "left", '8px'],
                ["transform", "scaleX", '1']
            ],
            "${_EARLYLIFE-CIRCLE1Copy13}": [
                ["transform", "scaleX", '1'],
                ["style", "top", '184px'],
                ["style", "left", '315px'],
                ["transform", "scaleY", '1']
            ],
            "${_EARLYLIFE-CIRCLE1Copy14}": [
                ["transform", "scaleX", '1'],
                ["style", "left", '293px'],
                ["transform", "scaleY", '1'],
                ["style", "top", '107px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"extinctdomains": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'Pop_up_text_block',
                    type: 'group',
                    rect: ['-264px', '-39px', '255px', '153px', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['0px', '0px', '247px', '148px', 'auto', 'auto'],
                        id: 'Rectangle',
                        stroke: [0, 'rgba(0,0,0,1)', 'none'],
                        type: 'rect',
                        fill: ['rgba(192,192,192,1)']
                    },
                    {
                        rect: ['9px', '9px', '228px', '131px', 'auto', 'auto'],
                        id: 'Rectangle2',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'rect',
                        fill: ['rgba(255,250,250,1.00)']
                    },
                    {
                        id: 'Group2',
                        type: 'group',
                        rect: ['19px', '17px', '206', '117', 'auto', 'auto'],
                        c: [
                        {
                            rect: ['0px', '22px', '206px', '95px', 'auto', 'auto'],
                            font: ['Verdana, Geneva, sans-serif', 11, 'rgba(0,0,0,1.00)', '100', 'none', 'normal'],
                            id: 'Text6',
                            text: 'Many early domains of life may have existed, but went extinct due to unfavorable evolutionary traits.',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['0px', '0px', '198px', '21px', 'auto', 'auto'],
                            font: ['Signika Negative', 18, 'rgba(0,0,0,1)', '700', 'none', 'normal'],
                            id: 'Text8',
                            text: 'Now is the time for all.',
                            align: 'left',
                            type: 'text'
                        }]
                    }]
                },
                {
                    rect: ['0px', '0px', '80', '71', 'auto', 'auto'],
                    id: 'Label',
                    cursor: ['pointer'],
                    type: 'group',
                    c: [
                    {
                        rect: ['0px', '0px', '80px', '71px', 'auto', 'auto'],
                        font: ['asap, sans-serif', 17, 'rgba(255,255,255,1)', '700', 'none', 'normal'],
                        id: 'Text2',
                        text: 'Extinct<br>domains',
                        align: 'center',
                        type: 'text'
                    },
                    {
                        rect: ['10px', '41px', 'auto', 'auto', 'auto', 'auto'],
                        font: ['asap, sans-serif', 11, 'rgba(255,255,255,1)', '100', 'none', 'normal'],
                        id: 'Text3',
                        text: '(they didn\'t <br>make it)',
                        align: 'center',
                        type: 'text'
                    }]
                },
                {
                    rect: ['0px', '-1px', '80px', '72px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'hitbox',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_hitbox}": [
                ["style", "top", '-1px'],
                ["style", "cursor", 'pointer'],
                ["style", "overflow", 'visible'],
                ["style", "height", '72px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '80px']
            ],
            "${_Rectangle2}": [
                ["color", "background-color", 'rgba(255,250,250,1.00)'],
                ["style", "left", '9px'],
                ["style", "top", '9px']
            ],
            "${_Group2}": [
                ["style", "top", '17px'],
                ["style", "left", '19px']
            ],
            "${_Text3}": [
                ["style", "top", '41px'],
                ["style", "left", '10px'],
                ["style", "font-size", '11px']
            ],
            "${_Text2}": [
                ["style", "top", '0px'],
                ["style", "text-align", 'center'],
                ["style", "height", '71px'],
                ["style", "font-weight", '700'],
                ["style", "left", '0px'],
                ["style", "width", '80px']
            ],
            "${_Text6}": [
                ["style", "top", '22px'],
                ["style", "text-align", 'left'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "left", '0px'],
                ["style", "height", '95px']
            ],
            "${_Pop_up_text_block}": [
                ["style", "top", '-39px'],
                ["style", "height", '153px'],
                ["style", "opacity", '0'],
                ["style", "left", '-264px'],
                ["style", "width", '255px']
            ],
            "${symbolSelector}": [
                ["style", "height", '71px'],
                ["style", "width", '80px']
            ],
            "${_Rectangle}": [
                ["style", "height", '148px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '247px']
            ],
            "${_Text8}": [
                ["style", "top", '0px'],
                ["style", "font-weight", '700'],
                ["style", "font-family", 'Signika Negative'],
                ["style", "left", '0px'],
                ["style", "font-size", '18px']
            ],
            "${_Label}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 628,
            autoPlay: true,
            labels: {
                "rollover": 500,
                "rollover2": 628
            },
            timeline: [
                { id: "eid491", tween: [ "style", "${_Label}", "opacity", '1', { fromValue: '1'}], position: 500, duration: 0, easing: "easeInQuad" },
                { id: "eid458", tween: [ "style", "${_Pop_up_text_block}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 48, easing: "easeInQuad" }            ]
        }
    }
},
"bacteriapopup": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'Pop_up_text_block',
                    type: 'group',
                    rect: ['-264px', '-39px', '255px', '153px', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['0px', '0px', '247px', '148px', 'auto', 'auto'],
                        id: 'Rectangle',
                        stroke: [0, 'rgba(0,0,0,1)', 'none'],
                        type: 'rect',
                        fill: ['rgba(192,192,192,1)']
                    },
                    {
                        rect: ['9px', '9px', '228px', '131px', 'auto', 'auto'],
                        id: 'Rectangle2',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'rect',
                        fill: ['rgba(255,250,250,1.00)']
                    },
                    {
                        id: 'Group2',
                        type: 'group',
                        rect: ['19px', '17px', '206', '117', 'auto', 'auto'],
                        c: [
                        {
                            rect: ['0px', '22px', '206px', '95px', 'auto', 'auto'],
                            font: ['Verdana, Geneva, sans-serif', 11, 'rgba(0,0,0,1.00)', '100', 'none', 'normal'],
                            id: 'Text6',
                            text: 'Evidence suggests an early ancestor of Bacteria may have been the first established domain. The oldest known fossils show Stromatolites, colonies of bacteria that lived together over 2.4 Billion years ago.',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['0px', '0px', '198px', '21px', 'auto', 'auto'],
                            font: ['Signika Negative', 18, 'rgba(0,0,0,1)', '700', 'none', 'normal'],
                            id: 'Text8',
                            text: 'Did Bacteria Come First?',
                            align: 'left',
                            type: 'text'
                        }]
                    }]
                },
                {
                    rect: ['0px', '0px', '80', '71', 'auto', 'auto'],
                    id: 'Label',
                    cursor: ['pointer'],
                    type: 'group',
                    c: [
                    {
                        rect: ['0px', '0px', '80px', '71px', 'auto', 'auto'],
                        font: ['asap, sans-serif', 17, 'rgba(255,255,255,1)', '700', 'none', 'normal'],
                        id: 'Text2',
                        text: 'Domain<br>Bacteria',
                        align: 'center',
                        type: 'text'
                    }]
                },
                {
                    rect: ['0px', '-1px', '80px', '72px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'hitbox',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_hitbox}": [
                ["style", "top", '-1px'],
                ["style", "left", '0px'],
                ["style", "overflow", 'visible'],
                ["style", "height", '72px'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '80px']
            ],
            "${_Rectangle2}": [
                ["color", "background-color", 'rgba(255,250,250,1.00)'],
                ["style", "left", '9px'],
                ["style", "top", '9px']
            ],
            "${_Group2}": [
                ["style", "top", '17px'],
                ["style", "left", '19px']
            ],
            "${_Text2}": [
                ["style", "top", '0px'],
                ["style", "text-align", 'center'],
                ["style", "height", '71px'],
                ["style", "font-weight", '700'],
                ["style", "left", '0px'],
                ["style", "width", '80px']
            ],
            "${_Text6}": [
                ["style", "top", '22px'],
                ["style", "text-align", 'left'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "left", '0px'],
                ["style", "height", '95px']
            ],
            "${_Pop_up_text_block}": [
                ["style", "top", '85px'],
                ["style", "height", '153px'],
                ["style", "opacity", '0'],
                ["style", "left", '-88px'],
                ["style", "width", '255px']
            ],
            "${symbolSelector}": [
                ["style", "height", '71px'],
                ["style", "width", '80px']
            ],
            "${_Rectangle}": [
                ["style", "top", '0px'],
                ["style", "height", '148px'],
                ["style", "left", '0px'],
                ["style", "width", '247px']
            ],
            "${_Label}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Text8}": [
                ["style", "top", '0px'],
                ["style", "font-weight", '700'],
                ["style", "font-family", 'Signika Negative'],
                ["style", "left", '0px'],
                ["style", "font-size", '18px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 628,
            autoPlay: true,
            labels: {
                "rollover": 500,
                "rollover2": 628
            },
            timeline: [
                { id: "eid491", tween: [ "style", "${_Label}", "opacity", '1', { fromValue: '1'}], position: 500, duration: 0, easing: "easeInQuad" },
                { id: "eid458", tween: [ "style", "${_Pop_up_text_block}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 48, easing: "easeInQuad" }            ]
        }
    }
},
"archaeapopup": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'Pop_up_text_block',
                    type: 'group',
                    rect: ['-264px', '-39px', '255px', '153px', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['0px', '0px', '247px', '148px', 'auto', 'auto'],
                        id: 'Rectangle',
                        stroke: [0, 'rgba(0,0,0,1)', 'none'],
                        type: 'rect',
                        fill: ['rgba(192,192,192,1)']
                    },
                    {
                        rect: ['9px', '9px', '228px', '131px', 'auto', 'auto'],
                        id: 'Rectangle2',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'rect',
                        fill: ['rgba(255,250,250,1.00)']
                    },
                    {
                        id: 'Group2',
                        type: 'group',
                        rect: ['19px', '17px', '206', '117', 'auto', 'auto'],
                        c: [
                        {
                            rect: ['0px', '22px', '206px', '95px', 'auto', 'auto'],
                            font: ['Verdana, Geneva, sans-serif', 11, 'rgba(0,0,0,1.00)', '100', 'none', 'normal'],
                            id: 'Text6',
                            text: 'Archaea seem to have shown up soon after Bacteria. Some theories even think Archaea may have come first. Archaea are all single-celled organisms, but many have specialized and can be found in the most extreme environments: near Hydrothermal vents deep in the ocean, at the Great Salt lake in Utah, and even at temperatures that would fry nearly all other living species.',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['0px', '0px', '198px', '21px', 'auto', 'auto'],
                            font: ['Signika Negative', 18, 'rgba(0,0,0,1)', '700', 'none', 'normal'],
                            id: 'Text8',
                            text: 'A Domain of Extremes',
                            align: 'left',
                            type: 'text'
                        }]
                    }]
                },
                {
                    rect: ['0px', '0px', '80', '71', 'auto', 'auto'],
                    id: 'Label',
                    cursor: ['pointer'],
                    type: 'group',
                    c: [
                    {
                        rect: ['0px', '0px', '80px', '71px', 'auto', 'auto'],
                        font: ['asap, sans-serif', 17, 'rgba(255,255,255,1)', '700', 'none', 'normal'],
                        id: 'Text2',
                        text: 'Domain<br>Archaea',
                        align: 'center',
                        type: 'text'
                    }]
                },
                {
                    rect: ['0px', '-1px', '80px', '72px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'hitbox',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_hitbox}": [
                ["style", "top", '-1px'],
                ["style", "cursor", 'pointer'],
                ["style", "overflow", 'visible'],
                ["style", "height", '72px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '80px']
            ],
            "${_Rectangle2}": [
                ["color", "background-color", 'rgba(255,250,250,1.00)'],
                ["style", "left", '9px'],
                ["style", "top", '9px']
            ],
            "${_Group2}": [
                ["style", "top", '17px'],
                ["style", "left", '19px']
            ],
            "${_Text2}": [
                ["style", "top", '0px'],
                ["style", "text-align", 'center'],
                ["style", "height", '71px'],
                ["style", "font-weight", '700'],
                ["style", "left", '0px'],
                ["style", "width", '80px']
            ],
            "${_Text6}": [
                ["style", "top", '22px'],
                ["style", "text-align", 'left'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "left", '0px'],
                ["style", "height", '95px']
            ],
            "${_Pop_up_text_block}": [
                ["style", "top", '85px'],
                ["style", "height", '153px'],
                ["style", "opacity", '0'],
                ["style", "left", '-88px'],
                ["style", "width", '255px']
            ],
            "${symbolSelector}": [
                ["style", "height", '71px'],
                ["style", "width", '80px']
            ],
            "${_Rectangle}": [
                ["style", "height", '148px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '247px']
            ],
            "${_Text8}": [
                ["style", "top", '0px'],
                ["style", "font-weight", '700'],
                ["style", "font-family", 'Signika Negative'],
                ["style", "left", '0px'],
                ["style", "font-size", '18px']
            ],
            "${_Label}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 628,
            autoPlay: true,
            labels: {
                "rollover": 500,
                "rollover2": 628
            },
            timeline: [
                { id: "eid491", tween: [ "style", "${_Label}", "opacity", '1', { fromValue: '1'}], position: 500, duration: 0, easing: "easeInQuad" },
                { id: "eid458", tween: [ "style", "${_Pop_up_text_block}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 48, easing: "easeInQuad" }            ]
        }
    }
},
"eukaryapopup": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'Pop_up_text_block',
                    type: 'group',
                    rect: ['-264px', '-39px', '255px', '153px', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['0px', '0px', '247px', '148px', 'auto', 'auto'],
                        id: 'Rectangle',
                        stroke: [0, 'rgba(0,0,0,1)', 'none'],
                        type: 'rect',
                        fill: ['rgba(192,192,192,1)']
                    },
                    {
                        rect: ['9px', '9px', '228px', '131px', 'auto', 'auto'],
                        id: 'Rectangle2',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'rect',
                        fill: ['rgba(255,250,250,1.00)']
                    },
                    {
                        id: 'Group2',
                        type: 'group',
                        rect: ['19px', '17px', '206', '117', 'auto', 'auto'],
                        c: [
                        {
                            font: ['Verdana, Geneva, sans-serif', 11, 'rgba(0,0,0,1.00)', '100', 'none', 'normal'],
                            type: 'text',
                            id: 'Text6',
                            text: 'Eukaryotes form one of the most varied domains on the planet, including plants, animals, fungi and protists.  All eukaryotes protect their DNA in a nucleus within their cells, and Eukaryotes are the only domain with multicellular species.',
                            align: 'left',
                            rect: ['0px', '22px', '206px', '95px', 'auto', 'auto']
                        },
                        {
                            font: ['Signika Negative', 18, 'rgba(0,0,0,1)', '700', 'none', 'normal'],
                            type: 'text',
                            id: 'Text8',
                            text: 'The Most Diverse Domain',
                            align: 'left',
                            rect: ['0px', '0px', '198px', '21px', 'auto', 'auto']
                        }]
                    }]
                },
                {
                    rect: ['0px', '0px', '80', '71', 'auto', 'auto'],
                    id: 'Label',
                    cursor: ['pointer'],
                    type: 'group',
                    c: [
                    {
                        font: ['asap, sans-serif', 17, 'rgba(255,255,255,1)', '700', 'none', 'normal'],
                        type: 'text',
                        id: 'Text2',
                        text: 'Domain<br>Eukarya',
                        align: 'center',
                        rect: ['0px', '0px', '80px', '71px', 'auto', 'auto']
                    }]
                },
                {
                    rect: ['0px', '-1px', '80px', '72px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'hitbox',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_hitbox}": [
                ["style", "top", '-1px'],
                ["style", "left", '0px'],
                ["style", "overflow", 'visible'],
                ["style", "height", '72px'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '80px']
            ],
            "${_Rectangle2}": [
                ["color", "background-color", 'rgba(255,250,250,1.00)'],
                ["style", "left", '9px'],
                ["style", "top", '9px']
            ],
            "${_Group2}": [
                ["style", "top", '17px'],
                ["style", "left", '19px']
            ],
            "${_Text2}": [
                ["style", "top", '0px'],
                ["style", "text-align", 'center'],
                ["style", "height", '71px'],
                ["style", "font-weight", '700'],
                ["style", "left", '0px'],
                ["style", "width", '80px']
            ],
            "${_Text6}": [
                ["style", "top", '22px'],
                ["style", "text-align", 'left'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "left", '0px'],
                ["style", "height", '95px']
            ],
            "${_Pop_up_text_block}": [
                ["style", "top", '85px'],
                ["style", "height", '153px'],
                ["style", "opacity", '0'],
                ["style", "left", '-88px'],
                ["style", "width", '255px']
            ],
            "${symbolSelector}": [
                ["style", "height", '71px'],
                ["style", "width", '80px']
            ],
            "${_Rectangle}": [
                ["style", "top", '0px'],
                ["style", "height", '148px'],
                ["style", "left", '0px'],
                ["style", "width", '247px']
            ],
            "${_Label}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Text8}": [
                ["style", "top", '0px'],
                ["style", "font-weight", '700'],
                ["style", "font-family", 'Signika Negative'],
                ["style", "left", '0px'],
                ["style", "font-size", '18px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 628,
            autoPlay: true,
            labels: {
                "rollover": 500,
                "rollover2": 628
            },
            timeline: [
                { id: "eid491", tween: [ "style", "${_Label}", "opacity", '1', { fromValue: '1'}], position: 500, duration: 0, easing: "easeInQuad" },
                { id: "eid458", tween: [ "style", "${_Pop_up_text_block}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 48, easing: "easeInQuad" }            ]
        }
    }
},
"extinction_event": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['-436px', '0px', '578px', '300px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'Rectangle5',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    clip: ['rect(0px 578px 300px 580px)'],
                    fill: ['rgba(192,192,192,1)']
                },
                {
                    rect: ['-436px', '0px', '578px', '300px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'Rectangle5Copy',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    clip: ['rect(0px 578px 300px 580px)'],
                    fill: ['rgba(192,192,192,1)']
                },
                {
                    rect: ['0px', '0px', '300px', '300px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'Ellipse',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(192,192,192,1)']
                },
                {
                    rect: ['0px', '0px', '300px', '300px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    transform: [[0, 0], [], [], ['0.88666', '0.88666']],
                    id: 'EllipseInner',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,234,234,1.00)']
                },
                {
                    rect: ['0px', '-42px', '300px', '300px', 'auto', 'auto'],
                    id: 'extinction_symbol',
                    transform: [[0, 0], [], [], ['0.70222', '0.70222']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/extinction_symbol.png', '0px', '0px']
                },
                {
                    rect: ['30px', '193px', '240px', '75px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 28, 'rgba(0,0,0,1)', '700', 'none', ''],
                    id: 'Text',
                    text: 'Extinction Event',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['-412px', '22px', '392px', '75px', 'auto', 'auto'],
                    id: 'Text2',
                    text: 'The Great Oxygenation Event',
                    font: ['Arial, Helvetica, sans-serif', 27, 'rgba(0,0,0,1)', '900', 'none', 'normal'],
                    type: 'text'
                },
                {
                    rect: ['-412px', '102px', '392px', '161px', 'auto', 'auto'],
                    id: 'Text2Copy',
                    text: 'Around 2.4 Billion Years ago, Bacteria had split between anaerobic and aerobic types, and this caused a massive swell in oxygen, which at the time was toxic to most living species.',
                    font: ['Arial, Helvetica, sans-serif', 24, 'rgba(0,0,0,1)', '700', 'none', ''],
                    type: 'text'
                },
                {
                    rect: ['0px', '0px', '300px', '300px', 'auto', 'auto'],
                    id: 'hitbox',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_hitbox}": [
                ["style", "opacity", '0']
            ],
            "${_Text2Copy}": [
                ["style", "top", '117px'],
                ["style", "height", '322px'],
                ["style", "font-weight", '700'],
                ["style", "opacity", '0'],
                ["style", "font-size", '29px']
            ],
            "${_Text2}": [
                ["style", "top", '15px'],
                ["style", "font-style", 'normal'],
                ["style", "opacity", '0'],
                ["style", "font-weight", '900'],
                ["style", "font-size", '37px']
            ],
            "${_EllipseInner}": [
                ["color", "background-color", 'rgba(255,234,234,1)'],
                ["transform", "scaleY", '0.88666'],
                ["transform", "scaleX", '0.88666'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Text}": [
                ["style", "top", '193px'],
                ["style", "text-align", 'center'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "font-weight", '700'],
                ["style", "left", '30px'],
                ["style", "font-size", '28px']
            ],
            "${symbolSelector}": [
                ["style", "height", '300px'],
                ["style", "width", '300px']
            ],
            "${_extinction_symbol}": [
                ["transform", "scaleX", '0.70222'],
                ["style", "top", '-42px'],
                ["style", "left", '0px'],
                ["transform", "scaleY", '0.70222']
            ],
            "${_Rectangle5Copy}": [
                ["style", "top", '76px'],
                ["transform", "scaleY", '1.51219'],
                ["transform", "scaleX", '0.75433'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,578,198,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-507px']
            ],
            "${_Ellipse}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Rectangle5}": [
                ["style", "clip", [0,578,300,580], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 592,
            autoPlay: true,
            labels: {
                "start": 0,
                "stop": 500
            },
            timeline: [
                { id: "eid789", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 456, duration: 44, easing: "easeInQuad" },
                { id: "eid785", tween: [ "style", "${_Rectangle5}", "clip", [0,578,300,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,578,300,580]}], position: 250, duration: 111, easing: "easeInQuad" },
                { id: "eid1326", tween: [ "style", "${_Text2}", "font-size", '37px', { fromValue: '37px'}], position: 592, duration: 0, easing: "easeInQuad" },
                { id: "eid1313", tween: [ "transform", "${_Rectangle5Copy}", "scaleY", '1.51219', { fromValue: '1.51219'}], position: 500, duration: 0, easing: "easeInQuad" },
                { id: "eid788", tween: [ "style", "${_Text2Copy}", "opacity", '1', { fromValue: '0'}], position: 456, duration: 44, easing: "easeInQuad" },
                { id: "eid1331", tween: [ "style", "${_Text2}", "top", '15px', { fromValue: '15px'}], position: 592, duration: 0, easing: "easeInQuad" },
                { id: "eid1316", tween: [ "style", "${_Rectangle5Copy}", "left", '-507px', { fromValue: '-507px'}], position: 500, duration: 0, easing: "easeInQuad" },
                { id: "eid1315", tween: [ "transform", "${_Rectangle5Copy}", "scaleX", '0.75433', { fromValue: '0.75433'}], position: 500, duration: 0, easing: "easeInQuad" },
                { id: "eid1330", tween: [ "style", "${_Text2Copy}", "top", '117px', { fromValue: '117px'}], position: 592, duration: 0, easing: "easeInQuad" },
                { id: "eid1342", tween: [ "style", "${_Rectangle5Copy}", "opacity", '1', { fromValue: '0'}], position: 361, duration: 14, easing: "easeInQuad" },
                { id: "eid1314", tween: [ "style", "${_Rectangle5Copy}", "top", '76px', { fromValue: '76px'}], position: 500, duration: 0, easing: "easeInQuad" },
                { id: "eid1327", tween: [ "style", "${_Text2Copy}", "font-size", '29px', { fromValue: '29px'}], position: 592, duration: 0, easing: "easeInQuad" },
                { id: "eid1328", tween: [ "style", "${_Text2Copy}", "height", '322px', { fromValue: '322px'}], position: 592, duration: 0, easing: "easeInQuad" },
                { id: "eid1324", tween: [ "style", "${_Rectangle5Copy}", "clip", [0,578,300,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,578,198,0]}], position: 361, duration: 139, easing: "easeInQuad" },
                { id: "eid3", tween: [ "color", "${_EllipseInner}", "background-color", 'rgba(254,158,61,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,234,234,1)'}], position: 0, duration: 250 }            ]
        }
    }
},
"EARTHformation": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['-595px', '24px', '582px', '582px', 'auto', 'auto'],
                    id: 'EARTHFORMS',
                    transform: [[0, 0], [], [], ['1.08247', '1.08247']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/EARTHFORMS.png', '0px', '0px']
                },
                {
                    rect: ['-541px', '87px', '462px', '462px', 'auto', 'auto'],
                    id: 'moltenplanet',
                    transform: [[0, 0], [], [], ['1.2857', '1.28571']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/moltenplanet.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_moltenplanet}": [
                ["style", "top", '84px'],
                ["transform", "scaleY", '1.28571'],
                ["transform", "scaleX", '1.2857'],
                ["style", "opacity", '1'],
                ["style", "left", '84px']
            ],
            "${_EARTHFORMS}": [
                ["style", "top", '24px'],
                ["transform", "scaleY", '1.08247'],
                ["style", "bottom", 'auto'],
                ["style", "height", '582px'],
                ["transform", "scaleX", '1.08247'],
                ["style", "left", '24px'],
                ["style", "width", '582px']
            ],
            "${symbolSelector}": [
                ["style", "height", '630px'],
                ["style", "width", '630px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4000,
            autoPlay: true,
            labels: {
                "start": 0
            },
            timeline: [
                { id: "eid418", tween: [ "style", "${_EARTHFORMS}", "left", '-595px', { fromValue: '24px'}], position: 0, duration: 500, easing: "easeInQuad" },
                { id: "eid711", tween: [ "style", "${_moltenplanet}", "top", '84px', { fromValue: '84px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid713", tween: [ "style", "${_moltenplanet}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 4000, easing: "easeInQuad" },
                { id: "eid710", tween: [ "style", "${_moltenplanet}", "left", '-541px', { fromValue: '84px'}], position: 0, duration: 500, easing: "easeInQuad" }            ]
        }
    }
},
"extinctdomains_1": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'Pop_up_text_block',
                    type: 'group',
                    rect: ['-264px', '-39px', '255px', '153px', 'auto', 'auto'],
                    c: [
                    {
                        type: 'rect',
                        id: 'Rectangle',
                        stroke: [0, 'rgba(0,0,0,1)', 'none'],
                        rect: ['0px', '0px', '247px', '148px', 'auto', 'auto'],
                        fill: ['rgba(192,192,192,1)']
                    },
                    {
                        type: 'rect',
                        id: 'Rectangle2',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['9px', '9px', '228px', '131px', 'auto', 'auto'],
                        fill: ['rgba(255,250,250,1.00)']
                    },
                    {
                        id: 'Group2',
                        type: 'group',
                        rect: ['19px', '17px', '206', '117', 'auto', 'auto'],
                        c: [
                        {
                            rect: ['0px', '22px', '206px', '95px', 'auto', 'auto'],
                            font: ['Verdana, Geneva, sans-serif', 11, 'rgba(0,0,0,1.00)', '100', 'none', 'normal'],
                            id: 'Text6',
                            text: 'Many early domains of life may have existed, but went extinct due to unfavorable evolutionary traits.',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['0px', '0px', '198px', '21px', 'auto', 'auto'],
                            font: ['Signika Negative', 18, 'rgba(0,0,0,1)', '700', 'none', 'normal'],
                            id: 'Text8',
                            text: 'Domains that didn\'t.',
                            align: 'left',
                            type: 'text'
                        }]
                    }]
                },
                {
                    type: 'group',
                    id: 'Label',
                    cursor: ['pointer'],
                    rect: ['0px', '0px', '80', '71', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['-10px', '-15px', '100px', '100px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'Ellipse',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'ellipse',
                        fill: ['rgba(39,39,39,1.00)']
                    },
                    {
                        rect: ['0px', '0px', '80px', '71px', 'auto', 'auto'],
                        font: ['asap, sans-serif', 17, 'rgba(255,255,255,1)', '700', 'none', 'normal'],
                        id: 'Text2',
                        text: 'Extinct<br>domains',
                        align: 'center',
                        type: 'text'
                    },
                    {
                        rect: ['10px', '41px', 'auto', 'auto', 'auto', 'auto'],
                        font: ['asap, sans-serif', 11, 'rgba(255,255,255,1)', '100', 'none', 'normal'],
                        id: 'Text3',
                        text: '(they didn\'t <br>make it)',
                        align: 'center',
                        type: 'text'
                    }]
                },
                {
                    type: 'rect',
                    rect: ['0px', '-1px', '80px', '72px', 'auto', 'auto'],
                    id: 'hitbox',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_hitbox}": [
                ["style", "top", '-1px'],
                ["style", "cursor", 'pointer'],
                ["style", "overflow", 'visible'],
                ["style", "height", '72px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '80px']
            ],
            "${_Rectangle2}": [
                ["color", "background-color", 'rgba(255,250,250,1.00)'],
                ["style", "left", '9px'],
                ["style", "top", '9px']
            ],
            "${_Group2}": [
                ["style", "top", '17px'],
                ["style", "left", '19px']
            ],
            "${_Text3}": [
                ["style", "top", '41px'],
                ["style", "left", '10px'],
                ["style", "font-size", '11px']
            ],
            "${_Text2}": [
                ["style", "top", '0px'],
                ["style", "text-align", 'center'],
                ["style", "height", '71px'],
                ["style", "font-weight", '700'],
                ["style", "left", '0px'],
                ["style", "width", '80px']
            ],
            "${_Text6}": [
                ["style", "top", '22px'],
                ["style", "text-align", 'left'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "left", '0px'],
                ["style", "height", '95px']
            ],
            "${_Pop_up_text_block}": [
                ["style", "top", '-39px'],
                ["style", "height", '153px'],
                ["style", "opacity", '0'],
                ["style", "left", '-264px'],
                ["style", "width", '255px']
            ],
            "${symbolSelector}": [
                ["style", "height", '71px'],
                ["style", "width", '80px']
            ],
            "${_Text8}": [
                ["style", "top", '0px'],
                ["style", "font-weight", '700'],
                ["style", "font-family", 'Signika Negative'],
                ["style", "left", '0px'],
                ["style", "font-size", '18px']
            ],
            "${_Rectangle}": [
                ["style", "height", '148px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '247px']
            ],
            "${_Label}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Ellipse}": [
                ["style", "top", '-15px'],
                ["style", "left", '-10px'],
                ["color", "background-color", 'rgba(39,39,39,1.00)']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 628,
            autoPlay: true,
            labels: {
                "rollover": 500,
                "rollover2": 628
            },
            timeline: [
                { id: "eid491", tween: [ "style", "${_Label}", "opacity", '1', { fromValue: '1'}], position: 500, duration: 0, easing: "easeInQuad" },
                { id: "eid458", tween: [ "style", "${_Pop_up_text_block}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 48, easing: "easeInQuad" }            ]
        }
    }
},
"TEXTBUTTONPARENT": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'button_text_down',
                    type: 'image',
                    rect: ['0px', '0px', '50px', '50px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/button_text_down.png', '0px', '0px']
                },
                {
                    id: 'button_text_up',
                    type: 'image',
                    rect: ['0px', '0px', '50px', '50px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/button_text_up.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_button_text_up}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_button_text_down}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '50px'],
                ["style", "width", '50px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"POPUP_PRELIFE1": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'Rectangle5',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['382px', '1px', '285px', '497px', 'auto', 'auto'],
                    fill: ['rgba(114,114,114,1)']
                },
                {
                    type: 'rect',
                    id: 'Rectangle5Copy',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['395px', '17px', '259px', '460px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    id: 'POPUP_TEXTBOX21',
                    type: 'rect',
                    rect: ['382', '0', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'text',
                    rect: ['403px', '76px', '244px', '403px', 'auto', 'auto'],
                    overflow: 'visible',
                    id: 'Text3',
                    text: 'Primordial Soup is a theory about how life may have begun 3.6 billion years ago, about seven billion years after the big bang. The word primordial itself means “existing at or since the beginning of time”. This theory states that gases like carbon dioxide, water, ammonia and methane that existed in the Earth’s atmosphere, when induced with energy such as a bolt of lightning, created amino acids and other building blocks of life. Amino acids are the organic molecules that make up proteins, which are are essential for life. The primordial soup theory gives an explanation as to how life may have arisen from non-living compounds.',
                    align: 'left',
                    font: ['asap, sans-serif', 16, 'rgba(211,211,211,1.00)', '400', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['407px', '24px', '234px', '37px', 'auto', 'auto'],
                    align: 'center',
                    id: 'Text4',
                    text: 'Primordial Soup<br>',
                    textShadow: ['rgba(0,0,0,0.65098)', 0, 1, 1],
                    font: ['asap, sans-serif', 24, 'rgba(90,161,184,1.00)', '900', 'none', 'normal']
                },
                {
                    type: 'rect',
                    id: 'Rectangle6',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '1px', '383px', '494px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1)']
                },
                {
                    type: 'image',
                    id: 'geyser',
                    rect: ['0', '0', '654px', '498px', 'auto', 'auto'],
                    clip: ['rect(0px 383px 498px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/geyser.jpg', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'POPUP_TEXTBOX21',
                symbolName: 'POPUP_TEXTBOX'
            }            ]
        },
    states: {
        "Base State": {
            "${_Text4}": [
                ["subproperty", "textShadow.blur", '1px'],
                ["subproperty", "textShadow.offsetH", '0px'],
                ["subproperty", "textShadow.offsetV", '1px'],
                ["style", "font-weight", '900'],
                ["color", "color", 'rgba(90,161,184,1.00)'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65098)'],
                ["style", "left", '407px'],
                ["style", "top", '24px']
            ],
            "${_Rectangle5}": [
                ["style", "left", '382px'],
                ["style", "top", '1px']
            ],
            "${symbolSelector}": [
                ["style", "height", '517px'],
                ["style", "width", '783px']
            ],
            "${_Text3}": [
                ["style", "top", '76px'],
                ["style", "width", '244px'],
                ["style", "text-align", 'left'],
                ["style", "overflow", 'visible'],
                ["color", "color", 'rgba(211,211,211,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '403px'],
                ["style", "font-size", '16px']
            ],
            "${_Rectangle5Copy}": [
                ["style", "top", '17px'],
                ["style", "height", '460px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '395px'],
                ["style", "width", '259px']
            ],
            "${_geyser}": [
                ["style", "height", '498px'],
                ["style", "clip", [0,383,498,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '654px']
            ],
            "${_Rectangle6}": [
                ["style", "top", '1px'],
                ["style", "left", '0px'],
                ["style", "height", '494px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"POPUP_PRELIFE2": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'POPUP_TEXTBOX20',
                    type: 'rect',
                    rect: ['382', '0', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'text',
                    rect: ['407px', '81px', '244px', '403px', 'auto', 'auto'],
                    overflow: 'visible',
                    id: 'Text3',
                    text: 'About 3.6 billion years ago, Earth had no oxygen in the atmosphere at all! The chemicals that made up Earth’s atmosphere were water vapor, carbon dioxide, ammonia, nitrogen gas as N2, methane, hydrogen, sulfur dioxide, formaldehyde and cyanide.',
                    align: 'left',
                    font: ['asap, sans-serif', 16, 'rgba(211,211,211,1.00)', '400', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['407px', '24px', '234px', '37px', 'auto', 'auto'],
                    align: 'center',
                    id: 'Text4',
                    text: 'Earth\'s Atmosphere',
                    textShadow: ['rgba(0,0,0,0.65098)', 0, 1, 1],
                    font: ['asap, sans-serif', 24, 'rgba(90,161,184,1.00)', '900', 'none', 'normal']
                },
                {
                    type: 'rect',
                    id: 'Rectangle6',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '1px', '383px', '494px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1)']
                },
                {
                    type: 'image',
                    id: 'TwilightAtmosphere',
                    rect: ['0', '1', '768px', '576px', 'auto', 'auto'],
                    clip: ['rect(0px 383px 497px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/TwilightAtmosphere.jpg', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'POPUP_TEXTBOX20',
                symbolName: 'POPUP_TEXTBOX'
            }            ]
        },
    states: {
        "Base State": {
            "${_TwilightAtmosphere}": [
                ["style", "height", '576px'],
                ["style", "clip", [0,383,497,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '768px']
            ],
            "${_Text3}": [
                ["style", "top", '81px'],
                ["style", "font-size", '16px'],
                ["style", "text-align", 'left'],
                ["style", "overflow", 'visible'],
                ["color", "color", 'rgba(211,211,211,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '407px'],
                ["style", "width", '244px']
            ],
            "${_Text4}": [
                ["subproperty", "textShadow.blur", '1px'],
                ["subproperty", "textShadow.offsetH", '0px'],
                ["subproperty", "textShadow.offsetV", '1px'],
                ["style", "font-weight", '900'],
                ["color", "color", 'rgba(90,161,184,1.00)'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65098)'],
                ["style", "left", '407px'],
                ["style", "top", '24px']
            ],
            "${symbolSelector}": [
                ["style", "height", '517px'],
                ["style", "width", '783px']
            ],
            "${_Rectangle6}": [
                ["style", "top", '1px'],
                ["style", "left", '0px'],
                ["style", "height", '494px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"POPUP_PRELIFE3": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'POPUP_TEXTBOX19',
                    type: 'rect',
                    rect: ['382', '0', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'text',
                    rect: ['400px', '78px', '257px', '403px', 'auto', 'auto'],
                    id: 'Text3',
                    text: 'The sun releases many different types of ultraviolet (UV) radiation, as well as visible light and infrared light from the electromagnetic spectrum. Before the ozone layer developed  in the Earth’s stratosphere, all three types of ultraviolet light could reach the surface of the Earth. This is bad for organisms, because UV light can cause severe damage to cells. The ozone layer acts like sunblock, preventing harmful UV radiation from coming through the Earth’s atmosphere. About 600 million years ago, before the ozone completely developed, research suggests that life on Earth was strictly in the ocean, because living on land would expose these organisms to high levels of the sun’s radiation. <br>',
                    align: 'left',
                    font: ['asap, sans-serif', 16, 'rgba(211,211,211,1.00)', '400', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['407px', '24px', '234px', '37px', 'auto', 'auto'],
                    align: 'center',
                    id: 'Text4',
                    text: 'Sun\'s Radiation',
                    textShadow: ['rgba(0,0,0,0.65098)', 0, 1, 1],
                    font: ['asap, sans-serif', 24, 'rgba(90,161,184,1.00)', '900', 'none', 'normal']
                },
                {
                    type: 'rect',
                    id: 'Rectangle6',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '1px', '383px', '494px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1)']
                },
                {
                    type: 'image',
                    rect: ['-994px', '-994px', '2485px', '2485px', 'auto', 'auto'],
                    id: 'Solar_Flare_and_Coronal_Mass_Ejection_2010-02-12_lrg',
                    transform: [[0, 0], [], [], ['0.2', '0.2']],
                    clip: ['rect(0px 1915px 2485px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/Solar_Flare_and_Coronal_Mass_Ejection_2010-02-12_lrg.jpg', '0px', '0px', '100%', '100%']
                }
            ],
            symbolInstances: [
            {
                id: 'POPUP_TEXTBOX19',
                symbolName: 'POPUP_TEXTBOX',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '517px'],
                ["style", "width", '783px']
            ],
            "${_Text3}": [
                ["style", "line-height", '18px'],
                ["color", "color", 'rgba(211,211,211,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '400px'],
                ["style", "width", '257px'],
                ["style", "top", '78px'],
                ["style", "text-align", 'left'],
                ["style", "overflow", 'visible'],
                ["style", "font-size", '16px']
            ],
            "${_Text4}": [
                ["subproperty", "textShadow.blur", '1px'],
                ["subproperty", "textShadow.offsetH", '0px'],
                ["subproperty", "textShadow.offsetV", '1px'],
                ["style", "font-weight", '900'],
                ["color", "color", 'rgba(90,161,184,1.00)'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65098)'],
                ["style", "left", '407px'],
                ["style", "top", '24px']
            ],
            "${_Solar_Flare_and_Coronal_Mass_Ejection_2010-02-12_lrg}": [
                ["style", "top", '-994px'],
                ["transform", "scaleY", '0.2'],
                ["transform", "scaleX", '0.2'],
                ["style", "height", '2485px'],
                ["style", "left", '-994px'],
                ["style", "clip", [0,1915,2485,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '2485px']
            ],
            "${_Rectangle6}": [
                ["style", "top", '1px'],
                ["style", "left", '0px'],
                ["style", "height", '494px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"POPUP_PRELIFE4": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'Rectangle5',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['382px', '1px', '285px', '497px', 'auto', 'auto'],
                    fill: ['rgba(114,114,114,1)']
                },
                {
                    type: 'rect',
                    id: 'Rectangle5Copy',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['395px', '17px', '259px', '460px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    id: 'POPUP_TEXTBOX18',
                    type: 'rect',
                    rect: ['382', '1', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'text',
                    rect: ['405px', '82px', '244px', '403px', 'auto', 'auto'],
                    overflow: 'visible',
                    id: 'Text3',
                    text: 'As the Earth cooled, water vapor that was released from inside the Earth and bombardment from comets and asteroids began to precipitate and form Earth’s oceans about 3.8 billion years ago. Our oceans today are very similar in chemical composition to the oceans that existed back then, and have changed very little over time.',
                    align: 'left',
                    font: ['asap, sans-serif', 16, 'rgba(211,211,211,1.00)', '400', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['407px', '24px', '234px', '37px', 'auto', 'auto'],
                    align: 'center',
                    id: 'Text4',
                    text: 'First Oceans',
                    textShadow: ['rgba(0,0,0,0.65098)', 0, 1, 1],
                    font: ['asap, sans-serif', 24, 'rgba(90,161,184,1.00)', '900', 'none', 'normal']
                },
                {
                    type: 'rect',
                    id: 'Rectangle6',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '1px', '383px', '494px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1)']
                },
                {
                    type: 'image',
                    id: 'ocean',
                    rect: ['0', '1', '667px', '497px', 'auto', 'auto'],
                    clip: ['rect(0px 383px 497px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/ocean.png', '0px', '0px', '99.69999694824219%', '99.69999694824219%']
                }
            ],
            symbolInstances: [
            {
                id: 'POPUP_TEXTBOX18',
                symbolName: 'POPUP_TEXTBOX'
            }            ]
        },
    states: {
        "Base State": {
            "${_Text4}": [
                ["subproperty", "textShadow.blur", '1px'],
                ["subproperty", "textShadow.offsetH", '0px'],
                ["subproperty", "textShadow.offsetV", '1px'],
                ["style", "font-weight", '900'],
                ["color", "color", 'rgba(90,161,184,1.00)'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65098)'],
                ["style", "left", '407px'],
                ["style", "top", '24px']
            ],
            "${_ocean}": [
                ["style", "height", '497px'],
                ["style", "background-size", [99.69999694824219,99.69999694824219], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "clip", [0,383,497,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '667px']
            ],
            "${symbolSelector}": [
                ["style", "height", '517px'],
                ["style", "width", '783px']
            ],
            "${_Text3}": [
                ["style", "top", '82px'],
                ["style", "font-size", '16px'],
                ["style", "text-align", 'left'],
                ["style", "overflow", 'visible'],
                ["color", "color", 'rgba(211,211,211,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '405px'],
                ["style", "width", '244px']
            ],
            "${_Rectangle5Copy}": [
                ["style", "top", '17px'],
                ["style", "height", '460px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '395px'],
                ["style", "width", '259px']
            ],
            "${_Rectangle5}": [
                ["style", "left", '382px'],
                ["style", "top", '1px']
            ],
            "${_Rectangle6}": [
                ["style", "top", '1px'],
                ["style", "left", '0px'],
                ["style", "height", '494px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"POPUP_THEPLANET": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'POPUP_TEXTBOX16',
                    type: 'rect',
                    rect: ['382', '0', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'text',
                    rect: ['407px', '60px', '244px', '403px', 'auto', 'auto'],
                    overflow: 'visible',
                    id: 'Text3',
                    text: 'About 3.6 billion years ago, Earth had no oxygen in the atmosphere at all! The chemicals that made up Earth’s atmosphere were water vapor, carbon dioxide, ammonia, nitrogen gas as N2, methane, hydrogen, sulfur dioxide, formaldehyde and cyanide.',
                    align: 'left',
                    font: ['asap, sans-serif', 16, 'rgba(211,211,211,1.00)', '400', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['407px', '24px', '234px', '37px', 'auto', 'auto'],
                    align: 'center',
                    id: 'Text4',
                    text: 'Primordial Soup<br>',
                    textShadow: ['rgba(0,0,0,0.65098)', 0, 1, 1],
                    font: ['asap, sans-serif', 24, 'rgba(90,161,184,1.00)', '900', 'none', 'normal']
                },
                {
                    type: 'rect',
                    id: 'Rectangle6',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '1px', '383px', '494px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1)']
                },
                {
                    type: 'image',
                    rect: ['0px', '0px', '783px', '518px', 'auto', 'auto'],
                    id: 'NM1909',
                    transform: [[0, 0], [], [], ['1', '0.99807']],
                    clip: ['rect(0px 383px 495px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/NM1909.jpg', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'POPUP_TEXTBOX16',
                symbolName: 'POPUP_TEXTBOX'
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '517px'],
                ["style", "width", '783px']
            ],
            "${_Text3}": [
                ["style", "top", '60px'],
                ["style", "width", '244px'],
                ["style", "text-align", 'left'],
                ["style", "overflow", 'visible'],
                ["color", "color", 'rgba(211,211,211,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '407px'],
                ["style", "font-size", '16px']
            ],
            "${_Text4}": [
                ["subproperty", "textShadow.blur", '1px'],
                ["subproperty", "textShadow.offsetH", '0px'],
                ["subproperty", "textShadow.offsetV", '1px'],
                ["style", "font-weight", '900'],
                ["color", "color", 'rgba(90,161,184,1.00)'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65098)'],
                ["style", "left", '407px'],
                ["style", "top", '24px']
            ],
            "${_NM1909}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.99807'],
                ["style", "height", '518px'],
                ["style", "clip", [0,383,495,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '0px'],
                ["style", "width", '783px']
            ],
            "${_Rectangle6}": [
                ["style", "top", '1px'],
                ["style", "left", '0px'],
                ["style", "height", '494px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"POPUP_ORGANISMS": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'Stromatolites_in_Sharkbay',
                    rect: ['0', '0', '668px', '497px', 'auto', 'auto'],
                    clip: ['rect(0px 413px 497px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/Stromatolites_in_Sharkbay.jpg', '0px', '0px']
                },
                {
                    id: 'POPUP_TEXTBOX17',
                    type: 'rect',
                    rect: ['382', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'text',
                    rect: ['410px', '85px', '244px', '371px', 'auto', 'auto'],
                    id: 'Text3',
                    text: 'Life on Earth didn’t show up until about 3.6 billion years ago! Before that time, Earth was being bombarded by comets and asteroids, which would have instantly killed any pre-existing life. Current data shows that life began to evolve once the Late Heavy Bombardment period ended.',
                    align: 'left',
                    font: ['asap, sans-serif', 16, 'rgba(255,255,255,1.00)', '400', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['383px', '18px', '285px', '37px', 'auto', 'auto'],
                    align: 'center',
                    id: 'Text4',
                    text: 'Organisms &amp; Origins',
                    textShadow: ['rgba(0,0,0,0.65098)', 0, 1, 1],
                    font: ['asap, sans-serif', 26, 'rgba(90,161,184,1.00)', '900', 'none', 'normal']
                }
            ],
            symbolInstances: [
            {
                id: 'POPUP_TEXTBOX17',
                symbolName: 'POPUP_TEXTBOX',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_POPUP_TEXTBOX17}": [
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '517px'],
                ["style", "width", '783px']
            ],
            "${_Text3}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '410px'],
                ["style", "width", '244px'],
                ["style", "top", '85px'],
                ["style", "text-align", 'left'],
                ["style", "overflow", 'visible'],
                ["style", "height", '371px'],
                ["style", "font-size", '16px']
            ],
            "${_Stromatolites_in_Sharkbay}": [
                ["style", "height", '497px'],
                ["style", "clip", [0,413,497,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '668px']
            ],
            "${_Text4}": [
                ["subproperty", "textShadow.blur", '1px'],
                ["subproperty", "textShadow.offsetH", '0px'],
                ["color", "color", 'rgba(90,161,184,1.00)'],
                ["style", "font-weight", '900'],
                ["style", "left", '383px'],
                ["style", "font-size", '26px'],
                ["style", "top", '18px'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65098)'],
                ["style", "width", '285px'],
                ["subproperty", "textShadow.offsetV", '1px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"POPUP_LIFEONEARTH": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'POPUP_TEXTBOX15',
                    type: 'rect',
                    rect: ['382', '0', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'text',
                    rect: ['407px', '87px', '244px', '403px', 'auto', 'auto'],
                    overflow: 'visible',
                    id: 'Text3',
                    text: 'Though scientists are still unsure what organism was our first ancestor, we do know that life began about 3.6 billion years ago. Since then, life on Earth has been changing and evolving. We know that life started 3.6 billion years ago because fossils of microorganisms from that period were discovered in some of the oldest discovered rocks on Earth. ',
                    align: 'left',
                    font: ['asap, sans-serif', 16, 'rgba(211,211,211,1.00)', '400', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['407px', '24px', '234px', '37px', 'auto', 'auto'],
                    align: 'center',
                    id: 'Text4',
                    text: 'Life on Earth',
                    textShadow: ['rgba(0,0,0,0.65098)', 0, 1, 1],
                    font: ['asap, sans-serif', 24, 'rgba(90,161,184,1.00)', '900', 'none', 'normal']
                },
                {
                    type: 'rect',
                    id: 'Rectangle6',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '1px', '383px', '494px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1)']
                },
                {
                    type: 'image',
                    rect: ['0px', '0px', '783px', '518px', 'auto', 'auto'],
                    id: 'NM1909',
                    transform: [[0, 0], [], [], ['1', '0.99807']],
                    clip: ['rect(0px 383px 495px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/NM1909.jpg', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'POPUP_TEXTBOX15',
                symbolName: 'POPUP_TEXTBOX'
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '517px'],
                ["style", "width", '783px']
            ],
            "${_Text3}": [
                ["style", "top", '87px'],
                ["style", "width", '244px'],
                ["style", "text-align", 'left'],
                ["style", "overflow", 'visible'],
                ["color", "color", 'rgba(211,211,211,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '407px'],
                ["style", "font-size", '16px']
            ],
            "${_Text4}": [
                ["subproperty", "textShadow.blur", '1px'],
                ["subproperty", "textShadow.offsetH", '0px'],
                ["subproperty", "textShadow.offsetV", '1px'],
                ["style", "font-weight", '900'],
                ["color", "color", 'rgba(90,161,184,1.00)'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65098)'],
                ["style", "left", '407px'],
                ["style", "top", '24px']
            ],
            "${_NM1909}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.99807'],
                ["style", "height", '518px'],
                ["style", "clip", [0,383,495,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '0px'],
                ["style", "width", '783px']
            ],
            "${_Rectangle6}": [
                ["style", "top", '1px'],
                ["style", "left", '0px'],
                ["style", "height", '494px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"POPUP_BRANCHING": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'POPUP_TEXTBOX12',
                    type: 'rect',
                    rect: ['382px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'text',
                    rect: ['407px', '81px', '244px', '403px', 'auto', 'auto'],
                    overflow: 'visible',
                    id: 'Text3',
                    text: 'Similar to how branches split from the trunk of a tree, phylogenetic trees show the relationships between groups of organisms (i.e. branches) and a common ancestor (i.e. location of split). In other words, phylogenies depict evolutionary history and each “branch” shows the evolutionary history of a group of organisms. For instance, modern humans and chimpanzees would be on the same “branch” because both chimpanzees and humans evolved from the same common ancestor, with the split occurring roughly 6 million years ago. ',
                    align: 'left',
                    font: ['asap, sans-serif', 16, 'rgba(211,211,211,1.00)', '400', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['395px', '24px', '256px', '37px', 'auto', 'auto'],
                    align: 'center',
                    id: 'Text4',
                    text: 'Evolutionary Branching',
                    textShadow: ['rgba(0,0,0,0.65098)', 0, 1, 1],
                    font: ['asap, sans-serif', 24, 'rgba(90,161,184,1.00)', '900', 'none', 'normal']
                },
                {
                    type: 'rect',
                    id: 'Rectangle6',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '1px', '383px', '494px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1)']
                },
                {
                    id: 'commonancestry',
                    type: 'image',
                    rect: ['0', '0', '383px', '497px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/commonancestry.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'POPUP_TEXTBOX12',
                symbolName: 'POPUP_TEXTBOX'
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '517px'],
                ["style", "width", '783px']
            ],
            "${_Text3}": [
                ["style", "top", '81px'],
                ["style", "font-size", '16px'],
                ["style", "text-align", 'left'],
                ["style", "overflow", 'visible'],
                ["color", "color", 'rgba(211,211,211,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '407px'],
                ["style", "width", '244px']
            ],
            "${_Rectangle6}": [
                ["style", "top", '1px'],
                ["style", "left", '0px'],
                ["style", "height", '494px']
            ],
            "${_POPUP_TEXTBOX12}": [
                ["style", "left", '382px'],
                ["style", "top", '0px']
            ],
            "${_Text4}": [
                ["subproperty", "textShadow.blur", '1px'],
                ["subproperty", "textShadow.offsetH", '0px'],
                ["color", "color", 'rgba(90,161,184,1.00)'],
                ["style", "font-weight", '900'],
                ["style", "left", '395px'],
                ["style", "width", '256px'],
                ["style", "top", '24px'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65098)'],
                ["subproperty", "textShadow.offsetV", '1px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"POPUP_LGT": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'POPUP_TEXTBOX13',
                    type: 'rect',
                    rect: ['382', '0', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'text',
                    rect: ['407px', '84px', '244px', '403px', 'auto', 'auto'],
                    overflow: 'visible',
                    id: 'Text3',
                    text: 'Lateral gene transfer, also known as horizontal gene transfer, is the transfer of genes from one species to another. Lateral gene transfer is mostly performed by bacteria. This kind of genetics is important because it creates new assortments of genes.',
                    align: 'left',
                    font: ['asap, sans-serif', 16, 'rgba(211,211,211,1.00)', '400', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['407px', '24px', '234px', '37px', 'auto', 'auto'],
                    align: 'center',
                    id: 'Text4',
                    text: 'Lateral Gene Transfer',
                    textShadow: ['rgba(0,0,0,0.65098)', 0, 1, 1],
                    font: ['asap, sans-serif', 24, 'rgba(90,161,184,1.00)', '900', 'none', 'normal']
                },
                {
                    type: 'rect',
                    id: 'Rectangle6',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '1px', '383px', '494px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1)']
                },
                {
                    type: 'image',
                    id: 'lgt-image',
                    rect: ['-192px', '-247px', '766px', '994px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.5', '0.5']],
                    fill: ['rgba(0,0,0,0)', 'images/lgt-image.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'POPUP_TEXTBOX13',
                symbolName: 'POPUP_TEXTBOX'
            }            ]
        },
    states: {
        "Base State": {
            "${_lgt-image}": [
                ["style", "top", '-247px'],
                ["style", "left", '-192px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5']
            ],
            "${_Text3}": [
                ["style", "top", '84px'],
                ["style", "width", '244px'],
                ["style", "text-align", 'left'],
                ["style", "overflow", 'visible'],
                ["color", "color", 'rgba(211,211,211,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '407px'],
                ["style", "font-size", '16px']
            ],
            "${_Text4}": [
                ["subproperty", "textShadow.blur", '1px'],
                ["subproperty", "textShadow.offsetH", '0px'],
                ["subproperty", "textShadow.offsetV", '1px'],
                ["style", "font-weight", '900'],
                ["color", "color", 'rgba(90,161,184,1.00)'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65098)'],
                ["style", "left", '407px'],
                ["style", "top", '24px']
            ],
            "${symbolSelector}": [
                ["style", "height", '517px'],
                ["style", "width", '783px']
            ],
            "${_Rectangle6}": [
                ["style", "top", '1px'],
                ["style", "left", '0px'],
                ["style", "height", '494px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"POPUP_LITTLETREE": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'POPUP_TEXTBOX14',
                    type: 'rect',
                    rect: ['382', '1', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'text',
                    rect: ['407px', '60px', '244px', '403px', 'auto', 'auto'],
                    overflow: 'visible',
                    id: 'Text3',
                    text: 'In the past, many depictions of evolutionary history have used a tree-like structure to show how species were related to one another. Starting from the very creation of our planet 4.8 Billion years ago, this “Big Picture” Tree only shows the highest level of grouped species, known as “Domains” There are three domains, in which we categorize all life on Earth, known as Bacteria, Archaea &amp; Eukaryotes. If we were to show any more detail, you’d never be able to fit it all on one page! The other reason this doesn’t look like a tree is that really, evolution doesn’t look like a tree. It’s similar, in that we can trace back ‘branches’ of one species that had a common ancestor with other species, but actual evolution also includes things like Lateral Gene Transfer, where unrelated species share and swap DNA. If we were to try to make a more faithful representation, it would look more like a tree covered in spiderwebs!<br>',
                    align: 'left',
                    font: ['asap, sans-serif', 16, 'rgba(211,211,211,1.00)', '400', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['407px', '24px', '234px', '37px', 'auto', 'auto'],
                    align: 'center',
                    id: 'Text4',
                    text: 'If it looks like a tree...',
                    textShadow: ['rgba(0,0,0,0.65098)', 0, 1, 1],
                    font: ['asap, sans-serif', 24, 'rgba(90,161,184,1.00)', '900', 'none', 'normal']
                },
                {
                    type: 'rect',
                    id: 'Rectangle6',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '1px', '383px', '494px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1)']
                },
                {
                    id: 'lgt-popup',
                    type: 'image',
                    rect: ['0', '1', '383px', '497px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/lgt-popup.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'POPUP_TEXTBOX14',
                symbolName: 'POPUP_TEXTBOX'
            }            ]
        },
    states: {
        "Base State": {
            "${_Text3}": [
                ["style", "top", '60px'],
                ["style", "font-size", '16px'],
                ["style", "text-align", 'left'],
                ["style", "overflow", 'visible'],
                ["color", "color", 'rgba(211,211,211,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '407px'],
                ["style", "width", '244px']
            ],
            "${_Rectangle6}": [
                ["style", "top", '1px'],
                ["style", "left", '0px'],
                ["style", "height", '494px']
            ],
            "${symbolSelector}": [
                ["style", "height", '517px'],
                ["style", "width", '783px']
            ],
            "${_Text4}": [
                ["subproperty", "textShadow.blur", '1px'],
                ["subproperty", "textShadow.offsetH", '0px'],
                ["subproperty", "textShadow.offsetV", '1px'],
                ["style", "font-weight", '900'],
                ["color", "color", 'rgba(90,161,184,1.00)'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65098)'],
                ["style", "left", '407px'],
                ["style", "top", '24px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"POPUP_ARCHAEABEGINS": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'POPUP_TEXTBOX11',
                    type: 'rect',
                    rect: ['382', '1', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'text',
                    rect: ['407px', '80px', '244px', '403px', 'auto', 'auto'],
                    id: 'Text3',
                    text: 'Archaea branched off from the domain bacteria about 1.7 billion years ago. Unlike bacteria, Archaea lack a compound called peptidoglycan in their cell walls, and are genetically distinct. Archaea were first discovered in extreme environments from above 110 degrees Celsius and below 0 degrees Celsius. As a reference point, water boils at 100 degrees Celsius, so these organisms can live in water that is hotter than the boiling point! Some Archaea can also survive in extremely salty and acidic environments as well. <br>',
                    align: 'left',
                    font: ['asap, sans-serif', 16, 'rgba(211,211,211,1.00)', '400', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['395px', '24px', '256px', '37px', 'auto', 'auto'],
                    align: 'center',
                    id: 'Text4',
                    text: 'Domain Archaea is Born',
                    textShadow: ['rgba(0,0,0,0.65098)', 0, 1, 1],
                    font: ['asap, sans-serif', 24, 'rgba(90,161,184,1.00)', '900', 'none', 'normal']
                },
                {
                    type: 'rect',
                    id: 'Rectangle6',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '1px', '383px', '494px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1)']
                },
                {
                    type: 'image',
                    id: 'Archaea',
                    rect: ['0', '0', '701px', '497px', 'auto', 'auto'],
                    clip: ['rect(0px 383px 497px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/Archaea.jpg', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'POPUP_TEXTBOX11',
                symbolName: 'POPUP_TEXTBOX',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_Archaea}": [
                ["style", "height", '497px'],
                ["style", "clip", [0,383,497,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '701px']
            ],
            "${symbolSelector}": [
                ["style", "height", '517px'],
                ["style", "width", '783px']
            ],
            "${_Text3}": [
                ["style", "top", '80px'],
                ["style", "width", '244px'],
                ["style", "text-align", 'left'],
                ["style", "overflow", 'visible'],
                ["color", "color", 'rgba(211,211,211,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '407px'],
                ["style", "font-size", '16px']
            ],
            "${_Rectangle6}": [
                ["style", "top", '1px'],
                ["style", "left", '0px'],
                ["style", "height", '494px']
            ],
            "${_Text4}": [
                ["subproperty", "textShadow.blur", '1px'],
                ["subproperty", "textShadow.offsetH", '0px'],
                ["color", "color", 'rgba(90,161,184,1.00)'],
                ["style", "font-weight", '900'],
                ["style", "left", '395px'],
                ["style", "width", '256px'],
                ["style", "top", '24px'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65098)'],
                ["subproperty", "textShadow.offsetV", '1px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"Genetic_Drift_Popup": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'Pop_up_text_block',
                    type: 'group',
                    rect: ['-264px', '-39px', '255px', '153px', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['0px', '0px', '247px', '223px', 'auto', 'auto'],
                        id: 'Rectangle',
                        stroke: [0, 'rgba(0,0,0,1)', 'none'],
                        type: 'rect',
                        fill: ['rgba(192,192,192,1)']
                    },
                    {
                        rect: ['9px', '9px', '228px', '204px', 'auto', 'auto'],
                        id: 'Rectangle2',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'rect',
                        fill: ['rgba(255,250,250,1.00)']
                    },
                    {
                        id: 'Group2',
                        type: 'group',
                        rect: ['19px', '17px', '206', '117', 'auto', 'auto'],
                        c: [
                        {
                            rect: ['0px', '22px', '206px', '170px', 'auto', 'auto'],
                            font: ['Verdana, Geneva, sans-serif', 11, 'rgba(0,0,0,1.00)', '100', 'none', 'normal'],
                            id: 'POPUP_DESCRIPTION',
                            text: 'Genetic drift is one way that evolution can happen. According to natural selection, the “most fit” members of a population survive. With genetic drift, organisms that are killed at random can also affect evolution. Once an organism passes away, they can no longer reproduce, and their genes are not carried on to offspring. Over a substantial amount of time, genetic drift can change the gene pool of a population. <br>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['0px', '0px', '198px', '21px', 'auto', 'auto'],
                            font: ['Signika Negative', 18, 'rgba(0,0,0,1)', '700', 'none', 'normal'],
                            id: 'POPUP_TITLE',
                            text: 'What is Genetic Drift?',
                            align: 'left',
                            type: 'text'
                        }]
                    }]
                },
                {
                    rect: ['0px', '0px', '80', '71', 'auto', 'auto'],
                    id: 'Label',
                    cursor: ['pointer'],
                    type: 'group',
                    c: [
                    {
                        rect: ['3px', '-3px', '73px', '73px', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'Ellipse',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'ellipse',
                        fill: ['rgba(39,39,39,1.00)']
                    },
                    {
                        rect: ['-1px', '12px', '80px', '48px', 'auto', 'auto'],
                        font: ['asap, sans-serif', 18, 'rgba(255,255,255,1)', '700', 'none', 'normal'],
                        id: 'TITLE',
                        text: 'Genetic<br>Drift',
                        align: 'center',
                        type: 'text'
                    }]
                },
                {
                    rect: ['0px', '-1px', '80px', '72px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'hitbox',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_hitbox}": [
                ["style", "top", '-1px'],
                ["style", "left", '0px'],
                ["style", "overflow", 'visible'],
                ["style", "height", '72px'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '80px']
            ],
            "${_Rectangle2}": [
                ["color", "background-color", 'rgba(255,250,250,1.00)'],
                ["style", "height", '204px'],
                ["style", "left", '9px'],
                ["style", "top", '9px']
            ],
            "${_POPUP_TITLE}": [
                ["style", "top", '0px'],
                ["style", "font-weight", '700'],
                ["style", "font-family", 'Signika Negative'],
                ["style", "left", '0px'],
                ["style", "font-size", '18px']
            ],
            "${_Group2}": [
                ["style", "top", '17px'],
                ["style", "left", '19px']
            ],
            "${_POPUP_DESCRIPTION}": [
                ["style", "top", '22px'],
                ["style", "text-align", 'left'],
                ["style", "overflow", 'visible'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "left", '0px'],
                ["style", "height", '170px']
            ],
            "${_Ellipse}": [
                ["color", "background-color", 'rgba(39,39,39,1)'],
                ["style", "height", '73px'],
                ["style", "top", '-3px'],
                ["style", "left", '3px'],
                ["style", "width", '73px']
            ],
            "${symbolSelector}": [
                ["style", "height", '71px'],
                ["style", "width", '80px']
            ],
            "${_Label}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Rectangle}": [
                ["style", "top", '0px'],
                ["style", "height", '223px'],
                ["style", "left", '0px'],
                ["style", "width", '247px']
            ],
            "${_Pop_up_text_block}": [
                ["style", "top", '-39px'],
                ["style", "height", '153px'],
                ["style", "opacity", '0'],
                ["style", "left", '-264px'],
                ["style", "width", '255px']
            ],
            "${_TITLE}": [
                ["style", "top", '12px'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '18px'],
                ["style", "height", '48px'],
                ["style", "font-weight", '700'],
                ["style", "left", '-1px'],
                ["style", "width", '80px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 628,
            autoPlay: true,
            labels: {
                "rollover": 500,
                "rollover2": 628
            },
            timeline: [
                { id: "eid491", tween: [ "style", "${_Label}", "opacity", '1', { fromValue: '1'}], position: 500, duration: 0, easing: "easeInQuad" },
                { id: "eid458", tween: [ "style", "${_Pop_up_text_block}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 48, easing: "easeInQuad" },
                { id: "eid1291", tween: [ "color", "${_Ellipse}", "background-color", 'rgba(170,155,55,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(39,39,39,1)'}], position: 500, duration: 128, easing: "easeInExpo" }            ]
        }
    }
},
"POPUP_EUKARYABEGINS": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'POPUP_TEXTBOX10',
                    type: 'rect',
                    rect: ['382', '0', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'text',
                    rect: ['407px', '92px', '244px', '403px', 'auto', 'auto'],
                    overflow: 'visible',
                    id: 'Text3',
                    text: 'The first eukaryotic fossil was discovered about 1.8 billion years ago. Eukaryotes are organisms with a cell nucleus, a protective sphere that holds in their DNA. Eukaryotes also share a cytoskeleton in their cells, which is like a web of filaments, made of proteins, that helps structure the cell as well as performing many other helpful tasks. Eukaryotes range from single-celled species to truely multicellular organisms. Eukaryotes include plants, fungi, animals, amoebae, flagellates and many more. In case you were wondering, YOU are a Eukaryote!',
                    align: 'left',
                    font: ['asap, sans-serif', 16, 'rgba(211,211,211,1.00)', '400', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['395px', '24px', '256px', '37px', 'auto', 'auto'],
                    align: 'center',
                    id: 'Text4',
                    text: 'Domain Eukarya is Born',
                    textShadow: ['rgba(0,0,0,0.65098)', 0, 1, 1],
                    font: ['asap, sans-serif', 24, 'rgba(90,161,184,1.00)', '900', 'none', 'normal']
                },
                {
                    type: 'rect',
                    id: 'Rectangle6',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '1px', '383px', '494px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1)']
                },
                {
                    id: '_769px-Eukaryota_diversity_1',
                    type: 'image',
                    rect: ['0px', '1px', '383px', '497px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/769px-Eukaryota_diversity_1.JPG', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'POPUP_TEXTBOX10',
                symbolName: 'POPUP_TEXTBOX'
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '517px'],
                ["style", "width", '783px']
            ],
            "${_Text3}": [
                ["style", "top", '92px'],
                ["style", "font-size", '16px'],
                ["style", "text-align", 'left'],
                ["style", "overflow", 'visible'],
                ["color", "color", 'rgba(211,211,211,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '407px'],
                ["style", "width", '244px']
            ],
            "${_Text4}": [
                ["subproperty", "textShadow.blur", '1px'],
                ["subproperty", "textShadow.offsetH", '0px'],
                ["color", "color", 'rgba(90,161,184,1.00)'],
                ["style", "font-weight", '900'],
                ["style", "left", '395px'],
                ["style", "width", '256px'],
                ["style", "top", '24px'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65098)'],
                ["subproperty", "textShadow.offsetV", '1px']
            ],
            "${__769px-Eukaryota_diversity_1}": [
                ["style", "height", '497px'],
                ["style", "top", '1px'],
                ["style", "left", '0px'],
                ["style", "width", '383px']
            ],
            "${_Rectangle6}": [
                ["style", "top", '1px'],
                ["style", "left", '0px'],
                ["style", "height", '494px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"POPUP_SPONGEFUNGI": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'POPUP_TEXTBOX9',
                    type: 'rect',
                    rect: ['382', '0', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'text',
                    rect: ['407px', '84px', '244px', '403px', 'auto', 'auto'],
                    overflow: 'visible',
                    id: 'Text3',
                    text: 'The first eukaryotic fossil was discovered about 1.8 billion years ago. Eukaryotes are organisms with a cell nucleus, a protective sphere that holds in their DNA. Eukaryotes also share a cytoskeleton in their cells, which is like a web of filaments, made of proteins, that helps structure the cell as well as performing many other helpful tasks. Eukaryotes range from single-celled species to truely multicellular organisms. Eukaryotes include plants, fungi, animals, amoebae, flagellates and many more. In case you were wondering, YOU are a Eukaryote!',
                    align: 'left',
                    font: ['asap, sans-serif', 16, 'rgba(211,211,211,1.00)', '400', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['395px', '24px', '256px', '37px', 'auto', 'auto'],
                    align: 'center',
                    id: 'Text4',
                    text: 'Sponges &amp; Fungi Arrive',
                    textShadow: ['rgba(0,0,0,0.65098)', 0, 1, 1],
                    font: ['asap, sans-serif', 24, 'rgba(90,161,184,1.00)', '900', 'none', 'normal']
                },
                {
                    type: 'rect',
                    id: 'Rectangle6',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '1px', '383px', '494px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1)']
                },
                {
                    type: 'image',
                    id: 'Craterium_minutum_Sporangium_ACC',
                    rect: ['-107px', '0', '660px', '497px', 'auto', 'auto'],
                    clip: ['rect(0px 490px 497px 107px)'],
                    fill: ['rgba(0,0,0,0)', 'images/Craterium%20minutum_Sporangium_ACC.jpg', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'POPUP_TEXTBOX9',
                symbolName: 'POPUP_TEXTBOX'
            }            ]
        },
    states: {
        "Base State": {
            "${_Craterium_minutum_Sporangium_ACC}": [
                ["style", "height", '497px'],
                ["style", "clip", [0,490,497,107], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-107px'],
                ["style", "width", '660px']
            ],
            "${symbolSelector}": [
                ["style", "height", '517px'],
                ["style", "width", '783px']
            ],
            "${_Text3}": [
                ["style", "top", '84px'],
                ["style", "width", '244px'],
                ["style", "text-align", 'left'],
                ["style", "overflow", 'visible'],
                ["color", "color", 'rgba(211,211,211,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '407px'],
                ["style", "font-size", '16px']
            ],
            "${_Rectangle6}": [
                ["style", "top", '1px'],
                ["style", "left", '0px'],
                ["style", "height", '494px']
            ],
            "${_Text4}": [
                ["subproperty", "textShadow.blur", '1px'],
                ["subproperty", "textShadow.offsetH", '0px'],
                ["color", "color", 'rgba(90,161,184,1.00)'],
                ["style", "font-weight", '900'],
                ["style", "left", '395px'],
                ["style", "width", '256px'],
                ["style", "top", '24px'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65098)'],
                ["subproperty", "textShadow.offsetV", '1px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"POPUP_ICEAGE": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'POPUP_TEXTBOX8',
                    type: 'rect',
                    rect: ['382', '1', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'text',
                    rect: ['407px', '87px', '244px', '403px', 'auto', 'auto'],
                    overflow: 'visible',
                    id: 'Text3',
                    text: 'There have been over a dozen ice ages in the Earth’s history, but there were only five major ones: the Huronian, Cryogenian, Andean-Saharan, Karoo, and Quaternary Glaciation. Earth’s last ice age, which has also been referred to as the Great Ice age, happened 10,000 years ago!  At that point in time, about ⅓ of the Earth was completely covered in ice. ',
                    align: 'left',
                    font: ['asap, sans-serif', 16, 'rgba(211,211,211,1.00)', '400', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['395px', '24px', '256px', '37px', 'auto', 'auto'],
                    align: 'center',
                    id: 'Text4',
                    text: 'The (Brr) Ice Ages!',
                    textShadow: ['rgba(0,0,0,0.65098)', 0, 1, 1],
                    font: ['asap, sans-serif', 24, 'rgba(90,161,184,1.00)', '900', 'none', 'normal']
                },
                {
                    type: 'rect',
                    id: 'Rectangle6',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '1px', '383px', '494px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1)']
                },
                {
                    type: 'image',
                    rect: ['-74px', '0px', '447px', '517px', 'auto', 'auto'],
                    id: 'Thermococcus',
                    transform: [[0, 0], [], [], ['1.46596']],
                    clip: ['rect(0px 383px 498px 122px)'],
                    fill: ['rgba(0,0,0,0)', 'images/800px-Fictional_Snowball_Earth_1_Neethis.jpg', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'POPUP_TEXTBOX8',
                symbolName: 'POPUP_TEXTBOX'
            }            ]
        },
    states: {
        "Base State": {
            "${_Thermococcus}": [
                ["style", "top", '0px'],
                ["transform", "scaleX", '1.46596'],
                ["style", "height", '517px'],
                ["style", "left", '-74px'],
                ["style", "clip", [0,383,498,122], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '447px']
            ],
            "${symbolSelector}": [
                ["style", "height", '517px'],
                ["style", "width", '783px']
            ],
            "${_Text3}": [
                ["style", "top", '87px'],
                ["style", "font-size", '16px'],
                ["style", "text-align", 'left'],
                ["style", "overflow", 'visible'],
                ["color", "color", 'rgba(211,211,211,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '407px'],
                ["style", "width", '244px']
            ],
            "${_Text4}": [
                ["subproperty", "textShadow.blur", '1px'],
                ["subproperty", "textShadow.offsetH", '0px'],
                ["color", "color", 'rgba(90,161,184,1.00)'],
                ["style", "font-weight", '900'],
                ["style", "left", '395px'],
                ["style", "width", '256px'],
                ["style", "top", '24px'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65098)'],
                ["subproperty", "textShadow.offsetV", '1px']
            ],
            "${_Rectangle6}": [
                ["style", "top", '1px'],
                ["style", "left", '0px'],
                ["style", "height", '494px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"POPUP_OXYGEN": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'POPUP_TEXTBOX7',
                    type: 'rect',
                    rect: ['382', '1', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'text',
                    rect: ['407px', '85px', '244px', '403px', 'auto', 'auto'],
                    overflow: 'visible',
                    id: 'Text3',
                    text: 'These days, the  Earth\'s atmosphere is about 21 percent oxygen. However, Earth’s atmosphere wasn\'t always this way. Until about 2.45 billion years ago, the Earth’s atmosphere had very little oxygen, as far as current evidence suggests. For some organisms, oxygen is toxic! So how did the oxygen get there? As far as we know, Cyanobacteria converted carbon dioxide to atmospheric oxygen during respiration. Some cyanobacteria still does this today. Eventually, plants came along and continued producing oxygen, but in terms of what kickstarted oxygen, you\'ve got Cyanobacteria to thank!',
                    align: 'left',
                    font: ['asap, sans-serif', 16, 'rgba(211,211,211,1.00)', '400', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['383px', '24px', '284px', '61px', 'auto', 'auto'],
                    align: 'center',
                    id: 'Text4',
                    text: 'Global Oxygen levels rise',
                    textShadow: ['rgba(0,0,0,0.65098)', 0, 1, 1],
                    font: ['asap, sans-serif', 24, 'rgba(90,161,184,1.00)', '900', 'none', 'normal']
                },
                {
                    type: 'rect',
                    id: 'Rectangle6',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '1px', '383px', '494px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1)']
                },
                {
                    type: 'image',
                    rect: ['3px', '2px', '743px', '494px', 'auto', 'auto'],
                    id: 'Layers_of_Earths_atmosphere_brightly_colored_as_the_sun_sets',
                    transform: [[0, 0], [], [], ['1.00607', '1.00607']],
                    clip: ['rect(0px 380px 494px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/Layers_of_Earth\'s_atmosphere%2C_brightly_colored_as_the_sun_sets.jpg', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'POPUP_TEXTBOX7',
                symbolName: 'POPUP_TEXTBOX',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_Layers_of_Earths_atmosphere_brightly_colored_as_the_sun_sets}": [
                ["style", "top", '2px'],
                ["transform", "scaleY", '1.00607'],
                ["style", "height", '494px'],
                ["transform", "scaleX", '1.00607'],
                ["style", "clip", [0,380,494,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '3px'],
                ["style", "width", '743px']
            ],
            "${symbolSelector}": [
                ["style", "height", '517px'],
                ["style", "width", '783px']
            ],
            "${_Text3}": [
                ["style", "top", '85px'],
                ["style", "width", '244px'],
                ["style", "text-align", 'left'],
                ["style", "overflow", 'visible'],
                ["color", "color", 'rgba(211,211,211,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '407px'],
                ["style", "font-size", '16px']
            ],
            "${_Text4}": [
                ["subproperty", "textShadow.blur", '1px'],
                ["subproperty", "textShadow.offsetH", '0px'],
                ["color", "color", 'rgba(90,161,184,1.00)'],
                ["style", "font-weight", '900'],
                ["style", "left", '383px'],
                ["style", "width", '284px'],
                ["style", "top", '24px'],
                ["style", "height", '61px'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65098)'],
                ["subproperty", "textShadow.offsetV", '1px']
            ],
            "${_Rectangle6}": [
                ["style", "top", '1px'],
                ["style", "left", '0px'],
                ["style", "height", '494px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"POPUP_EXPLOSION": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'POPUP_TEXTBOX',
                    type: 'rect',
                    rect: ['383', '1', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'text',
                    rect: ['407px', '60px', '244px', '403px', 'auto', 'auto'],
                    id: 'Text3',
                    text: '530 million years ago, there was a surge in the number of animal species living on Earth in an event called the Cambrian explosion. During this time, a large number of species of animals evolved in a (relatively) short time period. The Cambrian explosion occurred over a period of about 30 million years! During the Cambrian explosion, organisms like trilobites (early arthropods that predate crustaceans), echinoderms and mollusks came into being. ',
                    align: 'left',
                    font: ['asap, sans-serif', 16, 'rgba(232,232,232,1.00)', '400', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['395px', '24px', '256px', '37px', 'auto', 'auto'],
                    align: 'center',
                    id: 'Text4',
                    text: 'Explosion of Species!',
                    textShadow: ['rgba(0,0,0,0.65098)', 0, 1, 1],
                    font: ['asap, sans-serif', 24, 'rgba(90,161,184,1.00)', '900', 'none', 'normal']
                },
                {
                    type: 'rect',
                    id: 'Rectangle6',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '1px', '383px', '494px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1)']
                },
                {
                    type: 'image',
                    id: 'Cambrian_Explosion',
                    rect: ['-438px', '1px', '944px', '497px', 'auto', 'auto'],
                    clip: ['rect(0px 821px 497px 438px)'],
                    fill: ['rgba(0,0,0,0)', 'images/Cambrian_Explosion.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'POPUP_TEXTBOX',
                symbolName: 'POPUP_TEXTBOX',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_Cambrian_Explosion}": [
                ["style", "top", '1px'],
                ["style", "height", '497px'],
                ["style", "clip", [0,821,497,438], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-438px'],
                ["style", "width", '944px']
            ],
            "${_Text3}": [
                ["style", "top", '60px'],
                ["style", "font-size", '16px'],
                ["style", "text-align", 'left'],
                ["style", "overflow", 'visible'],
                ["color", "color", 'rgba(232,232,232,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '407px'],
                ["style", "width", '244px']
            ],
            "${_Text4}": [
                ["subproperty", "textShadow.blur", '1px'],
                ["subproperty", "textShadow.offsetH", '0px'],
                ["color", "color", 'rgba(90,161,184,1.00)'],
                ["style", "font-weight", '900'],
                ["style", "left", '395px'],
                ["style", "width", '256px'],
                ["style", "top", '24px'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65098)'],
                ["subproperty", "textShadow.offsetV", '1px']
            ],
            "${symbolSelector}": [
                ["style", "height", '517px'],
                ["style", "width", '783px']
            ],
            "${_Rectangle6}": [
                ["style", "top", '1px'],
                ["style", "left", '0px'],
                ["style", "height", '494px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"POPUP_LANDPLANTS": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'POPUP_TEXTBOX6',
                    type: 'rect',
                    rect: ['382', '0', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'text',
                    rect: ['407px', '60px', '244px', '403px', 'auto', 'auto'],
                    overflow: 'visible',
                    id: 'Text3',
                    text: 'Researchers believe that plants began to live on land around 488 million years ago. These first land plants, which are believed to have originated from aquatic chlorophyte algae, looked differently from the land plants we are used to seeing! Despite the differences in appearance, there is evidence that the first land plants had roots, stems, and in some cases even seeds. Bryophytes, which are plants like mosses and liverworts, may have been some of the first plants to move onto land. ',
                    align: 'left',
                    font: ['asap, sans-serif', 16, 'rgba(211,211,211,1.00)', '400', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['395px', '24px', '256px', '37px', 'auto', 'auto'],
                    align: 'center',
                    id: 'Text4',
                    text: 'Origin of Land Plants',
                    textShadow: ['rgba(0,0,0,0.65098)', 0, 1, 1],
                    font: ['asap, sans-serif', 24, 'rgba(90,161,184,1.00)', '900', 'none', 'normal']
                },
                {
                    type: 'rect',
                    id: 'Rectangle6',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '1px', '383px', '494px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1)']
                },
                {
                    type: 'image',
                    id: 'Thermococcus',
                    rect: ['0px', '0px', '447px', '517px', 'auto', 'auto'],
                    clip: ['rect(0px 383px 498px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/800px-Archaefructus_liaoningensis.jpg', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'POPUP_TEXTBOX6',
                symbolName: 'POPUP_TEXTBOX',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_Thermococcus}": [
                ["style", "top", '0px'],
                ["style", "height", '517px'],
                ["style", "clip", [0,383,498,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '0px'],
                ["style", "width", '447px']
            ],
            "${symbolSelector}": [
                ["style", "height", '517px'],
                ["style", "width", '783px']
            ],
            "${_Text3}": [
                ["style", "top", '60px'],
                ["style", "width", '244px'],
                ["style", "text-align", 'left'],
                ["style", "overflow", 'visible'],
                ["color", "color", 'rgba(211,211,211,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '407px'],
                ["style", "font-size", '16px']
            ],
            "${_Rectangle6}": [
                ["style", "top", '1px'],
                ["style", "left", '0px'],
                ["style", "height", '494px']
            ],
            "${_Text4}": [
                ["subproperty", "textShadow.blur", '1px'],
                ["subproperty", "textShadow.offsetH", '0px'],
                ["color", "color", 'rgba(90,161,184,1.00)'],
                ["style", "font-weight", '900'],
                ["style", "left", '395px'],
                ["style", "width", '256px'],
                ["style", "top", '24px'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65098)'],
                ["subproperty", "textShadow.offsetV", '1px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"POPUP_CONTINENTS": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'POPUP_TEXTBOX5',
                    type: 'rect',
                    rect: ['382', '0', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'text',
                    rect: ['407px', '60px', '244px', '403px', 'auto', 'auto'],
                    overflow: 'visible',
                    id: 'Text3',
                    text: 'The first eukaryotic fossil was discovered about 1.8 billion years ago. Eukaryotes are organisms with a cell nucleus, a protective sphere that holds in their DNA. Eukaryotes also share a cytoskeleton in their cells, which is like a web of filaments, made of proteins, that helps structure the cell as well as performing many other helpful tasks. Eukaryotes range from single-celled species to truely multicellular organisms. Eukaryotes include plants, fungi, animals, amoebae, flagellates and many more. In case you were wondering, YOU are a Eukaryote!',
                    align: 'left',
                    font: ['asap, sans-serif', 16, 'rgba(211,211,211,1.00)', '400', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['395px', '24px', '256px', '37px', 'auto', 'auto'],
                    align: 'center',
                    id: 'Text4',
                    text: 'Domain Eukarya is Born',
                    textShadow: ['rgba(0,0,0,0.65098)', 0, 1, 1],
                    font: ['asap, sans-serif', 24, 'rgba(90,161,184,1.00)', '900', 'none', 'normal']
                },
                {
                    type: 'rect',
                    id: 'Rectangle6',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '1px', '383px', '494px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1)']
                },
                {
                    type: 'image',
                    id: 'pangeae2',
                    rect: ['-281px', '1', '883px', '497px', 'auto', 'auto'],
                    clip: ['rect(0px 665px 497px 280px)'],
                    fill: ['rgba(0,0,0,0)', 'images/pangeae.gif', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'POPUP_TEXTBOX5',
                symbolName: 'POPUP_TEXTBOX'
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '517px'],
                ["style", "width", '783px']
            ],
            "${_Text3}": [
                ["style", "top", '60px'],
                ["style", "font-size", '16px'],
                ["style", "text-align", 'left'],
                ["style", "overflow", 'visible'],
                ["color", "color", 'rgba(211,211,211,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '407px'],
                ["style", "width", '244px']
            ],
            "${_pangeae2}": [
                ["style", "height", '497px'],
                ["style", "left", '-281px'],
                ["style", "clip", [0,665,497,280], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '883px']
            ],
            "${_Text4}": [
                ["subproperty", "textShadow.blur", '1px'],
                ["subproperty", "textShadow.offsetH", '0px'],
                ["color", "color", 'rgba(90,161,184,1.00)'],
                ["style", "font-weight", '900'],
                ["style", "left", '395px'],
                ["style", "width", '256px'],
                ["style", "top", '24px'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65098)'],
                ["subproperty", "textShadow.offsetV", '1px']
            ],
            "${_Rectangle6}": [
                ["style", "top", '1px'],
                ["style", "left", '0px'],
                ["style", "height", '494px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"POPUP_GREATDYING": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'Rectangle5',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['382px', '1px', '285px', '497px', 'auto', 'auto'],
                    fill: ['rgba(114,114,114,1)']
                },
                {
                    type: 'rect',
                    id: 'Rectangle5Copy',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['395px', '17px', '259px', '460px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    font: ['asap, sans-serif', 16, 'rgba(0,0,0,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text3',
                    text: 'The first eukaryotic fossil was discovered about 1.8 billion years ago. Eukaryotes are organisms with a cell nucleus, a protective sphere that holds in their DNA. Eukaryotes also share a cytoskeleton in their cells, which is like a web of filaments, made of proteins, that helps structure the cell as well as performing many other helpful tasks. Eukaryotes range from single-celled species to truely multicellular organisms. Eukaryotes include plants, fungi, animals, amoebae, flagellates and many more. In case you were wondering, YOU are a Eukaryote!',
                    align: 'left',
                    rect: ['407px', '60px', '244px', '403px', 'auto', 'auto']
                },
                {
                    font: ['asap, sans-serif', 24, 'rgba(0,0,0,1.00)', '900', 'none', 'normal'],
                    type: 'text',
                    id: 'Text4',
                    text: 'Domain Eukarya is Born',
                    align: 'center',
                    rect: ['395px', '24px', '256px', '37px', 'auto', 'auto']
                },
                {
                    type: 'rect',
                    id: 'Rectangle6',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '1px', '383px', '494px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1)']
                },
                {
                    type: 'image',
                    id: 'Thermococcus',
                    rect: ['0px', '0px', '447px', '517px', 'auto', 'auto'],
                    clip: ['rect(0px 383px 498px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/Thermococcus.jpg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Thermococcus}": [
                ["style", "top", '0px'],
                ["style", "height", '517px'],
                ["style", "clip", [0,383,498,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '0px'],
                ["style", "width", '447px']
            ],
            "${_Rectangle6}": [
                ["style", "top", '1px'],
                ["style", "left", '0px'],
                ["style", "height", '494px']
            ],
            "${symbolSelector}": [
                ["style", "height", '517px'],
                ["style", "width", '783px']
            ],
            "${_Rectangle5}": [
                ["style", "left", '382px'],
                ["style", "top", '1px']
            ],
            "${_Rectangle5Copy}": [
                ["style", "top", '17px'],
                ["style", "height", '460px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '395px'],
                ["style", "width", '259px']
            ],
            "${_Text3}": [
                ["style", "top", '60px'],
                ["style", "width", '244px'],
                ["style", "text-align", 'left'],
                ["style", "overflow", 'scroll'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '407px'],
                ["style", "font-size", '16px']
            ],
            "${_Text4}": [
                ["style", "top", '24px'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "font-weight", '900'],
                ["style", "left", '395px'],
                ["style", "width", '256px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"POPUP_LANDEXTINCTION": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'POPUP_TEXTBOX22',
                    type: 'rect',
                    rect: ['382', '0', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'text',
                    rect: ['407px', '80px', '244px', '403px', 'auto', 'auto'],
                    id: 'Text3',
                    text: '‘The End-Permian Mass Extinction, or ‘Great Dying’, was aptly named, as 90 percent of marine species and about 70 percent of land organisms went extinct during this period. The reason for this huge eradication of species 251 million years ago was thought to be a combination of two things: A spike in global temperatures across the arid supercontinent of Pangaea and a giant field of volcanoes taking up half of Russia erupting for half a million years, covering the earth with smoke and volcanic ash! <br>Over 90% of all living species at the time went extinct, including many insects, fish,and arthropod species such as the trilobyte. It took over 10 million years for life on Earth to recover it’s previous diversity.<br>',
                    align: 'left',
                    font: ['asap, sans-serif', 16, 'rgba(211,211,211,1.00)', '400', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['395px', '21px', '256px', '37px', 'auto', 'auto'],
                    align: 'center',
                    id: 'Text4',
                    text: '\"The Great Dying\"<br>',
                    textShadow: ['rgba(0,0,0,0.65098)', 0, 1, 1],
                    font: ['asap, sans-serif', 24, 'rgba(90,161,184,1.00)', '900', 'none', 'normal']
                },
                {
                    type: 'rect',
                    id: 'Rectangle6',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '1px', '383px', '494px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1)']
                },
                {
                    type: 'image',
                    rect: ['0', '1px', '792px', '497px', 'auto', 'auto'],
                    id: '_800px-Lionel_WaldenVolcano',
                    transform: [[0, 0], [], [], ['1', '1.00201']],
                    clip: ['rect(0px 383px 497px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/800px-Lionel_WaldenVolcano.jpg', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'POPUP_TEXTBOX22',
                symbolName: 'POPUP_TEXTBOX',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '517px'],
                ["style", "width", '783px']
            ],
            "${_Text3}": [
                ["style", "top", '80px'],
                ["style", "text-align", 'left'],
                ["style", "overflow", 'visible'],
                ["color", "color", 'rgba(211,211,211,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "font-size", '16px'],
                ["style", "width", '244px']
            ],
            "${_Rectangle6}": [
                ["style", "top", '1px'],
                ["style", "left", '0px'],
                ["style", "height", '494px']
            ],
            "${__800px-Lionel_WaldenVolcano}": [
                ["style", "top", '1px'],
                ["transform", "scaleY", '1.00201'],
                ["style", "height", '497px'],
                ["style", "clip", [0,383,497,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '792px']
            ],
            "${_Text4}": [
                ["subproperty", "textShadow.blur", '1px'],
                ["subproperty", "textShadow.offsetH", '0px'],
                ["color", "color", 'rgba(90,161,184,1.00)'],
                ["style", "font-weight", '900'],
                ["style", "left", '395px'],
                ["style", "font-size", '24px'],
                ["style", "top", '21px'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65098)'],
                ["style", "width", '256px'],
                ["subproperty", "textShadow.offsetV", '1px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"POPUP_HUMANCHIMP": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'POPUP_TEXTBOX4',
                    type: 'rect',
                    rect: ['383', '0', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'text',
                    rect: ['395px', '84px', '263px', '379px', 'auto', 'auto'],
                    id: 'Text3',
                    text: 'The closest living relatives to humans are the chimpanzees and bonobos. Chimpanzees share about 98.8% of common DNA with Humans. A common myth about evolution is that Humans evolved from Chimps, but this is completely wrong! Humans and chimps share a common ancestor that was alive over 6 million years ago. Some evidence points even farther, as far back as 10 million years ago. This last common ancestor, some early ape-like species, separated genetically, leading to separate lineages for chimpanzees and humans. ',
                    align: 'left',
                    font: ['asap, sans-serif', 18, 'rgba(211,211,211,1.00)', '400', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['395px', '24px', '256px', '37px', 'auto', 'auto'],
                    align: 'center',
                    id: 'Text4',
                    text: 'Our Common Ancestor',
                    textShadow: ['rgba(0,0,0,0.65098)', 0, 1, 1],
                    font: ['asap, sans-serif', 24, 'rgba(90,161,184,1.00)', '900', 'none', 'normal']
                },
                {
                    type: 'rect',
                    id: 'Rectangle6',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '1px', '383px', '494px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1)']
                },
                {
                    type: 'image',
                    rect: ['0px', '1px', '422px', '497px', 'auto', 'auto'],
                    id: 'Neanderthal-profile',
                    transform: [[0, 0], [], [], ['0.99882', '1.00123']],
                    clip: ['rect(0px 384px 497px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/Neanderthal-profile.jpg', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'POPUP_TEXTBOX4',
                symbolName: 'POPUP_TEXTBOX',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_Neanderthal-profile}": [
                ["style", "top", '1px'],
                ["transform", "scaleY", '1.00123'],
                ["transform", "scaleX", '0.99882'],
                ["style", "height", '497px'],
                ["style", "clip", [0,384,497,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '422px']
            ],
            "${_Text3}": [
                ["color", "color", 'rgba(211,211,211,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '395px'],
                ["style", "width", '263px'],
                ["style", "top", '84px'],
                ["style", "text-align", 'left'],
                ["style", "overflow", 'visible'],
                ["style", "height", '379px'],
                ["style", "font-size", '18px']
            ],
            "${_Text4}": [
                ["subproperty", "textShadow.blur", '1px'],
                ["subproperty", "textShadow.offsetH", '0px'],
                ["color", "color", 'rgba(90,161,184,1.00)'],
                ["style", "font-weight", '900'],
                ["style", "left", '395px'],
                ["style", "width", '256px'],
                ["style", "top", '24px'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65098)'],
                ["subproperty", "textShadow.offsetV", '1px']
            ],
            "${symbolSelector}": [
                ["style", "height", '517px'],
                ["style", "width", '783px']
            ],
            "${_Rectangle6}": [
                ["style", "top", '1px'],
                ["style", "left", '0px'],
                ["style", "height", '494px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"POPUP_MODERNHUMAN": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['382px', '1px', '285px', '497px', 'auto', 'auto'],
                    id: 'Rectangle5',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(114,114,114,1)']
                },
                {
                    rect: ['395px', '17px', '259px', '460px', 'auto', 'auto'],
                    id: 'Rectangle5Copy',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    id: 'POPUP_TEXTBOX2',
                    type: 'rect',
                    rect: ['383', '0', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    font: ['asap, sans-serif', 16, 'rgba(220,220,220,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'Text3',
                    text: 'The oldest fossils of modern humans ever found are about 27,000 years old. According to genetic data, both humans and neanderthals descended from Homo heidelbergensis, an ancient species of humans. Despite being a member of the same species, humans today are genetically different from Homo sapiens that lived about 10,000 years ago. ',
                    align: 'left',
                    rect: ['407px', '60px', '244px', '403px', 'auto', 'auto']
                },
                {
                    font: ['asap, sans-serif', 24, 'rgba(90,161,184,1.00)', '900', 'none', 'normal'],
                    type: 'text',
                    align: 'center',
                    id: 'Text4',
                    text: 'The First Humans',
                    textShadow: ['rgba(0,0,0,0.65098)', 0, 1, 1],
                    rect: ['395px', '24px', '256px', '37px', 'auto', 'auto']
                },
                {
                    rect: ['0px', '1px', '383px', '494px', 'auto', 'auto'],
                    id: 'Rectangle6',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,1)']
                },
                {
                    rect: ['0', '0', '678px', '497px', 'auto', 'auto'],
                    id: 'Lascaux_01',
                    type: 'image',
                    clip: ['rect(0px 383px 497px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/Lascaux_01.jpg', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'POPUP_TEXTBOX2',
                symbolName: 'POPUP_TEXTBOX',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_Lascaux_01}": [
                ["style", "height", '497px'],
                ["style", "clip", [0,383,497,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '678px']
            ],
            "${_Text4}": [
                ["subproperty", "textShadow.blur", '1px'],
                ["subproperty", "textShadow.offsetH", '0px'],
                ["color", "color", 'rgba(90,161,184,1.00)'],
                ["style", "font-weight", '900'],
                ["style", "left", '395px'],
                ["style", "width", '256px'],
                ["style", "top", '24px'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65098)'],
                ["subproperty", "textShadow.offsetV", '1px']
            ],
            "${symbolSelector}": [
                ["style", "height", '517px'],
                ["style", "width", '783px']
            ],
            "${_Text3}": [
                ["style", "top", '60px'],
                ["style", "font-size", '16px'],
                ["style", "text-align", 'left'],
                ["style", "overflow", 'visible'],
                ["color", "color", 'rgba(220,220,220,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '407px'],
                ["style", "width", '244px']
            ],
            "${_Rectangle5Copy}": [
                ["style", "top", '17px'],
                ["style", "height", '460px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '395px'],
                ["style", "width", '259px']
            ],
            "${_Rectangle5}": [
                ["style", "left", '382px'],
                ["style", "top", '1px']
            ],
            "${_Rectangle6}": [
                ["style", "top", '1px'],
                ["style", "left", '0px'],
                ["style", "height", '494px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"whatisthetreeoflife_subtext": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'Group',
                    type: 'group',
                    rect: ['0px', '-2px', '430', '139', 'auto', 'auto'],
                    c: [
                    {
                        font: ['\'Signika Negative\'', 20, 'rgba(255,255,255,1.00)', '300', 'none', 'normal'],
                        rect: ['0px', '2px', 'auto', 'auto', 'auto', 'auto'],
                        align: 'left',
                        text: 'Use this graphical representation <br>of the tree to explore seven<br>key topics surrounding evolutionary <br>biology, from the formation of our <br>planet to its current diversity of life.<br>',
                        id: 'SignikaNegative',
                        opacity: 0.8274906517094,
                        textShadow: ['rgba(0,0,0,0.75)', 0, 2, 2],
                        type: 'text'
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Group}": [
                ["style", "top", '-2px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_SignikaNegative}": [
                ["subproperty", "textShadow.blur", '2px'],
                ["subproperty", "textShadow.offsetH", '0px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '0px'],
                ["style", "font-size", '20px'],
                ["style", "top", '2px'],
                ["style", "text-align", 'left'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.75)'],
                ["subproperty", "textShadow.offsetV", '2px'],
                ["style", "opacity", '0.8274906517094']
            ],
            "${symbolSelector}": [
                ["style", "height", '139px'],
                ["style", "width", '430px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid445", tween: [ "style", "${_Group}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeInOutQuad" }            ]
        }
    }
},
"help_button": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '285px', '100px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'RoundRect',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,63,0,1.00)']
                },
                {
                    font: ['Signika Negative', 30, 'rgba(255,255,255,1.00)', '500', 'none', 'normal'],
                    type: 'text',
                    align: 'center',
                    id: 'Text2',
                    text: 'How does this work?',
                    textShadow: ['rgba(0,0,0,0.65098)', 3, 3, 3],
                    rect: ['0px', '3px', '285px', '48px', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RoundRect}": [
                ["color", "background-color", 'rgba(255,63,0,1.00)'],
                ["style", "height", '100px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '285px']
            ],
            "${_Text2}": [
                ["subproperty", "textShadow.blur", '3px'],
                ["subproperty", "textShadow.offsetH", '3px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '500'],
                ["style", "left", '0px'],
                ["style", "width", '285px'],
                ["style", "top", '3px'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '30px'],
                ["style", "font-style", 'normal'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65098)'],
                ["style", "font-family", 'Signika Negative'],
                ["subproperty", "textShadow.offsetV", '3px']
            ],
            "${symbolSelector}": [
                ["style", "height", '100px'],
                ["style", "width", '285px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"HELPEXIT_BUTTON": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    fill: ['rgba(255,47,47,1.00)'],
                    rect: ['0px', '0px', '22px', '22px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    type: 'ellipse',
                    id: 'HELPEXIT_BUTTON',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)']
                },
                {
                    id: 'smallx',
                    type: 'image',
                    rect: ['0', '0', '22px', '22px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/smallx.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '22px'],
                ["style", "width", '22px']
            ],
            "${_HELPEXIT_BUTTON}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["subproperty", "boxShadow.blur", '3px'],
                ["style", "cursor", 'pointer'],
                ["color", "background-color", 'rgba(255,47,47,1.00)'],
                ["subproperty", "boxShadow.offsetV", '3px'],
                ["subproperty", "boxShadow.offsetH", '3px'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65098)']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"EXIT_BUTTON": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    fill: ['rgba(255,47,47,1.00)'],
                    rect: ['0px', '0px', '22px', '22px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    type: 'ellipse',
                    id: 'EXIT_BUTTON2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)']
                },
                {
                    type: 'image',
                    id: 'smallx3',
                    fill: ['rgba(0,0,0,0)', 'images/smallx.png', '0px', '0px'],
                    rect: ['0', '0', '22px', '22px', 'auto', 'auto'],
                    boxShadow: ['', 0, 0, 0, 0, 'rgba(0,0,0,0)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_EXIT_BUTTON2}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["subproperty", "boxShadow.blur", '3px'],
                ["style", "cursor", 'pointer'],
                ["color", "background-color", 'rgba(255,47,47,1.00)'],
                ["subproperty", "boxShadow.offsetV", '3px'],
                ["subproperty", "boxShadow.offsetH", '3px'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65098)']
            ],
            "${symbolSelector}": [
                ["style", "height", '22px'],
                ["style", "width", '22px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"timeline_text1": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'Rectangle5',
                    stroke: [1, 'rgba(0,0,0,1.00)', 'solid'],
                    rect: ['0px', '0px', '197px', '45px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    font: ['\'Signika Negative\'', 25, 'rgba(255,255,255,1)', '500', 'none', 'normal'],
                    type: 'text',
                    id: 'Text',
                    text: 'The Early Earth',
                    align: 'center',
                    rect: ['7px', '8px', '187px', '47px', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle5}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["color", "border-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '197px']
            ],
            "${_Text}": [
                ["style", "font-size", '25px']
            ],
            "${symbolSelector}": [
                ["style", "height", '47px'],
                ["style", "width", '199px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"TIMELINE_TEXT2": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'Rectangle5',
                    stroke: [1, 'rgba(0,0,0,1.00)', 'solid'],
                    rect: ['1px', '0px', '197px', '51px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    font: ['\'Signika Negative\'', 25, 'rgba(255,255,255,1)', '500', 'none', 'normal'],
                    type: 'text',
                    id: 'Text',
                    text: 'Origin of Life',
                    align: 'center',
                    rect: ['7px', '8px', '187px', '47px', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle5}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '0px'],
                ["style", "height", '51px'],
                ["color", "border-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '1px'],
                ["style", "width", '197px']
            ],
            "${_Text}": [
                ["style", "font-size", '25px']
            ],
            "${symbolSelector}": [
                ["style", "height", '47px'],
                ["style", "width", '199px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"TIMELINE_TEXT3": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'Rectangle5',
                    stroke: [1, 'rgba(0,0,0,1.00)', 'solid'],
                    rect: ['0px', '0px', '197px', '64px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    font: ['\'Signika Negative\'', 25, 'rgba(255,255,255,1)', '500', 'none', 'normal'],
                    type: 'text',
                    id: 'Text',
                    text: 'Early Life',
                    align: 'center',
                    rect: ['7px', '14px', '187px', '47px', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle5}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "height", '64px'],
                ["color", "border-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '197px']
            ],
            "${_Text}": [
                ["style", "top", '14px'],
                ["style", "font-size", '25px']
            ],
            "${symbolSelector}": [
                ["style", "height", '47px'],
                ["style", "width", '199px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"TIMELINE_TEXT4": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'Rectangle5',
                    stroke: [1, 'rgba(0,0,0,1.00)', 'solid'],
                    rect: ['0px', '0px', '197px', '64px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    font: ['\'Signika Negative\'', 25, 'rgba(255,255,255,1)', '500', 'none', 'normal'],
                    type: 'text',
                    id: 'Text',
                    text: 'Domains of Life',
                    align: 'center',
                    rect: ['7px', '17px', '187px', '47px', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle5}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "height", '64px'],
                ["color", "border-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '197px']
            ],
            "${_Text}": [
                ["style", "top", '17px'],
                ["style", "font-size", '25px']
            ],
            "${symbolSelector}": [
                ["style", "height", '47px'],
                ["style", "width", '199px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"TIMELINE_TEXT5": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'Rectangle5',
                    stroke: [1, 'rgba(0,0,0,1.00)', 'solid'],
                    rect: ['0px', '0px', '197px', '64px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    font: ['\'Signika Negative\'', 25, 'rgba(255,255,255,1)', '500', 'none', 'normal'],
                    type: 'text',
                    id: 'Text',
                    text: 'Connecting Ancestors',
                    align: 'center',
                    rect: ['7px', '14px', '187px', '47px', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle5}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "height", '64px'],
                ["color", "border-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '197px']
            ],
            "${_Text}": [
                ["style", "top", '14px'],
                ["style", "line-height", '20px'],
                ["style", "font-size", '25px']
            ],
            "${symbolSelector}": [
                ["style", "height", '47px'],
                ["style", "width", '199px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"TIMELINE_TEXT6": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'Rectangle5',
                    stroke: [1, 'rgba(0,0,0,1.00)', 'solid'],
                    rect: ['0px', '0px', '197px', '64px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    font: ['\'Signika Negative\'', 25, 'rgba(255,255,255,1)', '500', 'none', 'normal'],
                    type: 'text',
                    id: 'Text',
                    text: 'Mass Extinctions',
                    align: 'center',
                    rect: ['0px', '16px', '199px', '47px', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle5}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "height", '64px'],
                ["color", "border-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '197px']
            ],
            "${_Text}": [
                ["style", "top", '16px'],
                ["style", "font-size", '25px'],
                ["style", "left", '0px'],
                ["style", "width", '199px']
            ],
            "${symbolSelector}": [
                ["style", "height", '47px'],
                ["style", "width", '199px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"TIMELINE_TEXT7": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'Rectangle5',
                    stroke: [1, 'rgba(0,0,0,1.00)', 'solid'],
                    rect: ['0px', '0px', '197px', '71px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    font: ['\'Signika Negative\'', 25, 'rgba(255,255,255,1)', '500', 'none', 'normal'],
                    type: 'text',
                    id: 'Text',
                    text: 'Biodiversity<br>&amp; Life Today',
                    align: 'center',
                    rect: ['7px', '15px', '187px', '47px', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle5}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "height", '71px'],
                ["color", "border-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '197px']
            ],
            "${_Text}": [
                ["style", "top", '15px'],
                ["style", "line-height", '20px'],
                ["style", "font-size", '25px']
            ],
            "${symbolSelector}": [
                ["style", "height", '47px'],
                ["style", "width", '199px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"POPUP_TEXTBOX": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'Rectangle7',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['0px', '0px', '293px', '497px', 'auto', 'auto'],
                    fill: ['rgba(25,25,25,1.00)']
                },
                {
                    rect: ['0px', '53px', '293px', '3px', 'auto', 'auto'],
                    fill: ['rgba(25,66,71,1.00)'],
                    id: 'Rectangle8',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    boxShadow: ['', 0, 2, 5, 0, 'rgba(0,0,0,0.65098)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle7}": [
                ["style", "top", '0px'],
                ["style", "height", '497px'],
                ["color", "background-color", 'rgba(25,25,25,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '293px']
            ],
            "${symbolSelector}": [
                ["style", "height", '497px'],
                ["style", "width", '285px']
            ],
            "${_Rectangle8}": [
                ["color", "background-color", 'rgba(25,66,71,1.00)'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65098)'],
                ["subproperty", "boxShadow.blur", '5px'],
                ["style", "top", '53px'],
                ["style", "height", '3px'],
                ["subproperty", "boxShadow.offsetV", '2px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["style", "width", '293px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-974726737");
