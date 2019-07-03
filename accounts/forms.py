# # from allauth.account.forms import SignupForm
#
# from django import forms
#
# import pdb
#
# #
# #
# # class CustomSignupForm(SignupForm):
# #     name = forms.CharField(max_length=30, label='Name')
# #
# #     def signup(self, request, user):
# #         user.name = self.cleaned_data['name']
# #         user.save()
# #         return user
#
#
# class CustomSignupForm(forms.Form):
#
#     # def signup(self, request, user):
#     #     print(request)
#     #     # Ensure you call the parent class's save.
#     #     # .save() returns a User object.
#     #     # user = super(MyCustomSignupForm, self).save(request)
#     #     #
#     #     # user.name = self.cleaned_data['name']
#     #     # user.save()
#     #     # Add your own processing here.
#     #
#     #     user.name = self.cleaned_data['name']
#     #     user.save()
#     #     return user
#     #
#     #     # You must return the original result.
#     #     return user
#
#     def save(self, request, user):
#         print(request)
#         pdb.set_trace()
#         # Ensure you call the parent class's save.
#         # .save() returns a User object.
#         # user = super(MyCustomSignupForm, self).save(request)
#         #
#         # user.name = self.cleaned_data['name']
#         # user.save()
#         # Add your own processing here.
#
#         user.name = self.cleaned_data['name']
#         user.save()
#         return user
#
#         # You must return the original result.
#         return user