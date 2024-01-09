from django.db import models

# Create your models here.
class Product(models.Model):
    product_name = models.CharField(max_length = 255 , null = True)
    price= models.DecimalField(max_digits=10, decimal_places=2)
    product_image =  models.ImageField(upload_to = 'images/')

    def __str__(self):
        return f"{self.product_name} - {self.price} - {self.product_image}"