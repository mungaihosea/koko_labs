# Generated by Django 5.0.4 on 2024-04-18 17:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('transaction', '0006_alter_transaction_type'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='transaction',
            options={'ordering': ['-created_at']},
        ),
    ]
