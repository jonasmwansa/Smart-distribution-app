import Macbook from './M1_MacBook.jpg';
import infinix from './Infinix.jpg';
import speakers from './speakers.jpg';
import backpack from './bbag_m1.jpg';
import mifi from './mifi.jpg';


const Data =  [  
        {
          itemId: 1,
          itemName: 'Macbook M1',
          itemImage:Macbook,
          itemReceiver:'jonas link',
          itemReceiverGender:'male',
          itemReceiverPhoneNumber: '+26097242506',
          itemReceiverEmailAddress:'microlink@gmail.com',

          itemSender: 'mutale james',        
          itemSenderPhoneNumber: '+26097222222',
          
          deliveryAddress:'Lusaka, Zambia',
          pickupPoint:'kamlops, kalingalinga',
          itemSenderAddress:'chipata, zambia',
          deliveryDate:'20/11/2022',
          itemStatus:'ready',
          deliveryProgress:'request',
            itemTrackingCode:'123456789',
            driverDetails:{
            driverId:12345,
            driverName:' Aaron jack',
            driverPhone:'+27097242506'
            }
         },
         {
          itemId: 2,
          itemName: 'Infinix hot 12i',
          itemImage:infinix,
          itemReceiver:'Cathbert busiku',
          itemReceiverGender:'male',
          itemReceiverPhoneNumber: '+26097242506',
          itemReceiverEmailAddress:'Cathbertbusiku@gmail.com',
          itemSender: 'james mbale',        
          itemSenderPhoneNumber: '+26097225555',
          
          deliveryAddress:'Lusaka, Zambia',
          pickupPoint:'Intercity bus Terminus',
          itemSenderAddress:'Durban, South Africa',
          deliveryDate:'20/11/2022',
          itemStatus:'ready',
          deliveryProgress:'in transit',
            itemTrackingCode:'523456789',
            driverDetails:{
            driverId:12346,
            driverName:' Aaron jack',
            driverPhone:'+27097787877'
            }
         },
         {
           itemId: 3,
           itemName:'backpack',
           itemImage:backpack,
           itemReceiver:'mary mtonga',
           itemReceiverGender:'female',
           itemReceiverPhoneNumber: '+26097242506',
           itemReceiverEmailAddress:'Cathbertbusiku@gmail.com',
 
           itemSender: 'jonas mwansa',        
           itemSenderPhoneNumber: '+26096225555',
           
           deliveryAddress:'Kitwe, Zambia',
           pickupPoint:'KMB bus station',
           itemSenderAddress:'Tunduma, People\'s republic of Tanzania' ,
           deliveryDate:'20/11/2022',
           itemStatus:'ready',
           deliveryProgress:'delivered',
             itemTrackingCode:'523456789',
             driverDetails:{
             driverId:12346,
             driverName:'lindunda macel',
             driverPhone:'+27097787877'
             }
         },
         {
           itemId: 4,
           itemName: 'bluetooth speakers',
           itemImage:speakers,
           itemReceiver:'adebayor emmanuel',
           itemReceiverGender:'male',
           itemReceiverPhoneNumber: '+25097242506',
           itemReceiverEmailAddress:'ade@gmail.com',
 
           itemSender: 'steven sosi',        
           itemSenderPhoneNumber: '+25096225555',
           
           deliveryAddress:'Accra, Ghana',
           pickupPoint:'techsavvy corner',
           itemSenderAddress:'Kumasi, Ghana',
           deliveryDate:'22/11/2022',
           itemStatus:'request',
           deliveryProgress:'request',
             itemTrackingCode:'325456789',
             driverDetails:{
             driverId:12346,
             driverName:'jacob masi',
             driverPhone:'+27097787877'
             }
         },
            {
           itemId: 5,
           itemName: 'MTN Mifi',
           itemImage:mifi,
           itemReceiver:'Patience ozokwor',
           itemReceiverGender:'female',
           itemReceiverPhoneNumber: '+23495242506',
           itemReceiverEmailAddress:'janetm@gmail.com',
 
           itemSender:'Nkem owoh',        
           itemSenderPhoneNumber: '+23497725566',
           
           deliveryAddress:'Lagos,Nigeria',
           pickupPoint:'the junction',
           itemSenderAddress:'Abuja, Nigeria',
           deliveryDate:'10/11/2022',
           itemStatus:'ready',
           deliveryProgress:'in transit',
             itemTrackingCode:'533456778',
             driverDetails:{
             driverId:12346,
             driverName:'Chewetalu Agu',
             driverPhone:'+23497787877'
             }
         }
       ];

export default Data;
