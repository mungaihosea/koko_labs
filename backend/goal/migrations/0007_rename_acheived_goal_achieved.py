# Generated by Django 5.0.4 on 2024-04-19 00:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('goal', '0006_alter_goal_transactions'),
    ]

    operations = [
        migrations.RenameField(
            model_name='goal',
            old_name='acheived',
            new_name='achieved',
        ),
    ]
