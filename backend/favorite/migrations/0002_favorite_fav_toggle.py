# Generated by Django 4.1.2 on 2022-12-17 21:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('favorite', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='favorite',
            name='fav_toggle',
            field=models.BooleanField(default=False),
        ),
    ]
