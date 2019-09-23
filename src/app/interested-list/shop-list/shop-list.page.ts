import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Shop } from './Shops';
@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.page.html',
  styleUrls: ['./shop-list.page.scss'],
})
export class ShopListPage implements OnInit {


  shop: Shop[] = [
    {
      id: 's1',
      name: 'Cargils Malambe',
      imageUrl: '../../assets/shops/s1.jpeg'
    },

    {
      id: 's2',
      name: 'Arpico Supercenter Matara',
      imageUrl: '../../assets/shops/s2.jpg'
    },
    {
      id: 's3',
      name: 'Keelse Super Kottawa',
      imageUrl: '../../assets/shops/s3.jpg'
    },
    {
      id: 's4',
      name: 'Laugfs Pannipitiya',
      imageUrl: '../../assets/shops/s4.jpeg'
    },
    {
      id: 's5',
      name: 'Keelse Nugegoda',
      imageUrl: '../../assets/shops/s5.jpeg'
    },
    {
      id: 'Foodcity Maharagama',
      name: 'shop1',
      imageUrl: '../../assets/shops/s6.jpeg'
    },
  ];
  constructor(public alertController: AlertController) { }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Are you sure?',
      message: '<strong>This shop will be removed from the interested list!!!</strong>',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
