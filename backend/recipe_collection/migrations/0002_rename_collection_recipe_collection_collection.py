# Generated by Django 4.1.2 on 2022-10-22 16:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('recipe_collection', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='recipe_collection',
            old_name='Collection',
            new_name='collection',
        ),
    ]