
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Heart, Play } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isLoginMode) {
      // Simple login - accept any email and password
      if (formData.email && formData.password) {
        setIsLoggedIn(true);
        toast({
          title: "¡Bienvenido de vuelta!",
          description: "Has accedido exitosamente. ¡La aventura te espera!"
        });
      } else {
        toast({
          title: "Error",
          description: "Por favor ingresa tu email y contraseña",
          variant: "destructive"
        });
      }
    } else {
      // Simple registration - accept any data
      if (formData.name && formData.email && formData.password) {
        setIsLoggedIn(true);
        toast({
          title: "¡Registro exitoso!",
          description: `¡Bienvenido ${formData.name}! La aventura está por comenzar.`
        });
      } else {
        toast({
          title: "Error",
          description: "Por favor completa todos los campos",
          variant: "destructive"
        });
      }
    }
  };

  if (isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-200 via-pink-200 to-purple-300">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-gray-800 mb-4 font-serif">
              UP: Una Aventura de Altura
            </h1>
            <p className="text-xl text-gray-700 italic">
              "La aventura está allá afuera"
            </p>
          </div>

          {/* Video Section */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card className="bg-white/80 backdrop-blur-sm shadow-2xl border-0">
              <CardContent className="p-6">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/pkqzFUhGPJg"
                    title="UP - Tráiler Oficial"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Movie Images Gallery */}
          <div className="max-w-6xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Revive los Momentos Más Emotivos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* House with Balloons */}
              <Card className="bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-4">
                  <img
                    src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&h=300&fit=crop"
                    alt="La casa volando con globos"
                    className="w-full h-48 object-cover rounded-lg mb-3"
                  />
                  <h3 className="font-semibold text-gray-800">La Casa de los Sueños</h3>
                  <p className="text-sm text-gray-600">Una casa que vuela hacia la aventura</p>
                </CardContent>
              </Card>

              {/* Adventure Book */}
              <Card className="bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-4">
                  <img
                    src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=500&h=300&fit=crop"
                    alt="El álbum de aventuras"
                    className="w-full h-48 object-cover rounded-lg mb-3"
                  />
                  <h3 className="font-semibold text-gray-800">Libro de Aventuras</h3>
                  <p className="text-sm text-gray-600">Los sueños compartidos de Carl y Ellie</p>
                </CardContent>
              </Card>

              {/* Young Carl */}
              <Card className="bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-4">
                  <img
                    src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=500&h=300&fit=crop"
                    alt="Carl joven"
                    className="w-full h-48 object-cover rounded-lg mb-3"
                  />
                  <h3 className="font-semibold text-gray-800">El Joven Explorador</h3>
                  <p className="text-sm text-gray-600">Carl y sus sueños de aventura</p>
                </CardContent>
              </Card>

              {/* Ellie */}
              <Card className="bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-4">
                  <img
                    src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=500&h=300&fit=crop"
                    alt="Ellie"
                    className="w-full h-48 object-cover rounded-lg mb-3"
                  />
                  <h3 className="font-semibold text-gray-800">El Espíritu Libre</h3>
                  <p className="text-sm text-gray-600">Ellie y su amor por la vida</p>
                </CardContent>
              </Card>

              {/* Paradise Falls */}
              <Card className="bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 md:col-span-2 lg:col-span-1">
                <CardContent className="p-4">
                  <img
                    src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&h=300&fit=crop"
                    alt="Cataratas del Paraíso"
                    className="w-full h-48 object-cover rounded-lg mb-3"
                  />
                  <h3 className="font-semibold text-gray-800">Cataratas del Paraíso</h3>
                  <p className="text-sm text-gray-600">El destino soñado de toda una vida</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Emotional Quote Section */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <Card className="bg-white/90 backdrop-blur-sm shadow-2xl border-0">
              <CardContent className="p-8">
                <Heart className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <blockquote className="text-2xl md:text-3xl font-serif italic text-gray-800 mb-4">
                  "Gracias por la aventura. Ahora ve y vive una nueva."
                </blockquote>
                <p className="text-lg text-gray-600">- Ellie a Carl</p>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="max-w-md mx-auto bg-white/90 backdrop-blur-sm shadow-2xl border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  ¡No te pierdas el reestreno!
                </h3>
                <p className="text-gray-600 mb-4">
                  Vive nuevamente esta emotiva historia en la pantalla grande
                </p>
                <Button 
                  className="w-full bg-gradient-to-r from-orange-400 to-pink-400 hover:from-orange-500 hover:to-pink-500 text-white font-semibold py-3"
                  onClick={() => {
                    toast({
                      title: "¡Información enviada!",
                      description: "Te notificaremos sobre las fechas de estreno"
                    });
                  }}
                >
                  <Play className="w-4 h-4 mr-2" />
                  Reservar Boletos
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 via-pink-200 to-purple-300 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <Card className="bg-white/90 backdrop-blur-sm shadow-2xl border-0">
          <CardHeader className="text-center pb-4">
            <div className="mb-4">
              <img
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300&h=200&fit=crop"
                alt="UP - Una Aventura de Altura"
                className="w-full h-32 object-cover rounded-lg"
              />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-800 font-serif">
              UP: Una Aventura de Altura
            </CardTitle>
            <p className="text-gray-600 italic mt-2">
              "La aventura está allá afuera"
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLoginMode && (
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre completo</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="border-gray-300 focus:border-orange-400"
                  />
                </div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="border-gray-300 focus:border-orange-400"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Contraseña</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Tu contraseña"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="border-gray-300 focus:border-orange-400"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-orange-400 to-pink-400 hover:from-orange-500 hover:to-pink-500 text-white font-semibold py-3"
              >
                {isLoginMode ? 'Iniciar Sesión' : 'Registrarse'}
              </Button>
            </form>
            
            <div className="mt-4 text-center">
              <button
                type="button"
                onClick={() => setIsLoginMode(!isLoginMode)}
                className="text-orange-600 hover:text-orange-800 text-sm underline"
              >
                {isLoginMode 
                  ? '¿No tienes cuenta? Regístrate aquí' 
                  : '¿Ya tienes cuenta? Inicia sesión'
                }
              </button>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500">
                Únete a la aventura más emotiva de Disney Pixar
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
