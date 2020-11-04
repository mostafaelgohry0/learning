#include <SFML/Graphics.hpp>
#include<iostream>
using namespace std;
using namespace sf;
int main()
{
    // Create the main window
    RenderWindow app(VideoMode(700, 600), "SFML window",Style::Close|Style::Resize);
    RectangleShape rect1(Vector2f(200.0f,200.0f));
   // rect1.setFillColor(Color::Blue);
      rect1.setOrigin(-200.0f,-200.0f);

     RectangleShape rect2(Vector2f(200,200));
     rect2.setFillColor(Color::Red);
      app.clear( Color::White);
     // rect2.setOrigin(100.0f,100.0f);
     app.setFramerateLimit(60);
    // Load a sprite to display


    Texture texture;
    if (!texture.loadFromFile("cb.bmp"))
        return EXIT_FAILURE;
    Sprite sprite(texture);



   // load texture
   Texture texture2 ;
   texture2.loadFromFile("pic2.png");
    rect1.setTexture(&texture2);

	// Start the game loop
    while (app.isOpen())
    {
        // Process events
        Event event1;
        while (app.pollEvent(event1))
        {
          switch (event1.type)
         {
            case  Event::Closed :
                app.close();
                break ;
            case  Event::Resized :
                cout<< "width : "<< event1.size.width << "      heigth : "<< event1.size.height <<endl ;
                break;
            case Event::TextEntered :
                if(event1.text.unicode < 118 )
                printf("%d",event1.text);
                //break;
         }

               /*

             if(event.type==Event::TextEntered)
                    printf("%c",event.text.unicode);

            if(event.type == Event::Resized)
                cout<< "width : "<< event.size.width << "      heigth : "<< event.size.height <<endl ;

            // Close window : exit
            if (event.type == Event::Closed)
                app.close();
                */
        }



         if(Keyboard::isKeyPressed(Keyboard::Up))
            rect1.move(0.0f,-0.2f);

          if(Keyboard::isKeyPressed(Keyboard::Down))
            rect1.move(0.0f,0.2f);

          if(Keyboard::isKeyPressed(Keyboard::Left))
            rect1.move(-0.2f,0.0f);

          if(Keyboard::isKeyPressed(Keyboard::Right))
            rect1.move(0.2f,0.0f);


////  mouse input


       if(Mouse::isButtonPressed(Mouse::Left) ){
        Vector2i MousePos =  Mouse::getPosition(app);
         rect2.setPosition((float)MousePos.x-100,(float)MousePos.y-100);
       }

        // Clear screen
       app.clear( Color::White);

        // Draw the sprite
         app.draw(sprite);
        // Update the window
         app.draw(rect1);
         app.draw(rect2);
        app.display();
    }
    return 0;
}
