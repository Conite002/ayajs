#include<stdio.h>



void afficher(int vie[], int l, int c)
{
  for(int i = 0; i < l; i++)
    {
      for(int j = 0; j < l; j++)
	if(vie[i*c+j] == 0)
	  printf("|   ");
	else
	  printf("| x ");
      printf("|\n-------------\n");
    }
}

void generation(int vie[], int l, int c)
{
  int temp[l*c], cpt=0, i, j, k, p;
  
  for(i = 0; i < l; i++)
    for(j = 0; j < l; j++)
      temp[i*c+j] = vie[i*c+j];
  
  for(i = 0; i < l; i++)
    {
      for(j = 0; j < c; j++)
  	{
  	  for(k = i-1; k < i+2; k++)
  	    {
  	      if( k < 0 || k > 2 )
  		continue;
  	      for(p = j-1; p < j+2; p++)
  		{
  		  if(p < 0 || p > 2 || (k==i && p==j))
  		    continue;
  		  if(vie[k*c+p] == 1)
  		    cpt++;
  		}
  	    }
	  if(vie[i*c+j] == 0 && cpt == 3)
  	    temp[i*c+j] = 1;
  	  if(vie[i*c+j] == 1 && cpt != 3 && cpt != 2)
  	    temp[i*c+j] = 0;
	  cpt = 0;
	}
    }
  
  
  for(i = 0; i < l; i++)
    for(j = 0; j < c; j++)
      vie[i*c+j] = temp[i*c+j];
}


int main()
{
  int tab[] = {0,0,0,1,1,1,0,0,0}, j = 0;
  afficher(tab, 3, 3);
  printf("\n\n");
  while(j < 3)
    {
      generation(tab, 3, 3);
      afficher(tab, 3, 3);
      printf("\n\n");
      j++;
    }
  return 0;
}
