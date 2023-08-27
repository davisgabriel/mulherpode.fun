




function randomIntFromInterval(min, max) { // min and max included
return Math.floor(Math.random() * (max - min + 1) + min)
}

/*toast-top-right, toast-bottom-right, toast-bottom-left, toast-top-left, toast-top-full-width, toast-bottom-full-width, toast-top-center, toast-bottom-center*/
var position = "toast-bottom-full-width";

/*frase depois do nome da pessoa*/
var phrase = "acabou de comprar";

/*masc, fem, any*/
var type_name = "fem";
var msg_final = "";

var min_time_seconds = 2;
var max_time_seconds = 5;

const viewportWidth = window.innerWidth;

var names_masc = ["Alan", "Alberto", "Alexandre", "André", "Antônio", "Armando", "Arnaldo", "Benedito", "Bernardo", "Bruno", "Carlos", "Carlos", "Ciro", "Cristiano", "Cristóvão", "Danilo", "Davi", "Domingos", "Dênis", "Eduardo", "Emanuel", "Enzo", "Estevão", "Felipe", "Francisco", "Francisco", "Frederico", "Fábio", "Gabriel", "Geomar", "Geraldo", "Gilberto", "Gilson", "Guilherme", "Gustavo","Henrique", "Hugo", "Igor", "Jacson", "Jeremias", "Joel", "José", "João", "João", "João", "João Batista", "João Marcos", "João Paulo", "Juliano", "Lauro", "Lucas", "Lucas", "Luiz", "Luís", "Luís", "Manoel", "Marcelo", "Marco", "Mateus", "Maurício", "Micael", "Miguel", "Miguel", "Nicolau", "Patrício", "Paulino", "Paulo", "Pedro", "Raimundo", "Renato", "Ricardo", "Roberto", "Rogério", "Ronaldo", "Sebastião", "Sérgio", "Sílvio", "Thiago", "Tomás", "Vicente", "Ígor"];

var names_fem = ["Alexandra", "Amanda", "Ana", "Ana", "Ana", "Ana Maria", "Angélica", "Aurélia", "Bernadete", "Bridgette", "Camila", "Carolina", "Carolina", "Catarina", "Chantal", "Clara", "Claudia", "Corina", "Cristina", "Cristina", "Cristina", "Célia", "Dalila", "Daniela", "Denise", "Elizabete", "Emanuela", "Emília", "Estela", "Evelin", "Fabiana", "Flora", "Helena", "Isabela", "Ivete", "Jacqueline", "Janete", "Jenifer", "Joana", "Joana", "Jocélia", "Josefina", "Josete", "Julia", "Karina", "Laura", "Liliana", "Luiza", "Lídia", "Madalena", "Magda", "Maria", "Maria", "Maria Cristina", "Maria Luísa", "Maria Teresa", "Marta", "Melânia", "Michele", "Mirela", "Miriam", "Mônica", "Natália", "Nicole", "Nádia", "Nádia", "Odila", "Patrícia", "Paula", "Raíssa", "Sabrina", "Sandra", "Sandra", "Simone", "Sofia", "Stefânia", "Susana", "Sílvia", "Sônia", "Valéria", "Verônica"];

var surnames = ["Alencar", "Almeida", "Alves", "Amaral", "Andrade", "Antunes", "Arantes", "Araújo", "Azevedo", "Baptista", "Barbosa", "Barreto", "Barros", "Bastos", "Batista", "Berger", "Bergmann", "Bernardes", "Bernardino", "Bertoldo", "Bertolucci", "Bianchi", "Blanco", "Boaventura", "Borges", "Braga", "Brandão", "Braz", "Brito", "Campos", "Cardoso", "Carneiro", "Carreira", "Carvalho", "Castro", "Cavalcante", "Cavalcanti", "Coelho", "Correia", "Costa", "Cunha", "Dantas", "Dias", "Duarte", "Escobar", "Estrada", "Fernandes", "Ferreira", "Fonseca", "Freitas", "Gomes", "Gonçalves", "Goulart", "Holanda", "Ibanez", "Jardim", "Leal", "Lima", "Lins", "Macedo", "Magalhães", "Marques", "Martins", "Melo", "Mendes", "Miranda", "Montenegro", "Nascimento", "Nogueira", "Nunes", "Oliveira", "Ortega", "Peixoto", "Peregrino", "Pereira", "Peres", "Queiroz", "Ramos", "Ribeiro", "Rocha", "Rodrigues", "Santos", "Silva", "Siqueira", "Sousa", "Souza", "Teixeira", "Torres", "Uchoa", "Vasconcelos"];


var cities = ["Paulistas - MG", "Sobrália - MG", "Jataí - GO", "Ituverava - SP", "Macaé - RJ", "Luz - MG", "Abaeté - MG", "Ibirarema - SP", "Dourados - MS", "Inhapim - MG", "Joinville - SC", "Juramento - MG", "Itabira - MG", "Tapiraí - SP", "Buritis - MG", "Parintins - AM", "BH - MG", "Iguatu - CE", "Viradouro - SP", "Jaborandi - SP", "Guaimbê - SP", "Mauá - SP", "São Roque - SP", "Calçoene - AP", "Capitólio - MG", "Gonçalves - MG", "Manhuaçu - MG", "Salinas - MG", "Iturama - MG", "Iperó - SP", "Pedro II - PI", "Bayeux - PB", "Colômbia - SP", "Populina - SP", "Divino - MG", "Zacarias - SP", "Sorriso - MT", "Tabapuã - SP", "Gouveia - MG", "Manga - MG", "Marabá - PA", "Periquito - MG", "Araçaí - MG", "Mazagão - AP", "Maceió - AL", "Cáceres - MT", "Blumenau - SC", "Cacoal - RO", "Osasco - SP", "Campestre - MG", "Iranduba - AM", "Guarabira - PB", "Tabatinga - AM", "Caruaru - PE", "Duartina - SP", "Igarassu - PE", "Braúnas - MG", "Chapecó - SC", "BH - MG", "Itaobim - MG", "Rodeiro - MG", "Dourados - MS", "Bambuí - MG", "Silveiras - SP", "Andradas - MG", "Tucuruí - PA", "Oiapoque - AP", "Santos - SP", "Macaé - RJ", "Mutum - MG", "Naque - MG", "Rio Doce - MG", "Coruripe - AL", "Marabá - PA", "Contagem - MG", "São Paulo - SP", "Ubirajara - SP", "Gravataí - RS", "Meridiano - SP", "Cambuí - MG", "Aquiraz - CE", "Itaberá - SP", "Vilhena - RO", "Guareí - SP", "Juazeiro - BA", "Nazareno - MG", "Jundiaí - SP", "Vargem - SP", "Cotia - SP", "Tefé - AM", "Cametá - PA", "Juazeiro - BA", "São Paulo - SP", "Pelotas - RS", "Lagarto - SE", "Apiaí - SP", "Corumbá - MS", "Tucuruí - PA", "Lagarto - SE", "Queimadas - PB", "Contagem - MG", "Buritis - RO", "Boa Vista - RR", "Canoas - RS", "Botucatu - SP", "Guarantã - SP", "Santarém - PA", "Avaré - SP", "Capivari - SP", "Goiabeira - MG", "Rosana - SP", "Miracatu - SP", "Goianá - MG", "Macuco - RJ", "Tietê - SP", "Montezuma - MG", "Pocrane - MG", "Contagem - MG", "Piumhi - MG", "Novo Gama - GO", "Itumirim - MG", "Moema - MG", "Linhares - ES", "Jaci - SP", "Guarulhos - SP", "Chapecó - SC", "Maracaju - MS", "Gurupi - TO", "Fama - MG", "Itaboraí - RJ", "Itabirito - MG", "Catuji - MG", "Calçoene - AP", "Ferros - MG", "Crisólita - MG", "Barrinha - SP", "Estância - SE", "Borba. - AM", "Campinas - SP", "Pacaraima - RR", "Ribeira - SP", "Jequitibá - MG", "Buri - SP", "Tarabai - SP", "Mirabela - MG", "Linhares - ES", "Aracruz - ES", "Mesquita - MG", "Uru - SP", "Bicas - MG", "Narandiba - SP", "Recreio - MG", "Iguape - SP", "Lábrea - AM", "Recife - PE", "Itabaiana - SE", "Amapá - AP", "Lábrea - AM", "Monte Mor - SP", "Tanguá - RJ", "Patos - PB", "Amapá - AP", "Mirassol - SP", "Itanhandu - MG", "Guaraí - TO", "Açucena - MG", "Manicoré - AM", "Jundiaí - SP", "Botumirim - MG", "Pracuúba - AP", "Canelinha - SC", "Macaíba - RN", "Açu - RN", "Matão - SP", "Canoas - RS", "Ibirité - MG", "Sapé - PB", "Liberdade - MG", "Humaitá - AM", "Florínea - SP", "Ibituruna - MG", "Echaporã - SP", "Mesquita - RJ", "Cametá - PA", "Piraúba - MG", "Rio Acima - MG", "Manicoré - AM", "Petrolina - PE", "Juruaia - MG", "Guará - SP", "Itabuna - BA", "Barreiras - BA", "São José - SC", "Macaíba - RN", "Registro - SP", "Amambai - MS", "Crato - CE", "Joaíma - MG", "Irapuru - SP", "Analândia - SP", "Guaraci - SP", "Castelo. - ES", "Quadra - SP", "Lamim - MG", "Alpercata - MG", "Tarauacá - AC", "Araújos - MG", "Aracruz - ES", "Ipojuca. - PE", "Igarapé - MG", "Turmalina - SP", "Luziânia - GO", "Trabiju - SP", "Barbosa - SP", "Arinos - MG", "Carandaí - MG", "Dourado - SP", "Paulicéia - SP", "Borá - SP", "Olinda - PE", "Floriano - PI", "Prata - MG", "Palmital - SP", "Quixadá - CE", "Ji-Paraná - RO", "Caxias - MA", "Natércia - MG", "Ubatuba - SP", "Campinas - SP", "Macapá - AP", "Cravinhos - SP", "Jambeiro - SP", "Confins - MG", "Itanhomi - MG", "Dobrada - SP", "Pontal - SP", "Elisiário - SP", "Trindade - GO", "Divinésia - MG", "Alvorada - RS", "Araporã - MG", "Jaru - RO", "Ubá - MG", "Valinhos - SP", "Ilhabela - SP", "Pequeri - MG", "Belém - PA", "Saltinho - SP", "Natal - RN", "Cipotânea - MG", "Mossoró - RN", "Riolândia - SP", "Bragança - PA", "Carmo - RJ", "Garça - SP", "Ipuiúna - MG", "Crateús - CE", "Picos - PI", "Olímpia - SP", "Camaçari - BA", "Iranduba - AM", "Rubiácea - SP", "Timon - MA", "Pacatuba - CE", "Cambuci - RJ", "Parintins - AM", "Sorocaba - SP", "Piripiri - PI", "Piquete - SP", "Caçapava - SP", "Piripiri - PI", "Jacuí - MG", "Lagarto - SE", "Cabreúva - SP", "Guarulhos - SP", "Icém - SP", "Pompeia - SP", "Caroebe. - RR", "Londrina - PR", "Varre-Sai - RJ", "Lagoinha - SP", "Diadema - SP", "Santos. - SP", "Anápolis - GO", "União - PI", "Brodowski - SP", "Santana - AP", "Trindade - GO", "Itariri - SP", "Congonhas - MG", "Viana - ES", "Formoso - MG", "Reduto - MG", "Uberaba - MG", "Altamira - PA", "Aiuruoca - MG", "Manduri - SP", "Niterói - RJ", "Propriá - SE", "Romaria - MG", "Borborema - SP", "Estância - SE", "Caroebe. - RR", "Vazante - MG", "Diadema - SP", "Sorriso - MT", "Jaguaraçu - MG", "Pacajus. - CE", "Cajamar - SP", "Juquitiba - SP", "Matutina - MG", "Bebedouro - SP", "Caracaraí - RR", "Parapuã - SP", "Motuca - SP", "Pitangui - MG", "Ipuã - SP", "Rafard - SP", "Iracema - RR", "Iporanga - SP", "Borba. - AM", "Rancharia - SP", "Londrina - PR", "Restinga - SP", "Tabatinga - SP", "Catalão - GO", "Iguatama - MG", "Arantina - MG", "Paraíso - SP", "Tocantins - MG", "Viamão - RS", "Bonfim - MG", "Jaru - RO", "Maués - AM", "Assis - SP", "Pombal - PB", "Araguaína - TO", "Ibirité - MG", "Tarumã - SP", "Galiléia - MG", "Orlândia - SP", "Luisburgo - MG", "Passabém - MG", "Guapé - MG", "Bertioga - SP", "Pongaí - SP", "Normandia - RR", "Guarujá - SP", "Cariacica - ES", "Sousa - PB"];

toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": true,
    "progressBar": false,
    "positionClass": "toast-bottom-full-width",
    "preventDuplicates": true,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "3500",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "slideDown",
    "hideMethod": "fadeOut"
}

function show_notification() {
    
    if (type_name == "masc") {
        msg_final = names_masc[Math.floor(Math.random() * names_masc.length)] + " " + surnames[Math.floor(Math.random() * surnames.length)];
    } else if (type_name == "fem") {
        msg_final = names_fem[Math.floor(Math.random() * names_fem.length)] + " " + surnames[Math.floor(Math.random() * surnames.length)];
    } else {
        var array_aux = ["masc", "fem"];

        if (array_aux[Math.floor(Math.random() * array_aux.length)] == "masc") {
            msg_final = names_masc[Math.floor(Math.random() * names_masc.length)] + " " + surnames[Math.floor(Math.random() * surnames.length)];
        } else {
            msg_final = names_fem[Math.floor(Math.random() * names_fem.length)] + " " + surnames[Math.floor(Math.random() * surnames.length)];
        }
    }

    msg_final += " de " + cities[Math.floor(Math.random() * cities.length)];
    if (window.innerWidth < 530) {
        msg_final += decodeURIComponent(escape("<br><strong id='phrasePart'>" + phrase + "</strong>"));
    } else {
        msg_final += decodeURIComponent(escape(" <strong id='phrasePart'>" + phrase + "</strong>"));
    }
    toastr.success(msg_final);
    var randomSecondsInterval = Math.floor(Math.random() * (max_time_seconds - min_time_seconds + 1)) + min_time_seconds;
    setTimeout(show_notification, ((randomSecondsInterval + 4) * 1000));

}


