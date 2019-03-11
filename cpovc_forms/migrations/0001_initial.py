# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('cpovc_ovc', '__first__'),
        ('cpovc_registry', '__first__'),
    ]

    operations = [
        migrations.CreateModel(
            name='OVCCareEventss',
            fields=[
                ('event', models.UUIDField(default=uuid.uuid1, serialize=False, editable=False, primary_key=True)),
                ('event_type_id', models.CharField(max_length=4)),
                ('event_counter', models.IntegerField(default=0)),
                ('event_score', models.IntegerField(default=0, null=True)),
                ('date_of_event', models.DateField(default=django.utils.timezone.now)),
                ('date_of_previous_event', models.DateTimeField(null=True)),
                ('created_by', models.IntegerField(default=404, null=True)),
                ('timestamp_created', models.DateTimeField(default=django.utils.timezone.now)),
                ('is_void', models.BooleanField(default=False)),
                ('sync_id', models.UUIDField(default=uuid.uuid1, editable=False)),
                ('house_hold', models.ForeignKey(to='cpovc_ovc.OVCHouseHold', null=True)),
                ('person', models.ForeignKey(to='cpovc_registry.RegPerson', null=True)),
            ],
            options={
                'db_table': 'ovc_care_eventss',
            },
        ),
        migrations.CreateModel(
            name='OVCCareForms',
            fields=[
                ('form_id', models.UUIDField(default=uuid.uuid1, serialize=False, editable=False, primary_key=True)),
                ('name', models.CharField(max_length=50)),
                ('description', models.CharField(max_length=255)),
                ('is_void', models.BooleanField(default=False)),
                ('timestamp_created', models.DateTimeField(default=django.utils.timezone.now)),
                ('timestamp_updated', models.DateTimeField(auto_now=True)),
            ],
            options={
                'db_table': 'ovc_care_forms',
            },
        ),
        migrations.CreateModel(
            name='OVCCareQuestions',
            fields=[
                ('question_id', models.UUIDField(default=uuid.uuid1, serialize=False, editable=False, primary_key=True)),
                ('code', models.CharField(max_length=5)),
                ('question', models.CharField(max_length=55)),
                ('domain', models.CharField(max_length=10)),
                ('question_text', models.CharField(max_length=255)),
                ('question_type', models.CharField(max_length=20)),
                ('is_void', models.BooleanField(default=False)),
                ('timestamp_created', models.DateTimeField(default=django.utils.timezone.now)),
                ('timestamp_updated', models.DateTimeField(auto_now=True)),
                ('form', models.ForeignKey(to='cpovc_forms.OVCCareForms')),
            ],
            options={
                'db_table': 'ovc_care_questions',
            },
        ),
        migrations.CreateModel(
            name='OVCCareWellbeing',
            fields=[
                ('well_being_id', models.AutoField(serialize=False, primary_key=True)),
                ('question_code', models.CharField(max_length=10, blank=True)),
                ('answer', models.CharField(max_length=15)),
                ('question_type', models.CharField(max_length=5)),
                ('domain', models.CharField(max_length=10)),
                ('is_void', models.BooleanField(default=False)),
                ('date_of_event', models.DateField()),
                ('timestamp_created', models.DateTimeField(default=django.utils.timezone.now)),
                ('timestamp_updated', models.DateTimeField(auto_now=True)),
                ('event', models.ForeignKey(to='cpovc_forms.OVCCareEventss')),
                ('household', models.ForeignKey(to='cpovc_ovc.OVCHouseHold')),
                ('person', models.ForeignKey(to='cpovc_registry.RegPerson')),
                ('question', models.ForeignKey(to='cpovc_forms.OVCCareQuestions')),
            ],
            options={
                'db_table': 'ovc_care_well_being',
            },
        ),
        migrations.CreateModel(
            name='OVCExplanations',
            fields=[
                ('explanation_id', models.AutoField(serialize=False, primary_key=True)),
                ('comment', models.CharField(max_length=255)),
                ('is_void', models.BooleanField(default=False)),
                ('timestamp_created', models.DateTimeField(default=django.utils.timezone.now)),
                ('timestamp_updated', models.DateTimeField(auto_now=True)),
                ('event', models.ForeignKey(to='cpovc_forms.OVCCareEventss')),
                ('form', models.ForeignKey(to='cpovc_forms.OVCCareForms')),
                ('question', models.ForeignKey(to='cpovc_forms.OVCCareQuestions')),
            ],
            options={
                'db_table': 'ovc_explanations',
            },
        ),
    ]
