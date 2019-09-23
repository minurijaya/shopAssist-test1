import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Grocery } from './Grocery';
@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.page.html',
  styleUrls: ['./grocery-list.page.scss'],
})
export class GroceryListPage implements OnInit {
  grocery: Grocery[] = [
    {
      id: 'g1',
      name: 'Anchor Full Cream Milk Packet',
      imageUrl: '../../assets/products/product1.jpg',
    },

    {
      id: 'g2',
      name: 'Maggi Noodles',
      imageUrl: '../../assets/products/product2.jpeg'
    },

    {
      id: 'g3',
      name: 'Marie Biscuit ',
      imageUrl: '../../assets/products/product3.jpeg'
    },
    {
      id: 'g4',
      name: 'Lux Soap',
      imageUrl: '../../assets/products/product4.jpeg'
    },
    {
      id: 'g5',
      name: 'Avocado',
      imageUrl: '../../assets/products/product5.jpeg'
    },
    {
      id: 'g6',
      name: 'Carrot',
      imageUrl: '../../assets/products/product6.jpeg'
    },
    {
      id: 'g7',
      name: 'Prima Bread',
      imageUrl: '../../assets/products/product7.jpeg'
    },
  ];

  constructor(public alertController: AlertController) { }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Are you sure?',
      message: '<strong>Do you really want to remove this product from the grocery list?</strong>',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'alertDanger',
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
