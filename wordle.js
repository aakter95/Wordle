/*--Consts/DOM Elements--*/
const wordList = [ 'AAHED',
'AALII',
'AARGH',
'AARTI',
'ABACA',
'ABACI',
'ABACK',
'ABACS',
'ABAFT',
'ABAKA',
'ABAMP',
'ABAND',
'ABASE',
'ABASH',
'ABASK',
'ABATE',
'ABAYA',
'ABBAS',
'ABBED',
'ABBES',
'ABBEY',
'ABBOT',
'ABCEE',
'ABEAM',
'ABEAR',
'ABELE',
'ABERS',
'ABETS',
'ABHOR',
'ABIDE',
'ABIES',
'ABLED',
'ABLER',
'ABLES',
'ABLET',
'ABLOW',
'ABMHO',
'ABODE',
'ABOHM',
'ABOIL',
'ABOMA',
'ABOON',
'ABORD',
'ABORE',
'ABORT',
'ABOUT',
'ABOVE',
'ABRAM',
'ABRAY',
'ABRIM',
'ABRIN',
'ABRIS',
'ABSEY',
'ABSIT',
'ABUNA',
'ABUNE',
'ABUSE',
'ABUTS',
'ABUZZ',
'ABYES',
'ABYSM',
'ABYSS',
'ACAIS',
'ACARI',
'ACCAS',
'ACCOY',
'ACERB',
'ACERS',
'ACETA',
'ACHAR',
'ACHED',
'ACHES',
'ACHOO',
'ACIDS',
'ACIDY',
'ACING',
'ACINI',
'ACKEE',
'ACKER',
'ACMES',
'ACMIC',
'ACNED',
'ACNES',
'ACOCK',
'ACOLD',
'ACORN',
'ACRED',
'ACRES',
'ACRID',
'ACROS',
'ACTED',
'ACTIN',
'ACTON',
'ACTOR',
'ACUTE',
'ACYLS',
'ADAGE',
'ADAPT',
'ADAWS',
'ADAYS',
'ADBOT',
'ADDAX',
'ADDED',
'ADDER',
'ADDIO',
'ADDLE',
'ADEEM',
'ADEPT',
'ADHAN',
'ADIEU',
'ADIOS',
'ADITS',
'ADMAN',
'ADMEN',
'ADMIN',
'ADMIT',
'ADMIX',
'ADOBE',
'ADOBO',
'ADOPT',
'ADORE',
'ADORN',
'ADOWN',
'ADOZE',
'ADRAD',
'ADRED',
'ADSUM',
'ADUKI',
'ADULT',
'ADUNC',
'ADUST',
'ADVEW',
'ADYTA',
'ADZED',
'ADZES',
'AECIA',
'AEDES',
'AEGIS',
'AEONS',
'AERIE',
'AEROS',
'AESIR',
'AFALD',
'AFARA',
'AFARS',
'AFEAR',
'AFFIX',
'AFIRE',
'AFLAJ',
'AFOOT',
'AFORE',
'AFOUL',
'AFRIT',
'AFROS',
'AFTER',
'AGAIN',
'AGAMA',
'AGAMI',
'AGAPE',
'AGARS',
'AGAST',
'AGATE',
'AGAVE',
'AGAZE',
'AGENE',
'AGENT',
'AGERS',
'AGGER',
'AGGIE',
'AGGRI',
'AGGRO',
'AGGRY',
'AGHAS',
'AGILA',
'AGILE',
'AGING',
'AGIOS',
'AGISM',
'AGIST',
'AGITA',
'AGLEE',
'AGLET',
'AGLEY',
'AGLOO',
'AGLOW',
'AGLUS',
'AGMAS',
'AGOGE',
'AGONE',
'AGONS',
'AGONY',
'AGOOD',
'AGORA',
'AGREE',
'AGRIA',
'AGRIN',
'AGROS',
'AGUED',
'AGUES',
'AGUNA',
'AGUTI',
'AHEAD',
'AHEAP',
'AHENT',
'AHIGH',
'AHIND',
'AHING',
'AHINT',
'AHOLD',
'AHULL',
'AHURU',
'AIDAS',
'AIDED',
'AIDER',
'AIDES',
'AIDOI',
'AIDOS',
'AIERY',
'AIGAS',
'AIGHT',
'AILED',
'AIMED',
'AIMER',
'AINEE',
'AINGA',
'AIOLI',
'AIRED',
'AIRER',
'AIRNS',
'AIRTH',
'AIRTS',
'AISLE',
'AITCH',
'AITUS',
'AIVER',
'AIYEE',
'AIZLE',
'AJIES',
'AJIVA',
'AJUGA',
'AJWAN',
'AKEES',
'AKELA',
'AKENE',
'AKING',
'AKITA',
'AKKAS',
'ALAAP',
'ALACK',
'ALAMO',
'ALAND',
'ALANE',
'ALANG',
'ALANS',
'ALANT',
'ALAPA',
'ALAPS',
'ALARM',
'ALARY',
'ALATE',
'ALAYS',
'ALBAS',
'ALBEE',
'ALBUM',
'ALCID',
'ALCOS',
'ALDEA',
'ALDER',
'ALDOL',
'ALECK',
'ALECS',
'ALEFS',
'ALEFT',
'ALEPH',
'ALERT',
'ALEWS',
'ALEYE',
'ALFAS',
'ALGAE',
'ALGAL',
'ALGAS',
'ALGID',
'ALGIN',
'ALGOR',
'ALGUM',
'ALIAS',
'ALIBI',
'ALIEN',
'ALIFS',
'ALIGN',
'ALIKE',
'ALINE',
'ALIST',
'ALIVE',
'ALIYA',
'ALKIE',
'ALKOS',
'ALKYD',
'ALKYL',
'ALLAY',
'ALLEE',
'ALLEL',
'ALLEY',
'ALLIS',
'ALLOD',
'ALLOT',
'ALLOW',
'ALLOY',
'ALLYL',
'ALMAH',
'ALMAS',
'ALMEH',
'ALMES',
'ALMUD',
'ALMUG',
'ALODS',
'ALOED',
'ALOES',
'ALOFT',
'ALOHA',
'ALOIN',
'ALONE',
'ALONG',
'ALOOF',
'ALOOS',
'ALOUD',
'ALOWE',
'ALPHA',
'ALTAR',
'ALTER',
'ALTHO',
'ALTOS',
'ALULA',
'ALUMS',
'ALURE',
'ALVAR',
'ALWAY',
'AMAHS',
'AMAIN',
'AMASS',
'AMATE',
'AMAUT',
'AMAZE',
'AMBAN',
'AMBER',
'AMBIT',
'AMBLE',
'AMBOS',
'AMBRY',
'AMEBA',
'AMEER',
'AMEND',
'AMENE',
'AMENS',
'AMENT',
'AMIAS',
'AMICE',
'AMICI',
'AMIDE',
'AMIDO',
'AMIDS',
'AMIES',
'AMIGA',
'AMIGO',
'AMINE',
'AMINO',
'AMINS',
'AMIRS',
'AMISS',
'AMITY',
'AMLAS',
'AMMAN',
'AMMON',
'AMMOS',
'AMNIA',
'AMNIC',
'AMNIO',
'AMOKS',
'AMOLE',
'AMONG',
'AMORT',
'AMOUR',
'AMOVE',
'AMOWT',
'AMPED',
'AMPLE',
'AMPLY',
'AMPUL',
'AMRIT',
'AMUCK',
'AMUSE',
'AMYLS',
'ANANA',
'ANATA',
'ANCHO',
'ANCLE',
'ANCON',
'ANDRO',
'ANEAR',
'ANELE',
'ANENT',
'ANGAS',
'ANGEL',
'ANGER',
'ANGLE',
'ANGLO',
'ANGRY',
'ANGST',
'ANIGH',
'ANILE',
'ANILS',
'ANIMA',
'ANIME',
'ANIMI',
'ANION',
'ANISE',
'ANKER',
'ANKHS',
'ANKLE',
'ANKUS',
'ANLAS',
'ANNAL',
'ANNAS',
'ANNAT',
'ANNEX',
'ANNOY',
'ANNUL',
'ANOAS',
'ANODE',
'ANOLE',
'ANOMY',
'ANSAE',
'ANTAE',
'ANTAR',
'ANTAS',
'ANTED',
'ANTES',
'ANTIC',
'ANTIS',
'ANTRA',
'ANTRE',
'ANTSY',
'ANURA',
'ANVIL',
'ANYON',
'AORTA',
'APACE',
'APAGE',
'APAID',
'APART',
'APAYD',
'APAYS',
'APEAK',
'APEEK',
'APERS',
'APERT',
'APERY',
'APGAR',
'APHID',
'APHIS',
'APIAN',
'APING',
'APIOL',
'APISH',
'APISM',
'APNEA',
'APODE',
'APODS',
'APOOP',
'APORT',
'APPAL',
'APPAY',
'APPEL',
'APPLE',
'APPLY',
'APPRO',
'APPUI',
'APPUY',
'APRES',
'APRON',
'APSES',
'APSIS',
'APSOS',
'APTED',
'APTER',
'APTLY',
'AQUAE',
'AQUAS',
'ARABA',
'ARAKS',
'ARAME',
'ARARS',
'ARBAS',
'ARBOR',
'ARCED',
'ARCHI',
'ARCOS',
'ARCUS',
'ARDEB',
'ARDOR',
'ARDRI',
'AREAD',
'AREAE',
'AREAL',
'AREAR',
'AREAS',
'ARECA',
'AREDD',
'AREDE',
'AREFY',
'AREIC',
'ARENA',
'ARENE',
'AREPA',
'ARERE',
'ARETE',
'ARETS',
'ARETT',
'ARGAL',
'ARGAN',
'ARGIL',
'ARGLE',
'ARGOL',
'ARGON',
'ARGOT',
'ARGUE',
'ARGUS',
'ARHAT',
'ARIAS',
'ARIEL',
'ARIKI',
'ARILS',
'ARIOT',
'ARISE',
'ARISH',
'ARKED',
'ARLED',
'ARLES',
'ARMED',
'ARMER',
'ARMET',
'ARMIL',
'ARMOR',
'ARNAS',
'ARNUT',
'AROBA',
'AROHA',
'AROID',
'AROMA',
'AROSE',
'ARPAS',
'ARPEN',
'ARRAH',
'ARRAS',
'ARRAY',
'ARRET',
'ARRIS',
'ARROW',
'ARROZ',
'ARSED',
'ARSES',
'ARSEY',
'ARSIS',
'ARSON',
'ARTAL',
'ARTEL',
'ARTIC',
'ARTIS',
'ARTSY',
'ARUHE',
'ARUMS',
'ARVAL',
'ARVEE',
'ARVOS',
'ARYLS',
'ASANA',
'ASCON',
'ASCOT',
'ASCUS',
'ASDIC',
'ASHED',
'ASHEN',
'ASHES',
'ASHET',
'ASIDE',
'ASKED',
'ASKER',
'ASKEW',
'ASKOI',
'ASKOS',
'ASPEN',
'ASPER',
'ASPIC',
'ASPIE',
'ASPIS',
'ASPRO',
'ASSAI',
'ASSAM',
'ASSAY',
'ASSES',
'ASSET',
'ASSEZ',
'ASSOT',
'ASTER',
'ASTIR',
'ASTUN',
'ASURA',
'ASWAY',
'ASWIM',
'ASYLA',
'ATAPS',
'ATAXY',
'ATIGI',
'ATILT',
'ATIMY',
'ATLAS',
'ATMAN',
'ATMAS',
'ATMOS',
'ATOCS',
'ATOKE',
'ATOKS',
'ATOLL',
'ATOMS',
'ATOMY',
'ATONE',
'ATONY',
'ATOPY',
'ATRIA',
'ATRIP',
'ATTAP',
'ATTAR',
'ATTIC',
'ATUAS',
'AUDAD',
'AUDIO',
'AUDIT',
'AUGER',
'AUGHT',
'AUGUR',
'AULAS',
'AULIC',
'AULOI',
'AULOS',
'AUMIL',
'AUNES',
'AUNTS',
'AUNTY',
'AURAE',
'AURAL',
'AURAR',
'AURAS',
'AUREI',
'AURES',
'AURIC',
'AURIS',
'AURUM',
'AUTOS',
'AUXIN',
'AVAIL',
'AVALE',
'AVANT',
'AVAST',
'AVELS',
'AVENS',
'AVERS',
'AVERT',
'AVGAS',
'AVIAN',
'AVINE',
'AVION',
'AVISE',
'AVISO',
'AVIZE',
'AVOID',
'AVOWS',
'AVYZE',
'AWAIT',
'AWAKE',
'AWARD',
'AWARE',
'AWARN',
'AWASH',
'AWATO',
'AWAVE',
'AWAYS',
'AWDLS',
'AWEEL',
'AWETO',
'AWFUL',
'AWING',
'AWMRY',
'AWNED',
'AWNER',
'AWOKE',
'AWOLS',
'AWORK',
'AXELS',
'AXIAL',
'AXILE',
'AXILS',
'AXING',
'AXIOM',
'AXION',
'AXITE',
'AXLED',
'AXLES',
'AXMAN',
'AXMEN',
'AXOID',
'AXONE',
'AXONS',
'AYAHS',
'AYAYA',
'AYELP',
'AYGRE',
'AYINS',
'AYONT',
'AYRES',
'AYRIE',
'AZANS',
'AZIDE',
'AZIDO',
'AZINE',
'AZLON',
'AZOIC',
'AZOLE',
'AZONS',
'AZOTE',
'AZOTH',
'AZUKI',
'AZURE',
'AZURN',
'AZURY',
'AZYGY',
'AZYME',
'AZYMS',
'BAAED',
'BAALS',
'BABAS',
'BABEL',
'BABES',
'BABKA',
'BABOO',
'BABUL',
'BABUS',
'BACCA',
'BACCO',
'BACCY',
'BACHA',
'BACHS',
'BACKS',
'BACON',
'BADDY',
'BADGE',
'BADLY',
'BAELS',
'BAFFS',
'BAFFY',
'BAFTS',
'BAGEL',
'BAGGY',
'BAGHS',
'BAGIE',
'BAHTS',
'BAHUS',
'BAHUT',
'BAILS',
'BAIRN',
'BAISA',
'BAITH',
'BAITS',
'BAIZA',
'BAIZE',
'BAJAN',
'BAJRA',
'BAJRI',
'BAJUS',
'BAKED',
'BAKEN',
'BAKER',
'BAKES',
'BAKRA',
'BALAS',
'BALDS',
'BALDY',
'BALED',
'BALER',
'BALES',
'BALKS',
'BALKY',
'BALLS',
'BALLY',
'BALMS',
'BALMY',
'BALOO',
'BALSA',
'BALTI',
'BALUN',
'BALUS',
'BAMBI',
'BANAK',
'BANAL',
'BANCO',
'BANCS',
'BANDA',
'BANDH',
'BANDS',
'BANDY',
'BANED',
'BANES',
'BANGS',
'BANIA',
'BANJO',
'BANKS',
'BANNS',
'BANTS',
'BANTU',
'BANTY',
'BANYA',
'BAPUS',
'BARBE',
'BARBS',
'BARBY',
'BARCA',
'BARDE',
'BARDO',
'BARDS',
'BARDY',
'BARED',
'BARER',
'BARES',
'BARFI',
'BARFS',
'BARGE',
'BARIC',
'BARKS',
'BARKY',
'BARMS',
'BARMY',
'BARNS',
'BARNY',
'BARON',
'BARPS',
'BARRA',
'BARRE',
'BARRO',
'BARRY',
'BARYE',
'BASAL',
'BASAN',
'BASED',
'BASEN',
'BASER',
'BASES',
'BASHO',
'BASIC',
'BASIJ',
'BASIL',
'BASIN',
'BASIS',
'BASKS',
'BASON',
'BASSE',
'BASSI',
'BASSO',
'BASSY',
'BASTA',
'BASTE',
'BASTI',
'BASTO',
'BASTS',
'BATCH',
'BATED',
'BATES',
'BATHE',
'BATHS',
'BATIK',
'BATON',
'BATTA',
'BATTS',
'BATTU',
'BATTY',
'BAUDS',
'BAUKS',
'BAULK',
'BAURS',
'BAVIN',
'BAWDS',
'BAWDY',
'BAWKS',
'BAWLS',
'BAWNS',
'BAWRS',
'BAWTY',
'BAYED',
'BAYER',
'BAYES',
'BAYLE',
'BAYOU',
'BAYTS',
'BAZAR',
'BAZOO',
'BEACH',
'BEADS',
'BEADY',
'BEAKS',
'BEAKY',
'BEALS',
'BEAMS',
'BEAMY',
'BEANO',
'BEANS',
'BEANY',
'BEARD',
'BEARE',
'BEARS',
'BEAST',
'BEATH',
'BEATS',
'BEATY',
'BEAUS',
'BEAUT',
'BEAUX',
'BEBOP',
'BECAP',
'BECKE',
'BECKS',
'BEDAD',
'BEDEL',
'BEDES',
'BEDEW',
'BEDIM',
'BEDYE',
'BEECH',
'BEEDI',
'BEEFS',
'BEEFY',
'BEEPS',
'BEERS',
'BEERY',
'BEETS',
'BEFIT',
'BEFOG',
'BEGAD',
'BEGAN',
'BEGAR',
'BEGAT',
'BEGEM',
'BEGET',
'BEGIN',
'BEGOT',
'BEGUM',
'BEGUN',
'BEIGE',
'BEIGY',
'BEING',
'BEINS',
'BEKAH',
'BELAH',
'BELAR',
'BELAY',
'BELCH',
'BELEE',
'BELGA',
'BELIE',
'BELLE',
'BELLS',
'BELLY',
'BELON',
'BELOW',
'BELTS',
'BEMAD',
'BEMAS',
'BEMIX',
'BEMUD',
'BENCH',
'BENDS',
'BENDY',
'BENES',
'BENET',
'BENGA',
'BENIS',
'BENNE',
'BENNI',
'BENNY',
'BENTO',
'BENTS',
'BENTY',
'BEPAT',
'BERAY',
'BERES',
'BERET',
'BERGS',
'BERKO',
'BERKS',
'BERME',
'BERMS',
'BEROB',
'BERRY',
'BERTH',
'BERYL',
'BESAT',
'BESAW',
'BESEE',
'BESES',
'BESET',
'BESIT',
'BESOM',
'BESOT',
'BESTI',
'BESTS',
'BETAS',
'BETED',
'BETEL',
'BETES',
'BETHS',
'BETID',
'BETON',
'BETTA',
'BETTY',
'BEVEL',
'BEVER',
'BEVOR',
'BEVUE',
'BEVVY',
'BEWET',
'BEWIG',
'BEZEL',
'BEZES',
'BEZIL',
'BEZZY',
'BHAIS',
'BHAJI',
'BHANG',
'BHATS',
'BHELS',
'BHOOT',
'BHUNA',
'BHUTS',
'BIACH',
'BIALI',
'BIALY',
'BIBBS',
'BIBES',
'BIBLE',
'BICCY',
'BICEP',
'BICES',
'BIDDY',
'BIDED',
'BIDER',
'BIDES',
'BIDET',
'BIDIS',
'BIDON',
'BIELD',
'BIERS',
'BIFFO',
'BIFFS',
'BIFFY',
'BIFID',
'BIGAE',
'BIGGS',
'BIGGY',
'BIGHA',
'BIGHT',
'BIGLY',
'BIGOS',
'BIGOT',
'BIJOU',
'BIKED',
'BIKER',
'BIKES',
'BIKIE',
'BILBO',
'BILBY',
'BILED',
'BILES',
'BILGE',
'BILGY',
'BILKS',
'BILLS',
'BILLY',
'BIMAH',
'BIMAS',
'BIMBO',
'BINAL',
'BINDI',
'BINDS',
'BINER',
'BINES',
'BINGE',
'BINGO',
'BINGS',
'BINGY',
'BINIT',
'BINKS',
'BINTS',
'BIOGS',
'BIOME',
'BIONT',
'BIOTA',
'BIPED',
'BIPOD',
'BIRCH',
'BIRDS',
'BIRKS',
'BIRLE',
'BIRLS',
'BIROS',
'BIRRS',
'BIRSE',
'BIRSY',
'BIRTH',
'BISES',
'BISKS',
'BISOM',
'BISON',
'BITCH',
'BITER',
'BITES',
'BITOS',
'BITOU',
'BITSY',
'BITTE',
'BITTS',
'BITTY',
'BIVIA',
'BIVVY',
'BIZES',
'BIZZO',
'BIZZY',
'BLABS',
'BLACK',
'BLADE',
'BLADS',
'BLADY',
'BLAER',
'BLAES',
'BLAFF',
'BLAGS',
'BLAHS',
'BLAIN',
'BLAME',
'BLAMS',
'BLAND',
'BLANK',
'BLARE',
'BLART',
'BLASE',
'BLASH',
'BLAST',
'BLATE',
'BLATS',
'BLATT',
'BLAUD',
'BLAWN',
'BLAWS',
'BLAYS',
'BLAZE',
'BLEAK',
'BLEAR',
'BLEAT',
'BLEBS',
'BLECH',
'BLEED',
'BLEEP',
'BLEES',
'BLEND',
'BLENT',
'BLERT',
'BLESS',
'BLEST',
'BLETS',
'BLEYS',
'BLIMP',
'BLIMY',
'BLIND',
'BLING',
'BLINI',
'BLINK',
'BLINS',
'BLINY',
'BLIPS',
'BLISS',
'BLIST',
'BLITE',
'BLITS',
'BLITZ',
'BLIVE',
'BLOAT',
'BLOBS',
'BLOCK',
'BLOCS',
'BLOGS',
'BLOKE',
'BLOND',
'BLOOD',
'BLOOK',
'BLOOM',
'BLOOP',
'BLORE',
'BLOTS',
'BLOWN',
'BLOWS',
'BLOWY',
'BLUBS',
'BLUDE',
'BLUDS',
'BLUDY',
'BLUED',
'BLUER',
'BLUES',
'BLUET',
'BLUEY',
'BLUFF',
'BLUID',
'BLUME',
'BLUNK',
'BLUNT',
'BLURB',
'BLURS',
'BLURT',
'BLUSH',
'BLYPE',
'BOABS',
'BOAKS',
'BOARD',
'BOARS',
'BOART',
'BOAST',
'BOATS',]
   
    
const wordle = wordList[Math.floor(Math.random()*wordList.length)];
const wordleGrid = document.getElementsByClassName('box');
const wordleRows = document.getElementsByClassName('row');
const root = document.querySelector(':root');
const endOfRow = [4,9,14,19,24,29];

let index = 0;
let row = 0;

/*--Game Functions--*/
function keyboardEvent(event) {
    let key = event.target.innerHTML;

    if(key=='Enter') { //enter logic
        if(index!=endOfRow[row]+1) {
            jitterNotify('Not Enough Letters!',row,800);
        } else {
            const correctLetters = checkInput();
            if(correctLetters<0) {
                jitterNotify("Guess Not in Wordle List!",row,800);
            } else if(correctLetters<10 && row==6) {
                notify(`Game Over! Correct Word was: ${wordle}`,1);
                gameOver();
            } else if(correctLetters==10) {
                notify('Game Over! You Won!',1);
                gameOver();
            }
        }
    } else if(key=='Del') { //del logic
        if((row>0&&index>endOfRow[row-1]+1) || (row==0&&index>0)) {
            index--;
            wordleGrid[index].innerHTML = '';
        }
    } else { //other key logic
        if(index<=endOfRow[row]) {
            wordleGrid[index].innerHTML = key;
            index++
        }
    }
}

function checkInput() {
    const startOfRow = [0,5,10,15,20,25];
    let guess = '';
    let correctLetters = 0;

    for(let i=startOfRow[row]; i<=endOfRow[row]; i++)
        guess+=wordleGrid[i].innerHTML;

    if(wordList.includes(guess)) {
        for(let i=0; i<wordle.length; i++) {
            if(wordle.includes(guess[i])) {
                if(wordle[i]==guess[i]) {
                    boxState(wordleGrid[startOfRow[row]+i], '#6AAA64');
                    correctLetters+=2;
                } else {
                    boxState(wordleGrid[startOfRow[row]+i], '#C9B458');
                    correctLetters++;
                }
            } else { //grey
                boxState(wordleGrid[startOfRow[row]+i], '#7D7D7D');
            }
        }
        row++;
    } else {
        correctLetters--;
    }

    return correctLetters;
}

/*--Helper Functions--*/
function gameOver() {
    let btns = document.getElementsByTagName('button');
    for(let i=0; i<btns.length; i++) {
        btns[i].disabled = true;
    }
}

function boxState(element, color) {
    element.style = `border: 2px solid ${color}`;
    element.style.backgroundColor = color;
    element.style.color = 'white';
}

function jitterNotify(msg, row, timeout) {
    const wordleRow = document.getElementsByClassName('row')[row];

    root.style.setProperty('--scale', 1);
    wordleRow.dataset.tooltip = msg;
    wordleRow.classList.toggle('tooltip');
    wordleRow.classList.toggle('jitter-animate');

    window.setTimeout(function() {
        root.style.setProperty('--scale', 0);
        wordleRow.classList.toggle('tooltip');
        wordleRow.classList.toggle('jitter-animate');
    }, timeout);
}

function notify(msg,row) {
    const wordleRow = document.getElementsByClassName('row')[row];
    root.style.setProperty('--scale', 1);
    wordleRow.dataset.tooltip = msg;
    wordleRow.classList.toggle('tooltip');
}