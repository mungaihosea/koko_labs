# Generated by Django 5.0.4 on 2024-04-18 22:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('goal', '0004_alter_goal_current_amount'),
    ]

    operations = [
        migrations.AlterField(
            model_name='goal',
            name='current_amount',
            field=models.PositiveIntegerField(default=0),
        ),
    ]
