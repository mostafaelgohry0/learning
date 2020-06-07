#include <SFML/Graphics.hpp>
#include<time.h>

using namespace sf ;
struct point {
int x ,y;
};
int main()
{
    srand(time(0));
    // Create the main window
    RenderWindow app(VideoMode(500, 700), "jump");
    app.setFramerateLimit(60);

    // Load a sprite to display
    Texture pic1 ,pic2,ball;
    pic1.loadFromFile("pic1.png");
    pic2.loadFromFile("pic2.png");
    ball.loadFromFile("ball.png");


    Sprite spic1(pic1),spic2(pic2),sball(ball);

    point plat[20];
    for(int i =0;i<7;i++){
        plat[i].x=rand()%500;
        plat[i].y=rand()%700;
    }



	// Start the game loop
    while (app.isOpen())
    {
        // Process events
        Event event;
        while (app.pollEvent(event))
        {


            // Close window : exit
            if (event.type == Event::Closed)
                app.close();
        }


int x=100, y=100,h=200;
  float dy=0 ,dx=0;


if(Keyboard::isKeyPressed(Keyboard::Right)) x+=30;
if(Keyboard::isKeyPressed(Keyboard::Left)) x-=30;

  dy+=0.3;
  y+=dy;
  if(y>800)  dy=-10;
    sball.setPosition(x,y);

        // Clear screen
        app.clear(Color::White);

        // Draw the sprite
        app.draw(sball);
        for(int i =0 ;i<7;i++){
            spic2.setPosition(plat[i].x,plat[i].y);

             app.draw(spic2);

        }


        // Update the window
        app.display();
    }

    return EXIT_SUCCESS;
}
