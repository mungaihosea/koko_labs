# Generated by Django 5.0.4 on 2024-04-18 22:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('goal', '0002_goal_description'),
    ]

    operations = [
        migrations.AddField(
            model_name='goal',
            name='dismissed',
            field=models.BooleanField(default=False),
        ),
    ]
