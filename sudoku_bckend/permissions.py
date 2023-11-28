from rest_framework import permissions


class IsOwnerOrReadOnly(permissions.BasePermission):
  def has_object_permission(self, request, view, obj):
    print(f'user is superuser : {request.user.is_staff}')
    if request.method in permissions.SAFE_METHODS:
      return True
    return obj.owner == request.user
