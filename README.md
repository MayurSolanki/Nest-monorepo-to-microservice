# Nest - Standard Mode to Monorepo to Microservice
Nest - Standard Mode to Monorepo to Microservice
##  standard Mode 
    -  standard mode means created one simple project, all code at one place-  you can create nest module as per the features/requirement


##  MonoRepo (shared code)
1. nest new my-monorepo                  (Create Nest Project)
2. cd my-monorepo                        (move inside to the folder)
3. nest generate app my-app1             (Create my-app1)
4. nest generate app my-app2             (Create my-app2)
5. nest generate library shared          (Create shared library for above 2 created apps)
6. nest generate library shared          (Create shared library for above 2 created apps)
7. nest build shared                     (build shared library)   
8. nest build shared                     (build shared library)   
9. nest start my-app1                    (you can define different different app using command)
10. nest start my-app2                    (you can define different different app using command)

#To run the app
nest start my-app1        

#Running Multiple Applications simultaneously:
nest start my-app-1 --port 3000
nest start my-app-2 --port 3001


#Building Applications:
nest build my-app



##  Microservice

nest-monorepo-shared-code | my-app - 3000
app-products - 3001
app-user = 3002
api-gateway = 3003 | 3005
client-app = 3004  

