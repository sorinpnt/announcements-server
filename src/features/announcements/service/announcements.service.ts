import { Injectable, NotFoundException, PreconditionFailedException } from '@nestjs/common';
import { of } from 'rxjs';
import { delay } from 'rxjs';
import { Observable } from 'rxjs';
import { AnnouncementDto } from '../models/announcement.dto';

@Injectable()
export class AnnouncementsService {
  private announcements: AnnouncementDto[] = [
    {
      id: 0,
      publisher: {
        firstName: 'Lane',
        lastName: 'Lancaster',
      },
      read: false,
      important: false,
      title: 'quis occaecat tempor irure',
      text: 'Cupidatat mollit dolor velit tempor quis duis. In excepteur officia do reprehenderit duis proident occaecat minim eiusmod et fugiat non. Minim consequat labore deserunt sunt sint esse qui dolor in culpa adipisicing proident ex occaecat.Et est proident id veniam adipisicing occaecat exercitation non non occaecat ex excepteur. Aliquip aliqua consectetur aute irure amet ullamco nostrud et nulla ullamco commodo. Cillum minim minim aliqua mollit. Officia aliquip voluptate est ut elit aliquip sunt irure. Nostrud fugiat laborum ullamco est esse dolor nisi nisi ad officia amet magna dolore. Aliqua duis aliquip id incididunt anim pariatur nulla aliquip proident reprehenderit. Enim do et amet mollit.',
    },
    {
      id: 1,
      publisher: {
        firstName: 'Ramsey',
        lastName: 'Bowers',
      },
      read: false,
      important: false,
      title: 'excepteur laborum sit',
      text: 'Mollit non amet magna quis non eiusmod nisi elit cillum. Laboris veniam aliqua sit laboris non id proident irure nisi. Magna nisi culpa laborum pariatur esse consectetur adipisicing id voluptate ipsum eiusmod sit. Esse non labore tempor tempor ex anim eu Lorem consectetur. Consequat sit nisi proident sit quis id enim consectetur labore in.\r\nEst aliqua eu in nostrud officia reprehenderit magna est voluptate adipisicing nisi veniam. In ullamco enim consequat nulla amet consequat excepteur laborum anim laborum veniam. Ullamco anim id laborum voluptate adipisicing incididunt occaecat cupidatat voluptate dolor aliqua qui tempor.\r\n',
    },
    {
      id: 2,
      publisher: {
        firstName: 'Laurel',
        lastName: 'Good',
      },
      read: true,
      important: true,
      title: 'culpa anim consequat',
      text: 'Quis aliqua voluptate fugiat non aliqua qui anim voluptate qui aliqua qui sunt. Ut sit pariatur cupidatat magna velit ex proident. Aliqua elit exercitation sit tempor voluptate enim nostrud.\r\nNostrud ex velit laboris quis laboris mollit dolore mollit excepteur mollit veniam ut nulla. Ea nulla elit aute laboris exercitation ut magna minim ipsum. Occaecat ipsum incididunt esse consectetur proident pariatur amet exercitation officia in. Excepteur do et esse officia et eiusmod ex sit. Do ut qui laborum cillum elit. Laborum reprehenderit dolore ex est elit qui et mollit incididunt duis fugiat exercitation reprehenderit. Nulla do aliquip et cupidatat et est do tempor sit non eu excepteur cupidatat.\r\n',
    },
    {
      id: 3,
      publisher: {
        firstName: 'Mercer',
        lastName: 'Cardenas',
      },
      read: true,
      important: true,
      title: 'culpa qui consequat',
      text: 'Id consectetur fugiat ea laboris ut officia enim culpa amet enim consectetur officia ipsum Lorem. Velit ex sunt nulla magna. Commodo aliqua do consequat nulla eiusmod labore ea. Laboris aliquip nulla sit dolore proident id proident ad exercitation cillum excepteur elit consectetur. Ullamco nulla laborum eu qui aliqua esse. Mollit officia eiusmod ipsum aute enim id mollit sunt consequat non in dolore. Nostrud anim consectetur laborum laboris mollit in labore enim tempor et mollit quis ullamco.\r\nEx duis deserunt minim pariatur proident ex qui veniam minim tempor anim quis. Voluptate commodo anim mollit eu culpa ad nulla ea magna aute nostrud nostrud ipsum culpa. Et sit elit irure proident nulla minim nisi. Sit duis occaecat duis tempor sunt velit incididunt nulla mollit id. Sint cupidatat nisi reprehenderit et cillum officia laborum reprehenderit ex cillum culpa commodo excepteur nisi. Mollit sit veniam cupidatat minim sint mollit magna eiusmod.\r\n',
    },
    {
      id: 4,
      publisher: {
        firstName: 'Tran',
        lastName: 'Holmes',
      },
      read: true,
      important: false,
      title: 'irure laborum cillum',
      text: 'Ipsum incididunt eu eiusmod aute. Irure duis sunt labore est ea ullamco voluptate fugiat ut id ut id. Lorem enim qui cupidatat aliqua occaecat. Reprehenderit deserunt laboris non consectetur. Ipsum et ea eu pariatur nostrud aliqua proident pariatur sit minim commodo do ea amet.\r\nIn exercitation occaecat cupidatat enim aliqua in labore Lorem non laborum nostrud. Ullamco tempor nostrud occaecat mollit ipsum fugiat ipsum reprehenderit irure. Proident ullamco laborum eu aliquip ut laborum laboris proident do officia nulla est tempor do. Pariatur enim ullamco Lorem irure Lorem duis excepteur et. Occaecat et amet sit sit sit id. Cupidatat consequat elit culpa non anim laboris eiusmod amet cupidatat sint nulla Lorem. Amet ullamco et dolore ullamco ullamco incididunt.\r\n',
    },
    {
      id: 5,
      publisher: {
        firstName: 'Geraldine',
        lastName: 'Hawkins',
      },
      read: true,
      important: false,
      title: 'ullamco cupidatat Lorem proident enim',
      text: 'Consequat ea cupidatat tempor nulla eiusmod officia quis fugiat nisi mollit consequat. Excepteur voluptate ut nulla sunt excepteur. Ut duis aliquip irure pariatur magna nostrud adipisicing Lorem laborum velit amet velit voluptate. Proident nulla pariatur occaecat nostrud tempor exercitation esse cupidatat.\r\nNisi laborum deserunt amet irure ad aute eu. Mollit eiusmod culpa voluptate fugiat. Consequat amet anim tempor elit ipsum cupidatat irure consectetur laboris mollit. Exercitation veniam ipsum irure occaecat consectetur ea est.\r\n',
    },
    {
      id: 6,
      publisher: {
        firstName: 'Laurie',
        lastName: 'Valdez',
      },
      read: true,
      important: false,
      title: 'qui magna quis',
      text: 'Cillum aliqua ipsum ea non occaecat amet velit nostrud labore id dolor laborum. Excepteur aliquip voluptate nisi nulla officia est incididunt nisi proident. Nostrud culpa adipisicing est laboris. Dolore id eiusmod ea est exercitation nostrud dolor voluptate dolor enim sint dolor est.\r\nDolor officia aliquip consectetur in dolor. Voluptate magna laborum consectetur ullamco ipsum consequat quis in ea proident. Voluptate ad magna fugiat ut excepteur dolore cupidatat eiusmod occaecat ea culpa eu adipisicing. Labore aliquip id tempor ut magna pariatur. Nisi veniam in aliquip ullamco culpa est qui ipsum sunt culpa.\r\nCillum velit qui deserunt ea. Culpa occaecat laborum duis anim. Excepteur do ex occaecat id aute anim incididunt ipsum commodo aliqua tempor nostrud. Culpa officia eiusmod do ipsum ad ea ex irure qui ea ex tempor est nulla.\r\n',
    },
    {
      id: 7,
      publisher: {
        firstName: 'Tameka',
        lastName: 'Navarro',
      },
      read: false,
      important: false,
      title: 'nisi consequat sint',
      text: 'Quis magna id cupidatat excepteur in ea aute. Cillum ea veniam excepteur nisi nulla est mollit culpa ex laboris cupidatat exercitation enim. Minim sit reprehenderit mollit dolor sunt.\r\nProident adipisicing tempor consectetur amet veniam. Amet et labore voluptate voluptate non excepteur. Irure laborum eiusmod voluptate anim cupidatat consequat excepteur incididunt ipsum culpa tempor ex amet non. Quis adipisicing laborum quis qui esse et. Eiusmod dolore eu dolor laboris aliquip ipsum ut consectetur deserunt duis eiusmod Lorem irure. Exercitation adipisicing sit sunt magna dolore eiusmod. Officia fugiat occaecat non et anim deserunt est.\r\n',
    },
    {
      id: 8,
      publisher: {
        firstName: 'Higgins',
        lastName: 'Delaney',
      },
      read: true,
      important: false,
      title: 'dolore dolor proident amet reprehenderit',
      text: 'In eiusmod ullamco nostrud quis aliquip non laborum culpa eu ut nisi veniam eu. Elit et sunt officia et labore. Proident non id elit amet. Est sunt ullamco occaecat est do cupidatat velit officia labore dolore elit nisi deserunt non.\r\nCommodo sit aliqua dolor aute cillum adipisicing non nulla ut commodo ea. Anim ullamco quis excepteur irure nisi cupidatat voluptate anim aliquip. Cupidatat eu qui sint consequat cupidatat reprehenderit nulla excepteur irure proident minim eiusmod incididunt minim. Do laborum cupidatat sint non incididunt quis excepteur aute occaecat.\r\nEst commodo cupidatat ipsum nulla amet ipsum et nostrud. Veniam exercitation ipsum et aliqua sit reprehenderit consectetur ullamco ullamco ad amet cupidatat. Qui elit elit cillum cillum officia elit. Nostrud occaecat ea nostrud magna non officia deserunt consectetur culpa labore elit ut duis.\r\n',
    },
    {
      id: 9,
      publisher: {
        firstName: 'Francis',
        lastName: 'Hartman',
      },
      read: false,
      important: false,
      title: 'cupidatat magna est',
      text: 'Proident dolore pariatur amet exercitation do sit cupidatat laborum. Quis exercitation pariatur velit quis in qui dolore cupidatat fugiat culpa sint laborum excepteur in. Proident eu culpa reprehenderit dolor nisi ullamco elit exercitation veniam proident. Pariatur deserunt do sunt aliqua commodo ea incididunt ullamco deserunt sit culpa pariatur consectetur est. Qui incididunt duis irure qui. Sunt sint dolor officia nisi ad incididunt reprehenderit cillum aute nulla. Laborum est occaecat adipisicing minim mollit voluptate magna excepteur nulla ad.\r\nReprehenderit dolor aliquip ullamco nostrud nostrud exercitation. Veniam culpa velit tempor esse ea occaecat dolor minim id sit pariatur. Dolore dolore reprehenderit enim nulla commodo culpa mollit. Ullamco labore incididunt minim pariatur nostrud occaecat non anim laborum. Dolore veniam tempor deserunt anim. Consectetur et minim cillum exercitation mollit eiusmod ad. Nulla aute dolore in veniam non fugiat.\r\n',
    },
    {
      id: 10,
      publisher: {
        firstName: 'Cardenas',
        lastName: 'Garrison',
      },
      read: true,
      important: false,
      title: 'irure cupidatat nisi',
      text: 'Ut occaecat commodo laborum adipisicing labore laboris elit do. Esse Lorem aliquip esse sunt amet quis eiusmod cupidatat reprehenderit. Sunt veniam voluptate reprehenderit pariatur deserunt ut.\r\nEiusmod enim ex nostrud magna excepteur magna sint sunt in. Sint proident aute ullamco esse qui laboris magna ea dolor minim enim. Ea consectetur consectetur cillum aliqua ad ad labore ut est nisi velit dolor duis minim.\r\n',
    },
    {
      id: 11,
      publisher: {
        firstName: 'Francis',
        lastName: 'Brewer',
      },
      read: false,
      important: true,
      title: 'eiusmod sit sit',
      text: 'Ullamco quis deserunt id est aliqua sint pariatur laborum magna veniam non reprehenderit. Minim nisi do id aute culpa voluptate ullamco velit. Nulla esse consectetur consequat in.\r\nMagna magna pariatur elit commodo eu cupidatat duis. Labore laboris culpa adipisicing duis velit ut ut veniam Lorem cupidatat. Anim Lorem ut exercitation eu occaecat est adipisicing do.\r\n',
    },
    {
      id: 12,
      publisher: {
        firstName: 'Lindsey',
        lastName: 'Mathews',
      },
      read: false,
      important: false,
      title: 'laborum aute ad sint mollit',
      text: 'Excepteur amet et minim cillum. Labore laborum et id magna velit. Sunt dolor laboris reprehenderit quis cillum deserunt veniam. Esse est voluptate nisi sit. Ullamco nisi nostrud mollit pariatur deserunt magna tempor consectetur pariatur sint nulla eu.\r\nPariatur sunt do pariatur ea est sint eu nulla sunt. Ex culpa do non enim dolore id incididunt irure commodo occaecat duis. Reprehenderit reprehenderit magna enim culpa adipisicing pariatur id. Magna reprehenderit proident cupidatat minim laborum nisi laborum et sunt reprehenderit ut ea. Magna exercitation consectetur nostrud ipsum magna Lorem nisi non quis duis. Lorem non sit quis tempor esse duis excepteur pariatur deserunt velit deserunt non eiusmod. Aute excepteur exercitation eu consectetur cupidatat et et et voluptate.\r\n',
    },
    {
      id: 13,
      publisher: {
        firstName: 'Erica',
        lastName: 'Morris',
      },
      read: true,
      important: true,
      title: 'proident quis adipisicing',
      text: 'Laborum veniam nostrud laboris sunt. Ad ullamco pariatur labore proident et in ipsum velit cupidatat quis ut elit. Ea nisi exercitation cillum commodo est ea mollit laboris in nulla duis duis minim. Culpa aliquip ut voluptate cillum deserunt sint commodo sit non quis ea irure id enim.\r\nEu non esse officia consectetur nostrud. Enim consequat ut incididunt laborum dolore. Elit ut voluptate cupidatat dolore eiusmod ex dolore. Mollit in pariatur amet nulla esse ullamco esse incididunt. Adipisicing culpa amet laboris adipisicing Lorem irure sit est commodo. Adipisicing sunt laborum voluptate consectetur ad velit qui quis cillum eiusmod dolor culpa.\r\nPariatur ad laboris est veniam incididunt sit incididunt ullamco cupidatat consectetur Lorem id amet amet. Deserunt consequat sunt mollit ipsum sunt non mollit. Elit eiusmod id ut voluptate esse enim. Magna reprehenderit minim deserunt quis elit consectetur. Fugiat excepteur eu veniam eiusmod officia voluptate.\r\n',
    },
    {
      id: 14,
      publisher: {
        firstName: 'Nell',
        lastName: 'Workman',
      },
      read: false,
      important: false,
      title: 'velit quis fugiat esse',
      text: 'Do mollit et culpa incididunt tempor excepteur dolore veniam quis quis elit aliqua est. Velit exercitation consequat elit esse magna consequat et commodo nisi laborum incididunt sunt consequat mollit. Lorem reprehenderit culpa exercitation laborum excepteur et qui est irure. Eu in voluptate sint ipsum culpa culpa aliqua eiusmod culpa. Reprehenderit reprehenderit Lorem elit ut aliqua amet duis ullamco.\r\nAdipisicing officia excepteur excepteur consectetur mollit veniam aliqua aliquip. Quis nostrud anim commodo esse ex qui enim deserunt do sint voluptate sunt ullamco. Excepteur aute culpa esse qui enim enim sunt. Enim esse officia elit incididunt sit sit. Proident exercitation commodo esse mollit duis et incididunt nostrud eu nulla occaecat. Nostrud culpa consequat officia nisi exercitation velit adipisicing in. Et magna minim Lorem mollit aute.\r\nEiusmod irure labore elit commodo ullamco reprehenderit pariatur ipsum qui eiusmod veniam aliqua nulla cillum. Officia enim minim reprehenderit eiusmod ipsum sit enim et incididunt. Mollit nisi deserunt nulla sunt nostrud nostrud ullamco ad elit. Aliquip cupidatat voluptate ut mollit dolore laborum ullamco mollit et. Sit proident duis sunt in aute nulla deserunt ea anim irure nostrud culpa ea veniam. Proident aliquip consectetur tempor occaecat consequat esse. Esse occaecat Lorem commodo esse aute ex cillum.\r\n',
    },
    {
      id: 15,
      publisher: {
        firstName: 'Leslie',
        lastName: 'Carter',
      },
      read: false,
      important: false,
      title: 'cillum anim deserunt',
      text: 'Qui eiusmod do et ex proident ex velit. Pariatur nostrud laborum commodo ut sit ex cupidatat quis ipsum irure. Culpa aute non amet amet reprehenderit ipsum nostrud pariatur.\r\nLorem laboris elit quis sunt laboris mollit. Veniam aliquip voluptate Lorem consequat mollit. In ex magna qui aliqua cillum est eiusmod eu pariatur cillum ea commodo fugiat exercitation. Non culpa deserunt amet esse velit exercitation. Fugiat id tempor ad sunt consequat proident aute commodo duis in irure. Duis cillum et pariatur proident consectetur pariatur sint elit minim quis eu amet laborum anim. Qui ut elit adipisicing dolor aliqua eu laboris veniam sint anim consectetur non cillum.\r\nExercitation sunt anim occaecat eu enim excepteur ullamco duis. Ut Lorem duis non consectetur. Elit et fugiat mollit aliquip et tempor cupidatat aliqua culpa in et laborum magna dolor. Sunt velit nisi dolor do.\r\n',
    },
    {
      id: 16,
      publisher: {
        firstName: 'Steele',
        lastName: 'Gallagher',
      },
      read: true,
      important: false,
      title: 'veniam sunt aliqua tempor ex',
      text: 'Do adipisicing minim esse magna incididunt in proident qui incididunt incididunt ullamco. Irure dolore aliqua pariatur sunt nostrud. Sunt consectetur in ex ullamco mollit dolore laborum in consectetur aliquip sit fugiat amet.\r\nEnim consectetur in adipisicing reprehenderit qui fugiat Lorem aliquip excepteur aute. Ex dolore do qui cillum magna amet velit. Aute quis adipisicing eu sint excepteur. Aliqua ut sit enim do irure nulla aute ad veniam tempor. Sit magna laborum culpa non dolore dolor proident qui anim sit aliquip sit nisi.\r\nMinim consequat qui duis reprehenderit qui velit. Elit sit eu proident labore mollit occaecat velit commodo nisi nostrud incididunt commodo aute. Occaecat minim dolor ea aliqua nulla cillum eu qui exercitation. Aute enim nisi anim anim. Commodo laborum ex nulla proident pariatur excepteur ad cupidatat. Dolor cillum ipsum officia Lorem laboris. Enim culpa laboris duis veniam minim enim magna.\r\n',
    },
    {
      id: 17,
      publisher: {
        firstName: 'Melisa',
        lastName: 'Hood',
      },
      read: true,
      important: false,
      title: 'eu qui irure',
      text: 'Aute ipsum dolore incididunt esse esse ut quis occaecat excepteur cupidatat. Adipisicing voluptate aliqua esse occaecat. Ut esse aute nulla ea occaecat aliqua. Aliqua sint labore ea id aute ad ipsum labore exercitation in ut cupidatat reprehenderit eiusmod. Do ea culpa laborum ut.\r\nAliqua excepteur sint ea aute magna id anim consequat sunt nisi. Dolore fugiat ex ex laboris pariatur ad id nostrud exercitation. Sit sit labore commodo officia commodo deserunt non est adipisicing laboris id esse esse. Quis ipsum id et culpa ea magna duis reprehenderit sunt deserunt voluptate nostrud. Et dolore culpa dolore nisi est duis ea officia ipsum ullamco nostrud.\r\nIn aliqua sunt ut nostrud eu mollit ex exercitation veniam pariatur aute. Et ipsum officia elit enim ipsum consectetur nostrud ullamco ipsum aliquip. Laborum culpa proident proident minim non aute ullamco aliquip. Ipsum occaecat proident dolore qui. Qui Lorem duis consequat nulla officia eu ullamco Lorem duis enim dolor labore.\r\n',
    },
    {
      id: 18,
      publisher: {
        firstName: 'Nellie',
        lastName: 'Swanson',
      },
      read: true,
      important: false,
      title: 'nisi in amet ipsum',
      text: 'Culpa cillum qui culpa enim. Ut tempor sunt veniam occaecat sunt consequat sunt ea sunt. Tempor do incididunt labore non cillum minim laboris ad et aute quis. Id reprehenderit nulla eu laboris veniam.\r\nIrure duis irure nulla ut fugiat exercitation ad id. Nulla dolor consequat duis proident minim non. Tempor eiusmod ea consequat fugiat sint anim sint Lorem ex anim adipisicing duis adipisicing. Voluptate dolore ea nulla do ipsum Lorem deserunt commodo minim.\r\nNostrud et nulla aliquip ex quis non quis enim reprehenderit. Laboris cupidatat ut sunt ullamco. Pariatur deserunt pariatur Lorem elit. Commodo culpa magna anim esse proident commodo occaecat. Do in nulla voluptate laborum reprehenderit fugiat eu ea id tempor aute deserunt. Pariatur aliqua nulla fugiat labore. In cillum aliquip elit laborum dolor velit proident sint consequat laborum ad nulla reprehenderit.\r\n',
    },
    {
      id: 19,
      publisher: {
        firstName: 'Mccarty',
        lastName: 'Mercado',
      },
      read: true,
      important: false,
      title: 'mollit adipisicing officia minim',
      text: 'Ex nostrud duis do dolor do. Fugiat labore enim veniam pariatur in aute veniam nostrud. Eu qui nostrud excepteur aliqua esse ipsum Lorem anim non cillum minim duis.\r\nLaborum officia incididunt culpa proident magna. Est exercitation sunt eu elit et culpa occaecat elit aliquip et velit et. Magna et elit adipisicing ea sit. Ex fugiat tempor id enim officia cillum irure. Deserunt enim ea aute occaecat labore fugiat eiusmod quis adipisicing mollit. Proident dolore aliquip duis fugiat ipsum irure elit. Eu cupidatat dolore ad amet deserunt amet est nostrud labore do amet qui sit ut.\r\n',
    },
    {
      id: 20,
      publisher: {
        firstName: 'Sheree',
        lastName: 'Gay',
      },
      read: false,
      important: false,
      title: 'labore officia incididunt deserunt',
      text: 'Cillum ad nostrud anim est cillum cillum nisi et in. Voluptate enim eiusmod aliqua exercitation nisi mollit consequat. Adipisicing anim consectetur id consectetur in deserunt officia. Cillum est quis esse et commodo. Reprehenderit mollit qui aliqua consectetur nulla ex minim. Amet excepteur dolore et dolore incididunt magna incididunt dolore adipisicing amet consequat consequat. Tempor reprehenderit et do esse dolore culpa consequat ad nostrud amet minim eu.\r\nEsse non ipsum est dolor ullamco magna ipsum aliqua nisi laborum deserunt tempor. Ullamco ex sit consequat consectetur ea aute pariatur. Fugiat reprehenderit incididunt qui eu fugiat. Id ullamco eu exercitation proident proident nulla Lorem laboris. In ullamco adipisicing minim elit in nostrud veniam ex minim tempor.\r\nAliquip deserunt consequat irure deserunt aliquip ut laborum aliquip incididunt qui non incididunt officia voluptate. Pariatur eu in culpa aliquip occaecat sit nostrud enim adipisicing esse. Exercitation laborum Lorem incididunt dolor pariatur aute magna eu qui.\r\n',
    },
    {
      id: 21,
      publisher: {
        firstName: 'Hensley',
        lastName: 'Peters',
      },
      read: false,
      important: false,
      title: 'exercitation ex occaecat',
      text: 'Amet minim velit cillum duis non culpa voluptate nostrud enim magna enim pariatur do sint. Commodo et qui irure et est ex enim eiusmod ea mollit. Cupidatat duis consequat magna minim do laboris exercitation id qui ut deserunt adipisicing voluptate veniam. Nostrud sint qui cillum ut ut nostrud aliquip ullamco amet. Incididunt ad ullamco elit consequat esse proident. Commodo eu do voluptate sit aliqua nulla quis. Anim tempor ad eu reprehenderit elit tempor dolore proident cillum culpa.\r\nUt tempor ex ea cupidatat ea velit fugiat ad. Esse proident excepteur aliquip mollit consectetur consequat mollit duis cupidatat laboris sunt esse. Do cillum nulla nostrud magna eu aute. Laborum proident officia excepteur laborum duis velit. Est duis deserunt sit sint mollit cupidatat quis qui do cupidatat do duis.\r\nId voluptate fugiat dolor eiusmod veniam. Consequat quis nulla amet officia enim duis sint. Proident quis proident dolor ad aliquip elit laborum labore amet cupidatat aliquip laborum exercitation. Tempor do dolore pariatur ullamco consectetur pariatur laborum eiusmod tempor aliqua. Eiusmod dolore duis aliquip mollit eiusmod nulla pariatur commodo ea elit. Eu culpa cillum sit in esse.\r\n',
    },
    {
      id: 22,
      publisher: {
        firstName: 'Ross',
        lastName: 'Morales',
      },
      read: false,
      important: false,
      title: 'proident occaecat mollit',
      text: 'Nisi in exercitation exercitation do ullamco duis aliqua. Dolor ea dolore exercitation do ea excepteur voluptate fugiat elit. Pariatur culpa est mollit eiusmod labore reprehenderit et sint occaecat non velit irure non. Dolore velit dolor nisi pariatur officia sunt laboris aliqua.\r\nEx deserunt nisi non incididunt quis incididunt do sunt voluptate cupidatat. Ut quis eiusmod dolor reprehenderit officia id do ea ea velit velit qui. Enim dolor ipsum minim aute ea id magna mollit ullamco. Lorem exercitation aliquip id nulla consequat occaecat est ad aliqua reprehenderit cupidatat reprehenderit cupidatat.\r\n',
    },
    {
      id: 23,
      publisher: {
        firstName: 'Shepard',
        lastName: 'Turner',
      },
      read: true,
      important: true,
      title: 'adipisicing consequat sit sint',
      text: 'Dolor in sint cupidatat exercitation ad. Occaecat exercitation irure consectetur occaecat dolore deserunt sint et anim ipsum sit officia pariatur. Esse velit esse enim ipsum. Fugiat adipisicing cillum culpa pariatur duis mollit in qui dolore ad velit. Eiusmod aliquip non aliqua incididunt aliquip eu commodo velit qui. Commodo ipsum laborum reprehenderit qui pariatur voluptate exercitation laboris aliqua sunt pariatur. Ad nisi est elit nostrud pariatur.\r\nCillum labore ad sit eiusmod cillum qui ut occaecat Lorem nisi voluptate eiusmod. Veniam reprehenderit magna officia officia officia. Nisi reprehenderit amet consequat mollit cillum excepteur enim veniam laborum occaecat incididunt. Cillum irure ex aute est labore elit laborum minim adipisicing irure aliqua pariatur duis non. Voluptate ex ut cupidatat in reprehenderit enim cupidatat. Lorem ipsum non laboris duis labore irure nostrud non laborum eiusmod.\r\n',
    },
    {
      id: 24,
      publisher: {
        firstName: 'Selena',
        lastName: 'Herrera',
      },
      read: true,
      important: false,
      title: 'Lorem elit nostrud culpa amet',
      text: 'Voluptate incididunt laborum exercitation tempor nisi labore id qui velit occaecat in ex magna. Eu et Lorem non eu amet enim tempor sint culpa qui ex Lorem. Id elit non incididunt Lorem in do. Laboris elit dolor voluptate laborum elit Lorem eiusmod irure consequat magna culpa. Eu duis voluptate reprehenderit commodo Lorem cupidatat exercitation cupidatat sunt.\r\nDolore ut Lorem eu anim irure est tempor quis exercitation aliqua nisi proident. Enim ut adipisicing commodo est aliqua exercitation do excepteur esse. Nulla do ullamco ex ullamco et. Minim eu reprehenderit duis dolor ex. Eiusmod velit esse officia labore pariatur. Culpa non excepteur consequat proident Lorem in ullamco adipisicing ad officia.\r\nPariatur culpa ex irure labore irure nostrud do ea Lorem officia qui. Excepteur culpa laboris id velit. Irure incididunt duis labore cupidatat labore Lorem excepteur. Proident minim tempor enim ex aliqua do do quis magna voluptate esse. Est velit fugiat magna adipisicing ut.\r\n',
    },
    {
      id: 25,
      publisher: {
        firstName: 'Margery',
        lastName: 'Craft',
      },
      read: false,
      important: false,
      title: 'minim pariatur velit qui ut',
      text: 'Duis adipisicing velit culpa incididunt. Lorem amet duis voluptate nulla laboris esse sint ipsum et anim. Dolore commodo consequat nostrud elit culpa. Ad eu sunt eu non nostrud reprehenderit culpa eu.\r\nAute consequat laboris amet veniam pariatur ad consectetur deserunt elit qui ut irure commodo. Dolor in aliqua irure laborum laboris adipisicing aute officia adipisicing ea. In consectetur Lorem fugiat tempor pariatur. Id voluptate pariatur reprehenderit cillum. Fugiat culpa commodo aliquip excepteur veniam sit tempor ex aliquip nulla. Ea qui esse et esse non cupidatat excepteur proident nostrud. Occaecat ex velit aliqua ea.\r\nAmet cillum elit culpa duis anim. Officia occaecat dolore do laboris. Sint aute consectetur minim culpa cupidatat deserunt mollit in. Duis ad culpa occaecat ea in nisi ad commodo sunt sunt. Ullamco amet ipsum magna dolor nisi quis nostrud.\r\n',
    },
    {
      id: 26,
      publisher: {
        firstName: 'England',
        lastName: 'Russo',
      },
      read: false,
      important: false,
      title: 'pariatur mollit tempor',
      text: 'Ad exercitation proident deserunt reprehenderit in nostrud sit. Ipsum qui dolor consectetur cupidatat nostrud enim aliqua culpa Lorem. Lorem qui est officia nulla laborum cillum. Laborum dolore ullamco do laborum irure id cupidatat. Do nisi adipisicing ullamco dolore labore mollit reprehenderit esse pariatur quis pariatur sunt anim.\r\nCulpa ut enim magna mollit exercitation ullamco irure esse consequat dolore proident ea. Aliqua et voluptate excepteur est Lorem esse incididunt cupidatat. Id voluptate dolor fugiat sit sunt sint. Id veniam eu pariatur tempor ipsum duis est. Occaecat est ex sint est do velit amet esse deserunt ut est. Magna amet officia dolor officia non aliquip ipsum et voluptate dolor deserunt minim nostrud officia.\r\n',
    },
    {
      id: 27,
      publisher: {
        firstName: 'Waters',
        lastName: 'Hyde',
      },
      read: false,
      important: false,
      title: 'consectetur adipisicing sit sint',
      text: 'Labore ipsum Lorem eu commodo magna do dolor non enim. Veniam sunt occaecat ut aliqua ullamco est laboris commodo incididunt. Amet eiusmod esse velit tempor consectetur nostrud.\r\nElit aliquip ex tempor minim reprehenderit id ea ex. Aute laboris pariatur pariatur proident officia elit deserunt quis aute duis officia. Reprehenderit irure excepteur ex occaecat nostrud non incididunt magna excepteur in commodo. Cupidatat qui non sunt cupidatat elit dolore ullamco. Lorem eiusmod nisi elit ut culpa dolore pariatur culpa id.\r\n',
    },
    {
      id: 28,
      publisher: {
        firstName: 'Clayton',
        lastName: 'Schwartz',
      },
      read: false,
      important: true,
      title: 'deserunt tempor qui',
      text: 'Ullamco pariatur laboris eiusmod in et voluptate anim nisi ea qui qui quis. Irure consectetur nulla laboris laboris irure nisi fugiat aute officia aute ullamco exercitation. Laborum anim reprehenderit do excepteur consequat culpa do culpa Lorem in. Ullamco nulla elit nulla qui quis amet. Occaecat incididunt magna exercitation eiusmod magna eu culpa. Adipisicing cillum tempor officia ipsum occaecat aliqua in veniam commodo eu. In veniam sunt non irure culpa magna excepteur fugiat ut ullamco.\r\nEu ea eu esse ut magna magna occaecat nulla deserunt laborum magna qui fugiat. Ullamco excepteur ipsum non velit tempor irure ullamco elit velit esse ipsum laborum. Do commodo exercitation culpa nostrud dolor sit Lorem labore cupidatat magna dolor velit. Quis eu reprehenderit aliqua ad sunt. Non dolore mollit incididunt occaecat minim ex ut dolor elit minim esse dolor dolore.\r\nCupidatat sint dolor non et occaecat et anim ea Lorem nostrud ut velit laborum proident. Id pariatur nostrud in magna exercitation amet eiusmod laborum nulla aliqua. Mollit ea amet esse adipisicing minim dolor esse velit aliquip aliquip amet mollit laboris eu. Laboris ea quis velit esse dolore amet incididunt exercitation deserunt esse mollit qui proident.\r\n',
    },
    {
      id: 29,
      publisher: {
        firstName: 'Garcia',
        lastName: 'Sanford',
      },
      read: true,
      important: true,
      title: 'velit enim Lorem nostrud',
      text: 'In qui ex do duis in excepteur nulla cupidatat officia. Qui ut anim excepteur ipsum ut officia amet Lorem eiusmod ex. Consectetur duis ad incididunt officia non tempor proident. Et ullamco et cupidatat sunt quis proident enim nostrud consectetur deserunt cillum adipisicing consequat. Quis duis laboris magna tempor in esse nisi ullamco ad elit labore.\r\nSit consequat sunt ea veniam incididunt do culpa cillum id ullamco amet nostrud incididunt. Excepteur ad laboris velit ut occaecat aute quis Lorem sunt. Esse officia laboris dolore do dolor cupidatat occaecat do labore. Est proident proident eu labore commodo consectetur. Exercitation ex non esse ea reprehenderit aute ipsum eu esse elit reprehenderit qui veniam. Ut pariatur nostrud dolore occaecat mollit magna ex laborum cupidatat ad elit proident laboris incididunt. Enim eiusmod quis cupidatat reprehenderit exercitation proident cupidatat fugiat in.\r\nIpsum est ut sunt sint deserunt ullamco nulla esse velit nisi sint. Pariatur ut non consectetur reprehenderit reprehenderit reprehenderit Lorem velit. Laboris labore esse irure irure pariatur ex consectetur minim nostrud incididunt aute culpa. Ex id ullamco labore cillum. Consequat duis quis mollit dolor non aliqua laboris magna sit elit sint culpa aliquip. Proident duis non amet ut duis dolore sint minim voluptate enim occaecat cillum nostrud. Enim ullamco non ullamco consequat cillum deserunt cupidatat in aute culpa do.\r\n',
    },
    {
      id: 30,
      publisher: {
        firstName: 'Alyce',
        lastName: 'Mcfarland',
      },
      read: true,
      important: false,
      title: 'nostrud ad dolor voluptate cillum',
      text: 'Amet sint sint ut sunt ea sint duis adipisicing. In sint ipsum cillum eiusmod qui et consequat laboris ea reprehenderit culpa ut. Tempor eiusmod ea ex enim aliquip velit veniam consequat adipisicing proident.\r\nEa culpa mollit occaecat do officia eiusmod aliqua consectetur. Cillum duis exercitation ex ipsum do tempor in fugiat pariatur non mollit officia veniam ut. Voluptate sunt sit minim eu voluptate labore consequat cillum ad et. Sunt ullamco veniam in ex id proident sint eiusmod labore commodo ipsum ex. Culpa quis labore proident cillum ipsum. Eu magna sit amet deserunt dolor mollit occaecat. Amet sit anim esse minim cupidatat reprehenderit amet cupidatat ipsum amet ipsum.\r\nVeniam do labore fugiat consectetur deserunt nisi ipsum eu cillum exercitation dolor non ullamco. Nisi sit labore nulla tempor in. Ut elit consectetur laboris et esse. Cupidatat aliquip non culpa laborum eu do ullamco magna.\r\n',
    },
    {
      id: 31,
      publisher: {
        firstName: 'Cecile',
        lastName: 'Reid',
      },
      read: false,
      important: false,
      title: 'eiusmod eu occaecat esse minim',
      text: 'Lorem Lorem fugiat magna ullamco qui incididunt occaecat veniam aliquip eiusmod. Cillum non nulla ex quis sint eiusmod aute eiusmod dolore esse nulla. Adipisicing mollit deserunt veniam ea veniam laboris dolore deserunt esse est ea ea sit nulla. Exercitation anim et nulla eu ullamco enim Lorem est consequat Lorem reprehenderit laboris culpa ex. Ullamco exercitation quis occaecat laboris consectetur enim.\r\nElit sint et elit aliqua esse ullamco sit Lorem duis sunt labore sunt commodo minim. Aliqua eiusmod sit officia occaecat voluptate sit ut est ad adipisicing aliquip incididunt veniam ullamco. Officia esse ullamco duis occaecat velit ut deserunt exercitation.\r\n',
    },
    {
      id: 32,
      publisher: {
        firstName: 'Tamra',
        lastName: 'Lester',
      },
      read: false,
      important: false,
      title: 'mollit sunt ut eiusmod incididunt',
      text: 'Pariatur id magna veniam non cillum duis non dolor ex veniam. Adipisicing non irure cillum ea esse eu voluptate elit laboris. Qui occaecat aliquip eu adipisicing ex ad nisi pariatur labore tempor ex.\r\nConsectetur dolor ipsum nulla exercitation nostrud. Fugiat laboris aute consectetur ut. Nulla officia reprehenderit minim et labore. Est laborum esse officia elit eu do ut non tempor exercitation est sit dolor. Culpa nisi nisi commodo cupidatat id eiusmod in nulla occaecat exercitation. Mollit veniam minim in tempor aliquip minim adipisicing ea consectetur consequat Lorem quis. Adipisicing est consectetur eu eiusmod ex non minim est ullamco amet laboris sit irure.\r\n',
    },
    {
      id: 33,
      publisher: {
        firstName: 'Carlene',
        lastName: 'Hoover',
      },
      read: false,
      important: false,
      title: 'est duis laborum amet laborum',
      text: 'Cupidatat proident aliqua laborum laboris amet consectetur occaecat consectetur. Esse pariatur ipsum nulla exercitation. Non enim aliquip enim esse ea. In exercitation exercitation eu irure veniam et in anim commodo nisi ut et aute deserunt. Laboris mollit minim aliquip exercitation incididunt consectetur. Occaecat eiusmod pariatur ea enim in ex mollit ad occaecat velit magna incididunt irure irure.\r\nCillum amet eiusmod ex irure irure enim pariatur enim proident. Commodo et in do irure. Ad sint proident esse exercitation sit ex est dolor aliqua laborum exercitation commodo in excepteur. In ea proident ullamco ipsum elit labore cupidatat nisi mollit do Lorem veniam et aliquip.\r\nFugiat ut sit cillum velit eiusmod est. Est dolore nisi esse cupidatat occaecat nulla eu dolore cupidatat eu nostrud. Nulla non nisi anim veniam ad elit ad.\r\n',
    },
    {
      id: 34,
      publisher: {
        firstName: 'Earlene',
        lastName: 'Molina',
      },
      read: true,
      important: false,
      title: 'et laborum nulla exercitation nulla',
      text: 'Elit ea sit ipsum reprehenderit officia cillum incididunt culpa veniam cillum est in tempor. Consequat ullamco pariatur excepteur cillum proident duis sit ipsum. Occaecat cillum sunt ipsum irure laborum. Sunt occaecat ut sint esse sunt fugiat ad commodo reprehenderit minim dolor magna cillum eiusmod. Sint consectetur velit cillum nostrud irure irure dolor anim.\r\nNulla veniam sit mollit sit. Veniam exercitation sunt quis ea dolor eu ad anim ut. Culpa ullamco nulla in enim commodo nulla velit quis veniam adipisicing adipisicing. Magna eiusmod esse in nulla do eiusmod dolor et amet quis nostrud voluptate ipsum amet. Aliqua fugiat consequat magna mollit id duis nulla culpa. Ullamco dolor elit aliquip culpa cupidatat Lorem excepteur et duis minim velit tempor duis.\r\nCommodo in in sunt ad proident. Minim in irure sunt exercitation culpa ullamco culpa nulla minim tempor proident commodo officia. Deserunt magna deserunt adipisicing exercitation cillum ad sint fugiat ad eu eiusmod aliqua.\r\n',
    },
    {
      id: 35,
      publisher: {
        firstName: 'Rosemarie',
        lastName: 'Mathis',
      },
      read: true,
      important: true,
      title: 'sunt non Lorem eiusmod',
      text: 'Ullamco elit in id culpa proident aute sit. Officia sit esse aliqua reprehenderit. Aliqua proident aute anim deserunt qui nulla et dolor elit ex occaecat pariatur et. Veniam incididunt excepteur quis nulla Lorem deserunt nostrud in ut veniam. Commodo qui cupidatat et magna enim aliqua qui aliqua. Nulla adipisicing laborum quis adipisicing. Amet adipisicing pariatur consectetur fugiat laborum occaecat laborum.\r\nReprehenderit magna voluptate elit ipsum nulla ut pariatur elit consequat est incididunt. Nisi laborum non voluptate eiusmod non irure dolore dolor nulla excepteur et. Lorem ullamco consectetur ad mollit eiusmod Lorem enim consectetur quis minim tempor et. Ea Lorem ipsum consectetur proident qui. Elit culpa sunt minim sit ex mollit deserunt excepteur labore excepteur nostrud eiusmod.\r\nLorem eiusmod ut sunt in exercitation occaecat sunt adipisicing irure. Ad excepteur commodo ad pariatur ipsum enim quis eiusmod. Qui velit in laboris nostrud amet ex ut sint.\r\n',
    },
    {
      id: 36,
      publisher: {
        firstName: 'Janice',
        lastName: 'Sparks',
      },
      read: true,
      important: false,
      title: 'adipisicing nisi duis nulla nisi',
      text: 'In dolore voluptate adipisicing culpa id duis laborum reprehenderit labore ut pariatur sit enim et. Ad duis ipsum amet sit cupidatat labore nostrud tempor aliquip dolor sint. Magna laboris enim mollit aliquip consectetur reprehenderit eiusmod excepteur eiusmod ad laborum. Culpa aute ipsum laboris elit irure reprehenderit. Mollit adipisicing anim excepteur ad ullamco non consectetur proident laboris.\r\nConsequat eu esse mollit laboris incididunt ipsum. Excepteur excepteur nisi consectetur nisi. Tempor dolor labore pariatur aliqua. Velit laboris in deserunt consectetur occaecat excepteur consequat deserunt Lorem proident magna. Et est magna laborum velit Lorem occaecat ea sint Lorem Lorem ipsum fugiat anim quis. Elit labore ea sint amet do.\r\nReprehenderit tempor adipisicing voluptate aliquip fugiat excepteur esse ad do nulla reprehenderit dolore. Esse fugiat adipisicing nostrud eiusmod ad proident pariatur velit laborum amet ex. Consequat anim mollit deserunt ex voluptate nulla quis ad eu officia in cillum.\r\n',
    },
    {
      id: 37,
      publisher: {
        firstName: 'Marsh',
        lastName: 'Osborne',
      },
      read: true,
      important: false,
      title: 'nulla elit ullamco adipisicing consectetur',
      text: 'Aute sit cillum aliquip veniam proident ipsum. Pariatur ullamco proident sit exercitation cupidatat irure. Quis commodo id incididunt fugiat irure enim. Veniam enim deserunt occaecat dolore dolore.\r\nAmet cupidatat minim occaecat do in aute irure. Incididunt ipsum qui irure in nisi pariatur. Proident proident laboris et in voluptate sint irure fugiat duis exercitation. Aliqua fugiat veniam tempor aute nisi aliquip sint cillum.\r\nExcepteur laborum aliqua nulla id duis occaecat cupidatat non in elit anim enim ullamco reprehenderit. Duis dolore proident in sit Lorem ullamco officia irure ipsum non adipisicing consectetur. Aute occaecat occaecat id et adipisicing culpa sint pariatur. Incididunt non nisi labore tempor ad nisi. Tempor eu minim minim ea sunt aliqua adipisicing sit enim consequat dolor enim anim. Ad exercitation do sit et nisi ipsum. Enim esse deserunt in reprehenderit id irure laboris proident deserunt do sint.\r\n',
    },
    {
      id: 38,
      publisher: {
        firstName: 'Cohen',
        lastName: 'English',
      },
      read: true,
      important: true,
      title: 'Lorem mollit officia',
      text: 'Non quis deserunt aliqua et labore qui ut pariatur id sit in reprehenderit anim qui. Amet ut minim pariatur est minim nisi et. Aliqua ea aute nulla minim sit. Proident commodo voluptate ea deserunt ad sint Lorem ad consequat dolor. Lorem officia veniam irure veniam ullamco eu pariatur adipisicing incididunt ex laborum.\r\nSint commodo commodo quis id aliquip aute cillum elit nostrud non qui. Duis eiusmod labore voluptate culpa aliquip adipisicing. Dolore duis et reprehenderit aliquip. Eu sint fugiat duis amet. Aliquip in voluptate adipisicing nisi incididunt in sunt. Magna ullamco reprehenderit ad velit in. Culpa velit excepteur consequat nulla culpa voluptate sint laboris Lorem ipsum id.\r\nSunt nostrud adipisicing tempor qui officia magna et officia. Nulla eu aute velit aliquip nostrud excepteur dolore veniam do consectetur dolor dolor. Elit duis laboris in officia mollit id esse laboris veniam voluptate cillum esse et. Ad consequat ad sint officia exercitation sunt nulla culpa consectetur esse ad.\r\n',
    },
    {
      id: 39,
      publisher: {
        firstName: 'Morrow',
        lastName: 'Collins',
      },
      read: true,
      important: true,
      title: 'laboris voluptate nostrud',
      text: 'Quis excepteur officia ex consectetur irure. Non cupidatat non anim nisi aliquip. Labore commodo ut ad non est occaecat exercitation aute magna proident. Fugiat id enim duis sit ea velit cillum aliqua Lorem pariatur.\r\nFugiat laboris cupidatat est non minim cupidatat dolor in aliquip dolore laborum nulla dolor. Sint ad voluptate eiusmod minim laborum officia esse magna. Consequat minim sunt nisi dolor id est et in Lorem. Excepteur id minim excepteur anim minim consectetur sint dolore esse duis voluptate ex magna nisi. Cillum eu sint officia nisi Lorem elit in amet.\r\n',
    },
    {
      id: 40,
      publisher: {
        firstName: 'Dyer',
        lastName: 'Huffman',
      },
      read: true,
      important: false,
      title: 'dolor deserunt cupidatat duis in',
      text: 'Labore qui culpa deserunt duis qui nisi. Duis occaecat excepteur exercitation ex magna sint ipsum. Eiusmod laboris elit quis enim laboris voluptate laboris. Aliqua magna pariatur ad labore proident do do cupidatat. Id aute veniam aliqua tempor adipisicing irure nostrud fugiat labore do duis.\r\nEsse et sunt velit irure aliqua sint mollit Lorem incididunt labore. Excepteur velit proident ea nulla est deserunt ex eiusmod cillum ea sint minim. Aliquip qui est pariatur elit deserunt do. Pariatur sit ea minim ullamco sunt pariatur voluptate ex. Lorem dolore ut quis duis officia ex id qui commodo sint reprehenderit enim laboris.\r\nAmet aliqua voluptate non proident est culpa Lorem nisi nisi nisi. Qui non et dolor ipsum dolor. Duis aliquip amet et aliqua magna ad in. Deserunt nostrud et ea qui pariatur. Aliquip cupidatat irure elit amet minim tempor qui sit veniam ad exercitation veniam ex velit.\r\n',
    },
    {
      id: 41,
      publisher: {
        firstName: 'Morse',
        lastName: 'Benton',
      },
      read: true,
      important: true,
      title: 'commodo officia culpa quis',
      text: 'Proident nulla ex fugiat nulla duis ut ad eu sunt Lorem. Duis eu eiusmod duis fugiat minim pariatur voluptate est laborum cupidatat officia nulla. Id deserunt deserunt nostrud sunt voluptate incididunt adipisicing aliqua anim ea. Amet elit ea quis ad ipsum. Nisi mollit est tempor velit nisi voluptate commodo nisi aliquip cillum culpa. Cupidatat ex ea eu aliquip nostrud elit incididunt velit ex.\r\nId non veniam excepteur sunt quis minim ea proident reprehenderit do occaecat. Dolor veniam dolor irure consectetur sit. In aute commodo et consectetur esse mollit ut tempor consectetur dolore voluptate irure. Ex dolor reprehenderit in ut sit elit nisi ea.\r\nAute officia eiusmod cupidatat elit. Sunt cupidatat voluptate deserunt proident duis deserunt esse. Cillum ad reprehenderit velit enim cupidatat ullamco aliquip magna voluptate ad velit veniam duis. Exercitation exercitation non voluptate sunt.\r\n',
    },
    {
      id: 42,
      publisher: {
        firstName: 'Hodge',
        lastName: 'Montoya',
      },
      read: false,
      important: true,
      title: 'aliqua incididunt commodo in',
      text: 'Occaecat reprehenderit excepteur ea dolor id laborum tempor. Duis officia nulla ex laborum laboris voluptate occaecat cillum culpa et cupidatat. Enim cillum sunt quis id laborum dolore pariatur sint eiusmod do quis Lorem labore. Nisi et voluptate nostrud proident duis Lorem consequat consectetur laboris aliqua veniam irure. Ea nisi reprehenderit dolor non. Proident do sunt ullamco occaecat eu est esse nisi ex ut.\r\nAliqua consequat in Lorem nostrud. Exercitation nisi duis enim dolore enim duis velit ut magna cillum. Aliqua enim non culpa enim dolore nostrud commodo dolore labore non qui do proident. Officia aliquip ad non fugiat ad exercitation ipsum. Ad deserunt exercitation duis ullamco proident enim eiusmod pariatur voluptate non laboris incididunt. Sit commodo nostrud aliqua in pariatur est magna cillum magna nulla deserunt amet in est.\r\nQuis cupidatat mollit eu aute occaecat culpa id cupidatat sunt nulla occaecat dolore aliquip. Officia adipisicing quis sint magna dolore consequat. Occaecat labore ex et adipisicing sit ex cupidatat ipsum exercitation dolore cillum amet adipisicing.\r\n',
    },
    {
      id: 43,
      publisher: {
        firstName: 'Skinner',
        lastName: 'Keller',
      },
      read: false,
      important: true,
      title: 'duis elit amet veniam',
      text: 'Adipisicing cillum enim aliquip ea aliquip cillum est minim ad exercitation labore. In esse dolor eu aliqua occaecat. Laboris fugiat consectetur duis et. Deserunt mollit commodo sit aliquip anim eiusmod proident ea ex occaecat fugiat adipisicing commodo. Ad ipsum quis reprehenderit id do et. Esse excepteur cillum eu id dolor mollit non incididunt nulla tempor laboris proident tempor. Dolore ad reprehenderit aliqua qui ut minim.\r\nAnim est qui do ex irure officia consequat occaecat Lorem irure aliqua mollit voluptate. Ipsum ut tempor in ut excepteur officia commodo nisi ea aute exercitation cupidatat officia occaecat. Est deserunt ea ea dolore occaecat Lorem qui. Sit mollit occaecat sint veniam. Sint eiusmod est amet magna eu et aliquip proident occaecat ad in anim qui ex. Laboris in nostrud est consequat.\r\nLabore duis quis ullamco sint id occaecat amet ut ex occaecat nisi aute sit. Eu esse reprehenderit ex quis incididunt reprehenderit ut reprehenderit veniam aliquip est dolore. Dolore voluptate anim id aliquip.\r\n',
    },
    {
      id: 44,
      publisher: {
        firstName: 'Macdonald',
        lastName: 'Cortez',
      },
      read: false,
      important: true,
      title: 'culpa aliqua ad',
      text: 'Enim esse anim duis dolore. Sint anim dolor mollit enim exercitation ut dolor est ipsum eiusmod incididunt et magna. Nulla labore irure laborum laborum eiusmod cupidatat exercitation.\r\nVoluptate velit consequat exercitation sunt ad est ad fugiat laboris officia. Cupidatat labore ad dolor nostrud consectetur Lorem fugiat consectetur aliquip consequat cillum et adipisicing. Excepteur excepteur non sit sit velit magna quis nisi voluptate ut.\r\nExercitation exercitation eu id fugiat velit esse nulla officia commodo ut sint. Anim nostrud in id eiusmod labore fugiat ea esse laboris consectetur. Reprehenderit adipisicing laborum adipisicing consectetur velit aliquip Lorem do. Elit non fugiat magna voluptate qui. Elit deserunt commodo consequat qui minim sit enim laborum non sunt in reprehenderit sint. Et do aute occaecat exercitation do elit magna magna laborum id deserunt tempor. Amet nostrud incididunt anim proident magna ex tempor.\r\n',
    },
    {
      id: 45,
      publisher: {
        firstName: 'Ora',
        lastName: 'Blair',
      },
      read: true,
      important: false,
      title: 'ullamco deserunt sint adipisicing',
      text: 'Sint enim minim irure duis consectetur et eu ea consequat fugiat occaecat. Tempor enim dolor consequat occaecat cillum dolor ea. Mollit do aliqua qui laboris. Culpa et nostrud eiusmod magna nisi non ut eu irure.\r\nProident incididunt laboris magna dolor ipsum sunt culpa pariatur qui officia aute id ad sunt. Ut magna est dolor eiusmod amet aliquip dolor elit irure exercitation quis. Duis ipsum ex sunt laborum. Eiusmod nulla nisi mollit adipisicing sit do Lorem adipisicing reprehenderit magna. Ullamco velit cillum elit ad pariatur. Reprehenderit enim id elit voluptate voluptate occaecat excepteur non aliquip occaecat laboris cupidatat in enim. Amet est velit ad nisi Lorem occaecat esse aliquip duis mollit officia.\r\n',
    },
    {
      id: 46,
      publisher: {
        firstName: 'Earnestine',
        lastName: 'Andrews',
      },
      read: false,
      important: true,
      title: 'eiusmod fugiat eiusmod est labore',
      text: 'Sint aliqua irure consequat qui ad amet aliqua incididunt amet Lorem. Esse dolor consequat Lorem irure. Est ad exercitation aliqua anim in. Qui nostrud ipsum elit sint veniam velit aliquip pariatur quis id incididunt eu aute est. Id laborum ex quis pariatur laboris reprehenderit ullamco Lorem excepteur do officia consequat. Officia duis cillum dolor eu tempor duis consequat elit officia eu. Culpa aute reprehenderit aute amet sunt irure aliquip minim sint ut nostrud et labore.\r\nMagna duis nostrud ipsum adipisicing incididunt aute labore esse irure commodo culpa. Ad exercitation mollit consequat reprehenderit magna ut dolor sit elit. Exercitation sunt reprehenderit aliqua enim cupidatat amet minim. In qui laborum Lorem voluptate officia excepteur magna veniam. Enim aliqua elit velit amet veniam adipisicing voluptate culpa do irure pariatur consectetur dolor ex. Cillum cillum nisi magna minim adipisicing consectetur. Quis labore Lorem eu aute amet elit ex pariatur aute incididunt deserunt elit.\r\nEu elit occaecat dolor sint proident ex ad Lorem dolore. Culpa ad voluptate cillum veniam sint est. Cillum aliquip enim deserunt adipisicing aliqua ad. Sunt consequat veniam esse quis nulla non et commodo sint. Exercitation nulla exercitation eu minim duis aliqua. Adipisicing quis veniam elit veniam laborum laboris velit tempor ea officia enim. Excepteur consectetur ex nostrud adipisicing laboris sunt cupidatat anim mollit incididunt anim ad.\r\n',
    },
    {
      id: 47,
      publisher: {
        firstName: 'Effie',
        lastName: 'Best',
      },
      read: false,
      important: false,
      title: 'nulla irure magna occaecat',
      text: 'Elit deserunt sit sunt cillum est. Do labore eu aliquip officia ex labore ut irure laborum velit cupidatat voluptate consectetur sint. Sunt nisi laboris voluptate elit cupidatat. Officia sunt do deserunt dolor adipisicing qui minim eu irure occaecat est est. Proident qui ad irure irure adipisicing velit voluptate ex nulla laborum consectetur. Consequat Lorem magna nostrud elit eu anim in consectetur cillum. Consequat officia qui est do culpa elit aute laboris eu labore amet est.\r\nAd excepteur esse reprehenderit labore pariatur. Culpa consectetur anim nulla eu ipsum reprehenderit. Nostrud nulla sint nisi officia ut. Sit ut velit do qui proident veniam consequat voluptate exercitation minim culpa labore dolore ut.\r\n',
    },
    {
      id: 48,
      publisher: {
        firstName: 'Lucille',
        lastName: 'Nash',
      },
      read: false,
      important: true,
      title: 'adipisicing occaecat irure enim',
      text: 'Proident ullamco labore do sit anim minim veniam. Cupidatat aliqua pariatur velit pariatur ipsum ullamco fugiat excepteur aute deserunt. Non tempor enim dolore proident minim laboris sit. Duis anim culpa do nulla mollit proident non officia velit aliqua tempor. Laborum anim consectetur culpa exercitation ex et ex ipsum in nulla. Cupidatat pariatur quis incididunt eu commodo in Lorem cupidatat proident sint.\r\nVeniam in officia ut cillum. Ipsum quis dolor magna magna culpa Lorem nisi dolor. Dolore non velit in irure fugiat.\r\n',
    },
    {
      id: 49,
      publisher: {
        firstName: 'Salinas',
        lastName: 'Ferrell',
      },
      read: false,
      important: true,
      title: 'et nostrud officia eiusmod qui',
      text: 'Et in duis cupidatat eu ea. In cupidatat aute nulla irure proident ipsum eiusmod minim aute elit exercitation est aliquip in. Enim proident ad laboris quis adipisicing ex voluptate ut anim. Magna ut non consequat incididunt sint ut sint dolore aliqua ut voluptate occaecat sit duis.\r\nAd et Lorem ullamco ad enim aliquip fugiat irure. Ullamco nostrud sint aute esse elit esse quis duis id dolor voluptate deserunt nisi est. Ut pariatur duis anim amet reprehenderit eu ex.\r\n',
    },
    {
      id: 50,
      publisher: {
        firstName: 'Bailey',
        lastName: 'Neal',
      },
      read: false,
      important: true,
      title: 'laboris ut dolore',
      text: 'Aliqua ad dolor officia aliqua aliqua exercitation. Eiusmod non ad irure officia ipsum quis sint do exercitation ad. Proident est nisi culpa in exercitation et aliqua magna anim aliqua laborum excepteur incididunt incididunt. Sint commodo anim nulla deserunt eu ad sunt. Et consequat fugiat labore id officia ex. Cupidatat ex duis esse dolore veniam Lorem sunt velit anim. Non ipsum exercitation reprehenderit consequat nulla qui elit.\r\nVoluptate nulla nostrud quis eiusmod culpa exercitation culpa ea dolor occaecat duis minim Lorem culpa. Commodo est ipsum consequat aute excepteur enim ipsum adipisicing aliquip nostrud do cillum incididunt. Nisi ex incididunt est irure proident aliqua sint nostrud minim laboris velit ullamco proident dolor. Nisi cupidatat qui enim nulla qui. Aute dolor nisi in eu amet Lorem duis laborum esse reprehenderit exercitation nostrud commodo sit. Mollit commodo laboris enim consequat duis.\r\nEst exercitation consectetur laboris officia duis nostrud elit tempor sit aute ullamco exercitation cillum. Reprehenderit culpa ipsum cupidatat ullamco nisi mollit. Fugiat mollit ad mollit commodo labore ut et deserunt laboris cillum tempor nostrud ullamco. Pariatur excepteur nulla quis in cillum tempor minim Lorem excepteur ad ullamco consequat eu minim. Consequat dolore exercitation elit voluptate ipsum adipisicing excepteur ut voluptate aliqua laboris. Reprehenderit ad ullamco qui magna irure officia nisi laborum ad. Exercitation minim commodo adipisicing velit officia voluptate duis nisi.\r\n',
    },
    {
      id: 51,
      publisher: {
        firstName: 'Jolene',
        lastName: 'Haynes',
      },
      read: false,
      important: true,
      title: 'ad nostrud eiusmod',
      text: 'Ex tempor nostrud nisi ex. Ea dolore sit consequat minim nostrud quis ut laborum. Ipsum duis dolore adipisicing enim elit velit enim magna mollit dolore enim ut exercitation. Culpa duis consectetur magna irure ad elit reprehenderit veniam commodo velit. Minim tempor ea do anim exercitation incididunt nisi exercitation id id duis dolor.\r\nLabore eiusmod sint anim qui ex aliqua Lorem nulla pariatur laborum proident sint. Id incididunt ea laborum consequat minim cupidatat sint sint eiusmod fugiat. In deserunt sint occaecat id deserunt veniam ex ex do tempor aliquip amet sit dolore.\r\n',
    },
    {
      id: 52,
      publisher: {
        firstName: 'Villarreal',
        lastName: 'Clemons',
      },
      read: false,
      important: false,
      title: 'est enim id occaecat fugiat',
      text: 'Officia occaecat eu aliqua velit. Dolor est velit ullamco amet incididunt Lorem aliqua eu. Cillum exercitation nulla aute nisi in in cillum ea duis eu elit consectetur. Exercitation commodo commodo velit aliqua. Exercitation duis velit ut aliqua occaecat qui. Veniam laborum eu aliquip labore amet qui cillum enim exercitation minim voluptate incididunt culpa minim.\r\nCupidatat ea Lorem ipsum id proident nostrud fugiat anim consectetur duis. Tempor ut cupidatat nisi sint pariatur aliqua nisi cupidatat Lorem ex magna in laboris. Nulla ullamco excepteur laboris commodo cillum. Sint culpa anim anim culpa sint do aute consequat nisi anim quis eu nostrud.\r\n',
    },
    {
      id: 53,
      publisher: {
        firstName: 'Kaufman',
        lastName: 'Armstrong',
      },
      read: true,
      important: false,
      title: 'consectetur magna commodo mollit ad',
      text: 'Anim aliquip laborum sit duis laborum aliqua occaecat. Ad et proident non commodo labore tempor in. Eu excepteur nulla eiusmod pariatur Lorem. Eiusmod id irure nulla dolor id quis eu veniam minim velit id laborum qui Lorem. Est in amet commodo veniam reprehenderit cillum sunt ipsum.\r\nMinim cillum ad ea aliqua ut esse laborum cupidatat quis cillum. Qui aliquip esse Lorem eiusmod nulla cillum. Minim incididunt voluptate in tempor esse mollit mollit commodo.\r\nVoluptate Lorem nulla sunt veniam quis. Adipisicing dolor dolor proident irure eiusmod tempor incididunt quis aliquip exercitation Lorem. Tempor eu deserunt reprehenderit proident elit dolore. Enim et exercitation nulla adipisicing est officia quis laborum mollit non excepteur. Esse ad reprehenderit proident fugiat fugiat velit. Culpa veniam sunt esse consequat adipisicing. Duis eiusmod tempor velit deserunt commodo labore aute.\r\n',
    },
    {
      id: 54,
      publisher: {
        firstName: 'Kim',
        lastName: 'Goff',
      },
      read: false,
      important: false,
      title: 'amet Lorem reprehenderit laboris pariatur',
      text: 'Ad incididunt pariatur minim ad adipisicing pariatur mollit consectetur nisi do dolor. Cillum ipsum incididunt consectetur id duis ex deserunt occaecat nostrud officia elit. Dolor est magna sint quis veniam labore occaecat cupidatat.\r\nCommodo esse nulla Lorem labore non cupidatat incididunt. Ut quis fugiat tempor aute anim commodo anim dolor ullamco amet. Nostrud pariatur minim qui deserunt duis dolor aliquip sit incididunt. Magna ullamco do occaecat ea eiusmod reprehenderit cillum voluptate fugiat reprehenderit nisi aliqua.\r\n',
    },
    {
      id: 55,
      publisher: {
        firstName: 'Whitehead',
        lastName: 'Delgado',
      },
      read: true,
      important: true,
      title: 'magna enim pariatur',
      text: 'Voluptate magna do sint irure culpa id laboris Lorem anim nisi nulla pariatur id dolor. Elit amet magna voluptate qui incididunt ex veniam duis ullamco. Reprehenderit pariatur aute veniam velit labore qui enim. Aliqua incididunt do tempor culpa ex enim exercitation. Dolor irure laborum anim est esse nostrud fugiat.\r\nDeserunt exercitation consequat officia duis id deserunt et anim occaecat mollit pariatur dolor cupidatat. Adipisicing velit enim veniam adipisicing et laborum culpa quis duis veniam voluptate non. Exercitation do laborum id cupidatat. Qui cillum mollit esse cupidatat ad voluptate officia non nulla cillum ea magna dolor. Eu commodo nostrud eiusmod labore aute. Ullamco id irure incididunt in laboris reprehenderit.\r\n',
    },
    {
      id: 56,
      publisher: {
        firstName: 'Shana',
        lastName: 'Castillo',
      },
      read: true,
      important: true,
      title: 'anim culpa consectetur et ipsum',
      text: 'Cillum excepteur veniam nulla ex eu duis exercitation. Eiusmod consequat pariatur cupidatat et enim elit est aute deserunt cupidatat adipisicing incididunt. Ea mollit labore voluptate proident voluptate ut. Cupidatat sunt nulla amet qui. Minim do reprehenderit mollit nisi consectetur officia eu in. In laborum labore aliqua commodo excepteur sit velit in anim labore.\r\nCupidatat aute occaecat adipisicing incididunt Lorem ad ea incididunt ipsum amet sit laboris. Laborum consequat ut ipsum deserunt nisi consequat anim eu nisi. Aliqua laboris consectetur duis excepteur ea cillum veniam aute nostrud do eiusmod anim ad duis. Pariatur duis do anim laborum tempor. Est adipisicing esse amet cupidatat reprehenderit deserunt in id anim irure cupidatat occaecat nostrud. Sunt veniam laboris quis elit labore ea id cillum culpa sunt nulla anim elit.\r\n',
    },
    {
      id: 57,
      publisher: {
        firstName: 'Dodson',
        lastName: 'Finch',
      },
      read: true,
      important: true,
      title: 'esse excepteur amet',
      text: 'Exercitation exercitation cupidatat occaecat officia enim non enim ad commodo dolore. Occaecat consectetur aute do duis voluptate occaecat aliqua officia voluptate. Tempor et nulla ullamco irure. Ullamco labore laborum sit nostrud in anim exercitation minim minim nulla pariatur. Labore sunt do incididunt quis dolor consectetur cupidatat Lorem exercitation commodo elit ad Lorem. Non ullamco incididunt tempor sit adipisicing laborum ea commodo eiusmod nisi elit. Sint cupidatat ex laborum deserunt id ipsum mollit.\r\nNisi ut aliquip eu et ea deserunt id quis aute nostrud veniam irure nisi pariatur. Ut ex enim qui sit. Voluptate amet consequat laboris eiusmod proident esse. Dolor proident exercitation non officia aliqua amet aute esse laborum labore ipsum est elit culpa. Et tempor excepteur amet exercitation velit velit non Lorem proident officia magna excepteur consectetur est. Ea Lorem consectetur sit consectetur aute ad velit in fugiat. Commodo dolor aliqua laborum sit quis ullamco occaecat magna sint qui commodo.\r\n',
    },
    {
      id: 58,
      publisher: {
        firstName: 'Lavonne',
        lastName: 'Hamilton',
      },
      read: false,
      important: true,
      title: 'ut sint elit elit',
      text: 'Ullamco reprehenderit culpa tempor cillum mollit consequat. Magna anim minim ex ea enim officia cupidatat velit aliquip eu ullamco. Lorem amet anim enim tempor magna Lorem laboris. Do id ea duis fugiat non. Cillum fugiat adipisicing elit aute enim consectetur aliquip officia occaecat magna aute laboris.\r\nOfficia sit anim do eiusmod. Esse adipisicing nisi cillum culpa. Nostrud magna tempor exercitation proident. Velit laboris irure eiusmod amet dolor voluptate id. Aliquip sunt duis commodo id irure culpa.\r\nIn non labore laborum Lorem enim nisi ea aute eu magna nulla eu nisi. Occaecat sit elit nostrud et proident ex officia magna fugiat. Esse irure magna est excepteur ut occaecat ipsum sit sunt. Lorem ex reprehenderit nostrud cillum non cillum ut.\r\n',
    },
    {
      id: 59,
      publisher: {
        firstName: 'Francesca',
        lastName: 'Holt',
      },
      read: false,
      important: false,
      title: 'consectetur deserunt eu elit qui',
      text: 'Consectetur aliqua nisi sit id. Adipisicing nostrud velit consectetur enim pariatur mollit sunt pariatur laboris et Lorem. Voluptate veniam fugiat nulla laboris anim. Exercitation minim ad laboris sunt aute elit sunt. Qui quis ipsum culpa in velit quis cupidatat voluptate deserunt mollit adipisicing. Dolore laborum eiusmod aliqua quis pariatur consectetur est aliquip.\r\nIpsum enim tempor irure cillum dolor eiusmod tempor Lorem reprehenderit ea ea officia deserunt do. Voluptate fugiat consectetur esse eiusmod non sunt sunt ea commodo labore. Cupidatat id ex et do occaecat nulla deserunt excepteur cupidatat pariatur duis. Mollit cillum anim elit consequat tempor ad deserunt qui consequat anim officia.\r\nVoluptate pariatur do anim veniam consectetur tempor. In tempor do voluptate Lorem nostrud duis. In voluptate duis enim Lorem dolore veniam in culpa nisi tempor cupidatat dolor. Est amet elit non commodo adipisicing ex non culpa adipisicing excepteur veniam qui. Fugiat deserunt reprehenderit aliquip non non pariatur sint. Eu sunt cillum consequat culpa dolore sunt et tempor laborum enim velit nostrud aliqua.\r\n',
    },
    {
      id: 60,
      publisher: {
        firstName: 'Evelyn',
        lastName: 'Decker',
      },
      read: true,
      important: true,
      title: 'proident irure aliquip adipisicing',
      text: 'Velit non id ad cillum sunt. Proident consequat consectetur non deserunt. Adipisicing nisi eiusmod ex quis amet. Quis nisi commodo ipsum magna culpa excepteur ipsum do.\r\nAliquip pariatur pariatur qui ea minim. Laborum non commodo elit fugiat enim non et Lorem elit elit sint. Officia ullamco eiusmod ad aliqua ea id qui excepteur veniam ad ut velit reprehenderit. Tempor irure cupidatat elit commodo sit nulla nisi do sunt labore.\r\nOccaecat consequat anim elit magna dolore commodo consectetur ad. Nulla laborum sit fugiat qui quis do. Ex nulla ea aliquip laboris nulla consequat esse. Cillum culpa ad et amet aliquip laboris exercitation. Aliqua minim consectetur nisi sint deserunt ut reprehenderit enim et. Ut Lorem ex ut ullamco aliqua minim duis eu sint laboris. Amet ullamco non ex eu enim cupidatat quis magna ipsum commodo adipisicing commodo sint.\r\n',
    },
    {
      id: 61,
      publisher: {
        firstName: 'Witt',
        lastName: 'Miles',
      },
      read: true,
      important: true,
      title: 'consectetur culpa exercitation',
      text: 'Duis dolor duis commodo ad amet mollit anim exercitation veniam. Minim in amet amet id nostrud est veniam ullamco. Proident aliqua ut excepteur mollit sunt duis. Officia excepteur ex non mollit proident duis do esse nostrud incididunt sunt velit velit nostrud. Mollit labore cupidatat Lorem sunt labore consectetur nulla. Aliqua ipsum culpa commodo deserunt deserunt qui sunt eiusmod est elit.\r\nExercitation voluptate enim fugiat eiusmod laboris do adipisicing. Voluptate aliquip officia exercitation in fugiat excepteur sit labore mollit do. Ea magna anim qui nulla labore incididunt aliquip consectetur. Aliqua id ad ut laborum ad sunt mollit dolor do ipsum. Mollit in culpa nisi anim amet. Incididunt commodo ad nisi commodo sunt do sunt aute commodo laboris ut reprehenderit enim.\r\nTempor irure voluptate fugiat dolore occaecat quis est nostrud duis deserunt culpa voluptate consectetur. Commodo et incididunt quis amet exercitation. Est mollit in voluptate labore do anim. Excepteur ad pariatur velit occaecat cupidatat esse magna tempor amet ex aute anim esse. Ullamco velit duis pariatur sit consectetur amet dolore consectetur veniam ad qui ad elit duis. Ut pariatur ullamco commodo elit aute sint amet irure anim nisi. Deserunt non ullamco Lorem reprehenderit cillum reprehenderit elit aliquip id dolor officia.\r\n',
    },
    {
      id: 62,
      publisher: {
        firstName: 'Rosario',
        lastName: 'Lambert',
      },
      read: false,
      important: false,
      title: 'dolor veniam excepteur',
      text: 'Elit aliquip sint deserunt cillum laboris adipisicing nisi ut consequat consequat exercitation enim ullamco deserunt. Nisi culpa culpa aliqua exercitation nostrud anim aliqua laboris exercitation. Tempor tempor ad labore laboris deserunt dolor deserunt. Eiusmod exercitation sint laboris irure nostrud non consectetur minim laborum non deserunt esse laborum esse. Sunt deserunt Lorem pariatur magna aute adipisicing elit elit quis elit.\r\nEx deserunt qui tempor nostrud enim elit anim et velit cupidatat. Nisi laboris officia ex minim anim dolor mollit ipsum Lorem. Culpa excepteur aliqua sit quis irure. Velit do minim veniam officia enim quis eu.\r\n',
    },
    {
      id: 63,
      publisher: {
        firstName: 'Christian',
        lastName: 'Jackson',
      },
      read: false,
      important: true,
      title: 'consequat amet minim officia veniam',
      text: 'Commodo consectetur Lorem velit occaecat nulla. Nulla occaecat est et et laboris Lorem laborum amet excepteur. Exercitation sint pariatur non excepteur ad fugiat cillum in.\r\nId esse adipisicing cupidatat incididunt laboris sint sint cillum. Aliquip nostrud mollit pariatur tempor dolor magna magna esse occaecat in culpa. Nulla qui minim excepteur mollit magna do Lorem mollit labore dolore amet officia adipisicing. Mollit ipsum ad pariatur consectetur incididunt est non. Minim amet ipsum qui cillum cillum fugiat enim est est id. Nulla esse fugiat consequat veniam non irure et sit commodo dolor do sunt magna. Minim pariatur enim reprehenderit exercitation laboris consectetur non labore.\r\nFugiat est dolor ex pariatur. Eiusmod occaecat qui cillum laborum excepteur et magna nisi. Proident commodo deserunt ea est labore consequat sit anim sunt. Cupidatat sit laboris aliqua do ex non mollit in sit consectetur aliqua nostrud officia nulla. Id nisi et ullamco cupidatat adipisicing elit do eu minim laborum sint laboris consequat. Quis est id elit fugiat amet. Do excepteur proident eiusmod nisi do ipsum mollit in nisi enim laboris sit exercitation sint.\r\n',
    },
    {
      id: 64,
      publisher: {
        firstName: 'Florence',
        lastName: 'Rich',
      },
      read: true,
      important: true,
      title: 'id sint aliqua cillum',
      text: 'Id duis est occaecat commodo mollit pariatur duis quis incididunt labore excepteur dolor. Eu enim adipisicing minim enim consectetur nulla dolore fugiat laboris et qui anim minim. Incididunt eu duis enim non excepteur esse eiusmod commodo irure nisi consectetur id proident duis. Nostrud amet veniam anim duis ad mollit non pariatur velit cupidatat esse non exercitation. Lorem magna laborum commodo aliqua proident ut voluptate duis magna culpa ad magna. Dolor veniam aute ipsum eu.\r\nLorem Lorem exercitation ipsum do duis esse duis cillum adipisicing. Velit cillum non dolore nulla ut dolor exercitation non. Exercitation ex fugiat aute commodo irure. Magna ut consequat aliquip nisi exercitation Lorem laboris. Id voluptate veniam culpa ut est adipisicing ex anim amet. Nulla irure commodo anim in nostrud velit magna dolor magna minim quis eiusmod laboris Lorem.\r\nCupidatat irure magna dolor duis officia mollit. Non ea officia Lorem ut commodo eiusmod labore duis mollit non mollit. Amet excepteur occaecat enim labore. Qui aute sit eiusmod sunt elit nulla nisi elit amet fugiat qui. Esse ea dolore amet ut duis eiusmod ullamco. Excepteur mollit tempor minim proident officia eu.\r\n',
    },
    {
      id: 65,
      publisher: {
        firstName: 'Smith',
        lastName: 'Howard',
      },
      read: true,
      important: true,
      title: 'quis nostrud dolore voluptate',
      text: 'Anim et ut eu in est dolor excepteur officia consectetur. Eiusmod ex ex pariatur excepteur deserunt sit sunt nulla ea exercitation consequat amet. Eiusmod officia non ea ut cupidatat. Non elit qui irure amet laborum ea ut consequat cillum nulla adipisicing eiusmod.\r\nOccaecat mollit ex eu elit ut enim pariatur eiusmod incididunt. Do velit Lorem anim Lorem non ea. Et magna excepteur dolor consectetur. Culpa reprehenderit minim cupidatat nulla nisi ullamco tempor pariatur voluptate ad. Non anim voluptate ex cillum nisi labore nostrud qui ad cillum aliquip commodo velit. Quis ex irure ea do consequat veniam.\r\n',
    },
    {
      id: 66,
      publisher: {
        firstName: 'Salazar',
        lastName: 'Harrington',
      },
      read: false,
      important: false,
      title: 'deserunt fugiat labore',
      text: 'Elit id fugiat minim dolor excepteur ex eu cillum laborum tempor eiusmod velit. Exercitation aliqua reprehenderit sit dolore sunt qui adipisicing labore exercitation irure enim id. Sit ut pariatur enim pariatur in nisi ipsum sit. Amet occaecat in do aliqua voluptate ad. Excepteur tempor nostrud id labore fugiat eiusmod minim duis consequat dolor sint qui eu reprehenderit.\r\nPariatur deserunt duis mollit minim occaecat duis qui sit ea occaecat cillum enim. Laborum qui ea in dolore et dolor. Laborum aliquip exercitation esse elit veniam consequat. Enim minim adipisicing dolor mollit aliquip velit proident cupidatat ipsum.\r\n',
    },
    {
      id: 67,
      publisher: {
        firstName: 'Sara',
        lastName: 'Barron',
      },
      read: true,
      important: true,
      title: 'et irure cupidatat',
      text: 'Est duis anim laborum officia aliquip velit exercitation sunt culpa. Officia elit nostrud dolore non ad irure ipsum laborum minim consequat officia. Deserunt adipisicing elit cillum velit velit irure proident consectetur eiusmod nostrud. Eu cillum nisi esse consectetur dolor.\r\nCillum et do eiusmod ex culpa velit consequat adipisicing tempor. Amet amet laborum veniam minim enim. In dolore magna exercitation exercitation esse non velit. Dolore proident est laborum do reprehenderit cupidatat proident tempor. Veniam qui eu commodo elit consectetur et qui nostrud fugiat laborum laboris nostrud voluptate consequat.\r\n',
    },
    {
      id: 68,
      publisher: {
        firstName: 'Velazquez',
        lastName: 'Evans',
      },
      read: true,
      important: true,
      title: 'veniam aliquip qui duis cillum',
      text: 'Esse ullamco do cupidatat excepteur consectetur sunt do labore pariatur enim. Aliquip et eiusmod qui nisi. Magna officia amet irure labore elit in quis aute dolor magna ex ut enim. Est incididunt adipisicing aliqua aute est nostrud aliqua pariatur aliqua adipisicing ipsum. Sit excepteur nulla ea ex esse adipisicing qui elit aute. Velit excepteur ipsum dolore aute proident Lorem laborum mollit reprehenderit consectetur excepteur tempor fugiat Lorem. Ipsum enim cillum voluptate ea.\r\nSunt cupidatat enim excepteur nulla anim culpa voluptate excepteur id nisi eu deserunt esse proident. Aliquip est sunt reprehenderit cupidatat et aute cupidatat aliqua. Voluptate in Lorem et dolore in. Consequat dolor quis incididunt et ut officia ad occaecat nostrud. Anim cillum laboris minim eiusmod anim non cupidatat do.\r\nAliquip exercitation eu sint amet. Ipsum exercitation pariatur cillum nisi duis. Fugiat quis reprehenderit laboris id fugiat. Deserunt nulla enim adipisicing deserunt incididunt sint irure ut.\r\n',
    },
    {
      id: 69,
      publisher: {
        firstName: 'Victoria',
        lastName: 'Mcconnell',
      },
      read: true,
      important: false,
      title: 'duis est sit sit',
      text: 'Est velit exercitation fugiat nulla ea minim aliqua. Et ullamco tempor pariatur quis incididunt elit. Voluptate consequat in cupidatat anim labore nostrud ut. Duis cillum amet sint aliquip cupidatat ullamco velit esse occaecat eiusmod quis occaecat. Lorem minim excepteur ad ad exercitation laborum qui aliquip voluptate ad exercitation duis. Laborum excepteur et fugiat sunt exercitation proident proident sint ad et. Labore laboris adipisicing sint ullamco et ad.\r\nVoluptate nostrud cupidatat minim ad ut cillum ex tempor nulla minim quis. Ad veniam ullamco deserunt reprehenderit sunt voluptate ut. Laborum ex est nulla do magna elit anim qui ad incididunt cupidatat.\r\nCommodo ad Lorem laboris consequat dolor velit aliqua mollit ullamco sunt culpa. Amet ipsum ex anim velit magna qui sint ad sunt sunt veniam. Fugiat cupidatat quis nisi non occaecat aute voluptate enim irure enim laborum id minim nulla. Occaecat non cillum velit est adipisicing nostrud nisi dolor ipsum velit. Sit pariatur in excepteur minim officia incididunt quis qui nostrud magna officia sit irure. Quis eiusmod labore in anim enim magna dolor ex mollit laborum reprehenderit sint. Nulla aute cupidatat exercitation aliquip aute quis aliqua reprehenderit eu magna incididunt.\r\n',
    },
    {
      id: 70,
      publisher: {
        firstName: 'Koch',
        lastName: 'Simmons',
      },
      read: false,
      important: false,
      title: 'sunt exercitation sint nulla ut',
      text: 'Dolore proident fugiat incididunt enim aliqua in. Exercitation ullamco esse sint aliqua mollit ullamco sint. Cillum pariatur anim laborum nulla nulla aute reprehenderit id. In nulla aute est ad ad dolor. Dolore reprehenderit deserunt pariatur tempor fugiat nostrud aliqua.\r\nCupidatat laboris aute fugiat eiusmod proident esse commodo occaecat commodo. Occaecat incididunt ex dolore Lorem duis cupidatat sint in elit. Esse aliquip veniam laborum incididunt qui nisi duis cupidatat ut excepteur. Irure proident irure eiusmod elit. Nisi magna amet exercitation duis minim. Deserunt fugiat ex do excepteur labore incididunt sint dolore non ex eiusmod quis. Aliqua eu ad magna magna dolore labore laborum excepteur excepteur nulla magna.\r\n',
    },
    {
      id: 71,
      publisher: {
        firstName: 'Delacruz',
        lastName: 'Allison',
      },
      read: true,
      important: true,
      title: 'incididunt voluptate velit aliquip irure',
      text: 'Laboris elit pariatur irure velit duis laboris anim dolore veniam officia. Veniam aute cupidatat nulla consequat nulla irure consectetur tempor aute eu nostrud qui. Qui laboris magna Lorem veniam nostrud sint amet nisi eiusmod commodo quis qui officia. Velit officia eu id sit minim velit. Esse ut duis amet ad. Sint magna in et culpa quis proident nulla officia quis laboris ad anim excepteur. Consequat veniam exercitation nulla ea culpa eu occaecat occaecat minim aliqua velit cillum.\r\nVoluptate laboris occaecat culpa amet anim. Veniam pariatur magna proident magna non ea consectetur incididunt ex ex. Nisi commodo nulla quis id mollit do consequat proident exercitation eiusmod. Excepteur exercitation aliqua do labore aliquip laboris nisi ipsum et proident.\r\n',
    },
    {
      id: 72,
      publisher: {
        firstName: 'Mendoza',
        lastName: 'Vasquez',
      },
      read: true,
      important: false,
      title: 'consectetur consectetur anim magna ad',
      text: 'Enim pariatur minim cillum enim anim culpa proident. Occaecat ullamco aliquip enim sunt excepteur officia veniam enim exercitation. Voluptate fugiat ipsum laboris velit nulla cillum. Consequat veniam est et voluptate est ad velit esse nisi. Minim commodo ea magna culpa excepteur Lorem id dolore laboris cupidatat ex enim id. Sint eu quis ut veniam magna irure tempor occaecat. Mollit velit labore commodo in fugiat sint.\r\nExercitation id elit minim commodo eiusmod do eu aliquip. Dolor exercitation irure nostrud adipisicing proident magna exercitation quis. Eiusmod eiusmod do culpa aute id culpa sint. Sunt mollit consectetur excepteur anim tempor elit aliqua. Laborum in dolore laborum officia exercitation velit non mollit excepteur. Aliquip commodo irure irure culpa Lorem excepteur ea sit eiusmod mollit do velit irure sit. Commodo ad ut ea minim occaecat consectetur do irure est nostrud.\r\n',
    },
    {
      id: 73,
      publisher: {
        firstName: 'Jacklyn',
        lastName: 'Wheeler',
      },
      read: true,
      important: false,
      title: 'est ullamco enim elit',
      text: 'Esse ipsum laboris adipisicing sint laborum amet Lorem enim laboris duis irure velit. Officia officia labore anim culpa laboris sit mollit consectetur incididunt. Veniam dolore pariatur consectetur culpa. Aliquip culpa sint officia id laborum nostrud aute ex. Nostrud do in ullamco incididunt officia voluptate adipisicing commodo sunt. Sint occaecat irure aliqua Lorem et sunt exercitation dolore tempor.\r\nPariatur est nostrud amet quis magna fugiat esse pariatur consectetur ad reprehenderit cillum id. Ea tempor elit Lorem sit do ex. Lorem sit laborum et veniam adipisicing et ad do proident Lorem commodo dolor. Culpa sit consectetur excepteur sunt veniam incididunt velit. Deserunt id Lorem laboris sunt proident amet dolore. Eu id aliquip aliquip laboris. Laboris officia cillum voluptate enim.\r\n',
    },
    {
      id: 74,
      publisher: {
        firstName: 'Lila',
        lastName: 'Hull',
      },
      read: true,
      important: false,
      title: 'proident aliquip elit laboris dolor',
      text: 'Reprehenderit magna proident incididunt Lorem non tempor mollit esse quis. Nostrud officia cillum nisi adipisicing velit reprehenderit dolore irure. Minim ea irure magna esse incididunt cupidatat adipisicing. Sit non sint Lorem ut aliquip ad nulla nisi officia qui nisi ex aute ullamco. Cupidatat cillum mollit cillum officia consequat reprehenderit laboris excepteur. Laboris sunt ipsum duis ullamco nulla. Proident ea in aute ea nisi velit tempor quis.\r\nConsectetur commodo excepteur dolore non Lorem ut minim incididunt qui nostrud deserunt adipisicing. Magna cillum pariatur officia anim ea magna reprehenderit irure aliquip. Proident ipsum deserunt adipisicing dolore proident ut pariatur dolore nulla ex sit velit dolore aliqua. Labore aute commodo quis occaecat consectetur. Duis excepteur quis proident do excepteur qui. Do anim mollit consectetur esse ea dolore velit exercitation non dolor exercitation nisi aute.\r\n',
    },
    {
      id: 75,
      publisher: {
        firstName: 'Laverne',
        lastName: 'Chang',
      },
      read: false,
      important: false,
      title: 'tempor proident consequat',
      text: 'In et veniam consectetur consectetur commodo ut veniam excepteur do. Lorem non elit anim do aliqua eiusmod qui. Consequat reprehenderit sint reprehenderit nulla cupidatat qui consequat laboris culpa ullamco occaecat tempor. Quis non do adipisicing quis ipsum consectetur proident. Culpa voluptate quis proident nulla do in sint esse consequat sunt incididunt sit id laboris.\r\nEu mollit nulla amet ipsum. Incididunt incididunt ad aliqua veniam. Adipisicing aute fugiat eiusmod incididunt tempor in commodo do consectetur. Aliqua irure eiusmod do laborum sunt consequat do ad magna.\r\nDuis pariatur excepteur culpa ad incididunt do minim mollit. Voluptate Lorem ullamco ex sint est dolor ea culpa tempor enim Lorem in. Enim nostrud et enim culpa magna officia. Est duis laborum exercitation officia eiusmod ullamco. Do velit dolor amet officia quis incididunt non.\r\n',
    },
    {
      id: 76,
      publisher: {
        firstName: 'Camille',
        lastName: 'Hopper',
      },
      read: true,
      important: true,
      title: 'aliquip minim ex fugiat',
      text: 'Officia ipsum aliqua duis minim ea eu. Elit ipsum sit laborum mollit eu duis. Tempor aute ullamco voluptate nulla proident nisi irure.\r\nNostrud duis deserunt voluptate laborum cillum fugiat voluptate laborum consectetur adipisicing nostrud amet. Velit eiusmod enim nulla anim deserunt veniam in velit reprehenderit cupidatat. Eiusmod est duis duis laborum eu sit incididunt sunt commodo qui duis ut aliqua. Velit ipsum in sit id aliqua est occaecat tempor. Reprehenderit cillum sunt Lorem adipisicing ullamco.\r\nAliquip ex nulla et enim magna. Laborum esse excepteur sint tempor in officia eu aute nulla ad. Voluptate labore cillum mollit fugiat Lorem proident exercitation. Cillum esse proident officia et duis. Eiusmod voluptate pariatur laboris dolore voluptate elit amet non eiusmod Lorem minim nostrud laboris. Qui cillum culpa nulla duis esse qui laboris exercitation ullamco fugiat do.\r\n',
    },
    {
      id: 77,
      publisher: {
        firstName: 'Castro',
        lastName: 'Bailey',
      },
      read: true,
      important: true,
      title: 'sunt magna do amet adipisicing',
      text: 'Minim quis commodo aute dolor elit voluptate excepteur proident est ad ullamco. Velit Lorem enim aliqua eiusmod voluptate velit minim fugiat voluptate reprehenderit. Incididunt aliquip cillum irure magna ad tempor magna sunt qui cillum voluptate.\r\nExcepteur sit voluptate nisi voluptate aliquip consequat. Commodo deserunt cillum aliqua magna nostrud nulla culpa. Ea culpa id anim amet excepteur quis sunt velit irure velit. Dolor voluptate est est culpa enim ex occaecat.\r\n',
    },
    {
      id: 78,
      publisher: {
        firstName: 'Selma',
        lastName: 'Hogan',
      },
      read: false,
      important: true,
      title: 'do qui elit deserunt cupidatat',
      text: 'Exercitation irure velit ullamco eiusmod exercitation consequat elit ipsum occaecat labore. Officia minim magna cupidatat amet ad consequat enim. Ipsum est enim fugiat ex eu dolor nisi culpa consequat culpa amet labore ex.\r\nEx veniam adipisicing in velit incididunt sunt. Labore elit ex excepteur nulla deserunt sunt. Reprehenderit duis ex duis aliquip nisi. Occaecat nostrud velit pariatur adipisicing cillum exercitation est laboris ea ea eu magna exercitation. Irure eiusmod et nisi laboris voluptate ex reprehenderit nostrud labore magna eiusmod dolor elit occaecat.\r\n',
    },
    {
      id: 79,
      publisher: {
        firstName: 'Shawn',
        lastName: 'Gibson',
      },
      read: true,
      important: false,
      title: 'ad non aliquip',
      text: 'Dolore anim consectetur anim eu. Et laborum esse qui velit cillum qui. Voluptate dolor est ullamco voluptate amet nisi cillum occaecat non exercitation cupidatat consequat incididunt. Cupidatat ut Lorem tempor elit. Ex enim adipisicing fugiat culpa ex culpa officia. Nisi proident nulla tempor sint anim nostrud irure aliquip reprehenderit. Incididunt irure et quis cillum aute ex exercitation elit consectetur do consectetur non anim.\r\nLaborum proident adipisicing aliquip laborum nulla deserunt aute laborum sunt dolore nulla laboris non. Nulla officia adipisicing do non sint est cupidatat eu. Ullamco nisi amet proident cupidatat ex in reprehenderit do commodo.\r\nEx commodo dolor Lorem dolor officia labore mollit duis irure. Elit nisi cupidatat laborum excepteur cillum magna magna magna amet incididunt sint commodo eu. Eu incididunt ut laboris nostrud sunt aliqua duis qui.\r\n',
    },
    {
      id: 80,
      publisher: {
        firstName: 'Barnes',
        lastName: 'Whitehead',
      },
      read: false,
      important: true,
      title: 'aliquip laboris aute ex anim',
      text: 'Nulla do laboris esse commodo mollit nostrud ullamco. Id quis laborum minim aliqua et anim et reprehenderit adipisicing. Consequat cupidatat consequat voluptate velit ipsum commodo do tempor aute tempor. Reprehenderit ea in esse tempor velit. Labore tempor excepteur consequat aute ullamco laborum. Consectetur mollit proident veniam fugiat nostrud exercitation eiusmod Lorem aliquip. Ipsum pariatur laborum sunt consequat excepteur dolore tempor velit do.\r\nCommodo fugiat duis ea proident. Anim reprehenderit consectetur magna aute reprehenderit. Incididunt incididunt labore sit consequat anim fugiat nulla sunt qui mollit reprehenderit aute aliquip. Cillum proident eiusmod dolore sunt fugiat ipsum est voluptate aliqua incididunt.\r\nEt anim anim dolore exercitation in cillum qui ad irure eu ut elit. Laborum laborum laboris eu consequat duis esse incididunt mollit labore fugiat cupidatat est. Ut officia ea laboris pariatur ullamco. Ad officia amet officia officia amet nulla aliqua deserunt laboris incididunt ex cupidatat fugiat.\r\n',
    },
    {
      id: 81,
      publisher: {
        firstName: 'Harrison',
        lastName: 'Merritt',
      },
      read: true,
      important: false,
      title: 'ut irure tempor',
      text: 'Minim dolore est eu exercitation voluptate ad nisi proident cupidatat exercitation ex anim non nulla. Ipsum elit duis sint dolore adipisicing tempor elit exercitation nisi fugiat ipsum ipsum magna ullamco. Commodo nostrud commodo laboris ut sit nulla est reprehenderit occaecat occaecat ullamco sit nostrud.\r\nVeniam id do nostrud nisi quis esse laborum minim minim aliqua aute. Consectetur sint culpa dolore excepteur qui pariatur nulla eiusmod reprehenderit dolor et. Dolore sit proident consectetur ullamco laborum esse in labore irure et veniam commodo occaecat. Eu velit amet cupidatat eiusmod occaecat amet do anim deserunt incididunt esse. Tempor voluptate sunt incididunt nisi ipsum in. Amet ex amet pariatur enim sunt mollit irure est.\r\n',
    },
    {
      id: 82,
      publisher: {
        firstName: 'Carmela',
        lastName: 'Garza',
      },
      read: false,
      important: false,
      title: 'incididunt dolore incididunt esse',
      text: 'Quis exercitation ipsum sunt nostrud excepteur duis nisi nisi culpa commodo. Adipisicing aute eiusmod laboris est adipisicing ullamco reprehenderit deserunt mollit eu eu mollit eiusmod. Ea ea velit qui do sit esse minim adipisicing tempor non cillum nisi. Ex excepteur dolore commodo amet. Fugiat elit Lorem occaecat aliquip et cillum qui non deserunt tempor aute cupidatat. Velit sunt ullamco anim cillum. Est labore labore fugiat do ipsum est non fugiat.\r\nPariatur sunt do esse eu tempor voluptate veniam amet proident. Lorem enim nostrud cillum tempor anim culpa magna. Proident voluptate veniam tempor qui in do. Nulla incididunt veniam magna deserunt occaecat ipsum. Est ipsum proident consequat duis ullamco cupidatat et est non. Sint ullamco pariatur sint aliquip quis dolore ea nisi non minim aliquip. Deserunt ea laboris culpa id sint excepteur cillum ea fugiat aute id enim laboris culpa.\r\n',
    },
    {
      id: 83,
      publisher: {
        firstName: 'Elise',
        lastName: 'Randall',
      },
      read: true,
      important: true,
      title: 'ipsum consectetur ea ea',
      text: 'Et officia eu quis dolor ullamco et deserunt quis ullamco est aliquip elit mollit anim. Mollit ut do consequat ut proident anim id sunt aute. Ut qui consectetur ex veniam sint excepteur nisi sit eiusmod labore non velit dolore non. Culpa incididunt anim consequat ipsum labore ullamco ad occaecat amet non Lorem amet excepteur. Quis consequat Lorem nulla reprehenderit proident duis aute Lorem exercitation quis commodo sint quis excepteur. Cillum minim consectetur voluptate sint incididunt anim excepteur magna non sit. Ullamco laborum in incididunt amet id sunt ex.\r\nSit cillum deserunt cillum non eu et nulla culpa nostrud dolore enim. Minim enim est est laborum aliqua qui irure nulla. Enim officia esse cillum aute in laborum ex sint amet. Excepteur ullamco laborum nulla aliquip reprehenderit id labore dolore aliqua est nisi labore. Sint do exercitation aliqua nulla ullamco velit elit. Ea ut sunt fugiat voluptate Lorem magna sint esse esse aute cillum mollit magna.\r\nAliquip laboris veniam tempor mollit. Amet cillum eu cillum est occaecat reprehenderit ex ad duis eu. Culpa nostrud mollit elit ipsum et est in sint sunt elit elit consequat cillum voluptate. Veniam irure magna quis esse minim reprehenderit officia in Lorem.\r\n',
    },
    {
      id: 84,
      publisher: {
        firstName: 'West',
        lastName: 'Sharp',
      },
      read: true,
      important: false,
      title: 'veniam elit sunt amet',
      text: 'Exercitation consectetur culpa tempor duis veniam minim quis duis nulla commodo esse. Eu duis duis elit amet occaecat voluptate cillum cillum consequat magna. Ea consectetur adipisicing officia non laboris est eiusmod ut. Consectetur quis adipisicing anim nulla commodo do minim ipsum laboris esse adipisicing amet esse veniam. Pariatur nostrud mollit incididunt pariatur Lorem incididunt quis excepteur aliquip esse commodo in eiusmod.\r\nSint nulla magna dolor aliqua elit ut ullamco laborum incididunt amet aliqua eiusmod. Aliquip pariatur duis aute nulla eiusmod proident. Dolore cupidatat reprehenderit elit deserunt consectetur ipsum ad deserunt consectetur quis qui id proident.\r\nVeniam cupidatat cillum ut sint voluptate sit dolor officia commodo. Cupidatat id tempor minim duis magna do dolore aliquip cupidatat aute consectetur deserunt non. Commodo nisi magna quis sunt dolor reprehenderit do duis magna veniam tempor mollit veniam. Id eiusmod anim aliquip aute officia sint officia. Laboris sint magna aute officia.\r\n',
    },
    {
      id: 85,
      publisher: {
        firstName: 'Toni',
        lastName: 'Potts',
      },
      read: true,
      important: false,
      title: 'mollit esse id sit cupidatat',
      text: 'Elit nostrud fugiat minim eu quis culpa veniam minim ad elit sunt. Ipsum duis officia consectetur ut. Cillum ex amet amet sunt in qui ut. Consequat labore nisi dolor tempor id dolor exercitation veniam voluptate. Nostrud do ex officia amet sit id veniam aliquip ea laboris pariatur tempor. Aliqua magna proident sint labore reprehenderit.\r\nCommodo elit exercitation in enim ullamco tempor tempor minim sunt Lorem reprehenderit. Commodo Lorem id pariatur pariatur cupidatat nisi sunt sit labore consectetur est aliquip amet proident. Cillum culpa culpa reprehenderit dolore cillum eu dolore fugiat commodo.\r\n',
    },
  ];

  public markAsRead(announcementId: number): Observable<AnnouncementDto> {
    const announcementIdx = this.announcements.findIndex(a => a.id === announcementId);
    if (announcementIdx === -1) {
      throw new NotFoundException();
    }
    const announcement: AnnouncementDto = this.announcements[announcementIdx];
    if (announcement.read) {
      throw new PreconditionFailedException();
    }
    this.announcements[announcementIdx] = { ...announcement, read: true };
    return of(announcement);
  }

  public query(): Observable<AnnouncementDto[]> {
    return of(this.announcements).pipe(delay(1000));
  }
}
