import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { Product } from './Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {

  product: Product[] = [
    {
      id: 'p1',
      name: 'Anchor Full Cream Milk Packet',
      imageUrl: '../../assets/products/product1.jpg',
    },

    {
      id: 'p2',
      name: 'Maggi Noodles',
      imageUrl: '../../assets/products/product2.jpeg'
    },

    {
      id: 'p3',
      name: 'Marie Biscuit ',
      imageUrl: '../../assets/products/product3.jpeg'
    },
    {
      id: 'p4',
      name: 'Lux Soap',
      imageUrl: '../../assets/products/product4.jpeg'
    },
    {
      id: 'p5',
      name: 'Avocado',
      imageUrl: '../../assets/products/product5.jpeg'
    },
    {
      id: 'p6',
      name: 'Carrot',
      imageUrl: '../../assets/products/product6.jpeg'
    },
    {
      id: 'p7',
      name: 'Prima Bread',
      imageUrl: '../../assets/products/product7.jpeg'
    },
  ];
  constructor(public alertController: AlertController) { }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Are you sure?',
      message: '<strong>This product will be removed from the interested list!!!</strong>',
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


