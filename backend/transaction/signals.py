from .models import Transaction
from goal.models import Goal
from django.db.models.signals import post_save
from django.dispatch import receiver



@receiver(post_save, sender=Transaction)
def update_goals(sender, instance, created, **kwargs):

    if not created or instance.type != 'savings':
        return
    
    print('got here')
    
    # If there's a new transaction update any active savings goals
    goal_queryset = Goal.objects.filter(user = instance.user, achieved=False)

    if not goal_queryset.count() > 0:
        return
    
    active_goal = goal_queryset[0]

    # calculate the amount left to acheive the savings goal
    remaining_balance = active_goal.get_remaining_balance()
    if instance.amount >= remaining_balance:
        active_goal.achieved = True
        active_goal.current_amount = active_goal.target_amount
    else:
        active_goal.current_amount += instance.amount

    active_goal.transactions.add(instance)
    active_goal.save()

    print('done')


    
    

